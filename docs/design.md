# The Iron Forge: Creative Direction and Unified Design System Spec for Robin Carruthers

## 1. Creative North Star

The website for Robin Carruthers does not function as a standard digital resume or fluid corporate portfolio; it stands as a digital monolith—a heavy, weathered machine forged from the hard-fought transformation of a thirty-year veteran of Indian corporate advertising who traded high-stress Mumbai boardrooms for the objective reality of cold iron. Every digital interaction must feel tactile, dense, and physically resistant, rejecting the weightless, hyper-animated paradigms of modern software-as-a-service interfaces. The platform serves as a virtual manifestation of the gym floor, translating the friction, rust, and mechanical mass of eGym Lokhandwala into structural web layouts. Visitors are not greeted by a welcoming, soft landing page; they are confronted by an uncompromising industrial furnace of personal discipline, where the interface itself demands respect through heavy, static typography, rigid steel bevels, and slow-moving mass. This design system bridges the polished grit of India's elite advertising landscape (Grey Worldwide, Clear Channel, Mediascope Publicitas) with the unyielding, old-school lifting ethos of a post-forty athletic reinvention.

## 2. Color Tokens

| Token Name | Hex | Tailwind | CSS Var | Role |
|---|---|---|---|---|
| Blast Furnace Base | `#050302` | `furnace.base` | `--color-furnace-base` | Darkest layer; soot, casting pits |
| Raw Iron Ore | `#0a0604` | `furnace.ore` | `--color-furnace-ore` | Standard section bg |
| Oxidized Plate | `#16110e` | `furnace.plate` | `--color-furnace-plate` | Card surfaces, nav containers |
| Weathered Scale | `#374151` | `steel.scale` | `--color-steel-scale` | Secondary metadata, inactive |
| Cold Cast Iron | `#6b7280` | `steel.cast` | `--color-steel-cast` | Body secondary, utility icons |
| Brushed Metal | `#9ca3af` | `steel.brushed` | `--color-steel-brushed` | Primary descriptive type |
| Polished Steel | `#f9fafb` | `steel.polished` | `--color-steel-polished` | High-intensity headlines |
| Deep Corrosion | `#7c2d12` | `rust.corrosion` | `--color-rust-corrosion` | Rust shadows, iron stains |
| Sintering Spark | `#ea580c` | `rust.spark` | `--color-rust-spark` | Interactive states, warnings |
| Melted Ore | `#fdba74` | `rust.melt` | `--color-rust-melt` | Glowing accents, thermal hover |

## 3. Typography

- **Display / Headlines**: Anton — condensed, uppercase, stamped factory-plate feel
- **Body**: Inter — high-legibility geometric sans
- **Metadata / System Labels**: JetBrains Mono — fixed-width, industrial invoice / forklift safety decal feel

Fluid scale via `clamp(min, fluid-vw, max)`.

| Role | Font | Clamp | Use |
|---|---|---|---|
| Display Giant | Anton | `clamp(6rem, 12vw, 18rem)` lh 0.85 | 120 KG style numeric anchors |
| H1 | Anton | `clamp(3.5rem, 8vw, 8rem)` lh 0.9 | Hero, chapter entry |
| H2 | Anton | `clamp(2rem, 4vw, 4rem)` lh 1.0 | Card titles, sub-heads |
| H3 | Inter | `clamp(1.25rem, 2vw, 1.75rem)` lh 1.3 | Mid editorial subheads |
| Body | Inter | `1rem` lh 1.6 | Standard prose |
| Body sm | Inter | `0.875rem` lh 1.5 | Captions, form labels |
| Meta Mono | JetBrains Mono | `0.75rem` tracking-[0.15em] | Stamped IDs, decals |

## 4. Surface Hierarchy

| Depth | Layer Name | Color | Texture | Border |
|---|---|---|---|---|
| -1 | Blast Furnace Pit | `#050302` | 6% grain, vertical soot, edge vignettes | Hidden seams |
| 0 | Raw Steel Plates | `#0a0604` | Scratched iron, horizontal mill lines @ 4% | Raw welded joints, rivets |
| 1 | Oxidized Machinery | `#16110e` | Corroded scaling, diagonal orange/black hazards | Faux 3D double-bevel iron frames |
| Focus | Molten Accent | `#7c2d12 → #ea580c` | Thermal gradients, ember particles | Polished steel + rust shadow |

