# Hero Image Generation Prompt

Use this prompt with **Midjourney v6** or **Flux 1.1 Pro** (also works with DALL-E 3, Imagen, Ideogram). Paste it as a single prompt. The image will be the hero shot for the GymRob website.

---

## The Prompt

```
A weathered brick wall inside a vintage 1970s Philadelphia boxing gym,
shot with a Canon 5D and 50mm lens at f/2.8, low warm tungsten light from
a single overhead bulb. Pinned to the dark red brick wall: a black-and-white
photograph of a fit Indian man in his late 40s wearing a sleeveless gym
top, eyes intense, looking off-camera — the photo is bordered in heavy
matte black like a darkroom print, taped to the wall with brass thumbtacks
at all four corners, slightly torn lower-right corner. Beside the
photograph, a large hand-painted canvas banner sagging on two thick rope
straps and rusted iron eyelets, the canvas is deep oxblood red with
heavily distressed white painted lettering that reads "ROBIN CARRUTHERS —
IRON REINVENTION" in a 1940s commercial sign-painter style with visible
brush strokes, paint chipping, and aging. In the background corners,
slightly out of focus: a heavy bag, a steel barbell on the floor with
chalk dust, an old leather skipping rope coiled on a wooden bench, and
faded boxing posters layered on the brick. The lighting is dramatic
chiaroscuro — bright spotlight on the photograph and banner, deep shadows
elsewhere. Film grain visible. Warm sepia color grade with deep oxblood
and amber tones. Cinematic. Documentary. Authentic. No cartoon. No 3D.
No CGI. Shot like Annie Leibovitz photographed Rocky Balboa for Vanity Fair.

--ar 16:9 --style raw --v 6
```

## What to do with the result

1. Generate 4 variations
2. Pick the one that **looks most like a real photograph** (not painted, not digital)
3. Upscale to ~1920×1080 or larger
4. Save the file as `hero-robin.jpg`
5. Tell me you've saved it to `/Users/amitkumardas/Dev/FyndProject-v3/gymRob/public/images/hero-robin.jpg` and I'll wire it into the Hero in 2 minutes

## Why this prompt is structured this way

- **Camera + lens spec** (Canon 5D, 50mm, f/2.8) forces the model toward photographic realism instead of illustration
- **Lighting direction** (tungsten overhead, chiaroscuro) gives the model strong directional shadows to render
- **Specific props** (heavy bag, chalk dust, leather rope) ground it in a real gym, not stock fitness photography
- **Annie Leibovitz / Vanity Fair reference** invokes a known cinematic-documentary visual language
- **Negative prompts** ("No cartoon. No 3D. No CGI.") push away from the common AI-image failure modes
- **`--style raw --v 6`** Midjourney flags reduce stylization and increase photographic plausibility

## Alternative prompts

If the first result isn't right, try these variants:

**Variant A — even more documentary:**
> "Documentary portrait shot inside Mighty Mick's-style boxing gym, Kensington Philadelphia, 6am. A taped-up portrait of a 47-year-old Indian fitness coach beside a hand-painted red canvas sign reading 'ROBIN CARRUTHERS IRON REINVENTION'. Single tungsten bulb overhead. Visible breath in cold air. Film grain. Kodak Tri-X 400. ARRIFLEX 35mm."

**Variant B — wide environmental:**
> "Wide-angle 24mm shot of a vintage boxing gym corner: brick wall, painted sign 'ROBIN CARRUTHERS IRON REINVENTION' on hanging canvas, taped photo of fit man, weight plates stacked on floor, heavy bag in middle distance, dust particles in spotlight beam. Wes Anderson framing meets Raging Bull cinematography."

**Variant C — close on the props:**
> "Macro close-up of an aged Mighty Mick's-style hand-painted red canvas gym sign, oxblood paint chipping, brass eyelets with rope, brick wall behind, paper photo taped at corner. Print magazine cover lighting. 50mm f/4. Sigma Art lens. National Geographic style."

Pick the variant that gives you the cleanest signal for the model.
