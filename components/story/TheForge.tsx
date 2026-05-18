'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ChapterShell from './ChapterShell'
import { images } from '@/config/images'
import { useGsapContext, gsap } from '@/hooks/useGsap'

/**
 * CH 02 — THE FORGE
 * Transformation. 120 → 78 kg.
 * Half-poster / half-photo split. Before/after image as a polaroid pinned to wall.
 */
export default function TheForge() {
  // The 120→78 receipt: heavy-weight cinematic crash-in
  const receiptRef = useGsapContext<HTMLDivElement>((q, scope) => {
    const from = q('.forge-num-from')[0]
    const arrow = q('.forge-arrow')[0]
    const to = q('.forge-num-to')[0]
    if (!from || !arrow || !to) return

    gsap.set(scope, { perspective: 1400 })
    gsap.set(from, { x: -120, rotateY: -45, transformOrigin: 'right center' })
    gsap.set(arrow, { x: -20, opacity: 0 })
    gsap.set(to, { y: -300, scale: 1.3, transformOrigin: 'center top' })

    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: 'top 70%', once: true },
    })
    // "120" rotates in from the left (the old self, being struck off the record)
    tl.to(from, { x: 0, rotateY: 0, duration: 0.7, ease: 'power3.out' })
    // The arrow draws in
    tl.to(arrow, { x: 0, opacity: 1, duration: 0.35, ease: 'power2.out' }, '-=0.1')
    // "78" SLAMS down from above with weight + screen shake
    tl.to(to, {
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: 'power4.in',
    }, '+=0.05')
      // Bounce settle (heavy: small bounce only)
      .to(to, { scale: 1.04, duration: 0.1, ease: 'power2.out' })
      .to(to, { scale: 1, duration: 0.25, ease: 'sine.out' })
      // Screen shake on impact
      .to(scope, { x: -4, duration: 0.04, ease: 'none' }, '-=0.35')
      .to(scope, { x: 4, duration: 0.04, ease: 'none' })
      .to(scope, { x: -2, duration: 0.04, ease: 'none' })
      .to(scope, { x: 0, duration: 0.04, ease: 'none' })
  }, [])

  return (
    <ChapterShell
      numeral="02"
      era="The Transformation · 7-8 Months"
      title="The Forge"
      tone="brick-left"
      tilt={1.2}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* LEFT — Big "120 → 78" canvas number */}
        <div className="lg:col-span-7 space-y-10">
          <p className="font-rocky text-lg sm:text-xl md:text-2xl text-rocky-paper leading-[1.55] uppercase tracking-wide text-shadow-readable">
            One simple decision: <span className="text-mighty-red font-bold">show up</span>.
            No magic plan. No shortcuts. Just a gym, a barbell, and the slow
            arithmetic of consistency.
          </p>

          <div className="relative">
            <span
              className="inline-block font-mono text-[10px] sm:text-xs text-rocky-paper font-bold tracking-[0.35em] uppercase mb-3 bg-mighty-shadow/80 border-l-2 border-mighty-red px-2 py-1 rounded-sm"
              style={{ textShadow: '0 1px 0 rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)' }}
            >
              · The Receipt ·
            </span>
            <div className="flex items-end gap-4 sm:gap-8 md:gap-10">
              <span className="forge-num-from font-painted stencil-paint-dark text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] tracking-tighter line-through decoration-mighty-red decoration-[6px] sm:decoration-[10px]">
                120
              </span>
              <span
                className="forge-arrow font-mono text-5xl sm:text-7xl md:text-8xl pb-3"
                style={{
                  color: '#5b1208',
                  mixBlendMode: 'multiply',
                  textShadow: '0 2px 0 rgba(10,3,1,0.5), 0 4px 2px rgba(0,0,0,0.5)',
                  filter: 'url(#painted-aged-filter)',
                  fontWeight: 900,
                }}
              >
                →
              </span>
              <span className="forge-num-to font-painted stencil-paint-red text-[7rem] sm:text-[10rem] md:text-[13rem] leading-[0.85] tracking-tighter">
                78
              </span>
            </div>
            <span
              className="inline-block font-mono text-xs sm:text-sm text-rocky-paper font-bold uppercase tracking-[0.25em] mt-3 bg-mighty-shadow/80 border-l-2 border-mighty-red px-2 py-1 rounded-sm"
              style={{ textShadow: '0 1px 0 rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)' }}
            >
              Kilos · 7-8 Months
            </span>
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
