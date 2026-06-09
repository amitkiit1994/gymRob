'use client'

import Link from 'next/link'

/**
 * HeroMobile — a vertical cinematic film still for phones.
 *
 * The whole gym wall is ONE photographed plate (mobilehero-final.webp):
 * brick under a warm work-light, the hand-painted "IRON REINVENTION" banner,
 * Robin's real portrait matted in a large dark-wood frame, a pinned clipping.
 * Only the interactive CTA signs are laid over the photograph.
 */
export default function HeroMobile() {
  return (
    <section className="relative min-h-[100svh] flex items-end justify-center overflow-hidden bg-mighty-shadow">
      <h1 className="sr-only">
        Robin Carruthers — Iron Reinvention. From the boardrooms of adland to the
        iron of the gym floor, a reinvention forged at 40. Mumbai · old-school iron.
      </h1>

      <img
        src="/images/scene/mobilehero-final.webp"
        alt="Robin Carruthers' gym wall — the IRON REINVENTION banner over a framed portrait of Robin, lit by a single warm work-light"
        className="absolute inset-0 w-full h-full object-cover object-top select-none"
        fetchPriority="high"
        decoding="async"
      />

      {/* legibility grade for the CTA band */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-mighty-shadow/90" aria-hidden="true" />

      {/* interactive CTA signs */}
      <div className="relative z-20 w-full px-6 pb-10 flex flex-col items-center gap-4">
        <Link href="#story" aria-label="Read the Story" className="cta-sign group w-[210px] max-w-[72%]">
          <img src="/images/cine/cta-read.webp" alt="Read the Story" className="block w-full active:translate-y-[1px]" />
        </Link>
        <Link href="#contact" aria-label="Train with Robin" className="cta-sign group w-[210px] max-w-[72%]">
          <img src="/images/cine/cta-train.webp" alt="Train with Robin" className="block w-full active:translate-y-[1px]" />
        </Link>
        <span className="mt-1 font-mono text-[0.55rem] tracking-[0.35em] uppercase text-rocky-paper/70" style={{ textShadow: 'var(--text-shadow-on-dark)' }}>
          Scroll Down
        </span>
      </div>
    </section>
  )
}
