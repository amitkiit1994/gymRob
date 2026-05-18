# Design Language — Mighty Mick's (Rocky Balboa-inspired)

**Source:** Tavily Pro research on Rocky I–VI + Creed cinematography, production design, and signage. All hex values and font matches are verified from documented sources. Citations at the bottom.

---

## 1. North Star

The site is **Mighty Mick's Gym, made of pixels**. Not a "fitness brand." Not a "dark-mode portfolio." A *place* — brick walls under the Market-Frankford Line, a hand-painted canvas sign sagging on rusty bolts, weathered leather, blue ring ropes, an off-white poster wall, dust in the spotlights.

Robin's site should feel like you walked into Mighty Mick's at 5:47am with a cup of bodega coffee.

---

## 2. Color Tokens

All sampled from the **documented Rocky II / III film palettes** (color-hex.com analyses, refs [1][2]).

| Token | Hex | Role |
|---|---|---|
| `rocky.paper` | `#fefae0` | Off-white warm paper / aged poster / canvas banner ground |
| `rocky.neutral` | `#b1b3b3` | Mid neutral — stone, brushed metal, locker grey |
| `rocky.leather` | `#b49676` | Warm tan leather, aged wood bench, gloves |
| `rocky.ring-blue` | `#4687a6` | Saturated ring-rope blue — **the single high-contrast accent** |
| `rocky.dust` | `#ccd5ae` | Washed olive / dust / chalk on floor |

Plus two heritage tokens for the **Mighty Mick's sign red** and deep shadow (estimated from documented canvas-banner descriptions [15]):

| Token | Hex | Role |
|---|---|---|
| `mighty.red` | `#a4271f` | The sign's heavy red bg, slightly oxidized |
| `mighty.shadow` | `#0e0a07` | Deep tobacco-shadow (early-film crushed blacks) |

**Rule:** orange is OUT. The only "warm punch" is the Mighty Mick's red and the leather tan. The only "cool punch" is the ring blue.

---

## 3. Typography

**The ROCKY title block is documented as Franklin Gothic Heavy** (refs [21][22][23]). For Creed (2015) it's TX Manifesto (commercial). Free Google-Fonts equivalents per ref [29][30][31]:

| Role | Font | Source |
|---|---|---|
| Headlines (ROCKY-feel block titles) | **Oswald Heavy** (free) → ideally Franklin Gothic Heavy (paid) | Google Fonts |
| Vintage slab signage | **Alfa Slab One**, Arvo, Rokkit | Google Fonts |
| Body | Inter | already loaded |
| Metadata / stamped IDs | JetBrains Mono | already loaded |
| Painted hand-signage | SVG with paint-bleed filter (recipe in §8) | inline |

---

## 4. Cinematography → UI translation

From The ASC cinematography articles [3][4][6][7]:

| Film trait | UI translation |
|---|---|
| Small-source key lighting (early films) | Strong directional gradients, 2:1 → 4:1 contrast ratios, hard shadows behind cards |
| Kodak 5247 punchy reds + crushed blacks | Saturated `mighty.red` accent on near-pure black; never mid-grey |
| Rocky IV hot overhead arena rim lights | Hero rim-highlight gradients (bright top-edge, dark bottom-edge cards) |
| LC2 slight desaturation | Multiply midtones × 0.9 — never let the page get "vivid Instagram filter" |
| Multi-camera ringside coverage | Asymmetric grids, photo crops overlap card edges (not strict columns) |

---

## 5. The Mighty Mick's Sign Treatment

Documented [15][20]: hand-painted canvas, **67"×127"** (5:9 ratio), red ground, 1920s-30s boxer portrait, artificially aged by the art dept.

**For the web hero, the "ROBIN CARRUTHERS" nameplate should literally be this sign:**

- Canvas-banner rectangle, 5:9-ish aspect, hung **slightly tilted** (~1°)
- `mighty.red` background with **paint-bleed-style distressed lettering** in `rocky.paper`
- Tiny boxer-silhouette illustration top-corner (matching the original)
- Visible canvas grain + tear/fray edges
- Drop shadow as if hanging from two iron bolts at the top
- Mounted to a **brick wall texture background**

This replaces my previous "polished steel plate" nameplate — wrong material entirely.

---

## 6. Surfaces & Materials

| Surface | Material it should evoke | Implementation |
|---|---|---|
| Hero background | Brick exterior under elevated train tracks | Photo bg (brick wall) + dark vignette + subtle warm spotlight |
| Section bg (light) | Aged paper poster / canvas | `rocky.paper` w/ subtle paper-grain SVG filter |
| Section bg (dark) | Painted concrete gym wall | `mighty.shadow` w/ scratched-overlay |
| Card bg | Locker or wood bench | Vertical wood-grain or steel-grey gradient |
| Button bg | Hand-painted stencil on metal | `mighty.red` w/ paint-bleed text in `rocky.paper` |
| Borders | Black gaffer tape / weld seam | Heavy black `border-2 border-mighty-shadow` |

---

## 7. Iconography

Documented props in / around Mighty Mick's [14][15][20]:
- Red boxing-gloves wall mural (the *icon* of the gym — must appear somewhere)
- Heavy bag, speed bag
- Boxing ring corner with rope
- Dumbbells, plates
- Wall posters, calendars
- Lockers, mirrors

