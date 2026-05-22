'use client'

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
    // "78" lands from above — single weighted tween, no shake, no bounce
    tl.to(to, {
      y: 0,
      scale: 1,
      duration: 0.55,
      ease: 'power3.out',
    }, '+=0.05')
  }, [])

  return (
    <ChapterShell
      id="forge"
      numeral="02"
      era="The Transformation · 7-8 Months"
      title="The Forge"
      tone="brick-left"
      tilt={1.2}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* LEFT — Big "120 → 78" canvas number */}
        <div className="lg:col-span-7 space-y-10">
          <p className="font-painted text-lg sm:text-xl md:text-2xl text-rocky-paper leading-[1.6] uppercase tracking-[0.06em] text-shadow-readable">
            One simple decision: <span className="text-mighty-red font-bold">show up</span>.
            No magic plan. No shortcuts. Just a gym, a barbell, and the slow
            arithmetic of consistency.
          </p>

          {/* 120 → 78 — let the numbers carry it. The KG unit and the
              7-8 month duration are painted directly into the composition
              so it reads as a single piece of wall, not a tagged exhibit. */}
          <div className="relative">
            <div className="flex items-end gap-4 sm:gap-8 md:gap-10">
              <span className="forge-num-from font-painted stencil-paint-dark text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] tracking-tighter line-through decoration-mighty-red decoration-[6px] sm:decoration-[10px]">
                120
              </span>
              <span
                className="forge-arrow font-mono text-5xl sm:text-7xl md:text-8xl pb-3"
                style={{
                  color: 'var(--ink-stencil)',
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
                <span className="font-painted stencil-paint-red text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] tracking-[0.05em] align-top ml-1 sm:ml-2">
                  KG
                </span>
              </span>
            </div>
            <p
              className="font-painted stencil-paint-dark text-base sm:text-xl md:text-2xl uppercase tracking-[0.08em] mt-4 sm:mt-6"
            >
              · Seven&nbsp;to&nbsp;eight&nbsp;months ·
            </p>
          </div>

          {/* Pull-quote — painted directly on the brick wall. No card, no
              paper, no pin-bolts: spray-stenciled at low opacity so the
              brick texture pulls through. Slight tilt so it reads as a
              human hand, not a typeset block. */}
          <figure className="relative max-w-2xl rotate-[0.6deg]">
            <p className="font-painted stencil-paint-red text-2xl sm:text-3xl md:text-4xl leading-[1.15] uppercase tracking-tight">
              &ldquo;The transformation didn&apos;t happen overnight.&nbsp;It came from
              showing up — even on the days motivation disappeared.&rdquo;
            </p>
            <figcaption
              className="font-mono text-[10px] sm:text-xs text-rocky-paper font-bold tracking-[0.3em] uppercase mt-4"
              style={{ textShadow: 'var(--text-shadow-on-dark)' }}
            >
              — Robin Carruthers · painted on the wall
            </figcaption>
          </figure>
        </div>

        {/* RIGHT — Before/after image as a darkroom polaroid pinned to wall */}
        {/* Documentary "before / after" — bare paper backing, no inner frame.
            This is editorial evidence, not a hung portrait — let it sit on
            paper the way a coach's clippings do. */}
        <figure
          className="lg:col-span-5 relative mx-auto lg:mx-0 max-w-[340px]"
        >
          <div className="bg-paper p-3 sm:p-4 wall-cast border border-mighty-shadow/40">
            <div className="relative aspect-[4/5] overflow-hidden bg-mighty-shadow photo-grain">
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
        </figure>
      </div>
    </ChapterShell>
  )
}
