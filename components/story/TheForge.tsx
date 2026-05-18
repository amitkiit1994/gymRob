'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Chapter from './Chapter'
import BigNumber from './BigNumber'
import Verse from './Verse'
import { images } from '@/config/images'

/**
 * CHAPTER II — THE FORGE
 * 7–8 months. 120 → 78. Then post-40, the muscle.
 * The before/after image is the artifact at the centre of the room.
 */
export default function TheForge() {
  return (
    <Chapter
      numeral="II"
      era="The Transformation"
      title="The Forge"
      tone="forge"
    >
      <div className="space-y-14 sm:space-y-20">
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gray-200 leading-[1.5] max-w-3xl">
          One simple decision: <span className="text-accent-300">show up</span>.
          No magic plan. No shortcuts. Just a gym, a barbell, and the slow
          arithmetic of consistency.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Numeric anchor — 120 → 78 */}
          <div className="lg:col-span-7">
            <BigNumber
              eyebrow="7–8 Months"
              value="120 → 78"
            >
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Quit smoking. Quit drinking. Built rhythm. The fat loss was
                the easy part — it just required showing up on the days the
                motivation didn't.
              </p>
            </BigNumber>
          </div>

          {/* Transformation artifact */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="iron-frame relative rounded-sm overflow-hidden bg-black aspect-[4/5]">
              <Image
                src={images.transformation.beforeAfter}
                alt="Robin Carruthers — before and after transformation"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-4 font-mono text-xs text-accent-500/80 uppercase tracking-[0.25em]">
              The Receipt
            </figcaption>
          </motion.figure>
        </div>

        <Verse>
          The transformation didn't happen overnight. It came from showing up
          consistently, even on the days motivation disappeared.
        </Verse>
      </div>
    </Chapter>
  )
}
