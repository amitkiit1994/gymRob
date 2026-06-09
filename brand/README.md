# Brand work — two names, one iron house style

Built as a senior design studio would: research → concept sprint → CD judging →
master system → application → critique loop. Everything reuses the live site's real
materials (brick / canvas / paper / leather / brass textures, Alfa Slab One +
JetBrains Mono + Inter), so on-screen and on-the-wall are one world.

## 1. BRANDSCAPE · GYMROB — Robin's personal mark + gift set
His own brand (`@gymrob`). A full identity (painted wordmark · raised-fist
warrior seal · GR monogram · favicon, all 1-colour-safe) applied across an
**18-piece giftable merch set** — tee, polo, cap, mug, coaster, **cabin nameplate
(CHIEF IRON OFFICER)**, bike badge, helmet, tote, bottle, business card, lanyard,
pin + patch, towel, logbook, sticker sheet, wall banner.

- Guide: `gymrob/BRAND.md` · brief: `gymrob/00-CREATIVE-BRIEF.md` · copy: `gymrob/02-COPY.md`
- Logo files: `gymrob/logo/*.svg`
- **Gallery:** `gymrob/gallery/brandscape.html` → render: `gymrob/renders/brandscape-final.jpeg`

## 2. The Gym — re-themed (PHYSICAL, name-agnostic)
A **physical-only** re-theme of the whole building — every surface a member touches,
kerb to exit. **No gym name** (name not yet decided): the whole system stands on its
own, anchored by a **name-free iron creed seal** (the fist + "IRON IS RELIGION ·
OLD-SCHOOL · MUMBAI", `egym/logo/iron-seal.svg`). The identity spots (name board,
reception, banner, doors) are natural slots where a **logo/patch drops in later** —
but nothing is an empty placeholder and nothing breaks without a name. GYMROB never
appears here. *(The folder is still named `egym/` internally — cosmetic only.)*

Two reference docs + one gallery:
- `egym/PHYSICAL-BRANDSCAPE.md` — the **exhaustive inventory: 18 zones, 119 themed
  surfaces** (43 eGym-named · 75 creed-only · 1 founder plate) with a zone×surface
  checklist so nothing is missed.
- `egym/POSTERS-PLAN.md` — the wall-poster/creed set in detail.
- wordmark: `egym/logo/egym-wordmark.svg`
- **Gallery (~30 pieces across 8 zones):** `egym/gallery/egym-posters.html`
  → render: `egym/renders/egym-physical-full.jpeg`

Zones: exterior & name boards · entry doors · reception & house law · creed walls
& pillars · flooring & stairs · equipment (The Forge) · boxing (The Ring) ·
lockers · washrooms · shoe space · mirrors · hanging banners · coach's corner · exit.
**No digital** — physical surfaces only.

## 3. Photoreal — WIRED to Vertex Imagen (live)
The galleries are the art-direction master; the photoreal renders are generated from them
via Google **Imagen 4** on Vertex AI (project `rattle-non-prod`; override with `IMAGEN_PROJECT`).
- **`imagen.sh`** — `imagen.sh "PROMPT" AR OUT [model]` → calls Imagen `:predict`, decodes
  the image. Models: `imagen-4.0-fast-generate-001` / `-generate-001` / `-ultra-generate-001`.
  Valid aspect ratios: `1:1 3:4 4:3 9:16 16:9`.
- **`batch.sh`** — generates the curated hero set (edit the list, re-run).
- **Output:** `gymrob/photoreal/*.png` (8) and `egym/photoreal/*.png` (8) — see the
  combined **`PHOTOREAL-CONTACT.jpeg`**.
- **`IMAGE-PROMPTS.md`** — the full prompt library (every item, both brandscapes) + shared
  style block + negatives, for generating the rest.
- **`refs/*.png`** — marks as transparent PNGs (brand reference for image-to-image /
  Imagen customization, to keep the logo pixel-exact).

**Text caveat:** Imagen sometimes garbles long/arched lettering — use the Ultra model for
text-heavy pieces, keep wording short, or composite the exact SVG mark on top. The fist /
seal pieces are the most reliable.

## View locally
```bash
python3 -m http.server 8753   # from the repo root
# then open:
#   http://127.0.0.1:8753/brand/gymrob/gallery/brandscape.html
#   http://127.0.0.1:8753/brand/egym/gallery/egym-posters.html
```
(Galleries are built from `_template.html` via the `build_*.py` scripts, which
inline the locked SVGs. Edit a template/CSS, re-run the builder, refresh.)

## Open decisions to confirm with Robin
- **Instagram handle** on print: the reachable account is **@gymrob123** (used on
  cards/stickers); secure a `@gymrob` vanity handle if you want the short form.
- Phone **9372303172** is shown on the business card (public on the site) — confirm
  before printing.
- Logo SVGs use live text (Alfa Slab One) — **outline the type** before any physical
  production (embroidery / emboss / die-cut).