## 5. Component Patterns

### Iron Frame
Heavy double-bevel rust border + clip-path corner cuts + 4 corner rivets. Avoid `outline`, use layered `box-shadow` (inner light + outer dark).

### Iron Button (primary)
Bg gradient `rust.corrosion → rust.spark`, top inset highlight, 4px hard drop-shadow, active translate-y-[4px]. Hot dot accent.

### Iron Button (ghost)
Bg `furnace.plate`, border `steel.scale`, hover border `steel.cast`, text `steel.brushed`.

### Iron Text (metallic headline)
Linear gradient `steel.polished → steel.brushed → steel.polished` (steel face) clipped to text. Drop-shadow translate-y-[4px] black blur-[2px] for plate depth. **No mixing with rust.**

### Section Eyebrow
`[CH_01]` mono badge in `furnace.plate` w/ `steel.scale` border + horizontal rule gradient + right-aligned mono title label.

### Big Number Anchor
Massive Anton numeral, gradient `furnace.plate → steel.scale → furnace.ore` (dark embossed casting, not bright). Mono `METRIC_DECAL // S_092` decal above. Left-border-rust label below.

### Verse / Pull-quote
Editorial serif italic, oversized opening quote in `rust.melt`. Scripture variant for long stanzas.

## 6. Motion Language

| State | Profile | Mass | Stiffness | Damping | Use |
|---|---|---|---|---|---|
| Heavy Hydraulic Drag | viscous | 2.5 | 120 | 45 | Section reveals, panel shifts |
| Sintering Bolt Snap | mechanical | 0.4 | 650 | 18 | Button engagements, nav |

**Allowed:** vertical curtain drops, instant color flips, horizontal hydraulic slides, fade-ins under 0.8s.

**Forbidden:** mouse-follow tilt/parallax, cursor-trail circles, bouncy springs, elastic scaling on hover, light-sweep loops, text-wave on scroll, fast radial spins.

## 7. Do / Don't

| DO | DON'T |
|---|---|
| Sharp corners, max `rounded-sm` (2px) | Rounded circles/pills, `rounded-lg+` |
| Monochrome bgs + steel/coal/rust accent | Pastels, neon, cyber gradients |
| Static, locked typography | Bouncy/playful text entry |
| Data matrices, training metric tables | Hide data in light cards/accordions |
| Rivets, stamped IDs, mechanical details | Cartoon icons, glass UI, gloss |
| Heavy horizontal rules (welds) | Thin/dotted/decorative lines |
| Raw photography (iron, callouses, soot) | Stock smiling-models gym photos |
| High-damping Framer Motion | Bouncy/zero-gravity dynamics |
| Vertical nav like control levers | Sticky floating blurred headers |
| CSS layered shadows for physical depth | Standard unblended drop-shadows |
| Hot-filament glowing active states | Solid/neon underlines |
| Uppercase monospace data tags | Handwriting/decorative scripts |
| Massive numeric chapter anchors | Decorative/structural icons |
| Asymmetric 60/40 grid splits | Perfectly balanced grids |
| Strict wireframe alignment | Free-floating elements |

## 8. Section-by-Section Treatment Map

```
HERO            – Iron Monolith & Steel Profiles
CH I            – THE WEIGHT (120 KG Abyss)
CH II           – THE FORGE (The Transformation Corridor)
CH III          – THE WARRIOR (The Iron Manifesto)
CH IV           – THE OFFERINGS (Mechanical Systems)
CH V            – THE TEMPLE (eGym Lokhandwala Mumbai)
CH VI           – THE FRATERNITY (Rivet Card Testimonials)
CH VII          – THE PRESS (MediaInfoline Print Plate)
CH VIII         – THE JOURNAL (Stamped System Logs)
CH IX           – THE FEED (Real-Time Raw CCTV Feeds)
CH X            – TRAIN WITH ROBIN (Smelting Form Terminal)
```

