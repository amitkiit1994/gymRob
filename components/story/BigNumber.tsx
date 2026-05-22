'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface BigNumberProps {
  /** The numeric anchor — "120", "78", "120 → 78" etc */
  value: string
  /** Smaller unit label rendered below the number with rust left-bar */
  unit?: string
  /** Optional decal text rendered above as stamped serial (e.g. "S_092") */
  decal?: string
  /** Variant — "cast" = dark embossed (oppressive); "hot" = bright rust glow */
  variant?: 'cast' | 'hot'
  /** Supporting prose under the unit label */
  children?: ReactNode
  className?: string
}

/**
 * BigNumber — per Gemini design.md §5 BigNumberAnchor pattern.
 *
 * Layout:
 *   METRIC_DECAL // S_xxx                  ← stamped serial above
 *   120                                    ← massive dark-cast or hot number
 *   │ KILOS                                ← rust left-bar + mono label
 */
export default function BigNumber({
  value,
  unit,
  decal,
  variant = 'cast',
  children,
  className = '',
}: BigNumberProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  // Heavy hydraulic drag — slow rise into place
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  // Auto serial — derive from value if not supplied
  const serial = decal ?? `S_${value.replace(/\D/g, '').padStart(3, '0')}`

  // Variant-specific solid colour + text-shadow (replaces gradient-clip
  // helpers; gate-5 forbids background-clip:text on display copy).
  const numeralCls =
    variant === 'cast'
      ? 'text-steel-cast'
      : 'text-rust-spark'
  const numeralShadow =
    variant === 'cast'
      ? '0 2px 0 rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.55)'
      : '2px 3px 0 rgba(0,0,0,0.85), 0 4px 8px rgba(122,45,18,0.4)'

  return (
    <div ref={ref} className={`relative select-none ${className}`}>
      {/* Stamped decal */}
      <p className="font-mono text-[10px] sm:text-xs text-rust-corrosion font-bold tracking-[0.25em] uppercase mb-3">
        METRIC_DECAL // {serial}
      </p>

      <motion.h2
        style={{ y, textShadow: numeralShadow }}
        className={`
          font-painted font-bold uppercase tracking-tighter
          text-display-giant
          ${numeralCls}
          leading-[0.85]
        `}
      >
        {value}
      </motion.h2>

      {unit && (
        <p className="font-mono text-xs sm:text-sm text-steel-brushed uppercase tracking-[0.25em] -mt-2 border-l-2 border-rust-spark pl-3">
          {unit}
        </p>
      )}

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
