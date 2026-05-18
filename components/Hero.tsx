'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { images } from '@/config/images'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/80 to-primary-900 z-10" />
        <div
          className="kenburns absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${images.hero.background}')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="iron-text font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.05] tracking-tight uppercase px-2"
          >
            <span className="sr-only">Robin Carruthers - </span>
            Strength.<br className="hidden sm:block" /> Discipline. Life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Old-school discipline meets modern coaching.
            <br />
            No shortcuts. Just showing up.
            <br />
            <span className="text-base sm:text-lg text-gray-400 italic mt-2 block">
              "For love of the game"
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-accent-500 to-accent-700 hover:from-accent-400 hover:to-accent-600 text-black font-bold text-base sm:text-lg rounded-sm transition-all uppercase tracking-wider border-2 border-accent-800 shadow-[0_4px_0_0_rgba(0,0,0,0.6),0_0_24px_rgba(234,88,12,0.4)] active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(0,0,0,0.6)] text-center min-h-[44px] flex items-center justify-center"
            >
              Train With Robin
            </Link>
            <Link
              href="#egym"
              className="w-full sm:w-auto px-8 py-4 bg-black/40 border-2 border-accent-700 hover:border-accent-500 text-accent-300 hover:text-accent-100 font-bold text-base sm:text-lg rounded-sm transition-all uppercase tracking-wider text-center min-h-[44px] flex items-center justify-center"
            >
              Visit eGym Lokhandwala
            </Link>
          </motion.div>

          {/* Editorial trust bar — As Featured In */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 sm:mt-14 px-4"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
              <span className="h-px w-8 sm:w-12 bg-accent-600/60" aria-hidden="true" />
              <span className="font-serif italic text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase text-accent-400">
                As Featured In
              </span>
              <span className="h-px w-8 sm:w-12 bg-accent-600/60" aria-hidden="true" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.7rem] sm:text-sm text-gray-400">
              <Link
                href="/press/robin-carruthers-reinvents-in-adland"
                className="font-serif text-base sm:text-lg text-gray-200 hover:text-white transition-colors"
              >
                MediaInfoline
              </Link>
              <span className="hidden sm:inline text-gray-600">·</span>
              <span className="text-gray-500">30+ Years in Adland</span>
              <span className="hidden sm:inline text-gray-600">·</span>
              <span className="text-gray-500">Certified Coach</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

