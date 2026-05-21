'use client'

import Image from 'next/image'
import { useGsapContext, gsap } from '@/hooks/useGsap'

/**
 * INTERLUDE · FULL CIRCLE
 *
 * A standalone moment bridging the PAST chapters (Weight → Forge → Warrior)
 * and the PRESENT (Services, eGym, …): the photograph of Robin standing
 * beside Sylvester Stallone — the man who, through Rocky, planted the seed
 * of every brick in this gym.
 *
 * Not a numbered chapter; this is a pinned-to-the-wall keepsake.
 */
export default function FullCircle() {
  // Polaroid swings in (hinged at top); the note slides up beside it.
  const stageRef = useGsapContext<HTMLDivElement>((q, scope) => {
    const polaroid = q('.fc-polaroid')[0]
    const note = q('.fc-note')[0]
    if (!polaroid || !note) return

    gsap.set(scope, { perspective: 1400 })
    gsap.set(polaroid, { transformOrigin: '50% 0%', rotateX: -70, rotateZ: -6, y: -24 })
    gsap.set(note, { y: 40, rotateZ: 4, opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 78%', once: true },
    })

    tl.to(polaroid, {
      rotateX: 0,
      rotateZ: -2.5,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
      .to(
        note,
        { y: 0, rotateZ: 1.2, opacity: 1, duration: 0.65, ease: 'power3.out' },
        0.25
      )
  }, [])

  return (
    <section
      id="full-circle"
      className="relative bg-brick bg-brick-spotlight-right brick-cracks overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      {/* Welded seam to bridge from preceding chapter */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-mighty-shadow via-mighty-red/70 to-mighty-shadow shadow-[0_2px_4px_rgba(0,0,0,0.85)] z-30"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Eyebrow — MOMENT (deliberately NOT a CH_XX; this is an interlude) */}
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-14 max-w-4xl mx-auto">
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-mighty-red bg-mighty-shadow border border-rocky-paper/25 px-2.5 py-1 rounded-sm">
            · MOMENT ·
          </span>
          <div className="h-px flex-1 max-w-[14rem] bg-gradient-to-r from-rocky-paper/40 to-transparent" />
          <span
            className="font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] font-bold text-rocky-paper bg-mighty-shadow/80 border-l-2 border-mighty-red px-2 py-1 rounded-sm"
            style={{ textShadow: '0 1px 0 rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)' }}
          >
            Full Circle · Off The Screen
          </span>
        </div>

        <div
          ref={stageRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto"
        >
          {/* ── POLAROID ─────────────────────────────────────── */}
          <figure
            className="fc-polaroid relative lg:col-span-5 mx-auto"
            style={{ willChange: 'transform' }}
          >
            <div className="bg-paper p-3 sm:p-4 border border-mighty-shadow/40 shadow-pinned">
              <div className="relative overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow">
                <Image
                  src="/images/stallone-meeting.jpg"
                  alt="Robin Carruthers standing beside Sylvester Stallone, both raising clenched fists"
                  width={560}
                  height={560}
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="block w-[260px] sm:w-[340px] md:w-[400px] lg:w-[420px] h-auto grayscale-[0.35] contrast-110"
                />
              </div>
              <figcaption className="mt-3 text-center px-2">
                <p className="font-painted text-mighty-shadow text-base sm:text-lg leading-none">
                  Robin &amp; Sylvester Stallone
                </p>
                <p className="font-mono text-[10px] text-mighty-shadow/60 italic mt-1 uppercase tracking-wide">
                  · Fists Up · The Real Rocky ·
                </p>
              </figcaption>
            </div>

            {/* Corner pin bolts */}
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />

            {/* "Rocky" stenciled tag — brass-tacked metal sign.
                Outer wrapper owns the absolute position so that .wearouts
                (which sets position: relative) on the inner cannot win
                specificity and drop the tag back into flow. */}
            <div className="absolute -top-5 -right-5 sm:-right-7 rotate-6 z-20">
              <div className="relative painted-metal-red wearouts border-2 border-mighty-shadow px-3 py-1 rounded-sm shadow-[0_5px_0_-1px_rgba(0,0,0,0.85),0_8px_14px_rgba(0,0,0,0.7)]">
                <span className="brass-tack absolute -top-1 -left-1" aria-hidden="true" />
                <span className="brass-tack absolute -top-1 -right-1" aria-hidden="true" />
                <span className="font-mono text-[0.6rem] font-extrabold tracking-[0.3em] uppercase text-rocky-paper">
                  · The Real Rocky ·
                </span>
              </div>
            </div>
          </figure>

          {/* ── NOTE — aged paper card with the quote ───────── */}
          <figure
            className="fc-note relative lg:col-span-7 bg-paper text-mighty-shadow p-6 sm:p-8 md:p-10 border-2 border-mighty-shadow shadow-[0_14px_28px_rgba(0,0,0,0.75)] -rotate-[0.6deg]"
            style={{ willChange: 'transform' }}
          >
            {/* Top washi tape strip — anchors the note to the wall */}
            <span className="tape-corner" aria-hidden="true" />

            {/* Pin bolts on the corners */}
            <span className="pin-bolt absolute -top-2 left-8" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 right-8" aria-hidden="true" />

            {/* Big painted opening quote mark */}
            <span className="absolute -top-3 -left-1 sm:-left-2 font-painted text-6xl sm:text-7xl text-mighty-red/40 leading-none select-none">
              “
            </span>

            <blockquote className="space-y-4 sm:space-y-5">
              <p className="font-painted text-lg sm:text-2xl md:text-3xl leading-[1.25] text-mighty-shadow">
                Some heroes live on screen.
                <br />
                <span className="text-mighty-red">
                  Very few inspire the man you become off it.
                </span>
              </p>

              <p className="font-painted text-base sm:text-lg md:text-xl leading-[1.45] text-mighty-shadow/90">
                Meeting Sylvester Stallone was a full-circle moment — from
                watching <em className="not-italic font-extrabold">Rocky</em> as
                a young dreamer to standing beside the man who taught an entire
                generation what grit looks like.
              </p>
            </blockquote>

            <figcaption className="mt-7 pt-5 border-t-2 border-mighty-shadow/30 flex items-end justify-between gap-3">
              <span className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.3em] uppercase">
                — Robin Carruthers
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-mighty-shadow/60 tracking-[0.25em] uppercase">
                Polaroid 001 / Full Circle
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
