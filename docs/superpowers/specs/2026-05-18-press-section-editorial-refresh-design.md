# Press Section & Editorial Visual Refresh — Design Spec

**Date:** 2026-05-18
**Status:** Approved (user said "proceed autonomously")
**Author:** Claude (Opus 4.7) for Robin Carruthers / GymRob portfolio

---

## 1. Goal

1. Add the MediaInfoline article "Advertising Veteran Robin Carruthers Reinvents Himself in Adland" to the portfolio with its featured image, positioned as third-party press validation.
2. Apply a coherent editorial visual refresh that elevates the portfolio from generic-fitness to magazine-grade, leaning into Robin's 30-year advertising heritage.

## 2. Why this matters

Robin is an advertising-industry lifer who reinvented himself as a coach. The current site reads as a competent trainer template — it does not telegraph his unique brand equity (adland gravitas + old-school strength culture). Press coverage is the highest-value asset to surface: it's earned media, validates the brand, and the source (MediaInfoline) is directly relevant to his industry network.

## 3. Source content

**URL:** https://www.mediainfoline.com/brand/advertising-veteran-robin-carruthers-reinvents-himself-in-adland
**Publication:** MediaInfoline
**Author:** MediaInfoline (staff)
**Published:** May 18, 2026
**Featured image:** https://www.mediainfoline.com/wp-content/uploads/2026/05/robin-adland.jpg

**Key Robin quotes (will become pull-quotes):**
- "At my heaviest, I was 120 kilos. What hurt more than the weight was the feeling that the best version of me was already behind me."
- "The transformation didn't happen overnight. It came from showing up consistently, even on the days motivation disappeared."
- "Fitness gave me my life back. This isn't about six-packs or trends. It's about rebuilding character, energy, confidence, and discipline."

## 4. Aesthetic direction

**Brand vocabulary:** *Editorial Monument* — magazine-spread layouts, serif/sans contrast, hairline rules, numbered section eyebrows, restrained motion, tactile dark backgrounds.

**Visual moves:**
- Add **Playfair Display** serif via `next/font/google` for press section, pull quotes, and section eyebrows. Body stays Inter.
- Subtle SVG **grain texture** at ~3% opacity layered over dark backgrounds.
- **Numbered section eyebrows**: hairline horizontal rule + small label (e.g. `— 04 / IN THE PRESS`) above each major section heading.
- Slow **Ken Burns** background motion on hero (scale 1.00 → 1.06 over 24s, infinite alternate).
- All motion via existing `framer-motion` — no new animation libs.

## 5. Components & files

### 5.1 New files

| Path | Purpose |
|------|---------|
| `components/PressFeature.tsx` | Magazine-spread press section, scrolls into homepage |
| `components/SectionEyebrow.tsx` | Reusable `<SectionEyebrow number="04" label="IN THE PRESS" />` |
| `app/press/[slug]/page.tsx` | Editorial article page (analogous to `app/blog/[slug]/page.tsx`) |
| `lib/pressData.ts` | Typed `PressFeature[]` array; one seed entry for MediaInfoline |
| `public/images/press/robin-mediainfoline.jpg` | Downloaded local copy of `robin-adland.jpg` |
| `public/images/press/robin-mediainfoline-og.jpg` | 1200×630 OG variant for link previews |

### 5.2 Modified files

| Path | Change |
|------|--------|
| `app/page.tsx` | Insert `<PressFeature />` between `<Testimonials />` and `<Blog />` |
| `app/layout.tsx` | Load Playfair Display via `next/font/google`, expose as `--font-serif` |
| `tailwind.config.ts` | Add `fontFamily.serif: ['var(--font-serif)', 'Georgia', 'serif']` |
| `app/globals.css` | Add `.grain` utility (fixed SVG noise overlay) |
| `app/sitemap.ts` | Include `/press/<slug>` routes |
| `components/Hero.tsx` | Add Ken Burns class to bg layer; add small "AS FEATURED IN" trust bar under CTAs |
| `components/Footer.tsx` | Add "Featured In" line linking to MediaInfoline article |
| `components/About.tsx`, `Services.tsx`, `EGym.tsx`, `Testimonials.tsx`, `Blog.tsx`, `Instagram.tsx`, `Contact.tsx` | Add `<SectionEyebrow />` at top of each section header (additive; layouts unchanged) |

### 5.3 Untouched

- Existing `/blog/*` routes and `lib/blogData.ts` — fully preserved
- All other components, color tokens, primary fonts

## 6. Data model

```ts
// lib/pressData.ts
export interface PressFeature {
  slug: string                    // 'robin-carruthers-reinvents-in-adland'
  title: string                   // Article headline as published
  source: string                  // 'MediaInfoline'
  sourceUrl: string               // Link to original article
  sourceTagline?: string          // 'India's Media & Advertising News'
  publishedDate: string           // ISO: '2026-05-18'
  displayDate: string             // 'May 18, 2026'
  image: string                   // '/images/press/robin-mediainfoline.jpg'
  imageAlt: string
  ogImage: string                 // '/images/press/robin-mediainfoline-og.jpg'
  pullQuote: string               // Hero pull-quote for the section
  excerpt: string                 // ~160-char summary for cards & SEO
  paragraphs: string[]            // Article body, paragraph-by-paragraph
  robinQuotes: string[]           // Subset of paragraphs to render as pull-quotes inline
}

export const pressFeatures: PressFeature[]
export function getPressFeatureBySlug(slug: string): PressFeature | undefined
export function getAllPressSlugs(): string[]
```

## 7. PressFeature component layout (homepage section)

