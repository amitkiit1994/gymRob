'use client'

import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/config/images'
import { featuredBlogs, otherBlogs } from '@/lib/blogData'

// Helper to create excerpt with character limit (more predictable)
function createExcerpt(content: string, maxChars: number = 250): { excerpt: string; hasMore: boolean } {
  const originalContent = content.trim()
  
  // Remove signature from content for excerpt display
  let cleanContent = originalContent
  const signatureIndex = cleanContent.indexOf('—')
  if (signatureIndex > 0) {
    cleanContent = cleanContent.substring(0, signatureIndex).trim()
  }
  
  // Check if original content (including signature) is longer than maxChars
  const hasMoreContent = originalContent.length > maxChars
  
  if (cleanContent.length <= maxChars) {
    return { excerpt: cleanContent, hasMore: hasMoreContent }
  }
  
  // Find the last complete sentence or word before the limit
  let excerpt = cleanContent.substring(0, maxChars)
  const lastPeriod = excerpt.lastIndexOf('.')
  const lastSpace = excerpt.lastIndexOf(' ')
  
  // Prefer ending at a sentence, then at a word
  if (lastPeriod > maxChars * 0.7) {
    excerpt = cleanContent.substring(0, lastPeriod + 1)
  } else if (lastSpace > maxChars * 0.8) {
    excerpt = cleanContent.substring(0, lastSpace)
  }
  
  return { excerpt: excerpt.trim(), hasMore: hasMoreContent }
}

// Format content into paragraphs for display
function formatContent(content: string) {
  return content.split(/\n\n+/).filter(p => p.trim())
}

// Helper to create slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Main featured blog content (keeping for backward compatibility)
const featuredBlog = featuredBlogs[0]

