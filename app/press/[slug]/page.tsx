import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { headers } from 'next/headers'
import {
  getPressFeatureBySlug,
  getAllPressSlugs,
} from '@/lib/pressData'
import ShareButtonsWrapper from '@/components/ShareButtonsWrapper'
import { getCanonicalUrl } from '@/lib/seo'

export async function generateStaticParams() {
  return getAllPressSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const feature = getPressFeatureBySlug(params.slug)
  if (!feature) return { title: 'Press Feature Not Found' }

  const headersList = await headers()
  const host = headersList.get('host') || 'www.gymrob.com'
  const protocol = headersList.get('x-forwarded-proto') || 'https'
  const currentDomain = `${protocol}://${host}`
  const canonicalUrl = getCanonicalUrl(`/press/${params.slug}`)
  const ogImage = `${currentDomain}${feature.ogImage}`

  return {
    title: `${feature.title} | Robin Carruthers in the Press`,
    description: feature.excerpt,
    openGraph: {
      title: feature.title,
      description: feature.excerpt,
      url: `${currentDomain}/press/${params.slug}`,
      siteName: 'Robin Carruthers',
      type: 'article',
      publishedTime: feature.publishedDate,
      authors: [feature.source],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: feature.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: feature.title,
      description: feature.excerpt,
      images: [ogImage],
    },
    alternates: { canonical: canonicalUrl },
  }
}

export default async function PressArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const feature = getPressFeatureBySlug(params.slug)
  if (!feature) notFound()

  const pullQuoteSet = new Set(feature.inlinePullQuotes.map((q) => q.trim()))

  return (
    <article className="min-h-screen bg-primary-950">
      {/* Editorial hero — side-by-side thumbnail + headline */}
      <header className="relative bg-black pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        {/* Subtle backdrop accent */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-32 left-1/4 w-[32rem] h-[32rem] rounded-full bg-accent-700/10 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 md:gap-10">
            {/* Thumbnail portrait — left side */}
            <figure className="flex-shrink-0">
              <div className="relative rounded-sm overflow-hidden border border-accent-600/50 shadow-[0_10px_40px_-10px_rgba(234,88,12,0.35)] bg-black">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={240}
                  height={144}
                  priority
                  sizes="(min-width: 768px) 240px, 180px"
                  className="block w-[180px] sm:w-[200px] md:w-[240px] h-auto"
                />
              </div>
            </figure>

            {/* Text block — right side */}
            <div className="flex-1 min-w-0">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="h-px w-8 bg-accent-500" aria-hidden="true" />
                <span className="font-serif italic text-xs tracking-[0.25em] uppercase text-accent-400">
                  As Featured In · {feature.source}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-[1.15] tracking-tight mb-4 sm:mb-5">
                {feature.title}
              </h1>

              {/* Byline strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-gray-400">
                <span className="font-semibold tracking-wide text-white">{feature.source}</span>
                <span className="h-1 w-1 rounded-full bg-gray-600" aria-hidden="true" />
                <time dateTime={feature.publishedDate}>{feature.displayDate}</time>
                <span className="h-1 w-1 rounded-full bg-gray-600" aria-hidden="true" />
                <a
                  href={feature.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 transition-colors"
                >
                  <span>View original</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-3xl">
        {/* Back link */}
        <Link
          href="/#press"
          className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 transition-colors mb-8 text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to Press</span>
        </Link>

        {/* Byline + share */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 mb-10 border-b border-primary-800">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-500 mb-1">
              Press Coverage
            </p>
            <p className="text-sm text-gray-400">
              By <span className="text-white font-medium">{feature.source}</span>
              {' · About Robin Carruthers'}
            </p>
          </div>
          <ShareButtonsWrapper
            path={`/press/${feature.slug}`}
            title={feature.title}
          />
        </div>

        {/* Body */}
        <div className="space-y-7">
          {feature.paragraphs.map((paragraph, idx) => {
            const trimmed = paragraph.trim()
            const isQuote = pullQuoteSet.has(trimmed) || isQuoteParagraph(trimmed)
            const isFirst = idx === 0

            if (isQuote) {
              return <PullQuote key={idx} text={extractQuoteText(trimmed)} />
            }

            return (
              <p
                key={idx}
                className={`text-lg text-gray-300 leading-[1.8] ${
                  isFirst ? 'drop-cap' : ''
                }`}
              >
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Origin footer */}
        <div className="mt-14 pt-8 border-t border-primary-800">
          <div className="bg-primary-900 border border-primary-800 rounded-sm p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-accent-500 mb-2">
              Original Publication
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              This article was originally published by{' '}
              <a
                href={feature.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-accent-500/60 underline-offset-4 hover:decoration-accent-500 transition-colors"
              >
                {feature.source}
              </a>{' '}
              on {feature.displayDate}. Reproduced here for archival and reference.
            </p>
            <a
              href={feature.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
            >
              <span>Read on {feature.source}</span>
              <svg
                className="w-4 h-4"
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

        {/* Share + back */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Share this feature
              </h3>
              <p className="text-sm text-gray-400">Help spread Robin&apos;s story</p>
            </div>
            <ShareButtonsWrapper
              path={`/press/${feature.slug}`}
              title={feature.title}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#press"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-sm transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Press</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

function isQuoteParagraph(p: string): boolean {
  const stripped = p.trim()
  return (
    (stripped.startsWith('"') || stripped.startsWith('“')) &&
    stripped.toLowerCase().includes('carruthers')
  )
}

function extractQuoteText(p: string): string {
  const matches = p.match(/["“”]([^"“”]+)["“”]/g)
  if (!matches || matches.length === 0) return p
  return matches
    .map((m) => m.replace(/^["“”]|["“”]$/g, '').trim())
    .filter(Boolean)
    .join(' ')
}

function PullQuote({ text }: { text: string }) {
  return (
    <figure className="my-10 sm:my-12">
      <blockquote className="relative pl-6 sm:pl-8 border-l-4 border-accent-600">
        <p className="pull-quote font-serif italic text-xl sm:text-2xl md:text-3xl text-white leading-[1.35]">
          {text}
        </p>
        <figcaption className="text-sm text-gray-500 mt-3 not-italic font-sans">
          — Robin Carruthers
        </figcaption>
      </blockquote>
    </figure>
  )
}
