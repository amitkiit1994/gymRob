'use client'

import ChapterShell from './ChapterShell'

/**
 * CH 02 — THE FORGE
 * Transformation. 120 → 78 kg. The establishing plate carries the title, the
 * "120 → 78" numerals, and the before/after physique framed on the wall. The
 * prose and Robin's pull-quote sit beneath it.
 */
export default function TheForge() {
  return (
    <ChapterShell
      id="forge"
      numeral="02"
      era="The Transformation · 7-8 Months"
      title="The Forge — transformation, 120 to 78 kilograms"
      plate="/images/scene/forge-final.webp"
      tone="brick-left"
      tilt={1.2}
    >
      <div className="max-w-3xl mx-auto space-y-10">
        <p className="font-painted text-lg sm:text-xl md:text-2xl text-rocky-paper leading-[1.6] uppercase tracking-[0.06em] text-shadow-readable">
          One simple decision: <span className="text-mighty-red font-bold">show up</span>.
          No magic plan. No shortcuts. Just a gym, a barbell, and the slow
          arithmetic of consistency — over seven to eight months.
        </p>

        {/* Pull-quote — painted directly on the brick wall. Slight tilt so it
            reads as a human hand, not a typeset block. */}
        <figure className="relative rotate-[0.6deg]">
          <p className="font-painted stencil-paint-red text-2xl sm:text-3xl md:text-4xl leading-[1.15] uppercase tracking-tight">
            &ldquo;The transformation didn&apos;t happen overnight.&nbsp;It came from
            showing up — even on the days motivation disappeared.&rdquo;
          </p>
          <figcaption
            className="font-mono text-[10px] sm:text-xs text-rocky-paper font-bold tracking-[0.3em] uppercase mt-4"
            style={{ textShadow: 'var(--text-shadow-on-dark)' }}
          >
            — Robin Carruthers · painted on the wall
          </figcaption>
        </figure>
      </div>
    </ChapterShell>
  )
}
