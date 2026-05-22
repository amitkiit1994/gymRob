'use client'

import ChapterShell from './ChapterShell'
import { useGsapContext, gsap } from '@/hooks/useGsap'

/**
 * Four certifications hung on a single rotated rack across the wall.
 *
 * Desktop: absolute-positioned on a tilted rail so plates overlap visibly,
 * each with its own size, tilt and vertical drop. Plate 01 sits highest and
 * largest (it came first); plates 03 / 04 droop and overlap into each other
 * at the right end of the rack.
 *
 * Mobile (default): simple stack with alternating tilts — keeps it tap-safe
 * and readable, no overlap, no absolute positioning.
 *
 * Reading order = source order = chronological credential order, so the
 * accessibility tree stays linear regardless of visual placement.
 */
const certifications = [
  {
    label: 'Certified Personal Trainer',
    sub: 'Renewed 2022',
    // Desktop: top-left anchor, hung highest, biggest plate — the one that started it all.
    deskPos:
      'sm:absolute sm:left-[2%] sm:top-[6%] sm:w-[42%] sm:-rotate-[2.5deg] sm:z-30 sm:scale-[1.06]',
    // Mobile: plain stack tilt
    mobileTilt: '-rotate-[1deg]',
  },
  {
    label: 'Sports Medicine Rehabilitation',
    sub: 'Injury-aware training',
    // Desktop: drops below 01 and tucks under its bottom-right corner.
    deskPos:
      'sm:absolute sm:left-[28%] sm:top-[44%] sm:w-[38%] sm:rotate-[1.5deg] sm:z-20',
    mobileTilt: 'rotate-[0.8deg]',
  },
  {
    label: 'Strength & Conditioning',
    sub: 'American School of Conditioning & Muscle',
    // Desktop: upper-right area, slightly nudged off the rail, overlaps 02.
    deskPos:
      'sm:absolute sm:right-[6%] sm:top-[10%] sm:w-[36%] sm:-rotate-[3deg] sm:z-25',
    mobileTilt: '-rotate-[1.5deg]',
  },
  {
    label: 'Speed & Agility',
    sub: 'Athletic performance',
    // Desktop: dropped lowest, biggest tilt, kissed by 02's bottom edge.
    deskPos:
      'sm:absolute sm:right-[2%] sm:bottom-[2%] sm:w-[34%] sm:rotate-[3.5deg] sm:z-10',
    mobileTilt: 'rotate-[1.8deg]',
  },
]

const warriorVerse = [
  'My choices are seen as extreme.',
  'My ability at times defying nature.',
  'Yet my life is characterised',
  'by near constant disappointment',
  'in my efforts to build a foundation for later success.',
  '',
  'For me Iron is a religion',
  'and I am defined by its teachings.',
  '',
  'It teaches humility and patience',
  'and focus and power and brotherhood.',
  '',
  'I am prepared to never quit,',
  'to never say "I can\'t do it."',
  '',
  'I am prepared to win —',
  'because that is what will define',
  'me being better tomorrow than I was today.',
]

/**
 * CH 03 — THE WARRIOR
 * Robin's manifesto. Certifications as stamped leather badges.
 * Verse displayed on a gym placard, leather plates on a back rack.
 */
