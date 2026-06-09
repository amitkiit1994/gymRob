#!/usr/bin/env bash
# Vertex Imagen generator.  Usage: imagen.sh "PROMPT" AR OUTFILE [MODEL]
#   AR: 1:1 | 16:9 | 9:16 | 4:3 | 3:4
#   MODEL: imagen-4.0-fast-generate-001 (default) | imagen-4.0-generate-001 | imagen-4.0-ultra-generate-001
set -euo pipefail
PROMPT="$1"; AR="${2:-1:1}"; OUT="$3"; MODEL="${4:-imagen-4.0-fast-generate-001}"
PROJECT="${IMAGEN_PROJECT:-rattle-non-prod}"
TOKEN="$(gcloud auth print-access-token 2>/dev/null)"
REQ="$(mktemp)"; RESP="$(mktemp)"
python3 - "$PROMPT" "$AR" > "$REQ" <<'PY'
import json,sys
prompt,ar=sys.argv[1],sys.argv[2]
print(json.dumps({"instances":[{"prompt":prompt}],
 "parameters":{"sampleCount":1,"aspectRatio":ar,"personGeneration":"allow_adult"}}))
PY
URL="https://us-central1-aiplatform.googleapis.com/v1/projects/$PROJECT/locations/us-central1/publishers/google/models/$MODEL:predict"
ATTEMPTS="${IMAGEN_ATTEMPTS:-6}"; DELAY=8
HTTP=000
for try in $(seq 1 "$ATTEMPTS"); do
  TOKEN="$(gcloud auth print-access-token 2>/dev/null)"
  HTTP=$(curl -s -o "$RESP" -w "%{http_code}" -X POST \
    -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json; charset=utf-8" \
    -d @"$REQ" "$URL")
  [ "$HTTP" = "200" ] && break
  # retry on rate-limit / capacity / transient server errors
  case "$HTTP" in 429|500|503|504) echo "HTTP $HTTP (try $try/$ATTEMPTS) — backing off ${DELAY}s"; sleep "$DELAY"; DELAY=$((DELAY*2)); [ "$DELAY" -gt 90 ] && DELAY=90;; *) break;; esac
done
if [ "$HTTP" != "200" ]; then echo "HTTP $HTTP — error:"; head -c 1200 "$RESP"; echo; exit 1; fi
mkdir -p "$(dirname "$OUT")"
python3 - "$RESP" "$OUT" <<'PY'
import json,sys,base64
d=json.load(open(sys.argv[1]))
preds=d.get("predictions") or []
if not preds: print("NO PREDICTIONS:",json.dumps(d)[:800]); sys.exit(1)
b=preds[0].get("bytesBase64Encoded")
if not b: print("NO IMAGE BYTES:",json.dumps(preds[0])[:400]); sys.exit(1)
open(sys.argv[2],"wb").write(base64.b64decode(b))
print("OK ->",sys.argv[2])
PY