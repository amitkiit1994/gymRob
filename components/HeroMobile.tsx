'use client'

import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/config/images'
import { useGsapContext, gsap } from '@/hooks/useGsap'

/**
 * HeroMobile — a vertical, mobile-first hero. Same Mighty Mick's aesthetic
 * but composed for narrow screens: full-bleed photo poster on top, painted
 * canvas banner directly underneath, then sub-line, then CTAs. No grid
 * acrobatics, no overlapping. Photo is given primary real-estate.
 */
export default function HeroMobile() {
  const heroRef = useGsapContext<HTMLElement>((q, scope) => {
    gsap.set(scope, { perspective: 1400, perspectiveOrigin: '50% 35%' })

    // Photo: nailed at top corners; falls + pendulum settle
    gsap.set(q('.m-hero-photo'), {
      transformOrigin: '50% 0%',
      y: -700,
      rotateZ: -4,
    })
    // Banner: hung from ropes; falls + sway
    gsap.set(q('.m-hero-banner'), {
      transformOrigin: '50% -40px',
      y: -700,
      rotateZ: 4,
    })
    // Chalkboard: drops + slams
    gsap.set(q('.m-hero-subline'), { y: -500 })
    // CTAs: slam
    gsap.set(q('.m-hero-cta'), { y: -500 })
    // Press clipping: floats down
    gsap.set(q('.m-hero-clipping'), { y: -600, rotate: -8 })

    const tl = gsap.timeline()

    tl.to(q('.m-hero-photo'), {
      y: 0,
      rotateZ: -2.5,
      duration: 0.75,
      ease: 'power3.out',
    }, 0.1)

    tl.to(q('.m-hero-banner'), {
      y: 0,
      rotateZ: -1,
      duration: 0.85,
      ease: 'power3.out',
    }, 0.45)

    tl.to(q('.m-hero-subline'), {
      y: 0,
      duration: 0.4,
      ease: 'power4.in',
    }, 1.15)

    tl.to(q('.m-hero-cta'), {
      y: 0,
      duration: 0.3,
      stagger: 0.08,
      ease: 'power4.in',
    }, 1.35)

    tl.to(q('.m-hero-clipping'), {
      y: 0,
      rotate: -2,
      duration: 0.9,
      ease: 'power1.out',
    }, 1.55)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-mighty-shadow pt-20 pb-12"
    >
      {/* Brick wall behind everything */}
      <div className="absolute inset-x-0 -top-10 -bottom-10 z-0 bg-brick brick-cracks" aria-hidden="true" />
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,_rgba(254,250,224,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-mighty-shadow/30 via-transparent to-mighty-shadow/95" />
      </div>

      <div className="relative z-20 px-4 pb-12 flex flex-col items-center gap-7">
        {/* Eyebrow chip */}
        <div className="chip-metal border-2 border-rocky-paper/25 px-3 py-1 rounded-sm">
          <span className="font-mono text-[0.55rem] text-rocky-paper font-bold tracking-[0.4em] uppercase">
            Mumbai · Old-School Iron
          </span>
        </div>

        {/* PHOTO — full width torn polaroid, primary real-estate on mobile */}
        <figure
          className="m-hero-photo relative w-full max-w-[340px]"
          style={{ willChange: 'transform' }}
        >
          <div className="relative">
            <div className="polaroid-aged wearouts p-3 shadow-[0_22px_44px_-10px_rgba(0,0,0,0.95),0_6px_0_-3px_rgba(0,0,0,0.8)] border border-mighty-shadow/40">
              <div className="relative aspect-[4/5] overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow photo-grain">
                <Image
                  src={images.hero.background}
                  alt="Robin Carruthers training"
                  fill
                  priority
                  sizes="340px"
                  className="object-cover grayscale-[0.5] contrast-110 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mighty-shadow/65 via-transparent to-mighty-shadow/35 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(14,10,7,0.6)_100%)] pointer-events-none" />
              </div>
              <p className="font-mono text-[0.6rem] text-mighty-shadow font-bold tracking-[0.25em] uppercase text-center mt-3">
                Robin · Mumbai · 2026
              </p>
            </div>
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
          </div>
        </figure>

        {/* CANVAS BANNER — sized for mobile width */}
        <div className="m-hero-banner w-full max-w-[360px]" style={{ willChange: 'transform' }}>
          <div className="relative">
            {/* Inline mini-CanvasBanner sized for mobile (saves SSR cost) */}
            <div
              className="bg-canvas canvas-weather light-streak wearouts-heavy shadow-hung relative px-6 py-5 border-4 border-mighty-shadow text-center"
              style={{ clipPath: 'polygon(0.5% 1%, 99.5% 0.5%, 100% 99%, 99% 100%, 0% 99.5%)' }}
            >
              <div className="absolute inset-2 border border-rocky-paper/15 pointer-events-none" />
              <div className="absolute top-2 left-2 w-6 h-6 border border-mighty-shadow/40 bg-mighty-red/30 pointer-events-none" />
              <div className="absolute top-2 right-2 w-6 h-6 border border-mighty-shadow/40 bg-mighty-red/30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border border-mighty-shadow/40 bg-mighty-red/30 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border border-mighty-shadow/40 bg-mighty-red/30 pointer-events-none" />
              <div className="relative z-10">
                <p className="font-mono text-[0.55rem] text-rocky-paper/85 tracking-[0.4em] uppercase mb-1.5">
                  Robin Carruthers'
                </p>
                <h1 className="font-painted text-hammered-canvas text-3xl leading-[0.92] tracking-tight uppercase">
                  <span className="sr-only">Robin Carruthers — </span>
                  Iron <br />Reinvention
                </h1>
                <p className="font-mono text-[0.5rem] text-rocky-paper/85 tracking-[0.4em] uppercase mt-2">
                  Est. 30 Years · Boxing &amp; Iron
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
            </div>
            <span className="canvas-rope absolute -top-7 left-6" aria-hidden="true" />
            <span className="canvas-rope absolute -top-7 right-6" aria-hidden="true" />
            <span className="pin-bolt absolute -top-3 left-6" aria-hidden="true" />
            <span className="pin-bolt absolute -top-3 right-6" aria-hidden="true" />
          </div>
        </div>

        {/* CHALKBOARD sub-line — pinned to the wall */}
        <div
          className="m-hero-subline relative bg-chalkboard border-[5px] border-mighty-shadow rounded-sm px-5 py-4 max-w-[340px] w-full shadow-pinned"
          style={{
            boxShadow: 'inset 0 0 0 2px #6b3a1f, 0 6px 12px rgba(0,0,0,0.7), 0 14px 22px rgba(0,0,0,0.5)',
            willChange: 'transform',
          }}
        >
          <span className="pin-bolt absolute -top-2 left-5" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 right-5" aria-hidden="true" />
          <p className="text-chalk font-rocky text-sm uppercase tracking-[0.12em] leading-snug text-center">
            From the boardrooms of adland to the iron of the gym floor —{' '}
            <span className="text-rocky-melt">a reinvention forged at 40</span>.
          </p>
        </div>

        {/* CTAs — full width, stacked */}
        <div className="flex flex-col gap-3 w-full max-w-[320px]">
          <Link
            href="#story"
            className="m-hero-cta relative w-full inline-flex items-center justify-center gap-2 painted-metal-red wearouts border-4 border-mighty-shadow px-5 py-3.5 font-painted text-rocky-paper text-sm uppercase tracking-wider rounded-sm shadow-[0_5px_0_-1px_rgba(0,0,0,0.85),0_8px_16px_rgba(0,0,0,0.7)] active:translate-y-[2px]"
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
            className="m-hero-cta relative w-full inline-flex items-center justify-center gap-2 painted-metal-dark wearouts border-4 border-rocky-paper/50 px-5 py-3.5 font-painted text-rocky-paper text-sm uppercase tracking-wider rounded-sm shadow-[0_5px_0_-1px_rgba(0,0,0,0.85),0_8px_16px_rgba(0,0,0,0.7)] active:translate-y-[2px]"
          >
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            Train With Robin
          </Link>
        </div>

        {/* Press clipping at the very bottom */}
        <figure
          className="m-hero-clipping relative inline-block"
          style={{ willChange: 'transform', transformOrigin: '50% 0%' }}
        >
          <Link
            href="/press/robin-carruthers-reinvents-in-adland"
            className="block bg-[#fefae0] text-[#0e0a07] px-4 py-3 border-2 border-[#0e0a07] shadow-[0_6px_14px_rgba(0,0,0,0.7),0_2px_0_-1px_rgba(0,0,0,0.8)]"
          >
            <span className="block font-mono text-[0.55rem] font-extrabold tracking-[0.35em] uppercase text-[#a4271f] mb-0.5">
              · As Featured In ·
            </span>
            <p className="font-painted text-xl text-[#0e0a07] leading-none">
              MediaInfoline
            </p>
            <p className="font-mono text-[0.5rem] text-[#0e0a07]/60 tracking-[0.25em] uppercase mt-1">
              May 18, 2026
            </p>
          </Link>
          <span className="pin-bolt absolute -top-2 left-4" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 right-4" aria-hidden="true" />
        </figure>
      </div>
    </section>
  )
}
