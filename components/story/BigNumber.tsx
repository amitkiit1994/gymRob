'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface BigNumberProps {
  /** The numeric anchor — "120", "78", "30", "120 → 78" etc */
  value: string
  /** Smaller unit label rendered below (e.g. "KILOS", "YEARS") */
  unit?: string
  /** Optional caption/eyebrow above the number */
  eyebrow?: string
  /** Optional supporting prose under the number */
  children?: ReactNode
  /** Visual variant */
  variant?: 'oppressive' | 'forge' | 'achievement'
  className?: string
}

/**
 * BigNumber — massive scroll-revealed numeric anchor.
 * The number IS the design element. Reveals and slightly scales as you
 * scroll into view. The brain reads "120 KG" before any prose.
 */
export default function BigNumber({
  value,
  unit,
  eyebrow,
  children,
  variant = 'forge',
  className = '',
}: BigNumberProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  // Number slides up + scales in as you scroll toward it
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])

  return (
    <div ref={ref} className={`relative ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs sm:text-sm text-accent-500 font-bold tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
      )}

      <motion.div
        style={{ y, scale }}
        className="relative flex items-end gap-3 sm:gap-5"
      >
        <span
          className={`
            iron-text font-iron leading-[0.85] tracking-tighter
            text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem]
            ${variant === 'oppressive' ? 'opacity-95' : ''}
          `}
        >
          {value}
        </span>
        {unit && (
          <span className="font-mono text-xl sm:text-2xl md:text-3xl text-accent-500 font-bold tracking-[0.25em] uppercase pb-6 sm:pb-10 md:pb-14">
            {unit}
          </span>
        )}
      </motion.div>

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 max-w-2xl"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
