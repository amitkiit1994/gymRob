import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Iron Forge spec tokens (Gemini design.md §2) */
        furnace: {
          base: '#050302',   // blast furnace pit
          ore: '#0a0604',    // raw iron ore (default section bg)
          plate: '#16110e',  // oxidized plate (cards)
        },
        steel: {
          scale: '#374151',
          cast: '#6b7280',
          brushed: '#9ca3af',
          polished: '#f9fafb',
        },
        rust: {
          corrosion: '#5b1a08',
          spark: '#b45309',
          melt: '#c2410c',
        },

        /* Mighty Mick's / Rocky palette (verified — design-rocky.md) */
        rocky: {
          paper: '#fefae0',       // off-white aged canvas / poster ground
          neutral: '#b1b3b3',     // brushed steel / locker grey
          leather: '#b49676',     // warm tan leather / wood bench
          'ring-blue': '#4687a6', // ring-rope blue (single cool accent)
          dust: '#ccd5ae',        // chalk / dust olive
        },
        mighty: {
          red: '#a4271f',         // Mighty Mick's canvas banner red
          shadow: '#0e0a07',      // crushed-black tobacco shadow
        },

        /* Role-named tokens lifted out of component literals.
         * Mirrored in app/globals.css :root as CSS custom properties
         * for inline-style consumers (`var(--rope-brown)` etc.). Hex
         * literals are retained here so Tailwind opacity modifiers
         * (e.g. `border-brass-edge-dark/60`) keep working — Tailwind v3
         * cannot derive an alpha channel from a `var(...)` reference. */
        'rope-brown': '#6b3a1f',
        'ink-stencil': '#5b1208',
        'locker-dark': '#1a1411',
        'brass-edge-dark': '#3a2208',
        'brass-edge': '#d4a14a',
        'brass-mid': '#b8862b',
        'brass-shadow': '#8a5e1c',
        'chapter-cold-dark': '#04060a',
        'steel-gunmetal': '#1f2937',
        'steel-mid': '#4b5563',
        'steel-light': '#d1d5db',
        'steel-highlight': '#f3f4f6',
        'iron-beam-top': '#1f1611',
        'iron-beam-bottom': '#050201',
        'wood-shadow': '#4a2814',
        'wood-deep': '#2a1810',
        'mighty-red-mid': '#9a241c',
        'mighty-red-shadow': '#8a1f18',
        'red-cinder': '#6f1812',

        /* Legacy palette — retained for back-compat with existing components.
         * Gradually migrate references to furnace/steel/rust tokens above. */
        primary: {
          50: '#f0f0f0',
          100: '#d4d4d4',
          200: '#b8b8b8',
          300: '#9c9c9c',
          400: '#808080',
          500: '#1a1a1a',
          600: '#0f0f0f',
          700: '#0a0a0a',
          800: '#050505',
          900: '#000000',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        // 2+1 cull — see app/layout.tsx for the rationale.
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        painted: ['var(--font-painted)', 'Alfa Slab One', 'Rockwell', 'serif'],
      },
      fontSize: {
        /* Fluid scale per design.md §3 */
        'display-giant': ['clamp(6rem, 12vw, 18rem)', { lineHeight: '0.85', letterSpacing: '-0.02em' }],
        'h1-iron': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.01em' }],
        'h2-iron': ['clamp(2rem, 4vw, 4rem)', { lineHeight: '1.0' }],
        'h3-core': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
        'meta-mono': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        md: '4px',
      },
      boxShadow: {
        /* Iron-button hard 3D press */
        'iron-press': '0 4px 0 0 #050302, inset 0 1px 0 0 rgba(249,250,251,0.25)',
        'iron-press-sm': '0 2px 0 0 #050302',
        /* Iron-frame stacked bevel */
        'iron-frame': 'inset 0 0 0 1px rgba(254,215,170,0.18), inset 0 4px 8px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,0,0,0.9), 0 0 0 3px rgba(124,45,18,0.4), 0 0 32px rgba(234,88,12,0.2), 0 16px 48px rgba(0,0,0,0.95)',
        /* Welded iron seam drop — used wherever a chapter band bridges
         * adjoining sections (mirrors --shadow-weld-seam in globals.css). */
        'weld-seam': '0 2px 4px rgba(0,0,0,0.85)',
        /* Chapter-spine rail cast shadow — lifts the rail off the brick
         * (mirrors --shadow-rail in globals.css). */
        'rail': '0 4px 16px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
export default config
