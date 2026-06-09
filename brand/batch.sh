#!/usr/bin/env bash
# Generate a curated batch of photoreal hero shots for both brandscapes.
set -uo pipefail
cd "$(dirname "$0")/.."
STYLE=" Single warm overhead key light, hard directional shadows, shallow depth of field, Kodak cinematic film look, punchy warm reds, crushed blacks, slightly desaturated midtones, fine grain. Strict palette: deep oxidised red, warm cream off-white, near-black, brushed brass, tan leather. Old-school iron gym in Mumbai, gritty and premium and hand-made, photoreal. Any lettering must be spelled exactly as written with no extra or missing letters. No watermark, no extra logos, not flat vector art."
STD=imagen-4.0-generate-001
FAST=imagen-4.0-fast-generate-001

gen () { # OUT MODEL AR PROMPT
  bash brand/imagen.sh "$4$STYLE" "$3" "$1" "$2" >/dev/null 2>&1 && echo "  done: $1" || echo "  FAIL: $1"
}

N=0
while IFS='|' read -r OUT M AR PROMPT; do
  [ -z "${OUT:-}" ] && continue
  case "$OUT" in \#*) continue;; esac
  MODEL=$STD; [ "$M" = "FAST" ] && MODEL=$FAST
  gen "$OUT" "$MODEL" "$AR" "$PROMPT" &
  N=$((N+1))
  if [ $((N % 4)) -eq 0 ]; then wait; fi
done <<'EOF'
brand/gymrob/photoreal/01-nameplate.png|STD|16:9|Photorealistic close-up of a brushed-brass desk nameplate on a dark walnut block, deeply engraved in three centered lines: small top CHIEF IRON OFFICER, large center ROBIN CARRUTHERS, small bottom MUMBAI - IRON IS RELIGION, a brass screw in each corner, on a worn coach desk in an iron gym.
brand/gymrob/photoreal/02-tee.png|STD|3:4|Photorealistic charcoal heavyweight drop-shoulder t-shirt on a wooden hanger against a brick gym wall, big cream screen-print across the chest: a bold clenched fist above thick slab letters GYMROB and below it the words IRON IS RELIGION, ink sitting in the cotton weave.
brand/gymrob/photoreal/03-mug.png|FAST|1:1|Photorealistic cream enamel camp mug with a red rim and red slab letters SHOW UP wrapping around the curve, steam rising, on a worn wooden bench with a gym blurred behind.
brand/gymrob/photoreal/04-cap.png|FAST|1:1|Photorealistic black structured six-panel cap, three-quarter view, with a cream embroidered clenched-fist emblem raised in puff stitch on the front panel, on a dark bench with chalk dust.
brand/gymrob/photoreal/05-bike.png|FAST|4:3|Photorealistic cast-metal emblem badge bolted onto a matte black motorcycle fuel tank: a red clenched fist beside cream slab letters GYMROB, raked light, real steel and chrome reflections.
brand/gymrob/photoreal/06-banner.png|STD|4:3|Photorealistic large hand-painted canvas fight banner hanging on two rusty bolts on a brick gym wall, deep red ground, cream hand-painted slab letters GYMROB large with OLD-SCHOOL IRON MUMBAI and IRON IS RELIGION beneath, weathered and frayed edges, warm spotlight.
brand/gymrob/photoreal/07-pin-patch.png|FAST|1:1|Photorealistic macro of a hard-enamel lapel pin shaped like a cream clenched fist on a red disc with raised gold metal edges, lying on dark denim next to a round woven embroidered patch of a fist.
brand/gymrob/photoreal/08-coaster.png|FAST|1:1|Photorealistic round cast-brass coaster engraved with a clenched fist emblem in the centre and arched lettering, lying top-down on dark walnut wood, warm rim light.
brand/egym/photoreal/01-nameboard.png|STD|16:9|Photorealistic exterior of an old-school iron gym at dusk in Mumbai under elevated train tracks, a dark warm-lit fascia signboard holding a large round deep-red enamel medallion with a cream clenched fist and arched text IRON IS RELIGION, weathered brick wall, a parked motorcycle.
brand/egym/photoreal/02-manifesto.png|STD|16:9|Photorealistic huge hand-painted gym wall mural on a deep red panel, giant cream hammered slab letters I AM A WARRIOR with a smaller painted verse beneath, a heavy bag hanging in the foreground, dramatic single-source light.
brand/egym/photoreal/03-ring.png|FAST|16:9|Photorealistic boxing ring corner in an old gym, deep red canvas apron, blue ring ropes, worn red boxing gloves hanging on the corner post, dust floating in a hard beam of light.
brand/egym/photoreal/04-floor.png|FAST|1:1|Photorealistic top-down view of a black rubber gym floor with THE FORGE stencilled in big weathered cream-red letters, a loaded barbell resting across it, chalk dust, hard overhead light.
brand/egym/photoreal/05-heavybag.png|FAST|3:4|Photorealistic worn red leather heavy bag hanging from a chain, a cream clenched fist stamped on the leather, scuffed and aged, dramatic side light, dark gym.
brand/egym/photoreal/06-reception.png|STD|16:9|Photorealistic iron-gym reception area, a large round deep-red medallion with a cream clenched fist mounted on a brick back wall under a warm spotlight, a red painted reception desk, stacked towels, moody light.
brand/egym/photoreal/07-stairs.png|STD|3:4|Photorealistic concrete gym staircase where each step riser is painted with one line of a creed climbing upward SHOW UP then DO THE WORK then NEVER QUIT then IRON IS RELIGION, cream letters on oxidised red, worn treads, side light.
brand/egym/photoreal/08-mirror.png|FAST|3:4|Photorealistic large gym mirror on a brick wall with cream vinyl lettering THE BEST VERSION OF YOU IS STANDING RIGHT HERE, a muscular lifter softly reflected, hard rim light, chalk dust.
EOF
wait
echo "ALL DONE"