// Blog Card — paper notebook page pinned to wall
function BlogCard({ blog, index }: { blog: typeof otherBlogs[0], index: number }) {
  const { excerpt, hasMore } = createExcerpt(blog.content, 240)
  const tilts = [-1, 1.2, -0.8, 1.5, -1.2]
  const tilt = tilts[index % tilts.length]

  return (
    <article
      className="relative bg-paper text-mighty-shadow p-5 sm:p-6 border border-mighty-shadow/40 shadow-plate flex flex-col h-full"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
      <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />

      {/* Date stamp */}
      <p className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.25em] uppercase mb-3 border-b border-mighty-shadow/30 pb-2">
        {blog.date || 'Entry'}
      </p>

      {/* Title — painted */}
      <h4 className="font-painted text-mighty-shadow text-lg sm:text-xl leading-tight uppercase mb-3">
        {blog.title}
      </h4>

      {/* Excerpt */}
      <p className="text-sm text-mighty-shadow/80 leading-relaxed mb-4 flex-1 font-mono">
        {excerpt}
        {hasMore && '...'}
      </p>

      {/* Read More — tertiary: painted underlined text on the paper itself,
          like a journalist's reference line. No plaque, no pin-bolts. */}
      {hasMore && (
        <Link
          href={`/blog/${(blog as any).slug || createSlug(blog.title)}`}
          className="group mt-auto inline-flex items-center gap-1.5 font-painted text-mighty-red text-xs sm:text-sm uppercase tracking-[0.15em] underline decoration-mighty-red decoration-2 underline-offset-[5px] hover:decoration-mighty-shadow hover:text-mighty-shadow transition-colors self-start"
        >
          <span>Read Entry</span>
          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </article>
  )
}

// Featured Blog Card — pinned-paper spread, hero entry on the notebook wall
function FeaturedBlogCard({ blog, index }: { blog: typeof featuredBlogs[0], index: number }) {
  const { excerpt, hasMore } = createExcerpt(blog.content, 520)

  return (
    <article
      className="max-w-6xl mx-auto mb-14 sm:mb-20"
    >
      <div className={`grid grid-cols-1 ${blog.hasImage ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-start' : ''}`}>
        {/* Documentary spread — paper backing only, no inner frame.
            The image is editorial evidence of the journey, not a portrait. */}
        {blog.hasImage && (
          <figure
            className="lg:col-span-5 relative mx-auto lg:mx-0 max-w-[340px] w-full"
          >
            <div className="bg-paper p-3 sm:p-4 border border-mighty-shadow/40 wall-cast">
              <div className="relative aspect-[4/5] overflow-hidden bg-mighty-shadow photo-grain">
                <Image
                  src={images.transformation.beforeAfter}
                  alt="Before and After Transformation"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover grayscale-[0.4] contrast-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mighty-shadow/60 via-transparent to-transparent" />
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-mighty-shadow font-bold tracking-[0.25em] uppercase text-center mt-3">
                The Journey · 120 → 78
              </p>
            </div>
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
          </figure>
        )}

        {/* Story — paper notebook page pinned to the wall */}
        <div
          className={`${blog.hasImage ? 'lg:col-span-7' : ''} relative`}
        >
          <div className="relative bg-paper text-mighty-shadow p-6 sm:p-8 md:p-10 border-2 border-mighty-shadow shadow-[0_18px_36px_rgba(0,0,0,0.8)] -rotate-[0.4deg]">
            <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />

            <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-mighty-shadow/30">
              <div className="relative inline-flex items-center painted-metal-red border-2 border-mighty-shadow px-2.5 py-0.5 rounded-sm shadow-[0_2px_0_-1px_rgba(0,0,0,0.85)]">
                <span className="font-mono text-[10px] font-extrabold tracking-[0.3em] uppercase text-rocky-paper">
                  · Featured Entry ·
                </span>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-mighty-shadow/60 uppercase tracking-[0.2em]">
                By Robin
              </span>
            </div>

            <h3 className="font-painted text-mighty-shadow text-2xl sm:text-3xl md:text-4xl leading-[1.15] uppercase mb-5 sm:mb-6">
              {blog.title}
            </h3>

            <p className="text-sm sm:text-base text-mighty-shadow/85 leading-relaxed mb-6 font-mono whitespace-pre-line">
              {excerpt}
              {hasMore && '...'}
            </p>

            {hasMore && (
              <Link
                href={`/blog/${(blog as any).slug || createSlug(blog.title)}`}
                className="group inline-flex items-center gap-1.5 font-painted text-mighty-red text-sm sm:text-base uppercase tracking-[0.15em] underline decoration-mighty-red decoration-2 underline-offset-[6px] hover:decoration-mighty-shadow hover:text-mighty-shadow transition-colors"
              >
                <span>Read Full Entry</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Pull quote (only for first blog with image) — chalked on the gym's
          coach slate. No paper, no tacks: hand-written in chalk on a dark
          board hung on the wall, with an uneven chalked border drawn around
          the words. */}
      {blog.hasImage && index === 0 && (
        <figure
          className="relative bg-chalkboard p-6 sm:p-8 mt-10 sm:mt-12 rotate-[0.6deg] rounded-sm max-w-3xl mx-auto"
          style={{
            boxShadow:
              'inset 0 0 0 2px rgba(240,237,224,0.18), inset 0 0 0 6px rgba(20,33,23,0.7), inset 0 0 0 7px rgba(240,237,224,0.12), 0 16px 30px rgba(0,0,0,0.7), 0 2px 0 -1px rgba(0,0,0,0.85)',
          }}
        >
          <p
            className="font-painted text-chalk text-lg sm:text-xl md:text-2xl leading-[1.4] mb-3 uppercase tracking-[0.04em]"
          >
            &ldquo;Friends may come and go but 200 pounds will always be 200 pounds.&rdquo;
          </p>
          <p
            className="text-chalk font-mono text-xs sm:text-sm opacity-80"
          >
            Not a saying — a philosophy. Some things in life are constant. Your commitment defines who you become. The weights will always be there. Will you?
          </p>
        </figure>
      )}
    </article>
  )
}

// Featured Blogs Container — flat, no header (ChapterShell provides header)
function FeaturedBlogsSection() {
  return (
    <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
      {featuredBlogs.map((blog, index) => (
        <FeaturedBlogCard key={blog.title} blog={blog} index={index} />
      ))}
    </div>
  )
}

export default function Blog() {
  return (
    <section id="blog" className="relative bg-brick brick-cracks bg-brick-spotlight-left py-20 sm:py-28 overflow-hidden">
      {/* Top welded iron seam */}
      <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-mighty-shadow via-mighty-red/70 to-mighty-shadow shadow-weld-seam z-30" />
      {/* Light dark scrim so paper cards still pop — but wall stays visible */}
      <div className="absolute inset-0 bg-mighty-shadow/25 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notebook-style heading on lined paper. Chapter-stamp corners
            removed (wave-5) to honor the Hallmark "present cluster un-numbered"
            claim — masthead now reads as eyebrow + H2 only. */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-block relative bg-paper text-mighty-shadow px-6 py-5 sm:px-10 sm:py-7 -rotate-[0.8deg] border-2 border-mighty-shadow shadow-plate">
            <span className="pin-bolt absolute -top-2 left-6 sm:left-10" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 right-6 sm:right-10" aria-hidden="true" />
            <p className="font-mono text-[10px] sm:text-xs text-mighty-red font-bold tracking-[0.35em] uppercase mb-2 mt-1 sm:mt-2">
              The Coach&apos;s Notebook
            </p>
            <h2 className="font-painted text-mighty-shadow text-3xl sm:text-5xl md:text-6xl uppercase leading-tight">
              Transformation &amp; Insights
            </h2>
          </div>
        </div>

        {/* Featured */}
        <FeaturedBlogsSection />

        {/* More Insights — no standalone chip header; the cards are clearly
            the "rest of the notebook" by adjacency to the featured spread. */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {otherBlogs.map((blog, index) => (
              <BlogCard key={blog.title} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
