# GYMROB — Identity & Merch Gift Set · Master Creative Brief

> Internal studio brief. Every designer / judge / builder reads this first.
> Source of truth = the live site `robincarruthers.com` (this repo). Do not invent
> facts about Robin; everything below is lifted from the site.

---

## 0. The assignment

Design a **logo / brand mark for "GYMROB"** (Robin Carruthers' personal training
brand — Instagram `@gymrob` / `@gymrob123`) and apply it across a **complete,
giftable merchandise set** for Robin, the gym owner. Deliverable is a **gallery**
showing the mark living on real objects.

This is a **gift**. It must feel personal, premium, hand-made, and unmistakably
*his*. Not generic fitness-brand merch. Not a SaaS logo.

**Hard rule:** the cabin nameplate carries a **role title + his name** — it does
**NOT** name the organisation (no "eGym Lokhandwala" on the plate). The GYMROB
mark is his *personal* brand, separate from the gym's trading name.

---

## 1. Who we are designing for — Robin Carruthers

A real man. Read the site; honour the truth of him.

- **Story arc:** 30+ years in Mumbai advertising (Grey Worldwide, Clear Channel,
  Mediascope Publicitas) — boardrooms, late nights, hustle culture. The success
  that quietly breaks you: alcohol, cigarettes, "food for sport." Hit **120 kg**.
  *"What hurt more than the weight was the feeling that the best version of me was
  already behind me."*
- **The reinvention:** at **40**, he chose to *show up*. No magic plan. **120 kg →
  78 kg in 7–8 months**, then kept going. Now ~mid-50s and **shredded** — a real
  old-school iron athlete. Owner/coach of his gym in Lokhandwala, Andheri West,
  Mumbai.
- **The face / build (from his photos):** buzz-cut / very short hair, strong
  square jaw, warm broad smile, deep tan, thick neck, powerful shoulders, visible
  forearm tattoo. He looks like a **fighter** — Mumbai's real-life Rocky.
- **The ethos — "I AM A WARRIOR":** *"For me Iron is a religion and I am defined
  by its teachings. It teaches humility and patience and focus and power and
  brotherhood. I am prepared to never quit, to never say 'I can't do it.'"*
- **Full circle:** he met **Sylvester Stallone** — the man who, through *Rocky*,
  planted the seed. The photo is the two of them, **fists up**. "The Real Rocky."
  → The **raised fist** is the single most personal symbol available to us.

**Design implication:** the mark should read *grit, reinvention, old-school iron,
warrior, brotherhood* — warm and human, never clinical. A man who earned it late
and the hard way.

---

## 2. Brand north star (the visual world already built on the site)

**"Mighty Mick's Gym, made of pixels"** (the Rocky Balboa gym). A *place*: brick
walls under the train tracks, a hand-painted canvas fight-banner sagging on rusty
bolts, weathered leather, brass cert plates, chalk dust, a single cool blue from
the ring ropes. Photographic warmth, structural weight, zero preciousness.
Tagline feel: *old-school iron, Mumbai.*

The mark must look like it was **hand-painted onto canvas or stamped into brass**,
not vector-drawn in a browser. Hammered, not typed.

---

## 3. Name & what the mark must say

- Primary wordmark text: **GYMROB** (one word) — or **GYM ROB** stacked. This is
  the handle and the brand.
- Secondary / support lines available: `ROBIN CARRUTHERS`, `MUMBAI`, `EST. iron`,
  `OLD-SCHOOL IRON`, `IRON IS RELIGION`, `@gymrob`, `THE REAL ROCKY OF MUMBAI`,
  `120 → 78`.
- The mark should survive **without** any icon (wordmark alone) AND have an
  **icon-only** form (for caps, pins, favicon, bike badge).

---

## 4. Colour tokens (use these exact hexes)

| Token | Hex | Role |
|---|---|---|
| `mighty.red` | `#a4271f` | THE brand red — canvas-banner ground, primary |
| `mighty.red-mid` | `#9a241c` | red gradient mid |
| `red-cinder` | `#6f1812` | deepest oxidised red |
| `mighty.shadow` | `#0e0a07` | near-black (tobacco shadow) — the "ink"/black |
| `rocky.paper` | `#fefae0` | warm off-white — painted lettering, the "white" |
| `rocky.leather` | `#b49676` | tan leather / wood bench |
| `rocky.ring-blue` | `#4687a6` | the ONLY cool accent — use sparingly |
| `rocky.neutral` | `#b1b3b3` | brushed steel / locker grey |
| `rocky.dust` | `#ccd5ae` | chalk / dust olive |
| `brass.edge` | `#d4a14a` | brass plate face (highlight) |
| `brass.mid` | `#b8862b` | brass mid |
| `brass.shadow` | `#8a5e1c` | brass shadow / engraved depth |

