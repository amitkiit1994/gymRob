import { notFound } from 'next/navigation'
import { getBlogBySlug, getAllBlogSlugs } from '@/lib/blogData'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/config/images'
import ShareButtonsWrapper from '@/components/ShareButtonsWrapper'
import { getCanonicalUrl } from '@/lib/seo'
import { headers } from 'next/headers'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug)
  if (!blog) return { title: 'Blog Post Not Found' }

  const headersList = await headers()
  const host = headersList.get('host') || 'www.gymrob.com'
  const protocol = headersList.get('x-forwarded-proto') || 'https'
  const currentDomain = `${protocol}://${host}`

  const canonicalUrl = getCanonicalUrl(`/blog/${params.slug}`)
  const excerpt = blog.content.substring(0, 160).replace(/\n/g, ' ').trim() + '...'

  const ogImage = blog.hasImage
    ? `${currentDomain}${images.transformation.beforeAfter}`
    : `${currentDomain}${images.social.ogImage}`

  return {
    title: `${blog.title} | Robin Carruthers`,
    description: excerpt,
    openGraph: {
      title: blog.title,
      description: excerpt,
      url: `${currentDomain}/blog/${params.slug}`,
      siteName: 'Robin Carruthers',
      type: 'article',
      authors: ['Robin Carruthers'],
      publishedTime: blog.date || undefined,
      images: [{ url: ogImage, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: excerpt,
      images: [ogImage],
    },
    alternates: { canonical: canonicalUrl },
  }
}

function formatContent(content: string) {
  return content.split(/\n\n+/).filter((p) => p.trim())
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug)
  if (!blog) notFound()

  const paragraphs = formatContent(blog.content)

  return (
    <article className="min-h-screen bg-brick">
      {/* Pinned header on brick wall */}
      <header className="relative pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(254,250,224,0.08)_0%,_transparent_55%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-mighty-red/60 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl z-10">
          {/* Back link */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-mighty-red hover:text-rocky-paper font-mono text-xs font-extrabold tracking-[0.2em] uppercase transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Journal</span>
          </Link>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-mighty-shadow border-2 border-rocky-paper/30 rounded-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mighty-red animate-pulse" />
              <span className="font-mono text-[0.6rem] sm:text-xs font-extrabold tracking-[0.35em] uppercase text-rocky-paper">
                {blog.date ? 'Journal Entry' : 'Featured Entry'}
              </span>
            </span>
            {blog.date && (
              <span className="font-mono text-[10px] sm:text-xs text-rocky-paper/60 tracking-[0.2em] uppercase">
                {blog.date}
              </span>
            )}
          </div>

          {/* Title — painted on the wall */}
          <h1 className="font-painted text-painted text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight uppercase mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-[11px] sm:text-xs text-rocky-paper/70 uppercase tracking-[0.2em]">
            <span>
              By <span className="font-extrabold text-rocky-paper">Robin Carruthers</span>
            </span>
            <span className="h-1 w-1 rounded-full bg-mighty-red" aria-hidden="true" />
            <ShareButtonsWrapper path={`/blog/${params.slug}`} title={blog.title} />
          </div>
        </div>
      </header>

      {/* Body — paper notebook page */}
      <div className="bg-paper text-mighty-shadow py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Image (transformation only) — pinned polaroid */}
          {blog.hasImage && (
            <figure className="relative mx-auto max-w-md mb-14 -rotate-2">
              <div className="bg-paper p-3 sm:p-4 border-2 border-mighty-shadow wall-cast">
                <div className="relative aspect-[4/5] overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow photo-grain">
                  <Image
                    src={images.transformation.beforeAfter}
                    alt="Before and After Transformation"
                    fill
                    sizes="(min-width: 640px) 28rem, 100vw"
                    className="object-cover grayscale-[0.4] contrast-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mighty-shadow/60 via-transparent to-transparent" />
                </div>
                <p className="font-mono text-[10px] sm:text-xs text-mighty-shadow font-extrabold tracking-[0.25em] uppercase text-center mt-3">
                  The Journey · 120 → 78
                </p>
              </div>
              <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
            </figure>
          )}

          {/* Content */}
          <div className="space-y-5 text-mighty-shadow">
            {paragraphs.map((paragraph, index) => {
              // Signature
              if (paragraph.trim().startsWith('—') && paragraph.includes('Robin')) {
                return (
                  <div key={index} className="mt-10 pt-8 border-t-2 border-mighty-shadow/30">
                    <Image
                      src={images.signature.image}
                      alt="Robin Carruthers Signature"
                      width={200}
                      height={80}
                      className="h-auto w-auto max-w-[200px] object-contain bg-transparent"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                )
              }
              // Bullets
              if (paragraph.trim().startsWith('•')) {
                return (
                  <div key={index} className="pl-6 border-l-4 border-mighty-red">
                    <p className="font-mono text-sm sm:text-base text-mighty-shadow leading-relaxed">
                      {paragraph}
                    </p>
                  </div>
                )
              }
              // Subheadings (short lines)
              const isPoetryOrVerse = paragraph.includes('\n') && paragraph.trim().split('\n').length > 1
              if (!isPoetryOrVerse && paragraph.length < 100 && !paragraph.includes('.') && paragraph.split(' ').length < 10) {
                return (
                  <h2
                    key={index}
                    className="font-painted text-mighty-shadow text-2xl sm:text-3xl uppercase mt-10 mb-3 leading-tight"
                  >
                    {paragraph}
                  </h2>
                )
              }
              // Regular prose
              const isFirst = index === 0
              return (
                <p
                  key={index}
                  className={`text-base sm:text-lg text-mighty-shadow leading-[1.75] ${
                    paragraph.includes('\n') ? 'whitespace-pre-line' : ''
                  } ${
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

          {/* Pull quote (only for "rebuilding-after-40") */}
          {blog.slug === 'rebuilding-after-40' && (
            <figure className="relative bg-rocky-leather leather-grain stitched text-mighty-shadow p-6 sm:p-8 mt-12 rotate-1 border-4 border-mighty-shadow shadow-[0_18px_36px_rgba(0,0,0,0.8),inset_0_2px_0_rgba(255,255,255,0.12)]">
              <span className="pin-bolt absolute -top-2 left-8" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 right-8" aria-hidden="true" />
              <p className="font-painted text-lg sm:text-xl md:text-2xl leading-[1.4] text-mighty-shadow mb-3">
                &ldquo;Friends may come and go but 200 pounds will always be 200 pounds.&rdquo;
              </p>
              <p className="font-mono text-xs sm:text-sm text-mighty-shadow/70">
                Not a saying — a philosophy. Some things in life are constant. Your commitment defines who you become.
              </p>
            </figure>
          )}

          {/* Share + back */}
          <div className="mt-14 pt-8 border-t-2 border-mighty-shadow/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-painted text-lg sm:text-xl text-mighty-shadow mb-1">Share this entry</p>
                <p className="font-mono text-[10px] sm:text-xs text-mighty-shadow/60 uppercase tracking-[0.2em]">
                  Pass it on
                </p>
              </div>
              <ShareButtonsWrapper path={`/blog/${params.slug}`} title={blog.title} />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#blog"
              className="relative inline-flex items-center justify-center gap-2 bg-mighty-red border-4 border-mighty-shadow px-6 py-3 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:bg-mighty-shadow active:translate-y-[3px] transition-all"
            >
              <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Journal</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
