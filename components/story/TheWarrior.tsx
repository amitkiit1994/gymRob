'use client'

import { motion } from 'framer-motion'
import Chapter from './Chapter'
import Verse from './Verse'

const certifications = [
  { label: 'Certified Personal Trainer', sub: 'Renewed 2022' },
  { label: 'Sports Medicine Rehabilitation', sub: 'Injury-aware training' },
  { label: 'Strength & Conditioning', sub: 'American School of Conditioning & Muscle' },
  { label: 'Speed & Agility', sub: 'Athletic performance' },
]

const warriorVerse = `My choices are seen as extreme
My ability at times defying nature
Yet my life is characterised
By near constant disappointment
In my efforts to build a foundation for later success

To be a worthy representative of myself
I must know defeat and humble myself to its teachings
Continuously I must test… and test… and test… my limits again

For me Iron is a religion and I am defined by its teachings
It teaches humility and patience and focus and power and brotherhood

I am prepared to never quit, to not give up, to never say "I can't do it"
I am prepared to win — because that is what will define
me being better tomorrow than I was today.`

/**
 * CHAPTER III — THE WARRIOR
 * Robin's "I am a Warrior" piece treated as scripture.
 * Certifications presented as forged plates around it.
 */
export default function TheWarrior() {
  return (
    <Chapter
      numeral="III"
      era="The Discipline"
      title="I Am A Warrior"
      tone="iron"
    >
      <div className="space-y-14 sm:space-y-20">
        {/* Scripture */}
        <Verse variant="scripture" attribution="— Robin Carruthers, 2026">
          {warriorVerse}
        </Verse>

        {/* Certifications as forged plates */}
        <div className="border-t border-accent-800/40 pt-12 sm:pt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="font-mono text-xs sm:text-sm text-accent-500 font-bold tracking-[0.3em] uppercase">
              Forged Credentials
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-700 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="iron-frame bg-black/70 p-5 rounded-sm"
              >
                <div className="font-mono text-[0.65rem] text-accent-500 font-bold tracking-[0.25em] uppercase mb-3">
                  Plate {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-iron text-base sm:text-lg text-accent-200 uppercase tracking-wide leading-tight mb-2">
                  {cert.label}
                </p>
                <p className="text-xs text-gray-500">{cert.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Chapter>
  )
}
