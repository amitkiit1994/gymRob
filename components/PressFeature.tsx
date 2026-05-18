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
      className="relative py-20 sm:py-28 bg-primary-950 overflow-hidden border-t border-b border-primary-800/50"
    >
      {/* Backdrop accent — subtle radial wash */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -right-20 w-[40rem] h-[40rem] rounded-full bg-accent-700/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[40rem] h-[40rem] rounded-full bg-accent-900/15 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <SectionEyebrow number="05" label="In the Press" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3">
            Earned Media
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            What India's media is saying about Robin's reinvention.
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
      {/* Image */}
      <div
        className={`relative lg:col-span-7 ${
          reverse ? 'lg:order-2' : ''
        }`}
      >
        <motion.div
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="relative aspect-[4/3] rounded-sm overflow-hidden border border-accent-700/30 shadow-2xl group"
        >
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
            priority={index === 0}
          />
          {/* Editorial overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/30 to-transparent" />
          <div className="absolute inset-0 mix-blend-multiply bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.45)_100%)]" />

          {/* Source mark badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-primary-900/85 backdrop-blur-sm border border-accent-600/40 px-3 py-1.5 rounded-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-[0.65rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white">
              As Featured In
            </span>
          </div>

          {/* Source name overlay */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-none">
              {feature.source}
            </p>
            {feature.sourceTagline && (
              <p className="text-[0.65rem] sm:text-xs text-gray-300 italic mt-1 font-serif">
                {feature.sourceTagline}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Copy */}
      <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-6 bg-accent-600" aria-hidden="true" />
          <time
            dateTime={feature.publishedDate}
            className="text-[0.7rem] sm:text-xs tracking-[0.2em] uppercase text-accent-500 font-medium"
          >
            {feature.displayDate}
          </time>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-[1.15] tracking-tight mb-6">
          {feature.title}
        </h3>

        <blockquote className="relative pl-5 sm:pl-6 border-l-2 border-accent-600 mb-6">
          <p className="pull-quote text-lg sm:text-xl text-gray-200 leading-relaxed">
            {feature.pullQuote}
          </p>
          <footer className="text-xs sm:text-sm text-gray-500 mt-2 not-italic">
            — Robin Carruthers, in {feature.source}
          </footer>
        </blockquote>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
          {feature.excerpt}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
          <Link
            href={`/press/${feature.slug}`}
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold text-sm sm:text-base rounded-sm transition-all min-h-[44px]"
          >
            <span>Read the Full Story</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
          <a
            href={feature.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 text-gray-300 hover:text-white font-medium text-sm sm:text-base border border-primary-700 hover:border-accent-600 rounded-sm transition-all min-h-[44px]"
          >
            <span>Read on {feature.source}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  )
}
