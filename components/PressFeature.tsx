'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { pressFeatures } from '@/lib/pressData'

export default function PressFeature() {
  const features = pressFeatures
  if (features.length === 0) return null

  return (
    <section
      id="press"
      className="relative bg-brick py-20 sm:py-28 overflow-hidden"
    >
      {/* Top weld seam */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-mighty-red/60 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl mx-auto"
        >
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-mighty-red bg-mighty-shadow border border-rocky-paper/25 px-2.5 py-1 rounded-sm">
            CH_07
          </span>
          <div className="h-px flex-1 max-w-[14rem] bg-gradient-to-r from-rocky-paper/40 to-transparent" />
          <span className="font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-rocky-paper/60">
            The Press · Newspaper Cut
          </span>
        </motion.div>

        {/* Newspaper-style heading on paper */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-block relative bg-paper text-mighty-shadow px-6 py-4 sm:px-10 sm:py-6 -rotate-1 border-4 border-mighty-shadow shadow-plate">
            <span className="pin-bolt absolute -top-2 left-6 sm:left-10" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 right-6 sm:right-10" aria-hidden="true" />
            <p className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.35em] uppercase mb-2">
              · As Featured In ·
            </p>
            <h2 className="font-painted text-mighty-shadow text-3xl sm:text-5xl md:text-6xl uppercase leading-tight">
              Earned Media
            </h2>
            <p className="font-mono text-[10px] sm:text-xs text-mighty-shadow/60 tracking-[0.25em] uppercase mt-2">
              What India&apos;s media is saying
            </p>
          </div>
        </motion.div>

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
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
    >
      {/* Pinned photo — polaroid on the wall */}
      <div
        className={`relative lg:col-span-4 flex justify-center lg:justify-start ${
          reverse ? 'lg:order-2 lg:justify-end' : ''
        }`}
      >
        <motion.figure
          initial={{ opacity: 0, scale: 0.95, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative inline-block"
        >
          <div className="bg-paper p-3 sm:p-4 border border-mighty-shadow/40 shadow-pinned">
            <div className="relative overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                width={280}
                height={168}
                sizes="280px"
                className="block w-[200px] sm:w-[240px] md:w-[280px] h-auto grayscale-[0.4] contrast-110"
                priority={index === 0}
              />
            </div>
            <figcaption className="mt-3 text-center">
              <p className="font-painted text-mighty-shadow text-base sm:text-lg leading-none">
                {feature.source}
              </p>
              {feature.sourceTagline && (
                <p className="font-mono text-[10px] text-mighty-shadow/60 italic mt-1 uppercase tracking-wide">
                  {feature.sourceTagline}
                </p>
              )}
            </figcaption>
          </div>
          {/* Corner pin bolts */}
          <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
          <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
          <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />

          {/* FEATURED tag — floating red sign */}
          <div className="absolute -top-5 -right-5 sm:-right-7 flex items-center gap-1.5 bg-mighty-red border-2 border-mighty-shadow px-3 py-1 rounded-sm shadow-[0_4px_0_-1px_rgba(0,0,0,0.85)] rotate-6">
            <span className="h-1.5 w-1.5 rounded-full bg-rocky-paper animate-pulse" />
            <span className="font-mono text-[0.6rem] font-extrabold tracking-[0.25em] uppercase text-rocky-paper">
              Featured
            </span>
          </div>
        </motion.figure>
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
        <h3 className="font-painted text-painted text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-7 uppercase">
          {feature.title}
        </h3>

        {/* Pull quote — paper card pinned to wall */}
        <figure className="relative bg-paper text-mighty-shadow p-5 sm:p-6 mb-7 -rotate-[0.6deg] border-2 border-mighty-shadow shadow-[0_10px_22px_rgba(0,0,0,0.75)]">
          <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
          <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />
          <span className="absolute -top-2 -left-1 font-painted text-5xl sm:text-6xl text-mighty-red/40 leading-none select-none">
            “
          </span>
          <blockquote className="font-painted text-base sm:text-lg md:text-xl leading-[1.4] text-mighty-shadow">
            {feature.pullQuote}
          </blockquote>
          <figcaption className="font-mono text-[0.65rem] sm:text-xs text-mighty-red font-bold tracking-[0.3em] uppercase mt-3 not-italic">
            — Robin Carruthers · in {feature.source}
          </figcaption>
        </figure>

        <p className="text-sm sm:text-base text-rocky-paper/80 leading-relaxed mb-8">
          {feature.excerpt}
        </p>

        {/* CTAs — painted metal signs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <Link
            href={`/press/${feature.slug}`}
            className="relative inline-flex items-center justify-center gap-2 bg-mighty-red border-4 border-mighty-shadow px-6 py-3 sm:px-7 sm:py-3.5 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:bg-rocky-leather hover:text-mighty-shadow active:translate-y-[3px] active:shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] transition-all group"
          >
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            <span>Read Full Story</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            className="relative inline-flex items-center justify-center gap-2 bg-mighty-shadow border-4 border-rocky-paper/40 px-6 py-3 sm:px-7 sm:py-3.5 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:border-rocky-paper active:translate-y-[3px] transition-all group"
          >
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            <span>On {feature.source}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
    </motion.article>
  )
}
