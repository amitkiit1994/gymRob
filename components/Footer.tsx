/**
 * Footer — Ft1 (single asymmetric statement panel).
 *
 * Not a directory. Not a sitemap. Not a "Wordmark | Chapters | Connect"
 * three-column AI index with a social-icon row stapled on. The N3 left-rail
 * already provides navigation; this is the closing image of the document.
 *
 * One painted iron panel, pinned to the brick wall, rotated -0.4deg,
 * carrying the single statement the site has been saying the whole time:
 *
 *     FOR LOVE OF THE GAME.
 *     Robin Carruthers · eGym Lokhandwala
 *     Andheri West, Mumbai
 *                                Est · 2026  ·  ⚒
 *
 * Plus exactly one inline stenciled phrase that leads back up to #contact —
 * not a button, not pinned, just a sentence you can click.
 *
 * Server component. No hooks, no event handlers, no social glyphs.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="relative bg-brick-dark text-rocky-paper overflow-hidden py-28 sm:py-36 lg:py-40"
    >
      {/* Top weld seam — single hairline, matches the chapter transitions above */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-mighty-shadow/80 to-transparent shadow-weld-seam"
      />

      {/* ── The single painted-iron statement panel ───────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <figure
          className="relative mx-auto max-w-3xl painted-metal-dark wearouts border-2 border-mighty-shadow rounded-sm wall-cast px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 sm:-rotate-[0.4deg]"
        >
          {/* Four pin-bolts — one in each corner of the panel */}
          <span
            aria-hidden="true"
            className="pin-bolt absolute -top-2 -left-2"
            style={{ width: 16, height: 16 }}
          />
          <span
            aria-hidden="true"
            className="pin-bolt absolute -top-2 -right-2"
            style={{ width: 16, height: 16 }}
          />
          <span
            aria-hidden="true"
            className="pin-bolt absolute -bottom-2 -left-2"
            style={{ width: 16, height: 16 }}
          />
          <span
            aria-hidden="true"
            className="pin-bolt absolute -bottom-2 -right-2"
            style={{ width: 16, height: 16 }}
          />

          {/* The statement itself — one painted line, slab serif, loud */}
          <p className="font-mono text-[10px] sm:text-[11px] font-bold text-mighty-red tracking-[0.4em] uppercase mb-4">
            · The closing word ·
          </p>

          <h2 className="font-painted text-rocky-paper uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            For love of <br className="sm:hidden" />the game.
          </h2>

          {/* Stenciled address — small mono, secondary, hangs underneath */}
          <div className="mt-8 sm:mt-10 font-mono text-[11px] sm:text-xs text-rocky-paper/70 uppercase tracking-[0.25em] leading-relaxed">
            <p className="text-rocky-paper/90">
              Robin Carruthers <span className="text-rocky-paper/45">·</span> eGym Lokhandwala
            </p>
            <p className="mt-1">
              Andheri West <span className="text-rocky-paper/45">·</span> Mumbai 400053
            </p>
          </div>

          {/* The one inline actionable — stenciled phrase, no button chrome */}
          <p className="mt-6 sm:mt-8 font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em]">
            <a
              href="#contact"
              className="text-rocky-paper/85 hover:text-mighty-red border-b border-mighty-red/40 hover:border-mighty-red pb-[2px] transition-colors"
            >
              Step up <span aria-hidden="true">·</span> book the floor <span aria-hidden="true">→</span>
            </a>
          </p>

          {/* Corner stamp — Est · 2026 · hammer.
              Desktop: absolute bottom-right of the panel.
              Mobile:  a centered line beneath the address (rotation also stops). */}
          <div
            aria-hidden="true"
            className="
              mt-10 flex items-center justify-center gap-3
              sm:mt-0 sm:absolute sm:bottom-6 sm:right-8 lg:bottom-8 lg:right-12
              sm:justify-end
              font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase
              text-rocky-paper/55
            "
          >
            <span>Est · {year}</span>
            <span className="text-mighty-red/70">·</span>
            {/* Tiny hammer glyph — single stenciled symbol, no icon library */}
            <svg
              className="h-3 w-3 text-mighty-red/80"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.5 2 9 7.5l2 2 5.5-5.5-2-2zm-1.4 6L4 17.1V20h2.9l9.1-9.1-2.9-2.9z" />
            </svg>
          </div>
        </figure>
      </div>
    </footer>
  )
}