**Rules:** Orange is OUT (that was the retired "Iron Forge" era). Never pure white
text — always `rocky.paper`. The warm punch is `mighty.red` + leather/brass; the
cool punch is `ring-blue`, used once per composition at most.

---

## 5. Type system (the site's "2+1")

- **Display / painted signage:** **Alfa Slab One** (Google Font, weight 400).
  Heavy slab, the Mighty-Mick's hand-painted face. THE logo wordmark font.
  CSS: `font-family: 'Alfa Slab One', Rockwell, serif;`
- **Body:** **Inter**.
- **Metadata / stamped IDs / decals:** **JetBrains Mono**, uppercase,
  `letter-spacing: 0.25–0.4em` (e.g. `· EST · MUMBAI · IRON ·`).

Headlines: uppercase, tight leading, slab. Hammered, not typed.

---

## 6. Motifs, materials & the reusable icon library

**Motifs to draw from:** raised **fist** (most personal), **boxing gloves**
(the gym's icon), **barbell / weight plate / dumbbell / kettlebell**, **chain
link**, **hex bolt / rivet / brass tack**, the **canvas fight-banner** rectangle,
**laurel/wreath** (champion), **stencil/spray** paint, **dog-tag**, **star**.

**Materials (reuse the site's real CSS treatments — listed for the builders):**
`bg-canvas` (red weathered canvas), `bg-paper`, `bg-wood`, `bg-brass`,
`leather-grain`, `bg-brick`; text: `text-hammered-canvas`, `text-engrave-brass`,
`text-engrave-paper`, `text-brand-leather`, `text-engrave-stone`,
`stencil-paint-red`; props: `pin-bolt`, `brass-tack`, `canvas-rope`, `dog-tag`,
`gym-locker-plate`, `trophy-plaque`, `canvas-pennant`, `iron-strap`, `ink-stamp`,
`dymo-label`; wear: `wearouts`, `wearouts-heavy`, `photo-grain`; SVG filters:
`#hammered-painted-canvas`, `#painted-aged-filter`.

### 6.1 Reusable SVG icon paths (viewBox `0 0 64 64`, `currentColor`)

Designers MUST reuse these exact paths for reliability/consistency (don't draw
fresh limbs blind). Compose, scale, recolor — don't reinvent.

**FIST (clenched) — the hero symbol:**
```
<g fill="currentColor" stroke="currentColor" stroke-width="1.5">
  <path d="M12 28 Q12 18 22 16 L42 16 Q52 16 52 26 L52 44 Q52 52 44 52 L20 52 Q12 52 12 44 Z"/>
  <ellipse cx="14" cy="38" rx="5" ry="8" transform="rotate(-20 14 38)"/>
  <line x1="22" y1="26" x2="22" y2="34" stroke="rgba(0,0,0,0.55)"/>
  <line x1="30" y1="24" x2="30" y2="32" stroke="rgba(0,0,0,0.55)"/>
  <line x1="38" y1="24" x2="38" y2="32" stroke="rgba(0,0,0,0.55)"/>
  <line x1="46" y1="26" x2="46" y2="34" stroke="rgba(0,0,0,0.55)"/>
</g>
```

**BOXING GLOVE:**
```
<g fill="currentColor">
  <rect x="14" y="46" width="32" height="12" rx="2"/>
  <path d="M14 46 Q12 20 24 14 Q34 10 44 14 Q54 18 52 36 L52 46 Z"/>
  <ellipse cx="48" cy="40" rx="6" ry="9" transform="rotate(20 48 40)"/>
</g>
```

**BARBELL:**
```
<g fill="currentColor" stroke="currentColor">
  <line x1="14" y1="32" x2="50" y2="32" stroke-width="2.5"/>
  <line x1="6" y1="32" x2="14" y2="32" stroke-width="4"/>
  <line x1="50" y1="32" x2="58" y2="32" stroke-width="4"/>
  <rect x="11" y="22" width="4" height="20"/><rect x="49" y="22" width="4" height="20"/>
  <rect x="4" y="18" width="6" height="28"/><rect x="54" y="18" width="6" height="28"/>
</g>
```

**WEIGHT PLATE (ring):** `<circle cx32 cy32 r28 sw2/> <circle r22/> <circle r6 fill/>`
**HEX BOLT:** `<polygon points="24,4 42,14 42,34 24,44 6,34 6,14"/>` (viewBox 0 0 48 48)
**CHAIN LINK:** two `<ellipse cx32 cy20 rx11 ry14/>` + `cy44`.

---

## 7. Logo design principles & constraints (non-negotiable)

1. **Works in 1 colour.** Must hold up as solid `mighty.red`, solid
   `mighty.shadow`, and solid `rocky.paper` (knockout). No effect should be
   load-bearing — distress/hammer is seasoning, not structure.
2. **Legible at 24 px** (favicon / woven label) AND commanding at hero size.
3. **Squared / minimal radius.** Iron is squared — max `2px` corner radius.
   No `rounded-full` UI-chrome shapes (a circular *seal/badge* is fine).
4. **Three required forms:** (a) primary lockup, (b) stacked/compact lockup,
   (c) icon-only mark. Plus a 1-colour stamp version.
5. **On-brand colour only** (§4). One cool accent max.
6. **Merch-versatile:** embroiderable (cap/polo — limited stitch detail),
   screen-printable (tee), embossable (leather/brass), die-cuttable (sticker).
   Avoid thin hairlines that vanish in stitch or die-cut.
7. **Feels hand-made** — painted/stamped, Mumbai old-school iron, warrior heart.

---

## 8. Creative territories for the concept sprint (one per designer)

Each designer owns ONE territory, pushes it hard, returns a complete SVG + spec:

1. **Painted canvas wordmark** — `GYMROB` hammered cream-on-red like the fight
   banner; the whole logo IS a Mighty-Mick's banner.
2. **Raised-fist emblem** — the Stallone "fists up" moment as a circular/shield
   badge; fist + `GYMROB` + `MUMBAI · IRON`.
3. **Boxing-glove crest** — crossed gloves / single glove as the gym's icon in a
   stamped seal.
4. **"GR" monogram** — a heavy interlocking slab monogram that doubles as the
   icon-only mark (cap front, pin, bike badge, favicon).
5. **Dog-tag / stencil stamp** — military stamped-steel / freight-stencil
   utilitarian mark; `GYMROB` punched into metal.
6. **Circular gym seal** — full roundel: `GYMROB` arched over an icon, `· OLD
   SCHOOL IRON · MUMBAI ·` around the ring, est. mark, two stars.
7. **Champion laurel** — barbell/fist inside a laurel wreath (earned-it warrior),
   slab wordmark beneath.

(Designers may also propose a wildcard, but must deliver their assigned territory.)

---

## 9. The merch / gift set (what the gallery must show)

Apply the locked mark to each, with the **correct material treatment**:

| Item | Treatment notes |
|---|---|
| **Drop-shoulder tee** | big screen-print across chest, paper-on-charcoal; back = manifesto line |
| **Polo (collared)** | small left-chest embroidered icon-mark; tonal |
| **Hoodie / gym vest (stringer)** | front icon, side/leg wordmark |
| **Cap** (6-panel + dad cap) | embroidered icon-only mark on front panel |
| **Mug** (enamel camp mug) | wrap print, red rim — "fuel" feel |
| **Sticker sheet** | die-cut: full logo, icon, fist, `IRON IS RELIGION`, `120→78`, `@gymrob` |
| **Cabin nameplate** | brass-on-walnut desk plate: **role title + ROBIN CARRUTHERS** (NO org) |
| **Bike fuel-tank badge** | metal emblem, icon-only mark, on tank; + helmet decal |
| **Tote / gym duffel** | canvas, stencil wordmark |
| **Shaker / steel water bottle** | wrap, icon + handle |
| **Business card** | letterpress paper, mark + handle + Mumbai + WhatsApp |
| **Lanyard + ID badge** | "STAFF / COACH" credential feel |
| **Enamel pin + woven patch** | icon-only; the collectible |
| **Gym towel** | woven jacquard wordmark |
| **Weight-plate coaster** | brass/round, icon |
| **Hand-painted wall banner** | the big Mighty-Mick's canvas sign with GYMROB |
| **Coach's logbook / notebook** | embossed leather cover, icon |

---

## 10. The cabin-nameplate role title (pick the cool one)

He's the owner/coach — give him a title that's *cool*, a wink to his adland
C-suite past, and pure iron. Shortlist (final chosen in copy task):

- **CHIEF IRON OFFICER** — `C.I.O.` pun on his old corporate world. ★ front-runner
- CHIEF WARRIOR OFFICER · KEEPER OF THE IRON · CHIEF OF IRON & DISCIPLINE ·
  HEAD COACH & FOUNDER · IRON OFFICER IN CHIEF · CHIEF REINVENTION OFFICER

Format on plate: small role line (mono) + **ROBIN CARRUTHERS** big (engraved
brass) + tiny `· MUMBAI · IRON IS RELIGION ·`.

---

## 11. Copy bank (slogans / decals — for stickers, tees, backs)

`IRON IS RELIGION` · `I AM A WARRIOR` · `120 → 78` · `SHOW UP` · `OLD-SCHOOL
IRON` · `NEVER SAY I CAN'T` · `FORGED AT 40` · `THE REAL ROCKY OF MUMBAI` ·
`HUMILITY · PATIENCE · FOCUS · POWER · BROTHERHOOD` · `@gymrob` · `EST. MUMBAI`.

---

## 12. Output / craft bar

- Self-contained SVG (no external refs except the Google font).
- Render checks at: 1-colour, 24 px, on red / on paper / on brick.
- The bar is **senior studio**: if it looks like clip-art or default-vector, it's
  rejected. It must look hand-painted, stamped, earned.
