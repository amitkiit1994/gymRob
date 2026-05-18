'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionEyebrow from './SectionEyebrow'
import { pressFeatures } from '@/lib/pressData'

export default function PressFeature() {
  const features = pressFeatures
  if (features.length === 0) return null

  return (
    <section
      id="press"
      className="iron-bg iron-grain spark-corner-tl spark-corner-br relative py-20 sm:py-28 overflow-hidden border-t-2 border-b-2 border-accent-800/70"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <SectionEyebrow number="05" label="In the Press" />
          <h2 className="iron-text font-iron text-4xl sm:text-5xl md:text-6xl tracking-tight mb-3 uppercase">
            Earned Media
          </h2>
          <p className="text-sm sm:text-base text-accent-200/70 max-w-xl mx-auto font-mono uppercase tracking-wider text-[0.7rem] sm:text-xs">
            What India's media is saying about Robin's reinvention
          </p>
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
      {/* Image — iron framed thumbnail */}
      <div
        className={`relative lg:col-span-4 flex justify-center lg:justify-start ${
          reverse ? 'lg:order-2 lg:justify-end' : ''
        }`}
      >
        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative inline-block"
        >
          <div className="iron-frame relative rounded-sm overflow-hidden bg-black">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              width={280}
              height={168}
              sizes="280px"
              className="block w-[200px] sm:w-[240px] md:w-[280px] h-auto"
              priority={index === 0}
            />
            {/* Rust tint */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent-900/30 via-transparent to-accent-700/10 mix-blend-overlay" />
          </div>

          {/* Source mark badge — top corner */}
          <div className="absolute -top-3 -left-2 flex items-center gap-2 bg-black/90 border border-accent-600/70 px-2.5 py-1 rounded-sm shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-accent-300">
              Featured
            </span>
          </div>

          {/* Source caption below */}
          <figcaption className="mt-4 text-center lg:text-left">
            <p className="font-serif text-base sm:text-lg text-accent-300 leading-none">
              {feature.source}
            </p>
            {feature.sourceTagline && (
              <p className="text-[0.65rem] sm:text-xs text-accent-200/60 italic mt-1 font-serif">
                {feature.sourceTagline}
              </p>
            )}
          </figcaption>
        </motion.figure>
      </div>

      {/* Copy */}
      <div className={`lg:col-span-8 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-6 bg-accent-600" aria-hidden="true" />
          <time
            dateTime={feature.publishedDate}
            className="font-mono text-[0.65rem] sm:text-xs tracking-[0.25em] uppercase text-accent-400 font-bold"
          >
            {feature.displayDate}
          </time>
        </div>

        <h3 className="iron-text font-iron text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6 uppercase">
          {feature.title}
        </h3>

        <blockquote className="relative pl-5 sm:pl-6 border-l-2 border-accent-600 mb-6">
          <p className="pull-quote text-lg sm:text-xl text-gray-100 leading-relaxed">
            {feature.pullQuote}
          </p>
          <footer className="text-xs sm:text-sm text-accent-300/70 mt-2 not-italic font-mono uppercase tracking-wider">
            — Robin Carruthers, in {feature.source}
          </footer>
        </blockquote>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
          {feature.excerpt}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
          <Link
            href={`/press/${feature.slug}`}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-b from-accent-500 to-accent-700 hover:from-accent-400 hover:to-accent-600 text-black font-bold text-sm sm:text-base rounded-sm transition-all min-h-[44px] uppercase tracking-wider shadow-[0_4px_0_0_rgba(0,0,0,0.6),0_0_20px_rgba(234,88,12,0.4)] active:translate-y-0.5"
          >
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
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-accent-300 hover:text-accent-100 font-bold text-sm sm:text-base border-2 border-accent-700 hover:border-accent-500 bg-black/40 rounded-sm transition-all min-h-[44px] uppercase tracking-wider"
          >
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
