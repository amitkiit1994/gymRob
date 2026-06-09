#!/usr/bin/env python3
import os
D = os.path.dirname(__file__)
LOGO = os.path.join(D, "logo")
OUT = os.path.join(D, "gallery", "logo-lab.html")

def svg(name):
    with open(os.path.join(LOGO, name), encoding="utf-8") as f:
        return f.read()

emblem = svg("emblem.svg")
icon = svg("icon-gr.svg")
wordmark = svg("wordmark.svg")
lockup = svg("lockup-horizontal.svg")
banner = svg("banner.svg")
emblem_mono = svg("emblem-mono.svg")
icon_mono = svg("icon-gr-mono.svg")
favicon = svg("favicon.svg")

html = f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>BRANDSCAPE · GYMROB — logo lab</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<style>
  *{{box-sizing:border-box}}
  body{{margin:0;background:#0e0a07;color:#fefae0;font-family:'Inter',sans-serif;padding:34px 40px 90px}}
  h1{{font-family:'Alfa Slab One',serif;font-size:30px;margin:0 0 2px}}
  .sub{{font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.35em;font-size:11px;color:#b1b3b3;margin-bottom:26px}}
  h2{{font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.3em;font-size:12px;color:#a4271f;border-top:2px solid #2a1d14;padding-top:18px;margin:34px 0 14px}}
  .row{{display:flex;gap:18px;align-items:center;flex-wrap:wrap}}
  .tile{{border-radius:3px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:22px}}
  .dark{{background:#16110e;border:1px solid #2a1d14}}
  .paper{{background:url('paper.jpg'),#fefae0;background-size:cover}}
  .brick{{background:linear-gradient(rgba(91,26,8,.4),rgba(20,8,4,.55)),url('brick-wall.jpg');background-size:cover;background-position:center}}
  .red{{background:linear-gradient(180deg,#9a241c,#6f1812)}}
  .cap{{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:#b1b3b3}}
  .paper .cap{{color:#6f1812}}
  svg{{display:block}}
  .s220 svg{{width:220px;height:220px}} .s140 svg{{width:140px;height:140px}}
  .s96 svg{{width:96px;height:96px}} .s64 svg{{width:64px;height:64px}}
  .s48 svg{{width:48px;height:48px}} .s24 svg{{width:24px;height:24px}}
  .s160 svg{{width:160px;height:160px}}
  .wm420 svg{{width:420px;height:auto}} .wm260 svg{{width:260px;height:auto}}
  .lk760 svg{{width:760px;height:auto}}
  .bn720 svg{{width:720px;height:auto}}
  .mono1{{filter:brightness(0)}}            /* all-black knockout test */
  .knockcream{{position:relative}}
</style></head><body>
<h1>BRANDSCAPE · GYMROB</h1>
<div class="sub">logo master system — scaling &amp; 1-colour proof lab</div>

<h2>Emblem · The Warrior's Seal — shrink test</h2>
<div class="row">
  <div class="tile dark s220">{emblem}<span class="cap">220 hero</span></div>
  <div class="tile paper s140">{emblem}<span class="cap">on paper · 140</span></div>
  <div class="tile brick s96">{emblem}<span class="cap">on brick · 96</span></div>
  <div class="tile dark s48">{emblem}<span class="cap">48 pin</span></div>
  <div class="tile dark s24">{emblem}<span class="cap">24 ✛ tiny</span></div>
</div>

<h2>Icon · GR monogram — shrink test (favicon / cap / bike badge)</h2>
<div class="row">
  <div class="tile dark s160">{icon}<span class="cap">160</span></div>
  <div class="tile brick s64">{icon}<span class="cap">on brick · 64</span></div>
  <div class="tile dark s48">{icon}<span class="cap">48</span></div>
  <div class="tile dark s24">{icon}<span class="cap">24 favicon</span></div>
</div>

<h2>1-colour knockout variants (single ink) &amp; favicon</h2>
<div class="row">
  <div class="tile paper s140" style="color:#0e0a07">{emblem_mono}<span class="cap">seal · 1-ink on paper</span></div>
  <div class="tile red s140" style="color:#fefae0">{emblem_mono}<span class="cap">seal · cream on red</span></div>
  <div class="tile paper s96" style="color:#0e0a07">{icon_mono}<span class="cap">GR · 1-ink on paper</span></div>
  <div class="tile red s96" style="color:#fefae0">{icon_mono}<span class="cap">GR · cream on red</span></div>
  <div class="tile dark s48">{favicon}<span class="cap">favicon 48</span></div>
  <div class="tile dark s24">{favicon}<span class="cap">favicon 24</span></div>
</div>

<h2>Wordmark</h2>
<div class="row">
  <div class="tile dark wm420">{wordmark}<span class="cap">on dark</span></div>
  <div class="tile red wm260">{wordmark}<span class="cap">on red</span></div>
  <div class="tile brick wm260">{wordmark}<span class="cap">on brick</span></div>
</div>

<h2>Primary horizontal lockup</h2>
<div class="row">
  <div class="tile dark lk760">{lockup}<span class="cap">on dark</span></div>
</div>
<div class="row" style="margin-top:14px">
  <div class="tile brick lk760">{lockup}<span class="cap">on brick</span></div>
</div>

<h2>Hero banner (painted canvas)</h2>
<div class="row">
  <div class="tile brick bn720">{banner}<span class="cap">hung on the wall</span></div>
</div>
</body></html>"""

with open(OUT, "w", encoding="utf-8") as f:
    f.write(html)
print("wrote", OUT)
