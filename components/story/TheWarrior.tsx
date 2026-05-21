'use client'

import { motion } from 'framer-motion'
import ChapterShell from './ChapterShell'
import { useGsapContext, gsap } from '@/hooks/useGsap'

const certifications = [
  { label: 'Certified Personal Trainer', sub: 'Renewed 2022' },
  { label: 'Sports Medicine Rehabilitation', sub: 'Injury-aware training' },
  { label: 'Strength & Conditioning', sub: 'American School of Conditioning & Muscle' },
  { label: 'Speed & Agility', sub: 'Athletic performance' },
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
  // Plates drop in like brass medallions hung on the wall — gravity + pendulum settle.
  const platesRef = useGsapContext<HTMLDivElement>((q, scope) => {
    const plates = q('.warrior-plate')
    if (!plates.length) return

    gsap.set(scope, { perspective: 1400 })
    plates.forEach((el, idx) => {
      gsap.set(el, {
        transformOrigin: '50% 0%',
        y: -700,
        rotateZ: idx % 2 === 0 ? -8 : 8,
      })
    })

    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 75%', once: true },
    })

    plates.forEach((el, idx) => {
      const settleRotate = idx % 2 === 0 ? -1.5 : 2
      tl.to(el, {
        y: 0,
        rotateZ: settleRotate,
        duration: 0.65,
        ease: 'power3.out',
      }, idx * 0.12)
    })
  }, [])

  return (
    <ChapterShell
      numeral="03"
      era="The Discipline · The Manifesto"
      title="I Am A Warrior"
      tone="concrete"
      tilt={-0.8}
    >
      <div className="max-w-5xl mx-auto space-y-14 sm:space-y-20">
        {/* The verse — gym placard / wood-frame paper */}
        <motion.figure
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
        </motion.figure>

        {/* Certifications — stamped leather plates on a rack */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span
              className="font-mono text-[10px] sm:text-xs text-rocky-paper font-bold tracking-[0.3em] uppercase bg-mighty-shadow/80 border-l-2 border-mighty-red px-2 py-1 rounded-sm"
              style={{ textShadow: '0 1px 0 rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)' }}
            >
              · Forged Credentials ·
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-mighty-red/50 to-transparent" />
          </div>

          <div ref={platesRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
            {certifications.map((cert, i) => (
              <div
                key={cert.label}
                className="warrior-plate relative bg-wood wearouts border-4 border-mighty-shadow rounded-[2px] p-3 sm:p-4 shadow-[0_14px_22px_-6px_rgba(0,0,0,0.85),0_4px_0_-2px_rgba(0,0,0,0.85)] flex"
                style={{ willChange: 'transform' }}
              >
                {/* Four brass tacks pinning the brass plate into the wooden plaque */}
                <span className="brass-tack absolute top-1.5 left-1.5" aria-hidden="true" />
                <span className="brass-tack absolute top-1.5 right-1.5" aria-hidden="true" />
                <span className="brass-tack absolute bottom-1.5 left-1.5" aria-hidden="true" />
                <span className="brass-tack absolute bottom-1.5 right-1.5" aria-hidden="true" />

                {/* The engraved brass plate inset — fills the plaque */}
                <div className="relative bg-brass px-4 py-4 sm:px-5 sm:py-5 border border-[#3a2208]/60 flex-1 flex flex-col">
                  {/* Small "PLATE NN" engraved at top */}
                  <p className="font-mono text-[9px] sm:text-[10px] text-engrave-brass font-bold tracking-[0.35em] uppercase mb-2">
                    · Plate {String(i + 1).padStart(2, '0')} ·
                  </p>
                  {/* Hairline brass-engraved separator */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#3a2208]/70 to-transparent mb-3" />
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
            ))}
          </div>
        </div>
      </div>
    </ChapterShell>
  )
}
