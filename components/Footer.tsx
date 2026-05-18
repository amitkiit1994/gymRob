import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const linkCls =
    'font-mono text-[11px] sm:text-xs text-rocky-paper/70 hover:text-rocky-paper font-bold uppercase tracking-[0.2em] transition-colors'

  return (
    <footer className="relative bg-mighty-shadow text-rocky-paper overflow-hidden">
      {/* Top weld seam */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-mighty-red/80 to-transparent" />

      {/* Brick interior */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Wordmark */}
          <div>
            <p className="font-mono text-[10px] font-bold text-mighty-red tracking-[0.4em] uppercase mb-2">
              Est · GymRob
            </p>
            <h3 className="font-painted text-rocky-paper text-2xl sm:text-3xl uppercase tracking-tight mb-3">
              Robin Carruthers
            </h3>
            <p className="text-rocky-paper/70 text-sm leading-relaxed mb-2">
              For love of the game. Strength, discipline, life.
            </p>
            <p className="font-mono text-[10px] text-rocky-paper/50 uppercase tracking-wider">
              Certified Personal Trainer · Sports Rehab · Strength &amp; Conditioning
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-mighty-red font-bold mb-4 uppercase tracking-[0.3em] text-[11px] sm:text-xs">
              · Chapters ·
            </h4>
            <ul className="space-y-2.5">
              {[
                ['#story', 'The Story'],
                ['#services', 'Offerings'],
                ['#egym', 'The Temple'],
                ['#testimonials', 'Fraternity'],
                ['#press', 'Press'],
                ['#contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className={linkCls}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-mighty-red font-bold mb-4 uppercase tracking-[0.3em] text-[11px] sm:text-xs">
              · Connect ·
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://instagram.com/gymrob123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkCls} flex items-center gap-2`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @gymrob123
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/egymlokhandwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkCls} flex items-center gap-2`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @egymlokhandwala
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@gymrob123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkCls} flex items-center gap-2`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="mailto:carruthersrobin3@gmail.com"
                  className={`${linkCls} flex items-center gap-2 normal-case tracking-[0.05em]`}
                  aria-label="Email Robin Carruthers"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  carruthersrobin3@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Featured In strip */}
        <div className="mt-10 pt-8 border-t border-rocky-paper/15">
          <Link
            href="/press/robin-carruthers-reinvents-in-adland"
            className="inline-flex flex-wrap items-center gap-3 bg-paper text-mighty-shadow px-4 py-2 border-2 border-mighty-shadow shadow-[0_4px_10px_rgba(0,0,0,0.7)] -rotate-1 hover:rotate-0 transition-transform"
          >
            <span className="font-mono text-[10px] sm:text-xs font-extrabold text-mighty-red tracking-[0.3em] uppercase">
              · Featured In ·
            </span>
            <span className="font-painted text-base sm:text-lg text-mighty-shadow">
              MediaInfoline
            </span>
            <span className="font-mono text-[10px] text-mighty-shadow/60 tracking-[0.2em] uppercase">
              Adland Reinvention
            </span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-rocky-paper/15 text-center">
          <p className="font-mono text-[11px] sm:text-xs text-rocky-paper/50 uppercase tracking-[0.2em]">
            © {currentYear} Robin Carruthers · eGym Lokhandwala
          </p>
          <p className="font-mono text-[10px] text-mighty-red/70 mt-2 tracking-[0.25em] uppercase">
            · For Love of the Game ·
          </p>
        </div>
      </div>
    </footer>
  )
}
