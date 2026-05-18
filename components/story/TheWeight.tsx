'use client'

import ChapterShell from './ChapterShell'

/**
 * CH 01 — THE WEIGHT
 * The crisis. 120 kg. Painted-concrete tone, oppressive numerics.
 */
export default function TheWeight() {
  return (
    <ChapterShell
      id="story"
      numeral="01"
      era="The Crisis"
      title="The Weight"
      tone="concrete"
      tilt={-1.5}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* LEFT — The "120 KG" painted-stencil anchor */}
        <div className="lg:col-span-6 relative">
          {/* Painted-stencil number */}
          <p className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.35em] uppercase mb-3">
            At His Heaviest
          </p>
          <div className="relative inline-block">
            {/* Rust streak behind the number */}
            <div className="absolute inset-0 bg-gradient-to-br from-mighty-red/25 to-transparent blur-3xl scale-125" aria-hidden="true" />
            <h3 className="relative font-painted text-painted text-[7rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] leading-[0.85] tracking-tighter">
              120
            </h3>
          </div>
          <p className="font-mono text-sm sm:text-base text-rocky-paper/80 font-bold uppercase tracking-[0.25em] -mt-2 sm:-mt-4 border-l-2 border-mighty-red pl-3">
            Kilos
          </p>
        </div>

        {/* RIGHT — opening prose + pull-quote on paper */}
        <div className="lg:col-span-6 space-y-8 sm:space-y-10">
          <p className="font-rocky text-lg sm:text-xl md:text-2xl text-rocky-paper/90 leading-[1.55] uppercase tracking-wide">
            Three decades in advertising. Boardrooms, late nights, hustle culture.
            The kind of success that quietly{' '}
            <span className="text-mighty-red font-bold">breaks you</span>.
          </p>

          {/* Vintage paper pull-quote card */}
          <figure className="relative bg-paper text-mighty-shadow p-6 sm:p-8 -rotate-1 border-2 border-mighty-shadow shadow-[0_10px_24px_rgba(0,0,0,0.8)]">
            <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />
            <p className="font-painted text-lg sm:text-2xl md:text-3xl leading-[1.3] text-mighty-shadow">
              &ldquo;What hurt more than the weight was the feeling
              that the best version of me was already behind me.&rdquo;
            </p>
            <figcaption className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.3em] uppercase mt-4">
              — Robin Carruthers
            </figcaption>
          </figure>

          <p className="text-base sm:text-lg text-rocky-paper/75 leading-relaxed">
            Late nights, alcohol, cigarettes, food for sport. The slow-motion
            wreckage that an industry built on stress and creativity quietly
            accepts as normal.
          </p>
        </div>
      </div>
    </ChapterShell>
  )
}
