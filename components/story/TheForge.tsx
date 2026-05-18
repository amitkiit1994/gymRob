'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ChapterShell from './ChapterShell'
import { images } from '@/config/images'

/**
 * CH 02 — THE FORGE
 * Transformation. 120 → 78 kg.
 * Half-poster / half-photo split. Before/after image as a polaroid pinned to wall.
 */
export default function TheForge() {
  return (
    <ChapterShell
      numeral="02"
      era="The Transformation · 7-8 Months"
      title="The Forge"
      tone="brick"
      tilt={1.2}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* LEFT — Big "120 → 78" canvas number */}
        <div className="lg:col-span-7 space-y-10">
          <p className="font-rocky text-lg sm:text-xl md:text-2xl text-rocky-paper/90 leading-[1.55] uppercase tracking-wide">
            One simple decision: <span className="text-mighty-red font-bold">show up</span>.
            No magic plan. No shortcuts. Just a gym, a barbell, and the slow
            arithmetic of consistency.
          </p>

          <div className="relative">
            <p className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.35em] uppercase mb-3">
              The Receipt
            </p>
            <div className="flex items-end gap-3 sm:gap-6 flex-wrap">
              <span className="font-painted text-painted text-[4rem] sm:text-[6rem] md:text-[8rem] leading-[0.85] tracking-tighter line-through decoration-mighty-red decoration-[6px] sm:decoration-[10px]">
                120
              </span>
              <span className="font-mono text-3xl sm:text-5xl text-mighty-red pb-2">→</span>
              <span className="font-painted text-painted text-[6rem] sm:text-[9rem] md:text-[12rem] leading-[0.85] tracking-tighter">
                78
              </span>
            </div>
            <p className="font-mono text-sm text-rocky-paper/80 uppercase tracking-[0.25em] mt-2 border-l-2 border-mighty-red pl-3">
              Kilos · 7-8 Months
            </p>
          </div>

          {/* Vintage paper pull-quote */}
          <figure className="relative bg-paper text-mighty-shadow p-5 sm:p-7 rotate-1 border-2 border-mighty-shadow shadow-[0_10px_24px_rgba(0,0,0,0.8)]">
            <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />
            <p className="font-painted text-base sm:text-xl md:text-2xl leading-[1.3] text-mighty-shadow">
              &ldquo;The transformation didn&apos;t happen overnight. It came from
              showing up consistently, even on the days motivation disappeared.&rdquo;
            </p>
            <figcaption className="font-mono text-[10px] text-mighty-red font-bold tracking-[0.3em] uppercase mt-3">
              — Robin Carruthers
            </figcaption>
          </figure>
        </div>

        {/* RIGHT — Before/after image as a darkroom polaroid pinned to wall */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.95, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 relative mx-auto lg:mx-0 max-w-[340px]"
        >
          <div className="bg-paper p-3 sm:p-4 wall-cast border border-mighty-shadow/40">
            <div className="relative aspect-[4/5] overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow photo-grain">
              <Image
                src={images.transformation.beforeAfter}
                alt="Robin Carruthers — before and after"
                fill
                sizes="(min-width: 1024px) 36vw, 80vw"
                className="object-cover grayscale-[0.4] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mighty-shadow/60 via-transparent to-mighty-shadow/30 pointer-events-none" />
            </div>
            <p className="font-mono text-[10px] sm:text-xs text-mighty-shadow font-bold tracking-[0.25em] uppercase text-center mt-3">
              Before · After · Mumbai
            </p>
          </div>
          <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
          <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
          <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
        </motion.figure>
      </div>
    </ChapterShell>
  )
}
