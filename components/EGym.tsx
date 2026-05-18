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
      tone="brick"
      tilt={-1}
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-rocky text-base sm:text-lg md:text-xl text-rocky-paper/90 uppercase tracking-[0.12em] mb-12 sm:mb-16 max-w-3xl">
          Not a gym. <span className="text-mighty-red">A training environment.</span>
          {' '}Plates clang, chalk dust flies, progress is measured in strength — not likes.
        </p>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — pillars on a wood placard */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className="relative bg-rocky-leather leather-grain stitched text-mighty-shadow p-6 sm:p-8 rounded-sm border-4 border-mighty-shadow shadow-[0_14px_28px_rgba(0,0,0,0.7),inset_0_2px_0_rgba(255,255,255,0.12)] -rotate-1"
            >
              <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 left-6" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 right-6" aria-hidden="true" />

              <p className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.3em] uppercase mb-4">
                · House Rules ·
              </p>
              <h3 className="font-painted text-2xl sm:text-3xl text-mighty-shadow uppercase mb-5 leading-tight">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3">
                {pillars.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 font-rocky text-sm sm:text-base text-mighty-shadow uppercase tracking-wide"
                  >
                    <span className="text-mighty-red font-bold mt-0.5">×</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT — pinned gym photo */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.95, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1 }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            href="#contact"
            className="relative inline-flex items-center justify-center gap-2 bg-mighty-red border-4 border-mighty-shadow px-6 py-3.5 sm:px-8 sm:py-4 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:bg-rocky-leather hover:text-mighty-shadow active:translate-y-[3px] transition-all"
          >
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            Train Here
          </Link>
          <a
            href="https://instagram.com/egymlokhandwala"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 bg-mighty-shadow border-4 border-rocky-paper/50 px-6 py-3.5 sm:px-8 sm:py-4 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:border-rocky-ring-blue active:translate-y-[3px] transition-all"
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
