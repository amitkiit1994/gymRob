'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/config/images'
import CanvasBanner from './CanvasBanner'
import { useGsapContext, gsap } from '@/hooks/useGsap'

export default function Hero() {
  const heroRef = useGsapContext<HTMLElement>((q, scope) => {
    // 3D perspective so rotations have real depth
    gsap.set(scope, { perspective: 1600, perspectiveOrigin: '50% 35%' })

    // ── Real-physics entrance: every element FALLS from above the viewport.
    //    No fades. No magical appearance. Things obey gravity. ──

    // Polaroid PHOTO: nailed at top corners. Drops in. Pendulum-swings to settle.
    gsap.set(q('.hero-photo'), {
      transformOrigin: '50% 0%',
      y: -900,
      rotateZ: -7,
    })

    // CANVAS BANNER: hung from ropes. Falls until ropes catch it, then sways.
    gsap.set(q('.hero-banner'), {
      transformOrigin: '50% -60px',
      y: -900,
      rotateZ: 6,
    })

    // CHALKBOARD: heavy wall-pinned object. Drops + slam.
    gsap.set(q('.hero-subline'), {
      transformOrigin: '50% 0%',
      y: -700,
      rotateZ: -2,
    })

    // METAL CTAs: heavy painted-metal signs. Drop + slam (no bounce — they're bolted).
    gsap.set(q('.hero-cta'), { y: -700 })

    // PRESS CLIPPING: paper. Floats down (lighter than the rest).
    gsap.set(q('.hero-clipping'), { y: -800, rotate: -10 })

    // Chip: small metal chip, drops in
    gsap.set(q('.hero-chip'), { y: -300 })

    // ── Timeline — every motion is gravity-accelerated `power3.in` or `power4.in`
    //    followed by a damped pendulum settle for hanging items. ──
    const tl = gsap.timeline()

    // CHIP — small light object, lands first
    tl.to(q('.hero-chip'), {
      y: 0,
      duration: 0.55,
      ease: 'power3.in',
    }, 0.1)

    // PHOTO — falls and lands at its final tilt in one beat
    tl.to(q('.hero-photo'), {
      y: 0,
      rotateZ: -3,
      duration: 0.8,
      ease: 'power3.out',
    }, 0.2)

    // BANNER — heaviest hanging item, single lands-at-rest tween
    tl.to(q('.hero-banner'), {
      y: 0,
      rotateZ: -1.5,
      duration: 0.95,
      ease: 'power3.out',
    }, 0.45)

    // CHALKBOARD — wall-pinned + heavy: drops, slams, no bounce
    tl.to(q('.hero-subline'), {
      y: 0,
      rotateZ: -1.2,
      duration: 0.45,
      ease: 'power4.in',
    }, 1.15)

    // METAL CTAs — slam onto the wall (heavy: hard stop, no bounce). Staggered.
    tl.to(q('.hero-cta'), {
      y: 0,
      duration: 0.35,
      stagger: 0.1,
      ease: 'power4.in',
    }, 1.4)

    // PRESS CLIPPING — paper, floats down to its resting tilt
    tl.to(q('.hero-clipping'), {
      y: 0,
      rotate: -2,
      duration: 0.9,
      ease: 'power1.out',
    }, 1.55)
  }, [])

  return (
    <section ref={heroRef} className="hero-stage relative min-h-screen flex items-center overflow-hidden bg-mighty-shadow py-20 sm:py-24">
      {/* Brick wall layer (parallax — drifts as you scroll) */}
      <div className="hero-brick absolute inset-x-0 -top-10 -bottom-10 z-0 bg-brick brick-cracks" aria-hidden="true" />

      {/* Atmospheric warm spotlight from above */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,_rgba(254,250,224,0.10)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-mighty-shadow/40 via-transparent to-mighty-shadow/90" />
      </div>

      {/* Foreground content — split layout: Robin poster + Canvas banner */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-7xl mx-auto">

          {/* LEFT — Robin's photo pinned as a torn-edge poster on the wall (GSAP-controlled) */}
          <figure
            className="hero-photo relative lg:col-span-5 mx-auto lg:mx-0 max-w-[340px] sm:max-w-[400px] lg:max-w-none"
            style={{ willChange: 'transform' }}
          >
            {/* The photo, framed in a heavy black "darkroom print" border */}
            <div className="relative">
              {/* Outer paper / poster backing */}
              <div className="polaroid-aged wearouts p-3 sm:p-4 shadow-[0_22px_44px_-10px_rgba(0,0,0,0.95),0_8px_0_-3px_rgba(0,0,0,0.8)] border border-mighty-shadow/40">
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
          </figure>

          {/* RIGHT — Canvas banner + sub-line + CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center text-center gap-8 sm:gap-10">
            {/* Top eyebrow chip — GSAP fades in */}
            <div className="hero-chip inline-block chip-metal border-2 border-rocky-paper/25 px-4 py-1.5 rounded-sm">
              <span className="font-mono text-[0.6rem] sm:text-xs text-rocky-paper font-bold tracking-[0.35em] uppercase">
                Mumbai · Old-School Iron
              </span>
            </div>

            {/* Mighty Mick's-style canvas banner — drops in 3D. Constrained so it doesn't cover Robin's face. */}
            <div className="hero-banner w-full max-w-[520px]" style={{ willChange: 'transform' }}>
              <CanvasBanner tilt={-1.5}>
                <p className="font-mono text-[0.6rem] sm:text-xs text-rocky-paper/85 tracking-[0.4em] uppercase mb-2">
                  Robin Carruthers'
                </p>
                <h1 className="font-painted text-hammered-canvas text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight uppercase">
                  <span className="sr-only">Robin Carruthers — </span>
                  Iron <br />Reinvention
                </h1>
                <p className="font-mono text-[0.55rem] sm:text-[0.7rem] text-rocky-paper/85 tracking-[0.4em] uppercase mt-3">
                  Est. 30 Years · Boxing &amp; Iron
                </p>
              </CanvasBanner>
            </div>

            {/* Sub-line — on a chalkboard pinned to the wall (GSAP-controlled) */}
            <div
              className="hero-subline relative bg-chalkboard border-[6px] border-mighty-shadow rounded-sm px-7 py-5 sm:px-9 sm:py-6 max-w-xl shadow-pinned"
              style={{
                boxShadow: 'inset 0 0 0 2px #6b3a1f, 0 8px 16px rgba(0,0,0,0.7), 0 18px 30px rgba(0,0,0,0.5)',
                willChange: 'transform',
              }}
            >
              <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />
              <p className="text-chalk font-rocky text-sm sm:text-base md:text-lg uppercase tracking-[0.12em] leading-snug text-center">
                From the boardrooms of adland to the iron of the gym floor —{' '}
                <span className="text-rocky-melt">a reinvention forged at 40</span>.
              </p>
            </div>

            {/* CTAs — stenciled metal signs (GSAP staggered) */}
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <Link
                href="#story"
                className="hero-cta relative group inline-flex items-center gap-3 painted-metal-red wearouts border-4 border-mighty-shadow px-6 py-3.5 sm:px-8 sm:py-4 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85),0_10px_20px_rgba(0,0,0,0.75)] hover:brightness-110 active:translate-y-[3px] active:shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] transition-all"
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
                className="hero-cta relative group inline-flex items-center gap-3 painted-metal-dark wearouts border-4 border-rocky-paper/50 px-6 py-3.5 sm:px-8 sm:py-4 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85),0_10px_20px_rgba(0,0,0,0.75)] hover:border-rocky-ring-blue active:translate-y-[3px] active:shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] transition-all"
              >
                <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
                <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
                Train With Robin
              </Link>
            </div>

            {/* Press clipping — newspaper cut pinned to the wall (GSAP floats in) */}
            <figure
              className="hero-clipping relative inline-block origin-top"
              style={{ willChange: 'transform', transformOrigin: '50% 0%' }}
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
            </figure>
          </div>
        </div>
      </div>

      {/* Scroll prompt */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-rocky-paper"
          style={{ textShadow: '0 1px 0 rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)' }}
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
