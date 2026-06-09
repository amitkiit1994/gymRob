# Making it real — image-generation prompt pack

Our mockups nail the **art direction** (mark, palette, type, composition). To turn them
into photoreal product & interior shots, feed them to an image model. This pack gives you,
per item: the **prompt**, which **reference image** to attach, and the **aspect ratio**.

## The pipeline (works with Nano Banana / Gemini 2.5 Flash Image, Gemini app, Midjourney, Flux Kontext, Seedream)

For each shot, attach **two** reference images and write the prompt:
1. **Brand reference** — the matching transparent PNG from `brand/refs/` (keeps the mark *exact*).
2. **Composition reference (optional but recommended)** — our rendered mockup JPG from
   `brand/gymrob/renders/` or `brand/egym/renders/` (gives the model the layout/scene).

Prompt = **[ITEM PROMPT] + [STYLE BLOCK] + [NEGATIVE]**. Always tell it:
> "Apply the logo from the attached reference **exactly** — do not redraw, restyle, re-letter or recolour it."

- **Nano Banana / Gemini 2.5 Flash Image:** best at preserving a supplied logo. Attach brand PNG (+ comp JPG), paste prompt, ask for "photorealistic, ultra-detailed."
- **Midjourney:** use `--cref <logo url>` (character/brand ref) or omni-reference, plus `--ar`.
- **Flux Kontext / Seedream:** image-to-image at 0.6–0.8 strength on the comp render, with the logo as a second reference.

---

## STYLE BLOCK  (append to every prompt)

> Photorealistic, shot on a 50mm lens, shallow depth of field. Old-school iron gym world —
> "Mighty Mick's of Mumbai," Rocky-era cinematography: a single warm key light from above,
> hard directional shadows, Kodak-5247 look — punchy reds, crushed warm blacks, slightly
> desaturated midtones, fine film grain. Brand palette only: deep oxidised red #a4271f,
> warm off-white cream #fefae0, near-black #0e0a07, brushed brass, tan leather; one cool
> ring-blue #4687a6 used at most once. Materials look real and weathered (brushed metal,
> aged canvas, oiled leather, chalk dust, brick). Premium, gritty, hand-made — never glossy
> SaaS, never clip-art. The applied logo matches the attached reference exactly.

## NEGATIVE  (append)

> no gibberish text, no misspelled words, no extra logos, no watermark, no warped lettering,
> no neon, no pastel, no plastic sheen, no stock-smiling models, not flat vector.

---

# A · GYMROB — merch gift set (Robin's personal brand)

Attach `brand/refs/<png>` as brand ref; comp ref = `brand/gymrob/renders/brandscape-final.jpeg`.

- **Drop-shoulder tee (front)** — `ref: gymrob-fist-red.png` (knock to cream) + `gymrob-wordmark.png` · `AR 4:5`
  > A charcoal heavyweight drop-shoulder t-shirt on a wooden hanger against a brick gym wall. Big cream screen-print across the chest: a clenched fist above the slab wordmark "GYMROB", with "IRON IS RELIGION" — ink sits in the cotton weave, slight vintage cracking.
- **Tee (back)** — `ref: gymrob-wordmark.png` · `AR 4:5`
  > Back of the same charcoal tee, cream print across the upper back: "I AM A WARRIOR. IRON IS MY RELIGION. I WILL NEVER SAY I CAN'T." small "· GYMROB · MUMBAI ·" under the hem.
- **Polo** — `ref: gymrob-fist-red.png` (tonal) · `AR 4:5`
  > Navy cotton-piqué polo, folded flat-lay on aged leather. Small tonal embroidered fist on the left chest — raised satin stitch, thread catches the light. Quiet, collared, premium.
- **6-panel cap** — `ref: gymrob-fist-red.png` (cream stitch) · `AR 1:1`
  > Black structured 6-panel cap, 3/4 view, embroidered cream fist on the front panel (raised puff stitch), curved bill, on a dark bench with chalk dust.
- **Enamel camp mug** — `ref: gymrob-fist-red.png` · `AR 1:1`
  > Cream enamel camp mug with a red rim, "SHOW UP." in red slab + small "· FUEL · GYMROB · MUMBAI ·", steam rising, on a worn wooden bench, gym blurred behind. Print wraps the curve.
- **Weight-plate coaster** — `ref: gymrob-emblem.png` · `AR 1:1`
  > A solid cast-brass weight-plate coaster, the GYMROB warrior's seal struck into the face, top-down on dark walnut, warm rim light.
- **Cabin nameplate (HERO)** — `ref: gymrob-emblem.png` (optional) · `AR 16:9`
  > A brushed-brass desk nameplate on a dark walnut block, deeply engraved: small "· CHIEF IRON OFFICER ·", large "ROBIN CARRUTHERS", small "· MUMBAI · IRON IS RELIGION ·", four corner screws, on a coach's desk, shallow DOF.
