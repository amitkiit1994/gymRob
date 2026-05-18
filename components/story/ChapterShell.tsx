'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import CanvasBanner from '../CanvasBanner'
import { useGsapContext, gsap, ScrollTrigger } from '@/hooks/useGsap'

type Tone =
  | 'brick' | 'brick-left' | 'brick-right' | 'brick-crop'
  | 'paper' | 'dark' | 'concrete'
  | 'room-bags' | 'room-ring' | 'room-rack' | 'room-floor'

interface ChapterShellProps {
  /** Padded chapter number e.g. "01", "10" */
  numeral: string
  /** Era / mode label e.g. "THE CRISIS" */
  era: string
  /** Title to render in the canvas banner (short — fits in a banner) */
  title: string
  /** Visual tone for the section bg */
  tone?: Tone
  /** Banner tilt (deg) — defaults to alternating */
  tilt?: number
  children: ReactNode
  className?: string
  id?: string
}

const toneStyles: Record<Tone, string> = {
  brick: 'bg-brick text-rocky-paper',
  'brick-left': 'bg-brick bg-brick-spotlight-left text-rocky-paper',
  'brick-right': 'bg-brick bg-brick-spotlight-right text-rocky-paper',
  'brick-crop': 'bg-brick bg-brick-4 text-rocky-paper',
  paper: 'bg-paper text-mighty-shadow',
  dark: 'bg-mighty-shadow text-rocky-paper',
  concrete: 'bg-brick-dark text-rocky-paper',
  // Real gym room interiors (photographic) — replaces brick wallpaper feel
  'room-bags': 'bg-room-bags text-rocky-paper',
  'room-ring': 'bg-room-ring text-rocky-paper',
  'room-rack': 'bg-room-rack text-rocky-paper',
  'room-floor': 'bg-room-floor text-rocky-paper',
}

/**
 * ChapterShell — shared wrapper for every CH section.
 * Provides consistent vertical rhythm, a CanvasBanner title pinned to the
 * wall, and tone-driven background that swaps brick / paper / dark / concrete.
 * Mobile-native: padding scales down, banner shrinks, layouts stack.
 */
export default function ChapterShell({
  numeral,
  era,
  title,
  tone = 'brick',
  tilt = -1.2,
  children,
  className = '',
  id,
}: ChapterShellProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // Ghost numeral drifts as you scroll through (parallax — no opacity fade, paint is paint)
  const numeralY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80])

  // GSAP: chapter banner drops in from above with pendulum settle as the chapter enters view
  const stageRef = useGsapContext<HTMLDivElement>((q, scope) => {
    const banner = q('.chapter-banner')[0]
    if (!banner) return

    gsap.set(scope, { perspective: 1600, perspectiveOrigin: '50% 0%' })
    gsap.set(banner, {
      transformOrigin: '50% -60px',
      y: -700,
      rotateZ: 5,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: 'top 75%',
        once: true,
      },
    })
    tl.to(banner, {
      y: 0,
      rotateZ: tilt,
      duration: 0.85,
      ease: 'power4.in',
    })
      .to(banner, {
        rotateZ: tilt + 2.2,
        duration: 0.5,
        ease: 'sine.inOut',
      })
      .to(banner, {
        rotateZ: tilt - 0.6,
        duration: 0.55,
        ease: 'sine.inOut',
      })
      .to(banner, {
        rotateZ: tilt,
        duration: 0.55,
        ease: 'sine.out',
      })

    // Subtle scroll-sway after settle (free-hanging banner reacts to scroll)
    gsap.to(banner, {
      rotateZ: tilt - 1.8,
      ease: 'none',
      scrollTrigger: {
        trigger: scope,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    })
  }, [tilt])

  return (
    <section
      ref={ref}
      id={id}
      className={`relative overflow-hidden spotlight ${toneStyles[tone]} ${className}`}
    >
      {/* Top welded iron seam — bridges adjoining chapters so the wall reads continuous */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-mighty-shadow via-mighty-red/70 to-mighty-shadow shadow-[0_2px_4px_rgba(0,0,0,0.85)] z-30"
      />
      {/* Background SPRAY-STENCILED chapter numeral — painted on the brick (paint always there) */}
      <motion.div
        style={{ y: numeralY }}
        className="absolute top-8 right-2 sm:right-6 lg:right-10 z-0 pointer-events-none select-none"
      >
        <div
          aria-hidden="true"
          className={`font-painted text-[8rem] sm:text-[14rem] lg:text-[20rem] leading-none tracking-tight ${
            tone === 'paper'
              ? 'stencil-paint-dark'
              : 'stencil-paint-red'
          }`}
        >
          {numeral}
        </div>
      </motion.div>

      <div ref={stageRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        {/* Eyebrow — CH_XX · ERA */}
        <motion.div
          className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl"
        >
          <span
            className={`font-mono text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-sm border ${
              tone === 'paper'
                ? 'text-mighty-red bg-mighty-shadow/5 border-mighty-shadow/30'
                : 'text-mighty-red bg-mighty-shadow border-rocky-paper/25'
            }`}
          >
            CH_{numeral}
          </span>
          <div
            className={`h-px flex-1 max-w-[14rem] ${
              tone === 'paper'
                ? 'bg-gradient-to-r from-mighty-shadow/40 to-transparent'
                : 'bg-gradient-to-r from-rocky-paper/40 to-transparent'
            }`}
          />
          {/* Era label — now sits on a dark masking-tape strip so it's always legible */}
          <span
            className={`font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] font-bold px-2 py-1 rounded-sm ${
              tone === 'paper'
                ? 'text-mighty-shadow bg-rocky-paper/0'
                : 'text-rocky-paper bg-mighty-shadow/80 border-l-2 border-mighty-red'
            }`}
            style={{
              textShadow: tone === 'paper' ? 'none' : '0 1px 0 rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            {era}
          </span>
        </motion.div>

        {/* CanvasBanner — title pinned to the wall (GSAP: drops from above, pendulum settles) */}
        <div className="chapter-banner mb-12 sm:mb-16" style={{ willChange: 'transform' }}>
          <CanvasBanner tilt={0} showGloves={false}>
            <h2 className="font-painted text-hammered-canvas text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase">
              {title}
            </h2>
          </CanvasBanner>
        </div>

        {/* Body */}
        <motion.div
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
