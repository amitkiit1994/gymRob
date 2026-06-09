'use client'

import Image from 'next/image'
import Link from 'next/link'
import { pressFeatures } from '@/lib/pressData'

export default function PressFeature() {
  const features = pressFeatures
  if (features.length === 0) return null

  return (
    <section
      id="press"
      className="relative bg-brick brick-cracks overflow-hidden"
    >
      {/* Top weld seam */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-mighty-red/60 to-transparent z-30" />

      {/* CINEMATIC ESTABLISHING PLATE — "EARNED MEDIA" stenciled over real
          brick with pinned newspaper clippings. */}
      <div className="relative w-full">
        <img
          src="/images/scene/press.webp"
          alt="Earned Media — Robin Carruthers in the press, newspaper clippings pinned to the gym wall"
          className="block w-full h-auto max-h-[80vh] object-cover object-center select-none"
          loading="lazy"
          decoding="async"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-mighty-shadow" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16 sm:py-20">
        <h2 className="sr-only">Earned Media — what India&apos;s media is saying</h2>

        <div className="space-y-20 sm:space-y-28 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.slug} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof pressFeatures)[number]
  index: number
}) {
  const reverse = index % 2 === 1

  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
    >
      {/* Pinned photo — polaroid on the wall */}
      <div
        className={`relative lg:col-span-4 flex justify-center lg:justify-start ${
          reverse ? 'lg:order-2 lg:justify-end' : ''
        }`}
      >
        {/* Pinned reference — no paper, no inner frame. The masthead image
            is pinned straight to the brick wall the way a press cut is
            pinned to a coach's corkboard: pin-bolts in the corners, a
            slight tilt, a small painted "FEATURED" mark in the corner of
            the image itself rather than a hung sign beside it. */}
        <figure
          className="relative inline-block -rotate-[1.2deg]"
        >
          <div className="relative overflow-hidden bg-mighty-shadow shadow-pinned">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              width={280}
              height={168}
              sizes="280px"
              className="block w-[200px] sm:w-[240px] md:w-[280px] h-auto grayscale-[0.4] contrast-110"
              priority={index === 0}
            />
            {/* Painted "FEATURED" stencil burned directly into the bottom of
                the image — labels itself, no separate sign needed. */}
            <span className="absolute bottom-1.5 left-2 font-painted text-[0.55rem] sm:text-[0.65rem] font-extrabold tracking-[0.3em] uppercase text-rocky-paper/90 mix-blend-screen">
              · Featured ·
            </span>
          </div>
          {/* Caption sits directly on the wall below the pinned cutting */}
          <figcaption className="mt-3 text-center text-rocky-paper">
            <p
              className="font-painted text-base sm:text-lg leading-none"
              style={{ textShadow: 'var(--text-shadow-on-dark)' }}
            >
              {feature.source}
            </p>
            {feature.sourceTagline && (
              <p
                className="font-mono text-[10px] text-rocky-paper/70 italic mt-1 uppercase tracking-wide"
                style={{ textShadow: 'var(--text-shadow-on-dark)' }}
              >
                {feature.sourceTagline}
              </p>
            )}
          </figcaption>
          {/* Corner pin bolts — straight into the wall */}
          <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
          <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
          <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
        </figure>
      </div>

      {/* Copy */}
      <div className={`lg:col-span-8 ${reverse ? 'lg:order-1' : ''}`}>
        {/* Date eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-mighty-red" aria-hidden="true" />
          <time
            dateTime={feature.publishedDate}
            className="font-mono text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase text-mighty-red font-extrabold"
          >
            {feature.displayDate}
          </time>
        </div>

        {/* Headline — painted on the wall */}
        <h3 className="font-painted text-hammered-canvas text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-7 uppercase">
          {feature.title}
        </h3>

        {/* Pull quote — embossed on a painted-metal panel, brass rivets at
            the four corners, no paper, no pin-bolts. Inset shadow (the
            text is pressed INTO the metal) instead of a drop shadow. */}
        <figure
          className="relative painted-metal-dark p-5 sm:p-7 mb-7 border-2 border-mighty-shadow rounded-sm"
          style={{
            boxShadow:
              'inset 0 2px 0 rgba(255,235,200,0.18), inset 0 -2px 0 rgba(0,0,0,0.9), inset 0 0 0 1px rgba(0,0,0,0.55), 0 6px 12px rgba(0,0,0,0.55), 0 14px 22px rgba(0,0,0,0.35)',
          }}
        >
          <span className="brass-tack absolute top-2 left-2" aria-hidden="true" />
          <span className="brass-tack absolute top-2 right-2" aria-hidden="true" />
          <span className="brass-tack absolute bottom-2 left-2" aria-hidden="true" />
          <span className="brass-tack absolute bottom-2 right-2" aria-hidden="true" />
          <blockquote
            className="font-painted text-base sm:text-lg md:text-xl leading-[1.4] text-rocky-paper px-3 sm:px-4"
            style={{
              textShadow:
                '0 1px 0 rgba(0,0,0,0.8), 0 -1px 0 rgba(255,235,200,0.25), 0 0 6px rgba(0,0,0,0.6)',
            }}
          >
            {feature.pullQuote}
          </blockquote>
          <figcaption
            className="font-mono text-[0.65rem] sm:text-xs text-mighty-red font-bold tracking-[0.3em] uppercase mt-4 px-3 sm:px-4 not-italic"
            style={{ textShadow: '0 1px 0 rgba(0,0,0,0.7)' }}
          >
            — Robin Carruthers · in {feature.source}
          </figcaption>
        </figure>

        {/* Press excerpt — newspaper cutting pinned to the wall */}
        <div className="relative inline-block mb-8 max-w-full">
          <div
            className="newsprint text-mighty-shadow px-6 py-5 sm:px-8 sm:py-6 -rotate-[0.4deg] border border-mighty-shadow/30 shadow-[0_10px_22px_rgba(0,0,0,0.65),0_2px_0_-1px_rgba(0,0,0,0.75)]"
          >
            <p className="font-mono text-[10px] text-mighty-red font-extrabold tracking-[0.3em] uppercase mb-2 border-b border-mighty-shadow/25 pb-2">
              · The Cutting ·
            </p>
            <p className="text-sm sm:text-base text-mighty-shadow leading-relaxed">
              {feature.excerpt}
            </p>
          </div>
          <span className="pin-bolt absolute -top-2 left-8" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 right-8" aria-hidden="true" />
        </div>

        {/* CTAs — tertiary tier. Press is editorial: it's already its own
            destination, so the CTAs don't need a red plaque. Read Full Story
            is burned into a small wooden coach's plaque; the external link
            is painted-underlined text directly on the wall. */}
        <div className="flex flex-col sm:flex-row gap-5 sm:items-center sm:gap-7">
          <Link
            href={`/press/${feature.slug}`}
            className="relative inline-flex items-center justify-center gap-2 bg-wood px-5 py-2.5 sm:px-6 sm:py-3 font-painted text-wood-burn text-sm sm:text-base uppercase tracking-[0.1em] rounded-sm hover:brightness-110 active:translate-y-[2px] transition-[transform,filter] group"
            style={{
              boxShadow:
                'inset 0 1px 0 rgba(255,220,170,0.15), inset 0 -2px 0 rgba(0,0,0,0.55), 0 4px 10px rgba(0,0,0,0.55)',
            }}
          >
            <span>Read Full Story</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
          <a
            href={feature.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-[0.15em] underline decoration-mighty-red decoration-2 underline-offset-[6px] hover:decoration-rocky-paper transition-colors"
            style={{ textShadow: 'var(--text-shadow-on-dark)' }}
          >
            <span>On {feature.source}</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
