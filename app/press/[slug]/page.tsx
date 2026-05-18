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
        { url: ogImage, width: 1200, height: 630, alt: feature.imageAlt },
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
    <article className="min-h-screen bg-brick">
      {/* Hero — pinned newspaper-cut headline + polaroid photo */}
      <header className="relative pt-28 sm:pt-32 pb-14 sm:pb-20">
        {/* Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(254,250,224,0.08)_0%,_transparent_55%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-mighty-red/60 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl z-10">
          {/* Pinned eyebrow tag */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-mighty-shadow border-2 border-rocky-paper/30 rounded-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mighty-red animate-pulse" />
              <span className="font-mono text-[0.6rem] sm:text-xs tracking-[0.35em] uppercase text-rocky-paper font-extrabold">
                As Featured In · {feature.source}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Pinned thumbnail */}
            <figure className="lg:col-span-4 relative mx-auto lg:mx-0 max-w-[280px] -rotate-2">
              <div className="bg-paper p-3 sm:p-4 border border-mighty-shadow/40 shadow-[0_20px_36px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={240}
                    height={144}
                    priority
                    sizes="(min-width: 768px) 240px, 200px"
                    className="block w-full h-auto grayscale-[0.4] contrast-110"
                  />
                </div>
                <p className="font-painted text-mighty-shadow text-base sm:text-lg text-center mt-3">
                  {feature.source}
                </p>
              </div>
              <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
            </figure>

            {/* Headline + byline */}
            <div className="lg:col-span-8">
              {/* Title — painted on the wall */}
              <h1 className="font-painted text-painted text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6 uppercase">
                {feature.title}
              </h1>

              {/* Byline strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono">
                <span className="font-extrabold tracking-[0.15em] uppercase text-rocky-paper">
                  {feature.source}
                </span>
                <span className="h-1 w-1 rounded-full bg-mighty-red" aria-hidden="true" />
                <time
                  dateTime={feature.publishedDate}
                  className="tracking-[0.2em] uppercase text-[0.7rem] sm:text-xs text-rocky-paper/70"
                >
                  {feature.displayDate}
                </time>
                <span className="h-1 w-1 rounded-full bg-mighty-red" aria-hidden="true" />
                <a
                  href={feature.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-mighty-red hover:text-rocky-paper transition-colors uppercase tracking-[0.2em] text-[0.7rem] sm:text-xs font-extrabold"
                >
                  <span>View Original</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body — paper newsprint */}
      <div className="bg-paper text-mighty-shadow py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Back link */}
          <Link
            href="/#press"
            className="inline-flex items-center gap-2 text-mighty-red hover:text-mighty-shadow font-mono text-xs font-extrabold tracking-[0.2em] uppercase transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Press</span>
          </Link>

          {/* Byline + share */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 mb-10 border-b-2 border-mighty-shadow/30">
            <div>
              <p className="font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.3em] text-mighty-red mb-1">
                · Press Coverage ·
              </p>
              <p className="font-mono text-xs sm:text-sm text-mighty-shadow/70 uppercase tracking-[0.15em]">
                By <span className="font-extrabold text-mighty-shadow">{feature.source}</span>
                {' · About Robin Carruthers'}
              </p>
            </div>
            <ShareButtonsWrapper path={`/press/${feature.slug}`} title={feature.title} />
          </div>

          {/* Body paragraphs */}
          <div className="space-y-6">
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
                  className={`text-base sm:text-lg text-mighty-shadow leading-[1.75] ${
                    isFirst
                      ? 'first-letter:font-painted first-letter:text-mighty-red first-letter:text-7xl first-letter:float-left first-letter:mr-2 first-letter:leading-[0.9] first-letter:pt-1'
                      : ''
                  }`}
                >
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Origin footer — leather plate */}
          <div className="mt-14 pt-8 border-t-2 border-mighty-shadow/30">
            <div className="relative bg-rocky-leather leather-grain stitched text-mighty-shadow border-2 border-mighty-shadow rounded-sm p-5 sm:p-6 -rotate-[0.5deg]">
              <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />
              <p className="font-mono text-[10px] sm:text-xs font-extrabold text-mighty-red uppercase tracking-[0.3em] mb-2">
                · Original Publication ·
              </p>
              <p className="font-mono text-sm text-mighty-shadow leading-relaxed">
                This article was originally published by{' '}
                <a
                  href={feature.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-mighty-shadow underline decoration-mighty-red/60 underline-offset-4 hover:decoration-mighty-red transition-colors"
                >
                  {feature.source}
                </a>{' '}
                on {feature.displayDate}. Reproduced here for archival reference.
              </p>
              <a
                href={feature.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-mono text-xs font-extrabold text-mighty-shadow hover:text-mighty-red uppercase tracking-[0.2em] transition-colors"
              >
                <span>Read on {feature.source}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Share + back */}
          <div className="mt-12 pt-8 border-t-2 border-mighty-shadow/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-painted text-lg sm:text-xl text-mighty-shadow mb-1">Share this</p>
                <p className="font-mono text-[10px] sm:text-xs text-mighty-shadow/60 uppercase tracking-[0.2em]">
                  Help spread Robin&apos;s story
                </p>
              </div>
              <ShareButtonsWrapper path={`/press/${feature.slug}`} title={feature.title} />
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#press"
              className="relative inline-flex items-center justify-center gap-2 bg-mighty-red border-4 border-mighty-shadow px-6 py-3 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:bg-mighty-shadow active:translate-y-[3px] transition-all"
            >
              <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Press</span>
            </Link>
          </div>
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
      <blockquote className="relative pl-6 sm:pl-8 border-l-4 border-mighty-red">
        <p className="font-painted text-xl sm:text-2xl md:text-3xl text-mighty-shadow leading-[1.35]">
          &ldquo;{text}&rdquo;
        </p>
        <figcaption className="font-mono text-[10px] sm:text-xs text-mighty-red font-extrabold tracking-[0.3em] uppercase mt-3 not-italic">
          — Robin Carruthers
        </figcaption>
      </blockquote>
    </figure>
  )
}
