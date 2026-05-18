'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { images } from '@/config/images'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — slow Ken Burns + heavy dark overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="kenburns absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${images.hero.background}')` }}
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Pre-title eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
          >
            <span className="h-px w-12 sm:w-20 bg-accent-600/70" />
            <span className="font-mono text-[0.65rem] sm:text-xs text-accent-400 font-bold tracking-[0.4em] uppercase">
              The Story of an Iron Reinvention
            </span>
            <span className="h-px w-12 sm:w-20 bg-accent-600/70" />
          </motion.div>

          {/* Name — main anchor */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="iron-text font-iron text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.9] tracking-tight uppercase mb-6"
          >
            Robin <br className="sm:hidden" />Carruthers
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-mono text-sm sm:text-base md:text-lg text-gray-300 uppercase tracking-[0.25em] mb-12 sm:mb-14"
          >
            30 years in adland · 15 years in iron
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Link
              href="#story"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-accent-500 to-accent-700 hover:from-accent-400 hover:to-accent-600 text-black font-bold text-base sm:text-lg rounded-sm transition-all uppercase tracking-wider border-2 border-accent-800 shadow-[0_4px_0_0_rgba(0,0,0,0.6),0_0_24px_rgba(234,88,12,0.4)] active:translate-y-0.5 text-center min-h-[48px] flex items-center justify-center gap-2"
            >
              <span>Read the Story</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-black/40 border-2 border-accent-700 hover:border-accent-500 text-accent-300 hover:text-accent-100 font-bold text-base sm:text-lg rounded-sm transition-all uppercase tracking-wider text-center min-h-[48px] flex items-center justify-center"
            >
              Train With Robin
            </Link>
          </motion.div>

          {/* Featured-in trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-14 sm:mt-20 px-4"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent-700/60" />
              <span className="font-mono text-[0.6rem] sm:text-xs text-accent-500/80 font-bold tracking-[0.35em] uppercase">
                As Featured In
              </span>
              <span className="h-px w-8 bg-accent-700/60" />
            </div>
            <Link
              href="/press/robin-carruthers-reinvents-in-adland"
              className="font-serif text-base sm:text-lg text-gray-300 hover:text-gray-100 transition-colors italic"
            >
              MediaInfoline
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[0.6rem] text-accent-500/60 tracking-[0.3em] uppercase">Scroll</span>
          <svg className="w-4 h-4 text-accent-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
