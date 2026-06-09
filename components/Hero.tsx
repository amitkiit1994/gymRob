'use client'

import Link from 'next/link'

/**
 * HERO — a single cinematic film still.
 *
 * The entire wall is ONE photographed plate (public/images/scene/hero-final.webp):
 * real brick under a warm tungsten work-light, the hand-painted "IRON REINVENTION"
 * canvas banner bolted near the top, Robin's real portrait matted inside a dark-wood
 * frame lower-left (composited in), and a pinned press clipping lower-right.
 *
 * Nothing here is a CSS prop. We only lay transparent/blended INTERACTIVE elements
 * over the photograph: two real enamel CTA signs and clickable hotspots.
 */
export default function Hero() {
  return (
    <section className="hero-stage relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-mighty-shadow">
      <h1 className="sr-only">
        Robin Carruthers — Iron Reinvention. From the boardrooms of adland to the
        iron of the gym floor, a reinvention forged at 40. Mumbai · Old-school iron.
      </h1>

      {/* THE PLATE — the whole gym wall, photographed */}
      <img
        src="/images/scene/hero-final.webp"
        alt="Robin Carruthers' gym wall — the IRON REINVENTION banner over a framed portrait of Robin, pinned press clipping, lit by a single warm work-light"
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
        // eslint-disable-next-line @next/next/no-img-element
        fetchPriority="high"
        decoding="async"
      />

      {/* Cinematic legibility grade — deepen the bottom + corners so overlaid
          props sit in the same darkness as the plate. */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-mighty-shadow/85" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_42%,_transparent_45%,_rgba(14,10,7,0.55)_100%)]" aria-hidden="true" />

      {/* INTERACTIVE LAYER */}
      <div className="absolute inset-0 z-20">
        {/* Press clipping hotspot — sits over the pinned clipping (lower-right) */}
        <Link
          href="/press/robin-carruthers-reinvents-in-adland"
          aria-label="As featured in MediaInfoline — read the press clipping"
          className="absolute left-[68%] top-[52%] w-[13%] h-[26%] rounded-sm ring-0 hover:ring-2 hover:ring-rocky-paper/30 transition-shadow"
        />

        {/* Two real enamel CTA signs — baked-material props, edges feathered into
            the plate's brick so there is no pasted seam. */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-4 sm:gap-9">
          <Link href="#story" aria-label="Read the Story" className="cta-sign group">
            <img src="/images/cine/cta-read.webp" alt="Read the Story" className="block w-[180px] sm:w-[228px] transition-transform duration-300 group-hover:-translate-y-1" />
          </Link>
          <Link href="#contact" aria-label="Train with Robin" className="cta-sign group">
            <img src="/images/cine/cta-train.webp" alt="Train with Robin" className="block w-[180px] sm:w-[228px] transition-transform duration-300 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Scroll prompt */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="flex flex-col items-center gap-1.5 text-rocky-paper/80" style={{ textShadow: 'var(--text-shadow-on-dark)' }}>
            <span className="font-mono text-[0.55rem] tracking-[0.35em] uppercase">Scroll Down</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </div>
      </div>
    </section>
  )
}
