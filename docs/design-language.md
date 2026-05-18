# Design Language — Iron Forge

> **The Creative North Star:** Old-school iron. Weathered metal. Heat-treated copper.
> Every surface should feel like it was hammered, not designed. Robin's brand isn't
> influencer-fitness — it's the temple of the iron. The site must reflect that.

## 1. Philosophy

GymRob's interface is not a SaaS dashboard. It's a forge.

We reject:
- Flat "design system" cleanliness
- Influencer-fitness pastels and rounded everything
- Generic dark mode with thin orange accents

We embrace:
- **Hard borders.** Heavy, beveled, double-stroked. Iron has edges.
- **Texture.** Rust, grain, scratches, sparks. The bg is never just a color.
- **Embossed type.** Headlines feel hammered out of metal, not typed.
- **Industrial precision.** Mono-spaced labels, uppercase tracking, hex-tag eyebrows.
- **Asymmetric weight.** A single heavy element opposite vast dark space.

The vibe is **Rocky's gym meets Magnum P.I. in 2026**. Photographic warmth, structural weight, no preciousness.

## 2. Color Tokens

Live in `tailwind.config.ts` and `globals.css`.

| Token | Hex | Use |
|---|---|---|
| `bg.forge` | `#0a0604` | Page background — almost black, slight warmth |
| `bg.anvil` | `#000000` | Pure black sections — thumbnails, deep wells |
| `accent.500` | `#f97316` | Primary orange (Tailwind default) |
| `accent.600` | `#ea580c` | Hover / depressed state |
| `accent.700` | `#c2410c` | Rust border |
| `accent.800` | `#9a3412` | Deep rust shadow |
| `accent.900` | `#7c2d12` | Charred copper |
| `accent.200` | `#fed7aa` | Bright copper highlight |
| `text.primary` | `#f3f4f6` | Body copy on dark |
| `text.muted` | `#9ca3af` | Secondary text |
| `text.rust` | `#fed7aa` | Rust-tinted labels |

**Forbidden:** Pure white text (`#fff`). Always use a slight warm gray (`#f3f4f6`) so text doesn't punch holes in the warmth.

## 3. Surface System

Three levels of weathering, used like a typographic scale:

1. **`.iron-bg`** — Full weathered metal. Layered radial rust + SVG fractal noise. Use for hero sections, press section, contact CTA. *Reserved for the "loud" moments.*
2. **`.iron-grain`** — Rust noise overlay only (additive). Use on top of `.iron-bg` for extra grit, or alone on flat dark surfaces.
3. **Plain `bg-black` / `bg-[#0a0604]`** — Quiet sections. Lets the loud ones breathe.

**Rule of rhythm:** No two adjacent sections may both use `.iron-bg`. Loud → quiet → loud.

## 4. Typography

| Class | Family | Weight | Use |
|---|---|---|---|
| `font-serif` (Playfair Display) | Serif | 700–800 | Headlines, pull-quotes |
| `font-sans` (Inter) | Sans | 400–600 | Body copy |
| `font-mono` (system mono) | Mono | 500–700 | Labels, metadata, byline strips |

**The four type roles:**

1. **`.iron-text`** — Embossed orange-to-gold gradient. **Only on headlines.** Always uppercase, serif, leading-tight. Max one per section.
2. **`.steel-text`** — Brushed steel gradient. Use for stat numbers / counters.
3. **Plain serif** — Body headings (h3, h4) — `font-serif text-white`.
4. **Mono labels** — All metadata, dates, "FEATURED", "CERTIFIED" etc. `font-mono uppercase tracking-[0.25em] text-accent-400`.