- Full-width band, `bg-primary-950` with grain overlay
- Container: `max-w-7xl mx-auto`, padding `py-24`
- Header: `<SectionEyebrow number="04" label="IN THE PRESS" />` + h2 "Earned Media"
- Grid: `lg:grid-cols-12 gap-12 items-center`
  - **Image (cols 1–7):** aspect 4:3, sepia/grain overlay, dark gradient bottom, subtle scroll parallax (translateY 0 → -20px)
  - **Copy (cols 8–12):**
    - Top eyebrow: `AS FEATURED IN` + serif "MediaInfoline" + date
    - h3 serif headline (Playfair, text-3xl → text-4xl)
    - Large orange opening quote mark + italic serif pull-quote
    - Primary CTA: "Read the full story →" (internal link to `/press/[slug]`)
    - Secondary link: "Read on MediaInfoline ↗" (external)

## 8. Press article page (`/press/[slug]`)

- Full-width hero image with dark gradient overlay; headline + source mark + date overlaid bottom-left
- Back link to `/#press`
- Source attribution bar: `MediaInfoline · By Staff · May 18, 2026 · [external link icon]`
- Body container `max-w-prose` (~65ch), Inter body, generous line height (1.8)
- **First paragraph** gets a serif drop cap (4 lines tall, accent-orange)
- Selected Robin quotes rendered as **pull-quotes inline**: serif italic, oversized opening quote, orange left rule
- Footer block: "Originally published on [MediaInfoline](url) on May 18, 2026"
- Share buttons via existing `ShareButtonsWrapper`
- **NewsArticle JSON-LD** in `<head>` (via Next metadata or inline `<script type="application/ld+json">`)
- Open Graph + Twitter card use `ogImage`

## 9. SEO

- `app/sitemap.ts` adds entries for each `/press/<slug>` route
- `generateMetadata` on press page populates title, description (from `excerpt`), OG, Twitter, canonical
- NewsArticle JSON-LD includes: headline, image, datePublished, author (Person), publisher (Organization: MediaInfoline), mainEntityOfPage, isBasedOn (link to original)

## 10. Image handling

- Download `robin-adland.jpg` from MediaInfoline → save to `/public/images/press/robin-mediainfoline.jpg`
- Generate OG variant (1200×630, JPG, <500KB) → `/public/images/press/robin-mediainfoline-og.jpg`
  - If image manipulation tools unavailable in environment, ship the source image as both and document as a follow-up to crop properly
- All `<Image>` usages set explicit `width`/`height` and `sizes` for responsive behavior

## 11. Global polish details

### 11.1 Ken Burns on hero
```css
.kenburns {
  animation: kenburns 24s ease-in-out infinite alternate;
}
@keyframes kenburns {
  from { transform: scale(1); }
  to   { transform: scale(1.06); }
}
```

### 11.2 Grain texture
```css
.grain::before {
  content: '';
  position: fixed; inset: 0;
  pointer-events: none;
  z-index: 1;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: 0.035;
  mix-blend-mode: overlay;
}
```
Applied at `<body>` level via globals.

### 11.3 SectionEyebrow
```tsx
<div className="flex items-center gap-3 mb-4">
  <span className="h-px w-8 bg-accent-600" />
  <span className="font-serif italic text-xs tracking-[0.2em] text-accent-500">
    — {number} / {label}
  </span>
</div>
```

### 11.4 Hero trust bar
Small flex row under the CTAs:
```
[ AS FEATURED IN ]  MediaInfoline  ·  30 yrs in Adland  ·  Certified Coach
```
Text only, no logos required. Subtle, gray-400, text-xs/sm.

### 11.5 Footer "Featured In"
Single line above copyright:
```
Featured in: MediaInfoline → "Advertising Veteran Robin Carruthers Reinvents Himself in Adland"
```

## 12. Routing rules

- `/press` (index) is NOT created in this iteration. Only individual `/press/<slug>` pages. The homepage section is the de-facto press index. A future iteration can add `/press` if multiple features warrant it.
- `/press/<slug>` uses `generateStaticParams` like the blog route, statically rendered at build.

## 13. Testing & verification

- After implementation, run `npm run dev` and verify in browser:
  - Homepage scrolls cleanly, press section renders between Testimonials and Blog
  - Hero Ken Burns is subtle (not nauseating)
  - All section eyebrows render
  - Grain texture is present but not dominant
  - Click "Read the full story" → press article page loads
  - Article page: drop cap renders, pull-quotes render, share buttons work, back link returns to `/#press`
  - External "Read on MediaInfoline" link opens in new tab
- Run `npm run build` to verify static generation succeeds for `/press/<slug>`
- Lighthouse spot-check: no regression on performance/accessibility

## 14. Out of scope (explicit)

- A standalone `/press` index page
- Press carousel / multi-feature layouts
- Reworking color tokens or accent palette
- Replacing existing fonts (Inter stays)
- New animation library
- Translating the article or paraphrasing — content is the article verbatim, with clear source attribution

## 15. Rollout

Single PR, single commit. All changes additive or layered; existing flows preserved. If any individual upgrade misbehaves (e.g., Ken Burns feels too much), each piece is independently revertable.

## 16. Implementation order

1. Download press image to local path
2. Add Playfair Display font + tailwind serif token
3. Add grain utility to globals.css
4. Create `SectionEyebrow` component
5. Create `lib/pressData.ts` with MediaInfoline entry
6. Create `PressFeature` component
7. Wire into `app/page.tsx`
8. Create `app/press/[slug]/page.tsx`
9. Update `app/sitemap.ts`
10. Hero Ken Burns + trust bar
11. Footer "Featured In" line
12. Add `SectionEyebrow` instances to existing sections
13. Build + smoke-test in browser
14. Commit
