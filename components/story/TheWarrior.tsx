'use client'

import { motion } from 'framer-motion'
import ChapterShell from './ChapterShell'

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
  return (
    <ChapterShell
      numeral="03"
      era="The Discipline · The Manifesto"
      title="I Am A Warrior"
      tone="dark"
      tilt={-0.8}
    >
      <div className="max-w-5xl mx-auto space-y-14 sm:space-y-20">
        {/* The verse — gym placard / wood-frame paper */}
        <motion.figure
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1 }}
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
              return (
                <p
                  key={i}
                  className={`font-painted text-base sm:text-lg md:text-xl leading-[1.4] text-mighty-shadow ${
                    line.startsWith('I am prepared to win') ? 'text-mighty-red text-lg sm:text-xl md:text-2xl mt-2' : ''
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
            <span className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.3em] uppercase">
              Forged Credentials
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-mighty-red/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-rocky-leather leather-grain stitched text-mighty-shadow p-5 sm:p-6 rounded-sm border-2 border-mighty-shadow shadow-[0_10px_18px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)]"
              >
                <span className="pin-bolt absolute top-2 left-2" aria-hidden="true" />
                <span className="pin-bolt absolute top-2 right-2" aria-hidden="true" />
                <p className="font-mono text-[9px] sm:text-[10px] text-mighty-shadow/70 font-bold tracking-[0.25em] uppercase mb-2 mt-2">
                  Plate {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-painted text-sm sm:text-base text-mighty-shadow uppercase leading-tight mb-2">
                  {cert.label}
                </p>
                <p className="font-mono text-[10px] text-mighty-shadow/60 leading-snug">
                  {cert.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ChapterShell>
  )
}