**Headline scale:**
- Hero: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`
- Section h2: `text-4xl sm:text-5xl md:text-6xl`
- Card h3: `text-xl sm:text-2xl`

Headlines should feel **hammered, not typed** — `tracking-tight`, `leading-[1.05]`, all-caps.

## 5. Borders & Frames

The site uses **three** distinct frame types:

### 5.1 `.iron-frame`
Heavy double-bevel rust border with inner glow + outer halo.
Use for: portraits, hero thumbnails, credential cards, primary CTAs.

### 5.2 Hairline rust
`border border-accent-800/50` — quiet structural edges where iron-frame would be too loud.

### 5.3 Hex / corner brackets
For badges and tag chips. Asymmetric corner cuts using `clip-path` or rotated `::before` elements.

**Forbidden:** `rounded-full`, `rounded-lg`. Maximum radius is `rounded-sm` (2px). Iron is squared.

## 6. Motion

- **No bouncy spring animations.** Iron is heavy. Use `easeOut`, slow.
- **Ken Burns** on hero bg image (already in place — keep).
- **Spark sweeps** on section reveal — diagonal light streaks (`.spark-corner-tl`, `.spark-corner-br`).
- **Buttons depress** on `:active` — `translate-y-0.5`. They feel like real switches.

## 7. Components

### 7.1 Iron Button (primary)
```
bg-gradient-to-b from-accent-500 to-accent-700
hover:from-accent-400 hover:to-accent-600
text-black font-bold uppercase tracking-wider
border-2 border-accent-800
shadow-[0_4px_0_0_rgba(0,0,0,0.6),0_0_20px_rgba(234,88,12,0.4)]
active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(0,0,0,0.6)]
rounded-sm px-6 py-3
```

### 7.2 Iron Button (ghost / secondary)
```
bg-black/40 text-accent-300 hover:text-accent-100
border-2 border-accent-700 hover:border-accent-500
uppercase tracking-wider font-bold
rounded-sm px-6 py-3
```

### 7.3 Mono Badge / Eyebrow
```
inline-flex items-center gap-2
bg-black/70 border border-accent-700/70
px-3 py-1.5 rounded-sm
[h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse]
font-mono text-[0.65rem] tracking-[0.3em] uppercase text-accent-400
```

### 7.4 Section eyebrow (already exists — `<SectionEyebrow />`)
Numbered editorial label. Keeps consistency across sections.

### 7.5 Iron-frame portrait
For testimonial avatars and press thumbnails.

## 8. Layout Principles

- **Asymmetric grids.** A 5:7 split beats a 6:6 split.
- **Breathing room.** Min `py-24` between sections.
- **Numbered eyebrows on every major section.** Already in place: 01–08.
- **Side-by-side over stacked** whenever possible — magazine spread > centered column.

## 9. Iconography

- Lucide / Heroicons in `text-accent-500`
- For "achievement" or "rule" icons, prefer **hexagonal containers** (per the F3 reference) with rust borders.

## 10. Do / Don't

### ✅ Do
- Layer textures. (Forge bg + grain overlay + spark corners.)
- Use mono-font for any number, date, or ID-like value.
- Make headlines uppercase and embossed.
- Asymmetric layouts. Heavy on one side, breath on the other.
- Borders on EVERY interactive surface. Iron is bordered.

### ❌ Don't
- Use `rounded-full` or `rounded-lg`.
- Use `bg-primary-950` for hero / press / cta surfaces — too clean.
- Use pure white text.
- Stack centered content if you can put it side-by-side.
- Mix iron-text with steel-text in the same headline.

## 11. Section Treatment Map

| Section | Surface | Headline | Notes |
|---|---|---|---|
| Hero | Photo + Ken Burns + warm overlay | `.iron-text` huge | Trust bar at bottom |
| About | Plain dark + grain | `.iron-text` | Credential cards = `.iron-frame` |
| Services | `.iron-bg` half-bleed | `.iron-text` | Each card = iron-frame |
| EGym | Photo bg + warm overlay | `.iron-text` | "What sets us apart" bullets in mono |
| Location | Plain dark | Plain serif | Quiet utility section |
| Testimonials | Plain dark | `.iron-text` | Avatar in iron-frame |
| Press | `.iron-bg` | `.iron-text` | Already done |
| Blog | Plain dark | `.iron-text` | Cards with rust hairline |
| Instagram | `.iron-bg` | `.iron-text` | Reels in iron-frame |
| Contact | `.iron-bg` | `.iron-text` | Iron button CTA |
| Header | `bg-black/90` + backdrop-blur | — | Logo in iron-text |
| Footer | Plain dark + grain | — | Featured-in line preserved |

## 12. Reference

The visual anchor is the **F3 Free Form Fitness** poster (user-supplied):
weathered metal slates, copper/orange embossed type, hex-icon containers,
diagonal spark streaks, double-bevel borders. That's the destination.
