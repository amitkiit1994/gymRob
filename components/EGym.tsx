'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/config/images'
import ChapterShell from './story/ChapterShell'

const pillars = [
  'Old-school strength culture',
  'Community of serious lifters',
  'Long-term progress over quick wins',
  'Training environment that respects the craft',
]

/**
 * CH 05 — THE TEMPLE
 * eGym Lokhandwala as the Mighty-Mick's-of-Mumbai gym hall.
 * Photo of the gym pinned to brick wall, painted sign overhead.
 */
export default function EGym() {
  return (
    <ChapterShell
      id="egym"
      numeral="05"
      era="The Temple · Mumbai · Andheri West"
      title="eGym Lokhandwala"
      tone="brick-right"
      tilt={-1}
    >
      <div className="max-w-6xl mx-auto">
        <div className="legible-on-dark mb-12 sm:mb-16 max-w-3xl">
          <p className="font-rocky text-base sm:text-lg md:text-xl text-rocky-paper uppercase tracking-[0.12em]">
            Not a gym. <span className="text-mighty-red">A training environment.</span>
            {' '}Plates clang, chalk dust flies, progress is measured in strength — not likes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — pillars on a wood placard */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              className="relative leather-grain wearouts text-mighty-shadow p-6 sm:p-8 rounded-sm border-4 border-mighty-shadow shadow-[0_18px_36px_-6px_rgba(0,0,0,0.85),0_4px_0_-2px_rgba(0,0,0,0.85),inset_0_2px_0_rgba(255,255,255,0.15)] -rotate-1"
            >
              <span className="brass-tack absolute -top-2 left-6" aria-hidden="true" />
              <span className="brass-tack absolute -top-2 right-6" aria-hidden="true" />
              <span className="brass-tack absolute -bottom-2 left-6" aria-hidden="true" />
              <span className="brass-tack absolute -bottom-2 right-6" aria-hidden="true" />

              {/* Brass "house rules" header plate */}
              <div className="inline-block bg-brass px-3 py-1 mb-4 border border-[#3a2208]/60 rounded-sm">
                <p className="font-mono text-[10px] sm:text-xs text-engrave-brass font-bold tracking-[0.3em] uppercase">
                  · House Rules ·
                </p>
              </div>
              <h3 className="font-painted text-brand-leather text-2xl sm:text-3xl uppercase mb-5 leading-tight">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3">
                {pillars.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 font-rocky text-sm sm:text-base text-mighty-shadow font-bold uppercase tracking-wide"
                  >
                    <span className="text-mighty-red font-bold mt-0.5 text-lg">●</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT — pinned gym photo */}
          <motion.figure
            className="lg:col-span-6 relative order-1 lg:order-2 mx-auto lg:mx-0 max-w-lg w-full"
          >
            <div className="bg-paper p-3 sm:p-4 shadow-[0_20px_36px_-8px_rgba(0,0,0,0.95)] border border-mighty-shadow/30">
              <div className="relative aspect-[4/3] overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow photo-grain">
                <Image
                  src={images.egym.main}
                  alt="eGym Lokhandwala — the floor"
                  fill
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  className="object-cover grayscale-[0.35] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mighty-shadow/60 via-transparent to-transparent" />
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-mighty-shadow font-bold tracking-[0.25em] uppercase text-center mt-3">
                The Floor · eGym Lokhandwala
              </p>
            </div>
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
          </motion.figure>
        </div>

        {/* CTAs */}
        <motion.div
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            href="#contact"
            className="relative inline-flex items-center justify-center gap-2 painted-metal-red wearouts border-4 border-mighty-shadow px-6 py-3.5 sm:px-8 sm:py-4 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:brightness-110 active:translate-y-[3px] transition-all"
          >
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            Train Here
          </Link>
          <a
            href="https://instagram.com/egymlokhandwala"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 painted-metal-dark wearouts border-4 border-rocky-paper/50 px-6 py-3.5 sm:px-8 sm:py-4 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:border-rocky-ring-blue active:translate-y-[3px] transition-all"
          >
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            Follow eGym
          </a>
        </motion.div>
      </div>
    </ChapterShell>
  )
}
