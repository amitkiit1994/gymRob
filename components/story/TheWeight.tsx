'use client'

import ChapterShell from './ChapterShell'

/**
 * CH 01 — THE WEIGHT
 * The crisis. 120 kg. The chapter opens on the photographed wall: "THE WEIGHT"
 * stencil, the 120 KG chalkboard, and the heavier "before" portrait framed on
 * the brick. The prose sits beneath the establishing plate.
 */
export default function TheWeight() {
  return (
    <ChapterShell
      id="story"
      numeral="01"
      era="The Crisis"
      title="The Weight — the crisis, 120 kg"
      plate="/images/scene/weight-final.webp"
      tone="concrete"
      tilt={-1.5}
    >
      <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
        <p className="font-painted text-lg sm:text-xl md:text-2xl text-rocky-paper leading-[1.6] uppercase tracking-[0.06em] text-shadow-readable">
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

        <div className="legible-on-dark">
          <p className="text-base sm:text-lg text-rocky-paper leading-relaxed">
            Late nights, alcohol, cigarettes, food for sport. The slow-motion
            wreckage that an industry built on stress and creativity quietly
            accepts as normal.
          </p>
        </div>
      </div>
    </ChapterShell>
  )
}
