#!/usr/bin/env python3
"""Assemble a logo concept contact sheet with INLINED svg (so document web-fonts apply)."""
import os, glob, re

CONCEPTS = os.path.join(os.path.dirname(__file__), "concepts")
OUT = os.path.join(os.path.dirname(__file__), "gallery", "contact-sheet.html")

def read(p):
    try:
        with open(p, encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return None

def strip_size(svg):
    if not svg: return None
    # remove width/height attrs on the root svg so CSS controls size; keep viewBox
    svg = re.sub(r'(<svg\b[^>]*?)\swidth="[^"]*"', r'\1', svg, count=1)
    svg = re.sub(r'(<svg\b[^>]*?)\sheight="[^"]*"', r'\1', svg, count=1)
    return svg

# discover concepts c1..c9
concepts = []
for primary in sorted(glob.glob(os.path.join(CONCEPTS, "c*-primary.svg"))):
    base = os.path.basename(primary)
    m = re.match(r'(c\d+)-(.*)-primary\.svg', base)
    cid, key = m.group(1), m.group(2)
    icon = os.path.join(CONCEPTS, f"{cid}-{key}-icon.svg")
    concepts.append({
        "cid": cid, "key": key,
        "primary": strip_size(read(primary)),
        "icon": strip_size(read(icon)),
    })

sections = []
for c in concepts:
    icon_html = c["icon"] or '<div style="color:#a4271f;font-family:monospace">[no icon delivered]</div>'
    sections.append(f"""
    <section class="concept">
      <div class="hdr"><span class="cid">{c['cid'].upper()}</span><span class="key">{c['key'].replace('-',' ')}</span></div>
      <div class="primary-dark">{c['primary'] or ''}</div>
      <div class="grid2">
        <div class="card brick"><div class="inner">{c['primary'] or ''}</div></div>
        <div class="card paper"><div class="inner">{c['primary'] or ''}</div></div>
      </div>
      <div class="iconrow">
        <div class="ic ic-red"><div class="w140">{icon_html}</div><span class="cap">on red · 140</span></div>
        <div class="ic ic-dark"><div class="w64">{icon_html}</div><span class="cap">64</span></div>
        <div class="ic ic-dark"><div class="w24">{icon_html}</div><span class="cap">24 (favicon)</span></div>
        <div class="ic ic-paper"><div class="w96">{icon_html}</div><span class="cap">on paper · 96</span></div>
      </div>
    </section>""")

html = f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>GYMROB · logo concept contact sheet</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<style>
  :root{{--paper:#fefae0;--red:#a4271f;--shadow:#0e0a07}}
  *{{box-sizing:border-box}}
  body{{margin:0;background:#0e0a07;color:#fefae0;font-family:'Inter',sans-serif;padding:36px 40px 80px}}
  h1{{font-family:'Alfa Slab One',serif;font-size:34px;margin:0 0 4px}}
  .sub{{font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.35em;font-size:11px;color:#b1b3b3;margin-bottom:30px}}
  .concept{{border-top:2px solid #2a1d14;padding:26px 0 8px;margin-bottom:8px}}
  .hdr{{display:flex;align-items:baseline;gap:16px;margin-bottom:16px}}
  .cid{{font-family:'Alfa Slab One',serif;color:#a4271f;font-size:24px}}
  .key{{font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.3em;font-size:13px;color:#fefae0}}
  .primary-dark{{background:#16110e;border:1px solid #2a1d14;border-radius:2px;padding:30px 36px;display:flex;justify-content:center;box-shadow:inset 0 0 60px rgba(0,0,0,.6)}}
  .primary-dark svg{{width:100%;max-width:760px;height:auto}}
  .grid2{{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}}
  .card{{height:200px;border-radius:2px;overflow:hidden;display:flex;align-items:center;justify-content:center;position:relative}}
  .card .inner{{width:78%;display:flex;justify-content:center}}
  .card .inner svg{{width:100%;height:auto}}
  .brick{{background:linear-gradient(rgba(91,26,8,.4),rgba(20,8,4,.55)),url('brick-wall.jpg');background-size:cover;background-position:center}}
  .paper{{background:url('paper.jpg'),#fefae0;background-size:cover}}
  .iconrow{{display:flex;gap:16px;margin-top:16px;flex-wrap:wrap}}
  .ic{{border-radius:2px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:18px 22px;min-width:120px}}
  .ic-red{{background:linear-gradient(180deg,#9a241c,#6f1812)}}
  .ic-dark{{background:#16110e;border:1px solid #2a1d14}}
  .ic-paper{{background:#fefae0}}
  .cap{{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:#b1b3b3}}
  .ic-paper .cap{{color:#6f1812}}
  .w140 svg{{width:140px;height:140px}}
  .w96 svg{{width:96px;height:96px}}
  .w64 svg{{width:64px;height:64px}}
  .w24 svg{{width:24px;height:24px}}
</style></head><body>
<h1>GYMROB — Logo Concept Contact Sheet</h1>
<div class="sub">7 territories · primary lockup + icon scaling test · for CD review</div>
{''.join(sections)}
</body></html>"""

with open(OUT, "w", encoding="utf-8") as f:
    f.write(html)
print(f"wrote {OUT} with {len(concepts)} concepts")