### HERO — The Monolith
- 60/40 split: high-contrast B&W portrait left, dense text right
- Vertical "ROBIN CARRUTHERS" nameplate, Anton 10vw, `steel.polished`
- Sub-header "30 YEARS IN ADLAND / 15 YEARS IN IRON" in `rust.spark`
- Hydraulic Drag entrance
- Bg: `furnace.base` + distressed scratched-steel @ 3% grain

### CH I — THE WEIGHT (Crisis)
- Sticky `120 KG` Display Giant anchor left, agency-history artifacts right
- Bg: `furnace.ore` + heavy radial vignette
- Scroll-driven: noise intensity ramps 4% → 15%
- Anchor color shifts cold-metal → burning copper as you scroll

### CH II — THE FORGE (Transformation)
- Interactive transformation slider, screen splits 120 KG ↔ 78 KG
- Bg: `furnace.plate` + diagonal yellow/black hazard stripe margins
- 78 KG callout in glowing `rust.spark`
- Drag-divider reveals contrasting photography

### CH III — THE WARRIOR (Manifesto)
- Centered massive "I AM A WARRIOR" in polished steel
- Bg: `furnace.base` + 8% opacity barbell-lifting video loop
- Lines glow hot-filament (`steel.scale → rust.spark → steel.polished`) on scroll

### CH IV — THE OFFERINGS (Coaching)
- Strict data-table feel; 3-col asymmetric grid
- Bg: `furnace.plate`, borders `steel.cast`
- Hover triggers instant border-glow (no delay)

### CH V — THE TEMPLE (eGym Lokhandwala)
- 40/60 split: geographic coords + map left, high-contrast facility photos right
- Bg: `furnace.ore` + blueprint vector grid lines
- Drag-to-pan structural blueprint

### CH VI — THE FRATERNITY (Testimonials)
- Horizontal scrolling rivet-bordered cards
- Bg: `furnace.plate`, text `steel.cast`
- Horizontal card motion mapped to vertical scroll, high drag ratio

### CH VII — THE PRESS (MediaInfoline)
- Newspaper lead-block / printing-press-plate layout
- Bg: `furnace.ore`, text `steel.polished`
- Slow horizontal light reflection on viewport-enter

### CH VIII — THE JOURNAL (Logs)
- Engineering-log / maintenance-chart list layout
- Bg: `furnace.base`, `steel.scale` highlights
- Hover: instant rust-spark color shift, no delay

### CH IX — THE FEED (CCTV)
- Vertical video grid in steel security-monitor frames
- Bg: `furnace.ore` + warning-stripe accents
- Faint horizontal scanlines drift

### CH X — TRAIN WITH ROBIN (Terminal)
- Control-console dual panel: form left, channels (WhatsApp, map) right
- Bg gradient: `furnace.plate → rust.spark`
- Submit triggers hydraulic loading + mechanical success snap

## 9. Asset Production Checklist

**Photography:**
- Robin portrait B&W high-contrast side-lit (Hero)
- Transformation: warm low-contrast corporate vs sharp high-contrast monochrome (CH II)
- eGym Lokhandwala raw architectural shots (CH V)
- Hands-on-iron macro: chalk, calluses, rust (CH III)
- Testimonial B&W portraits w/ matching lighting (CH VI)

**Textures:**
- Scratched brushed-steel overlay
- Tileable oxidized rust scale
- Industrial halftone screen
- Rust-orange blueprint grid

**Interface:**
- Custom mechanical SVG icons (hex bolts, chains, calipers, weight plates, warning stripes)
- Rivet border SVG paths
- Stamped ID decal templates (serial lines, calibration marks)

## 10. Production Notes

- All assets `.webp`, exact display dimensions
- Use `next/image` everywhere, explicit aspect-ratios on grid containers
- Inline SVGs for decorative warning stripes / rivets
- Animations on `transform / opacity / clip-path` only (HW accelerated)
- Avoid `backdrop-filter: blur()` and raw `box-shadow` on scroll
- `will-change: transform` on big anchors
- WCAG: body type ≥ 4.5:1 contrast against textured bg
- Font-smoothing antialiased

---
*Source: Gemini-generated design spec, 2026-05-19.*