- **Bike fuel-tank badge** — `ref: gymrob-fist-red.png` + `gymrob-wordmark.png` · `AR 3:2`
  > A cast-metal emblem badge bolted to a matte-black motorcycle fuel tank: red fist + cream "GYMROB" + "OLD-SCHOOL IRON · MUMBAI", raked light, real chrome/steel reflections.
- **Helmet** — `ref: gymrob-fist-red.png` · `AR 3:2`
  > A matte-black full-face motorcycle helmet, 3/4 view, a cream fist + "IRON IS RELIGION" vinyl decal on the side shell conforming to the curve, dark visor, studio key light.
- **Canvas tote** — `ref: gymrob-wordmark.png` · `AR 4:5`
  > Natural heavy-canvas tote bag hanging on a hook, red stencil-sprayed "GYMROB" with slight overspray bleed, small "MUMBAI · IRON" at the base, brick behind.
- **Steel shaker / bottle** — `ref: gymrob-fist-red.png` · `AR 4:5`
  > A brushed stainless steel shaker bottle with a red lid, wrap print: cream fist + "GYMROB" + "FUEL · OLD-SCHOOL IRON", condensation, on the gym floor between sets.
- **Business card** — `ref: gymrob-fist-red.png` · `AR 3:2`
  > Two thick letterpress business cards on aged paper: front debossed red fist + "ROBIN CARRUTHERS / · CHIEF IRON OFFICER ·"; back printed canvas-red "IRON IS RELIGION / @gymrob123 / wa 93723 03172 / Lokhandwala · Andheri W · Mumbai". Visible paper tooth + deboss depth.
- **Lanyard + ID** — `ref: gymrob-fist-red.png` · `AR 4:5`
  > A red woven lanyard repeating "IRON IS RELIGION", a metal clip, and a dark ID card: red fist, "GYMROB", "ROBIN CARRUTHERS / CHIEF IRON OFFICER / ALL-ACCESS · THE FLOOR."
- **Enamel pin + woven patch** — `ref: gymrob-fist-red.png` (pin) + `gymrob-emblem.png` (patch) · `AR 1:1`
  > Macro: a hard-enamel pin of the cream fist on red with raised metal edges, beside a merrow-edge woven patch of the warrior's seal, on denim.
- **Gym towel** — `ref: gymrob-wordmark.png` · `AR 4:5`
  > A charcoal woven gym towel, folded, with a tonal jacquard "GYMROB" and "120 → 78" in the corner weave, terry pile texture, hemmed edge.
- **Coach's logbook** — `ref: gymrob-fist-red.png` (gold) · `AR 4:5`
  > An oxblood leather notebook, gold-foil-stamped fist + "THE IRON LOGBOOK / GYMROB · ROBIN CARRUTHERS", visible grain, page block, elastic band, on a desk.
- **Sticker sheet** — `ref: gymrob-fist-red.png` + `gymrob-wordmark.png` · `AR 4:5`
  > A die-cut sticker sheet on backing paper: GYMROB wordmark, a round red fist, "IRON IS RELIGION", "120 → 78", "@gymrob123", "SHOW UP", kiss-cut, slight curl.
- **Hand-painted wall banner** — `ref: gymrob-wordmark.png` · `AR 3:2`
  > A large hand-painted canvas fight-banner sagging on two rusty bolts on a brick wall: red ground, cream painted "GYMROB", "OLD-SCHOOL IRON · MUMBAI", "IRON IS RELIGION. I AM A WARRIOR. I WILL NEVER QUIT." Weathered, frayed edges, warm spotlight.

---

# B · THE GYM — physical brandscape (name-agnostic)

> **No gym name.** Anchor every identity surface on the **iron creed seal** (`brand/refs/gym-iron-seal.png`)
> or the **fist** (`gymrob-fist-red.png`) + the creed words. Where a name/logo will go later, say
> *"leave the identity area clean, or place the supplied patch."* Comp ref = `brand/egym/renders/egym-physical-full.jpeg`.

- **Exterior name board** — `ref: gym-iron-seal.png` · `AR 16:9`
  > A gym storefront at dusk in Mumbai under elevated train tracks; a dark fascia sign, warm-lit, holding the round iron creed seal (fist + "IRON IS RELIGION · OLD-SCHOOL · MUMBAI") with channel-letter glow; brick, a parked motorcycle. Leave space beside the seal for a future name.
- **Glass entry doors** — `ref: gym-iron-seal.png` · `AR 4:5`
  > Double glass gym doors with frosted-vinyl graphics: the iron seal centred, "MON–SUN 5:00–23:00", "PUSH/PULL", brushed-steel pull handles, brick interior glowing warm behind.
