'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import CanvasBanner from '../CanvasBanner'

type Tone = 'brick' | 'paper' | 'dark' | 'concrete'

interface ChapterShellProps {
  /** Padded chapter number e.g. "01", "10" */
  numeral: string
  /** Era / mode label e.g. "THE CRISIS" */
  era: string
  /** Title to render in the canvas banner (short — fits in a banner) */
  title: string
  /** Visual tone for the section bg */
  tone?: Tone
  /** Banner tilt (deg) — defaults to alternating */
  tilt?: number
  children: ReactNode
  className?: string
  id?: string
}

const toneStyles: Record<Tone, string> = {
  brick: 'bg-brick text-rocky-paper',
  paper: 'bg-paper text-mighty-shadow',
  dark: 'bg-mighty-shadow text-rocky-paper',
  concrete: 'bg-[#1a1411] text-rocky-paper',
}

/**
 * ChapterShell — shared wrapper for every CH section.
 * Provides consistent vertical rhythm, a CanvasBanner title pinned to the
 * wall, and tone-driven background that swaps brick / paper / dark / concrete.
 * Mobile-native: padding scales down, banner shrinks, layouts stack.
 */
export default function ChapterShell({
  numeral,
  era,
  title,
  tone = 'brick',
  tilt = -1.2,
  children,
  className = '',
  id,
}: ChapterShellProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // Ghost numeral drifts as you scroll through
  const numeralY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80])
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 0.85], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      id={id}
      className={`relative overflow-hidden spotlight ${toneStyles[tone]} ${className}`}
    >
      {/* Background ghost numeral — top-right */}
      <motion.div
        style={{ y: numeralY, opacity: numeralOpacity }}
        className="absolute top-8 right-2 sm:right-6 lg:right-10 z-0 pointer-events-none select-none"
      >
        <div
          className={`font-painted text-[8rem] sm:text-[14rem] lg:text-[20rem] leading-none tracking-tight ${
            tone === 'paper' ? 'text-mighty-shadow/10' : 'text-mighty-red/15'
          }`}
        >
          {numeral}
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        {/* Eyebrow — CH_XX · ERA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl"
        >
          <span
            className={`font-mono text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-sm border ${
              tone === 'paper'
                ? 'text-mighty-red bg-mighty-shadow/5 border-mighty-shadow/30'
                : 'text-mighty-red bg-mighty-shadow border-rocky-paper/25'
            }`}
          >
            CH_{numeral}
          </span>
          <div
            className={`h-px flex-1 max-w-[14rem] ${
              tone === 'paper'
                ? 'bg-gradient-to-r from-mighty-shadow/40 to-transparent'
                : 'bg-gradient-to-r from-rocky-paper/40 to-transparent'
            }`}
          />
          <span
            className={`font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] ${
              tone === 'paper' ? 'text-mighty-shadow/70' : 'text-rocky-paper/60'
            }`}
          >
            {era}
          </span>
        </motion.div>

        {/* CanvasBanner — title pinned to the wall */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="mb-12 sm:mb-16"
        >
          <CanvasBanner tilt={tilt} showGloves={false}>
            <h2 className="font-painted text-painted text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase">
              {title}
            </h2>
          </CanvasBanner>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
