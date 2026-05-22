'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface VerseProps {
  children: ReactNode
  /** Attribution line, defaults to "— Robin Carruthers" */
  attribution?: string
  /** Treatment variant */
  variant?: 'pull' | 'scripture'
  align?: 'left' | 'center'
  className?: string
}

/**
 * Verse — a quote/pull-quote/scripture treatment.
 * pull       = standard editorial pull-quote with serif italic + orange marks
 * scripture  = larger, stanza-style, for long verses like "I am a Warrior"
 */
export default function Verse({
  children,
  attribution = '— Robin Carruthers',
  variant = 'pull',
  align = 'left',
  className = '',
}: VerseProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  if (variant === 'scripture') {
    return (
      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1 }}
        className={`relative max-w-3xl ${alignClass} ${className}`}
      >
        <div className="absolute -top-6 -left-4 font-painted text-[8rem] leading-none text-accent-700/40 select-none pointer-events-none">
          “
        </div>
        <blockquote className="relative font-painted text-xl sm:text-2xl md:text-3xl leading-[1.5] text-gray-100 whitespace-pre-line">
          {children}
        </blockquote>
        {attribution && (
          <figcaption className="mt-6 sm:mt-8 font-mono text-xs sm:text-sm text-accent-500 uppercase tracking-[0.3em] not-italic">
            {attribution}
          </figcaption>
        )}
      </motion.figure>
    )
  }

  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      className={`relative ${alignClass} ${className}`}
    >
      <blockquote className="pull-quote text-2xl sm:text-3xl md:text-4xl leading-[1.3] text-gray-100 max-w-3xl">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-5 font-mono text-xs text-accent-500 uppercase tracking-[0.3em] not-italic">
          {attribution}
        </figcaption>
      )}
    </motion.figure>
  )
}