- **Reception backwall + desk** — `ref: gym-iron-seal.png` · `AR 16:9`
  > A gym reception: a big iron creed seal on the brick backwall under a warm spotlight, a painted oxidised-red desk front with a small fist, towels stacked. Clean identity zone ready for a logo.
- **The Manifesto wall** — `ref: none` · `AR 16:9`
  > A huge hand-painted mural on a red canvas panel across a gym wall: "I AM A WARRIOR" in giant cream hammered slab letters, the verse beneath ("FOR ME IRON IS A RELIGION…"), weathered, two bolts, a heavy bag in the foreground.
- **Floor zone graphic** — `ref: none` · `AR 1:1`
  > Looking down at a black rubber gym floor with "THE FORGE" epoxy-stencilled in big red weathered letters, a barbell loaded with plates resting across it, hard top light.
- **Lifting platform** — `ref: gymrob-fist-red.png` · `AR 1:1`
  > A wooden/rubber deadlift platform inlaid with a red fist and "120 → 78 · EARN IT", chalk dust, a loaded barbell, dramatic side light.
- **Stair risers** — `ref: none` · `AR 4:5`
  > A concrete gym staircase where each riser is painted with one creed line climbing up: "SHOW UP / DO THE WORK / NEVER QUIT / BE A WARRIOR / IRON IS RELIGION", cream on oxidised red, worn treads.
- **Power rack + plate** — `ref: gym-iron-seal.png` (small) · `AR 4:5`
  > A matte-black power rack with a loaded barbell; an engraved brass station plate ("RACK 01 · THE FORGE" with the fist) bolted to the upright; gym floor, moody key light.
- **Branded weight plate** — `ref: gymrob-fist-red.png` · `AR 1:1`
  > Macro of a cast-iron bumper plate with a raised fist emblem and "20 KG" in the casting, chalk in the knurling, on a rack.
- **The Ring (boxing)** — `ref: none` · `AR 16:9`
  > A boxing ring corner, the canvas apron printed "THE RING · BOXING · SWEAT SAVES BLOOD", ring ropes in the one ring-blue accent, gloves on the post, dust in a hard light beam.
- **Heavy bag** — `ref: gymrob-fist-red.png` · `AR 4:5`
  > A worn red leather heavy bag hanging from a chain, a cream fist + "IRON" stamped on it, scuffed, swinging slightly, dramatic side light.
- **Glove-wall mural** — `ref: none` · `AR 1:1`
  > A brick wall mural of red boxing gloves hanging from a lace, "THE GLOVE WALL — HANG 'EM WHEN YOU'VE EARNED IT" hand-painted beneath.
- **Locker bank** — `ref: none` · `AR 16:9`
  > A bank of dark metal lockers with brass number plates and a painted header "THE LOCKERS · STOW THE STREET", a worn wooden bench, warm light.
- **Washroom door signs** — `ref: none` · `AR 1:1`
  > Engraved-acrylic restroom door plates with iron-style pictograms, "MEN"/"WOMEN", small "LEAVE IT BETTER", mounted on a concrete wall.
- **Mirror cling** — `ref: none` · `AR 4:5`
  > A large gym mirror with a cream vinyl cling: "THE BEST VERSION OF YOU IS STANDING RIGHT HERE.", a lifter reflected softly, hard rim light.
- **Shoe space** — `ref: none` · `AR 16:9`
  > A numbered shoe-cubby rack with a painted red header "LEAVE THE STREET HERE", training shoes in the cubbies, near the entrance.
- **Hanging zone banners** — `ref: none` · `AR 16:9`
  > Double-sided canvas zone flags ("THE FORGE", "THE RING") hung from the ceiling on chains over a gym floor, lit from below by warm spots.
- **Coach's chalkboard** — `ref: none` · `AR 4:5`
  > A black chalkboard in a leather/brass frame: painted "SHOW UP. LOG THE WORK." at top, real chalk "TODAY'S IRON —" with sets and a quote, coach's corner.

---

## Reference asset index — `brand/refs/`
| PNG | what it is | use for |
|---|---|---|
| `gymrob-lockup.png` | GR tile + GYMROB + names | letterheads, hero lockups |
| `gymrob-wordmark.png` | painted GYMROB | tees, tote, towel, banner, stencils |
| `gymrob-emblem.png` | warrior's seal (GYMROB) | patch, coaster, pin |
| `gymrob-icon-gr.png` | GR monogram tile | cap/favicon/bike (GYMROB) |
| `gymrob-fist-red.png` | the fist | pins, decals, stamps, the universal symbol |
| `gymrob-favicon.png` | GR favicon | tiny |
| `gym-iron-seal.png` | **name-free creed seal** | the GYM's anchor (no name) |

> Tip: generate 3–4 variations per item, pick the best, then use that as the new comp ref to
> refine. Keep the brand PNG attached every time so the mark never drifts.
