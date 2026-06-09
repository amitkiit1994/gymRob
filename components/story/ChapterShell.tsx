'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import CanvasBanner from '../CanvasBanner'
import { useGsapContext, gsap } from '@/hooks/useGsap'

type Tone =
  | 'brick' | 'brick-left' | 'brick-right' | 'brick-crop'
  | 'paper' | 'dark' | 'concrete'
  | 'room-bags' | 'room-ring' | 'room-rack' | 'room-floor'

interface ChapterShellProps {
  /** Padded chapter number e.g. "01", "10". Optional — omit on un-numbered sections. */
  numeral?: string
  /** Era / mode label e.g. "THE CRISIS". Optional — omit when no era chip is wanted. */
  era?: string
  /** Title to render in the canvas banner (short — fits in a banner) */
  title: string
  /** Optional baked-in cinematic title image (spray-paint / placard). When set,
   *  it replaces the CSS canvas-banner title; `title` becomes its alt text. */
  titleImg?: string
  /** Optional full-bleed cinematic scene PLATE (a photographed gym wall with the
   *  chapter title baked in + real photos composited into frames). When set, it
   *  becomes the chapter's establishing shot: rendered edge-to-edge at the top,
   *  and the CSS title banner + giant numeral are suppressed (the plate carries
   *  them). `title` becomes its alt text. */
  plate?: string
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
  titleImg,
  plate,
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
      duration: 0.95,
      ease: 'power3.out',
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
        className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-mighty-shadow via-mighty-red/70 to-mighty-shadow shadow-weld-seam z-30"
      />
      {/* CINEMATIC ESTABLISHING PLATE — the whole gym wall, photographed, with
          the chapter title baked in and real photos composited into its frames.
          Edge-to-edge film still; the brick content area flows beneath it. */}
      {plate && (
        <div className="relative w-full">
          <img
            src={plate}
            alt={title}
            className="block w-full h-auto max-h-[82vh] object-cover object-center select-none"
            loading="lazy"
            decoding="async"
          />
          {/* blend the photographic plate down into the chapter's wall */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-mighty-shadow"
          />
        </div>
      )}

      {/* Background SPRAY-STENCILED chapter numeral — painted on the brick (paint always there) */}
      {numeral && !plate && (
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
      )}

      <div ref={stageRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        {/* CanvasBanner — title pinned to the wall. Suppressed when a full
            cinematic plate is shown (the plate already carries the title). */}
        {!plate && (
          <div className="chapter-banner mb-4 sm:mb-6">
            {titleImg ? (
              <img
                src={titleImg}
                alt={title}
                className="block w-full max-w-[680px] rounded-sm shadow-hung"
              />
            ) : (
              <CanvasBanner tilt={0} showGloves={false}>
                <h2 className="font-painted text-hammered-canvas text-3xl sm:text-5xl md:text-6xl leading-[1.0] tracking-tight uppercase">
                  {title}
                </h2>
              </CanvasBanner>
            )}
          </div>
        )}
        {/* When a plate is shown, give the chapter a screen-reader heading. */}
        {plate && <h2 className="sr-only">{title}</h2>}

        {/* Era caption — small painted line under the banner. No chip,
            no divider; it's a sub-line of the title, not a tag. */}
        {era && (
          <p
            className={`font-painted text-sm sm:text-base uppercase tracking-[0.25em] mb-12 sm:mb-16 ${
              tone === 'paper' ? 'text-mighty-shadow/70' : 'text-rocky-paper/80'
            }`}
            style={{
              textShadow:
                tone === 'paper' ? 'none' : 'var(--text-shadow-on-dark)',
            }}
          >
            <span className="text-mighty-red">·&nbsp;</span>
            {era}
            <span className="text-mighty-red">&nbsp;·</span>
          </p>
        )}
        {!era && <div className="mb-12 sm:mb-16" aria-hidden="true" />}

        {/* Body */}
        <div>{children}</div>
      </div>
    </section>
  )
}
