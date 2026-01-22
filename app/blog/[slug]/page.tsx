import { notFound } from 'next/navigation'
import { getBlogBySlug, getAllBlogSlugs } from '@/lib/blogData'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/config/images'
import ShareButtons from '@/components/ShareButtons'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug)
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://robincarruthers.com'
  const url = `${siteUrl}/blog/${params.slug}`
  const excerpt = blog.content.substring(0, 160).replace(/\n/g, ' ').trim() + '...'

  return {
    title: `${blog.title} | Robin Carruthers`,
    description: excerpt,
    openGraph: {
      title: blog.title,
      description: excerpt,
      url: url,
      siteName: 'Robin Carruthers',
      type: 'article',
      authors: ['Robin Carruthers'],
      images: [
        {
          url: blog.hasImage 
            ? `${siteUrl}${images.transformation.beforeAfter}`
            : `${siteUrl}${images.social.ogImage}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: excerpt,
      images: [
        blog.hasImage 
          ? `${siteUrl}${images.transformation.beforeAfter}`
          : `${siteUrl}${images.social.ogImage}`
      ],
    },
    alternates: {
      canonical: url,
    },
  }
}

// Format content into paragraphs for display
function formatContent(content: string) {
  return content.split(/\n\n+/).filter(p => p.trim())
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  const paragraphs = formatContent(blog.content)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://robincarruthers.com'
  const shareUrl = `${siteUrl}/blog/${params.slug}`

  return (
    <article className="min-h-screen bg-primary-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/#blog"
          className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Blog</span>
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-4 py-2 bg-accent-600 text-white text-sm font-bold rounded-full">
              {blog.date ? 'BLOG POST' : 'FEATURED STORY'}
            </span>
            {blog.date && (
              <span className="text-gray-400 text-sm">{blog.date}</span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>By Robin Carruthers</span>
            <span>•</span>
            <ShareButtons url={shareUrl} title={blog.title} />
          </div>
        </header>

        {/* Image (if applicable) */}
        {blog.hasImage && (
          <div className="mb-12 relative">
            <div className="relative rounded-lg overflow-hidden border border-accent-600/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-primary-900/60 z-10" />
              <Image
                src={images.transformation.beforeAfter}
                alt="Before and After Transformation"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-primary-900 px-6 py-2 rounded-full border border-accent-600 shadow-lg">
              <span className="text-white font-semibold text-sm">The Journey</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            {paragraphs.map((paragraph, index) => {
              // Check if it's a signature
              if (paragraph.trim().startsWith('—') && paragraph.includes('Robin')) {
                return (
                  <div key={index} className="mt-10 pt-8 border-t border-primary-700/30">
                    <div className="flex justify-start">
                      <Image
                        src={images.signature.image}
                        alt="Robin Carruthers Signature"
                        width={200}
                        height={80}
                        className="h-auto w-auto max-w-[200px] object-contain bg-transparent"
                        style={{ 
                          backgroundColor: 'transparent',
                          display: 'block'
                        }}
                      />
                    </div>
                  </div>
                )
              }
              // Bullet points
              if (paragraph.trim().startsWith('•')) {
                return (
                  <div key={index} className="pl-6 border-l-2 border-accent-600">
                    <p className="text-gray-300">{paragraph}</p>
                  </div>
                )
              }
              // Headings (short lines)
              if (paragraph.length < 100 && !paragraph.includes('.') && paragraph.split(' ').length < 10) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                    {paragraph}
                  </h2>
                )
              }
              // Regular paragraphs
              return (
                <p key={index} className="text-lg text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>

        {/* Quote Section (only for first featured blog) */}
        {blog.slug === 'rebuilding-after-40' && (
          <div className="mt-12 bg-primary-900 p-8 rounded-lg border-l-4 border-accent-600">
            <p className="text-xl text-white font-semibold italic mb-2">
              "Friends may come and go but 200 pounds will always be 200 pounds"
            </p>
            <p className="text-gray-400">
              This isn't just a saying—it's a philosophy. Some things in life are constant. Your commitment to them defines who you become. The weights will always be there. The question is: will you be?
            </p>
          </div>
        )}

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-primary-700/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Share this post</h3>
              <p className="text-gray-400 text-sm">Help others discover this story</p>
            </div>
            <ShareButtons url={shareUrl} title={blog.title} />
          </div>
        </div>

        {/* Back to Blog Link */}
        <div className="mt-12 text-center">
          <Link 
            href="/#blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded transition-all transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to All Posts</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