I'll keep the SVG icon set I built (Barbell, WeightPlate, Dumbbell, etc.) but **add: RingCornerPost, HangingHeavyBag, SpeedBag, PosterClip** and recolor them in `rocky.leather` / `rocky.neutral` instead of orange.

---

## 8. Recipes (the few that need spelling out)

**Brick wall hero bg:**
```css
.hero {
  background-image:
    linear-gradient(rgba(14,10,7,0.55), rgba(14,10,7,0.85)),
    url('/images/textures/brick-wall.webp');
  background-size: cover;
  background-position: center;
}
```

**Paint-bleed text filter (SVG, ref [26]):**
```html
<filter id="paint-bleed">
  <feGaussianBlur stdDeviation="0.6" />
  <feComponentTransfer><feFuncA type="linear" slope="2.5" intercept="-0.3" /></feComponentTransfer>
  <feComposite in2="SourceGraphic" operator="atop" />
</filter>
<text filter="url(#paint-bleed)">MIGHTY MICK'S</text>
```

**Canvas-banner card (Mighty Mick's hero plate):**
```html
<div class="banner" style="background:#a4271f; transform:rotate(-1deg); aspect-ratio: 9/5;">
  <svg><text class="painted" fill="#fefae0">ROBIN CARRUTHERS</text></svg>
  <!-- bolts at top corners, frayed edge SVG mask -->
</div>
```

**"Gonna Fly Now" rhythm — motion tokens:**
- Slow heavy reveals: 1200ms `cubic-bezier(.25,0,.35,1)`
- Punch hits: 220–340ms `cubic-bezier(.16,1,.3,1)`
- Title stamp: 300ms scale with overshoot
- Always honor `prefers-reduced-motion`

---

## 9. Section-by-section direction (mapping to current chapters)

| Chapter | Treatment |
|---|---|
| **Hero** | Brick wall bg + Mighty Mick's-style **canvas banner** holding "ROBIN CARRUTHERS" (red ground, painted off-white text, distressed). Robin's photo as a **torn-edge poster** pinned beside it. Spotlight vignette. |
| **CH 01 The Weight** | Dark painted-concrete bg. Huge "120" in painted-stencil treatment with rust streaks. Quote in vintage-poster card with `rocky.paper`. |
| **CH 02 The Forge** | Half-poster/half-photo split. "120 → 78" big numerals with the same canvas-painted treatment. |
| **CH 03 The Warrior** | "I AM A WARRIOR" on a hung wooden gym placard. Certifications as **stamped leather badges** with the boxer silhouette. |
| **CH 04 The Offerings** | Locker-room layout — 4 lockers, each opens to a service. |
| **CH 05 The Temple** | "eGym Lokhandwala" as the **Mighty Mick's-of-Mumbai** painted sign. Map below. |
| **CH 06 The Fraternity** | Polaroid wall — testimonials as taped-up Polaroids on the brick wall. |
| **CH 07 The Press** | Newspaper-front-page layout — folded paper, masthead, lead block. |
| **CH 08 The Journal** | Coach's notebook — handwritten-tab feel, lined paper. |
| **CH 09 The Feed** | Old TV/CCTV monitor stack — scanlines, faux-flicker. |
| **CH 10 Train With Robin** | Boxing-bell red CTA on the canvas-banner. Form labels as gym-card-bench stencils. |

---

## 10. What I need to do next

1. Find / generate / source **brick wall photo** + **canvas texture** + **paper texture** (free/CC-0)
2. Rebuild `Nameplate.tsx` → `CanvasBanner.tsx` (hand-painted Mighty Mick's style)
3. Load Oswald Heavy + Alfa Slab One via `next/font`
4. Update Tailwind tokens with the rocky/mighty palette (keep iron tokens as legacy)
5. Rewrite Hero with brick bg + canvas banner + torn-poster Robin photo
6. Roll the treatment through each chapter per §9

---

## References

[1] color-hex.com — Rocky III palette · [2] Rocky II palette · [3] The ASC, "The Photography of Rocky" · [4] The ASC, "Rocky IV — A Photographic Dazzler" · [6] Kodak Eastman 5247 datasheet · [7] indepthcine.com — Kodak 5247 · [13] BAMFstyle — Rocky's leather costuming · [14] totalrocky.com — Mighty Mick's Gym filming location · [15] totalrocky.com — Mighty Mick's banner artwork · [16] phillyvoice.com — 2145 N Front St building · [17] Inquirer — Mighty Mick's location article · [20] totalrocky.com — screen-used Mighty Mick's sign auction · [21] fontmeme.com — Rocky title font ID (Franklin Gothic Heavy) · [22] fontbolt.com · [23] allmoviefonts.com · [24] fontmeme.com — Creed title font (TX Manifesto) · [25] ruemarcellin.com — vintage hand-painted signage · [26] andyjakubowski.com — SVG ink-bleed tutorial · [29][30][31] free slab-serif Google Fonts alternatives

**Gaps in research that I'll fill at implementation time:**
- Per-film color samples beyond Rocky II/III (would need HDR 4K stills)
- Exact hex of the American flag stripes (Rocky IV)
- High-res reference of the original Mighty Mick's banner letterforms
- Free brick / canvas / paper texture assets (will use Unsplash CC-0)