export default function TheWarrior() {
  // Plates drop in like brass medallions hung on the wall — gravity + pendulum
  // settle. GSAP only animates Y (vertical drop) and leaves rotation/position
  // entirely to the placement utility classes on the outer wrapper, so the
  // staggered desktop rack ends up exactly where the layout intends.
  const platesRef = useGsapContext<HTMLDivElement>((q, scope) => {
    const plates = q('.warrior-plate')
    if (!plates.length) return

    plates.forEach((el) => {
      gsap.set(el, { y: -700 })
    })

    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 75%', once: true },
    })

    plates.forEach((el, idx) => {
      tl.to(el, {
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      }, idx * 0.12)
    })
  }, [])

  return (
    <ChapterShell
      id="warrior"
      numeral="03"
      era="The Discipline · The Manifesto"
      title="I Am A Warrior"
      tone="concrete"
      tilt={-0.8}
    >
      <div className="max-w-5xl mx-auto space-y-14 sm:space-y-20">
        {/* The verse — gym placard / wood-frame paper */}
        <figure
          className="relative bg-paper text-mighty-shadow p-7 sm:p-12 mx-auto max-w-3xl border-4 border-mighty-shadow shadow-hung -rotate-[0.5deg]"
        >
          <span className="pin-bolt absolute -top-2 left-6 sm:left-10" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 right-6 sm:right-10" aria-hidden="true" />
          <span className="pin-bolt absolute -bottom-2 left-6 sm:left-10" aria-hidden="true" />
          <span className="pin-bolt absolute -bottom-2 right-6 sm:right-10" aria-hidden="true" />

          {/* Heavy serif "scripture" mark at top */}
          <div className="absolute -top-3 -left-2 font-painted text-7xl sm:text-9xl leading-none text-mighty-red/30 select-none">
            “
          </div>

          <div className="relative space-y-1 sm:space-y-1.5">
            {warriorVerse.map((line, i) => {
              if (line === '') return <div key={i} className="h-4 sm:h-5" />
              const isClosing = line.startsWith('I am prepared to win')
              return (
                <p
                  key={i}
                  className={`font-painted leading-[1.4] ${
                    isClosing
                      ? 'text-mighty-red text-xl sm:text-2xl md:text-3xl mt-3'
                      : 'text-mighty-shadow text-base sm:text-lg md:text-xl'
                  }`}
                >
                  {line}
                </p>
              )
            })}
          </div>

          <figcaption className="mt-8 pt-5 border-t-2 border-mighty-shadow/30 flex justify-between items-end">
            <span className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.3em] uppercase">
              — Robin Carruthers
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-mighty-shadow/60 tracking-[0.25em] uppercase">
              MS_001 / 2026
            </span>
          </figcaption>
        </figure>

        {/* Certifications — stamped leather plates on a single rotated rack.
            Desktop: absolute-positioned, overlapping, varied tilt & size.
            Mobile: clean stack with alternating tilts (no overlap). */}
        <div>
          <div
            ref={platesRef}
            className="
              relative flex flex-col gap-5 pt-3 pb-6
              sm:block sm:gap-0 sm:pt-6 sm:pb-10
              sm:h-[460px] md:h-[520px] lg:h-[560px]
              sm:-rotate-[1.5deg]
            "
          >
            {certifications.map((cert, i) => (
              <div
                key={cert.label}
                className={`${cert.mobileTilt} ${cert.deskPos} self-center sm:self-auto w-full max-w-sm sm:max-w-none`}
              >
              <div
                className="warrior-plate relative bg-wood wearouts border-4 border-mighty-shadow rounded-[2px] p-3 sm:p-4 shadow-[0_14px_22px_-6px_rgba(0,0,0,0.85),0_4px_0_-2px_rgba(0,0,0,0.85)] flex"
                style={{ willChange: 'transform' }}
              >
                {/* Four brass tacks pinning the brass plate into the wooden plaque */}
                <span className="brass-tack absolute top-1.5 left-1.5" aria-hidden="true" />
                <span className="brass-tack absolute top-1.5 right-1.5" aria-hidden="true" />
                <span className="brass-tack absolute bottom-1.5 left-1.5" aria-hidden="true" />
                <span className="brass-tack absolute bottom-1.5 right-1.5" aria-hidden="true" />

                {/* The engraved brass plate inset — fills the plaque */}
                <div className="relative bg-brass px-4 py-4 sm:px-5 sm:py-5 border border-brass-edge-dark/60 flex-1 flex flex-col">
                  {/* Small "PLATE NN" engraved at top */}
                  <p className="font-mono text-[9px] sm:text-[10px] text-engrave-brass font-bold tracking-[0.35em] uppercase mb-2">
                    · Plate {String(i + 1).padStart(2, '0')} ·
                  </p>
                  {/* Hairline brass-engraved separator */}
                  <div className="h-px bg-gradient-to-r from-transparent via-brass-edge-dark/70 to-transparent mb-3" />
                  {/* The credential — deep engraved, hyphenate to avoid orphan letters */}
                  <p
                    className="font-painted text-engrave-brass text-[13px] sm:text-sm uppercase leading-[1.1] mb-2 break-words"
                    style={{ hyphens: 'auto', wordBreak: 'normal', overflowWrap: 'break-word' }}
                  >
                    {cert.label}
                  </p>
                  <p className="font-mono text-[10px] sm:text-[11px] text-engrave-brass leading-snug tracking-wide mt-auto pt-2 opacity-90">
                    {cert.sub}
                  </p>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChapterShell>
  )
}
