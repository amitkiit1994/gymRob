'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/config/images'
import CanvasBanner from './CanvasBanner'
import { Barbell, BoxingGlove, ChainLink } from './icons/IronIcons'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brick py-20 sm:py-24">
      {/* Atmospheric warm spotlight from above */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,_rgba(254,250,224,0.10)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-mighty-shadow/40 via-transparent to-mighty-shadow/90" />
      </div>

      {/* Background props — boxing glove + chain at soft opacity on the brick */}
      <div className="absolute inset-0 z-[6] pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.09 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute top-[10%] left-[3%] hidden md:block text-rocky-paper"
        >
          <BoxingGlove className="w-28 h-28 lg:w-36 lg:h-36 -rotate-12" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-[8%] right-[3%] hidden md:block text-rocky-paper"
        >
          <ChainLink className="w-24 h-40 lg:w-28 lg:h-44" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-[12%] left-[2%] hidden md:block text-rocky-paper"
        >
          <Barbell className="w-44 h-44 lg:w-56 lg:h-56 -rotate-12" />
        </motion.div>
      </div>

      {/* Foreground content — split layout: Robin poster + Canvas banner */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-7xl mx-auto">

          {/* LEFT — Robin's photo pinned as a torn-edge poster on the wall */}
          <motion.figure
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
            className="relative lg:col-span-5 mx-auto lg:mx-0 max-w-[340px] sm:max-w-[400px] lg:max-w-none"
          >
            {/* The photo, framed in a heavy black "darkroom print" border */}
            <div className="relative">
              {/* Outer paper / poster backing */}
              <div className="bg-paper p-3 sm:p-4 shadow-[0_22px_44px_-10px_rgba(0,0,0,0.95),0_8px_0_-3px_rgba(0,0,0,0.8)] border border-mighty-shadow/40">
                {/* Inner heavy frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow photo-grain">
                  <Image
                    src={images.hero.background}
                    alt="Robin Carruthers training"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 80vw"
                    className="object-cover grayscale-[0.5] contrast-110 brightness-95"
                  />
                  {/* Sepia-toned darkroom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mighty-shadow/70 via-transparent to-mighty-shadow/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(14,10,7,0.65)_100%)] pointer-events-none" />
                </div>
                {/* Caption stamp under the photo */}
                <p className="font-mono text-[0.65rem] sm:text-xs text-mighty-shadow font-bold tracking-[0.25em] uppercase text-center mt-3">
                  Robin · Mumbai · 2026
                </p>
              </div>
              {/* Bolts pinning the poster to the wall */}
              <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
            </div>
          </motion.figure>

          {/* RIGHT — Canvas banner + sub-line + CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center text-center gap-8 sm:gap-10">
            {/* Top eyebrow chip */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block bg-mighty-shadow border-2 border-rocky-paper/30 px-4 py-1.5 rounded-sm"
            >
              <span className="font-mono text-[0.6rem] sm:text-xs text-rocky-paper font-bold tracking-[0.35em] uppercase">
                Mumbai · Old-School Iron
              </span>
            </motion.div>

            {/* Mighty Mick's-style canvas banner */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
            >
              <CanvasBanner tilt={-1.5}>
                <p className="font-mono text-[0.6rem] sm:text-xs text-rocky-paper/70 tracking-[0.4em] uppercase mb-2">
                  Robin Carruthers'
                </p>
                <h1 className="font-painted text-painted text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight uppercase">
                  <span className="sr-only">Robin Carruthers — </span>
                  Iron <br />Reinvention
                </h1>
                <p className="font-mono text-[0.55rem] sm:text-[0.7rem] text-rocky-paper/70 tracking-[0.4em] uppercase mt-3">
                  Est. 30 Years · Boxing &amp; Iron
                </p>
              </CanvasBanner>
            </motion.div>

            {/* Sub-line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="font-rocky text-base sm:text-lg md:text-xl text-rocky-paper uppercase tracking-[0.12em] max-w-xl"
            >
              From the boardrooms of adland to the iron of the gym floor —{' '}
              <span className="text-rocky-leather">a reinvention forged at 40</span>.
            </motion.p>

            {/* CTAs — stenciled metal signs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 items-center"
            >
              <Link
                href="#story"
                className="relative group inline-flex items-center gap-3 bg-mighty-red border-4 border-mighty-shadow px-6 py-3.5 sm:px-8 sm:py-4 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85),0_10px_20px_rgba(0,0,0,0.75)] hover:bg-rocky-leather hover:text-mighty-shadow active:translate-y-[3px] active:shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] transition-all"
              >
                <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
                <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
                <span>Read the Story</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="relative group inline-flex items-center gap-3 bg-mighty-shadow border-4 border-rocky-paper/50 px-6 py-3.5 sm:px-8 sm:py-4 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85),0_10px_20px_rgba(0,0,0,0.75)] hover:border-rocky-ring-blue active:translate-y-[3px] active:shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] transition-all"
              >
                <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
                <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
                Train With Robin
              </Link>
            </motion.div>

            {/* Press clipping — newspaper cut pinned to the wall */}
            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="relative inline-block -rotate-2"
            >
              <Link
                href="/press/robin-carruthers-reinvents-in-adland"
                className="block bg-[#fefae0] text-[#0e0a07] px-6 py-4 sm:px-8 sm:py-5 border-2 border-[#0e0a07] shadow-[0_8px_20px_rgba(0,0,0,0.7),0_2px_0_-1px_rgba(0,0,0,0.8)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.6)] hover:rotate-0 transition-all"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-[0.65rem] sm:text-xs font-extrabold tracking-[0.35em] uppercase text-[#a4271f]">
                    · As Featured In ·
                  </span>
                </div>
                <p className="font-painted text-xl sm:text-2xl md:text-3xl text-[#0e0a07] leading-none">
                  MediaInfoline
                </p>
                <p className="font-mono text-[0.55rem] sm:text-[0.65rem] text-[#0e0a07]/60 tracking-[0.25em] uppercase mt-1.5">
                  May 18, 2026 · India's Media &amp; Adland News
                </p>
              </Link>
              {/* Two pin bolts top */}
              <span className="pin-bolt absolute -top-2 left-4" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 right-4" aria-hidden="true" />
            </motion.figure>
          </div>
        </div>
      </div>

      {/* Scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-rocky-paper/60"
        >
          <span className="font-mono text-[0.6rem] tracking-[0.35em] uppercase">Scroll Down</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
