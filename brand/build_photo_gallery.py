#!/usr/bin/env python3
"""Build photo galleries from the real (Imagen) renders in photoreal-reviewed/.
Re-run after generating more shots; the gallery auto-includes them."""
import os, glob, re, html

BASE = os.path.dirname(os.path.abspath(__file__))

CAPTIONS = {
 "gymrob": {
  "01-nameplate": ("Cabin nameplate", "Brass on walnut · CHIEF IRON OFFICER · ROBIN CARRUTHERS"),
  "02-tee": ("Drop-shoulder tee", "Cream chest print · GYMROB · IRON IS RELIGION"),
  "03-mug": ("Enamel camp mug", "Red rim · SHOW UP."),
  "04-cap": ("6-panel cap", "Embroidered fist on the front panel"),
  "05-bike": ("Bike fuel-tank badge", "Cast metal · fist + GYMROB"),
  "06-banner": ("Hand-painted wall banner", "Canvas-red · GYMROB · IRON IS RELIGION"),
  "07-pin-patch": ("Enamel pin + woven patch", "The fist — the collectibles"),
  "08-coaster": ("Weight-plate coaster", "Cast brass · the fist"),
  "09-polo": ("Polo", "Tonal left-chest fist"),
  "10-tote": ("Canvas tote", "Stencil GYMROB"),
  "11-bottle": ("Steel shaker / bottle", "Fist + GYMROB wrap"),
  "12-card": ("Business card", "Letterpress · the brand on paper"),
  "13-lanyard": ("Lanyard + ID", "ALL-ACCESS · THE FLOOR"),
  "14-helmet": ("Helmet decal", "Fist + IRON IS RELIGION"),
  "15-towel": ("Gym towel", "Woven wordmark"),
  "16-logbook": ("Coach's logbook", "Embossed oxblood leather"),
  "17-stickers": ("Sticker sheet", "Die-cut — fist, wordmark, slogans"),
  "18-hoodie": ("Hoodie / stringer", "Fist front · creed back"),
 },
 "egym": {
  "01-nameboard": ("Exterior name board", "Fist medallion · the gym's face"),
  "02-manifesto": ("Manifesto wall", "I AM A WARRIOR — the centerpiece"),
  "03-ring": ("The ring", "Boxing corner · the one ring-blue"),
  "04-floor": ("Floor zone graphic", "THE FORGE — epoxy stencil"),
  "05-heavybag": ("Heavy bag", "The fist, stamped in leather"),
  "06-reception": ("Reception", "Fist medallion backwall"),
  "07-stairs": ("Stair risers", "SHOW UP · DO THE WORK · NEVER QUIT"),
  "08-mirror": ("Mirror cling", "THE BEST VERSION OF YOU"),
  "09-glassdoors": ("Glass entry doors", "Etched seal · hours"),
  "10-lockers": ("Locker bank", "Numbered iron lockers"),
  "11-pillar": ("Pillar wrap", "IRON IS RELIGION, floor to ceiling"),
  "12-shoe": ("Shoe space", "LEAVE THE STREET HERE"),
  "13-washroom": ("Washroom signs", "Pictogram plates"),
  "14-commandments": ("The Iron Commandments", "House law, fight-card"),
  "15-gloves": ("Glove wall", "The boxing icon mural"),
  "16-platform": ("Lifting platform", "120 → 78 · EARN IT"),
}}

TITLES = {
 "gymrob": ("BRANDSCAPE · GYMROB", "Robin's personal mark — the gift set, in real photographs"),
 "egym": ("THE IRON — Physical Brandscape", "The gym, re-themed — real photographs (name-agnostic)"),
}

def build(brand):
    d = os.path.join(BASE, brand, "photoreal-reviewed")
    files = sorted(glob.glob(os.path.join(d, "*.png")))
    caps = CAPTIONS[brand]
    cards = []
    for f in files:
        stem = re.sub(r"\.png$", "", os.path.basename(f))
        title, sub = caps.get(stem, (stem.replace("-", " ").title(), ""))
        src = f"../photoreal-reviewed/{os.path.basename(f)}"
        cards.append(f'''  <figure class="c">
    <img loading="lazy" src="{src}" alt="{html.escape(title)}">
    <figcaption><span class="t">{html.escape(title)}</span><span class="s">{html.escape(sub)}</span></figcaption>
  </figure>''')
    title, sub = TITLES[brand]
    page = f'''<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)} — photos</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@400;600&family=JetBrains+Mono:wght@600&display=swap" rel="stylesheet">
<style>
 *{{box-sizing:border-box}}
 body{{margin:0;background:#0a0604;color:#fefae0;font-family:'Inter',sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
 @media print{{@page{{size:A4;margin:8mm}} .c{{break-inside:avoid;page-break-inside:avoid}} header{{break-inside:avoid}} .g{{gap:14px}}}}
 header{{padding:48px 26px 30px;text-align:center;border-bottom:2px solid #2a1d14;background:linear-gradient(180deg,#16110e,#0a0604)}}
 header h1{{font-family:'Alfa Slab One',serif;font-size:clamp(28px,5vw,48px);margin:0 0 8px}}
 header .b{{color:#a4271f}}
 header p{{font-family:'JetBrains Mono',monospace;letter-spacing:.28em;text-transform:uppercase;font-size:12px;color:#b1b3b3;margin:0}}
 .g{{max-width:1280px;margin:0 auto;padding:28px;display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:22px}}
 .c{{margin:0;background:#0d0a07;border:1px solid #241913;border-radius:6px;overflow:hidden;box-shadow:0 14px 30px rgba(0,0,0,.5)}}
 .c img{{display:block;width:100%;height:300px;object-fit:cover;background:#000}}
 figcaption{{padding:13px 16px;border-top:2px solid #a4271f;display:flex;flex-direction:column;gap:3px}}
 figcaption .t{{font-family:'Alfa Slab One',serif;font-size:18px;color:#fefae0}}
 figcaption .s{{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#a99e8c}}
 footer{{text-align:center;padding:40px 26px 70px;color:#7b7164;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.2em}}
</style></head><body>
<header><h1>{html.escape(title).replace("·","<span class='b'>·</span>")}</h1><p>{html.escape(sub)}</p></header>
<div class="g">
{chr(10).join(cards)}
</div>
<footer>{len(cards)} real photographs · generated with Imagen 4 from the GYMROB / iron design system · IRON IS RELIGION</footer>
</body></html>'''
    out = os.path.join(BASE, brand, "gallery", f"{brand}-photoreal.html")
    open(out, "w", encoding="utf-8").write(page)
    print(f"wrote {out}  ({len(cards)} photos)")

for b in ("gymrob","egym"):
    build(b)
