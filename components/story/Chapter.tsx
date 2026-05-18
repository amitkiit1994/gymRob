'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ChapterProps {
  /** Roman numeral marker: I, II, III etc */
  numeral: string
  /** Era / year stamp: "1995–2010", "THE CRISIS", "TODAY" */
  era: string
  /** Chapter title — rendered in iron-text */
  title: string
  /** Body slot */
  children: ReactNode
  /** Visual treatment variant */
  tone?: 'dark' | 'forge' | 'iron' | 'temple'
  className?: string
  id?: string
}

const toneStyles: Record<NonNullable<ChapterProps['tone']>, string> = {
  // dark = adland boardroom — cold blue-grey, no warmth
  dark: 'bg-[#04060a] text-gray-300',
  // forge = the crisis / heating up — deep rust, oppressive
  forge: 'bg-[#0a0604] text-gray-200',
  // iron = the transformation — hot iron emerging
  iron: 'bg-[#0a0604] text-gray-200',
  // temple = the gym today — warmer, fuller life
  temple: 'bg-[#0a0604] text-gray-200',
}

export default function Chapter({
  numeral,
  era,
  title,
  children,
  tone = 'iron',
  className = '',
  id,
}: ChapterProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Roman numeral fades in then drifts up as you scroll past
  const numeralY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80])
  const numeralOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.6, 0.85],
    [0, 1, 1, 0],
  )

  return (
    <section
      ref={ref}
      id={id}
      className={`relative min-h-screen ${toneStyles[tone]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
        {/* Roman numeral mark — top-right, scrolls vertically */}
        <motion.div
          style={{ y: numeralY, opacity: numeralOpacity }}
          className="absolute top-12 right-6 sm:right-10 lg:right-16 z-0 pointer-events-none select-none"
        >
          <div className="font-iron text-[8rem] sm:text-[12rem] lg:text-[16rem] leading-none text-accent-900/30 tracking-tight">
            {numeral}
          </div>
        </motion.div>

        <div className="relative z-10 max-w-4xl">
          {/* Era stamp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="font-mono text-xs sm:text-sm text-accent-500 font-bold tracking-[0.3em] uppercase">
              Chapter {numeral}
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-700 via-accent-600 to-transparent shadow-[0_0_8px_rgba(234,88,12,0.4)]" />
            <div className="font-mono text-xs sm:text-sm text-gray-500 uppercase tracking-[0.25em]">
              {era}
            </div>
          </motion.div>

          {/* Title — iron-text */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="iron-text font-iron text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight uppercase mb-10 sm:mb-14"
          >
            {title}
          </motion.h2>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
