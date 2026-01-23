'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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

// Blog Card Component - Clean and Consistent Design
function BlogCard({ blog, index }: { blog: typeof otherBlogs[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { excerpt, hasMore } = createExcerpt(blog.content, 280)
  const paragraphs = formatContent(blog.content)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-primary-900 rounded-lg border border-primary-800 hover:border-accent-600 transition-all hover:shadow-xl group flex flex-col h-full"
    >
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        {/* Date */}
        <p className="text-xs text-accent-500 font-semibold mb-3 uppercase tracking-wide">
          {blog.date}
        </p>

        {/* Title */}
        <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-accent-500 transition-colors leading-tight">
          {blog.title}
        </h4>

        {/* Content */}
        <div className="flex-1 mb-4">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="excerpt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
                  {excerpt}
                  {hasMore && '...'}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3"
              >
                {paragraphs.map((paragraph, pIndex) => {
                  // Check if it's a heading/question
                  if (paragraph.length < 100 && (paragraph.includes('?') || paragraph.split(' ').length < 8)) {
                    return (
                      <h5 key={pIndex} className="text-base font-bold text-accent-500 mt-3 mb-2">
                        {paragraph}
                      </h5>
                    )
                  }
                  return (
                    <p key={pIndex} className="text-sm text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Read More Button - Links to individual blog page */}
        {hasMore && (
          <Link
            href={`/blog/${(blog as any).slug || createSlug(blog.title)}`}
            className="mt-auto px-4 py-2.5 sm:py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold text-xs sm:text-sm rounded transition-all transform hover:scale-105 flex items-center justify-center gap-2 w-full min-h-[40px] sm:min-h-[44px]"
          >
            <span>Read More</span>
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        )}
      </div>
    </motion.div>
  )
}

// Featured Blog Card Component - Reusable
function FeaturedBlogCard({ blog, index }: { blog: typeof featuredBlogs[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { excerpt, hasMore } = createExcerpt(blog.content, 600)
  const paragraphs = formatContent(blog.content)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="max-w-6xl mx-auto mb-16"
    >
      {blog.hasImage ? (
        // Layout with Image (Transformation Story)
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start mb-8 md:mb-12">
            {/* Before/After Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden border border-accent-600/50 shadow-2xl hover:border-accent-600 transition-all">
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
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-2 bg-accent-600 text-white text-sm font-bold rounded-full">
                  FEATURED STORY
                </span>
                <span className="text-gray-400 text-sm">By Robin Carruthers</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {blog.title}
              </h3>

              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {!isExpanded ? (
                    <motion.div
                      key="excerpt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        {excerpt}
                        {hasMore && '...'}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="full"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6"
                    >
                      {paragraphs.map((paragraph, pIndex) => {
                        if (paragraph.trim().startsWith('•')) {
                          return (
                            <div key={pIndex} className="pl-6 border-l-2 border-accent-600">
                              <p className="text-gray-300">{paragraph}</p>
                            </div>
                          )
                        }
                        if (paragraph.length < 100 && !paragraph.includes('.') && paragraph.split(' ').length < 10) {
                          return (
                            <h4 key={pIndex} className="text-2xl font-bold text-white mt-6 mb-4">
                              {paragraph}
                            </h4>
                          )
                        }
                        return (
                          <p key={pIndex} className="text-lg text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>

                {hasMore && (
                  <Link
                    href={`/blog/${(blog as any).slug || createSlug(blog.title)}`}
                    className="mt-4 sm:mt-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold text-sm sm:text-base rounded transition-all transform hover:scale-105 flex items-center justify-center gap-2 w-full"
                  >
                    <span>Read Full Story</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          </div>

          {/* Quote Section - Only for first blog */}
          {index === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary-900 p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-accent-600"
            >
              <p className="text-lg sm:text-xl text-white font-semibold italic mb-2">
                "Friends may come and go but 200 pounds will always be 200 pounds"
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                This isn't just a saying—it's a philosophy. Some things in life are constant. Your commitment to them defines who you become. The weights will always be there. The question is: will you be?
              </p>
            </motion.div>
          )}
        </>
      ) : (
        // Layout without Image (Text-focused)
        <div className="bg-primary-900 rounded-lg border border-primary-800 hover:border-accent-600 transition-all p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="flex items-center justify-between mb-6">
            <span className="px-4 py-2 bg-accent-600 text-white text-sm font-bold rounded-full">
              FEATURED STORY
            </span>
            <span className="text-gray-400 text-sm">By Robin Carruthers</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 sm:mb-6">
            {blog.title}
          </h3>

          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div
                  key="excerpt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    {excerpt}
                    {hasMore && '...'}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6"
                >
                      {paragraphs.map((paragraph, pIndex) => {
                        // Check if it's a signature (starts with — and contains name)
                        if (paragraph.trim().startsWith('—') && paragraph.includes('Robin')) {
                          return (
                            <div key={pIndex} className="mt-10 pt-8 border-t border-primary-700/30">
                              <div className="flex justify-start">
                                <div className="inline-block bg-transparent">
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
                            </div>
                          )
                        }
                        // Format short lines as emphasis/headings
                        if (paragraph.length < 80 && paragraph.split('\n').length === 1 && !paragraph.includes('.')) {
                          return (
                            <p key={pIndex} className="text-xl font-semibold text-accent-400 mt-6 mb-4">
                              {paragraph}
                            </p>
                          )
                        }
                        return (
                          <p key={pIndex} className="text-lg text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        )
                      })}
                </motion.div>
              )}
            </AnimatePresence>

            {hasMore && (
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-4 sm:mt-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold text-sm sm:text-base rounded transition-all transform hover:scale-105 flex items-center justify-center gap-2 w-full"
              >
                <span>Read Full Story</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}

// Featured Blogs Container
function FeaturedBlogsSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
          Transformation & Insights
        </h2>
        <div className="h-1 w-24 bg-accent-600 mx-auto mb-4 sm:mb-6" />
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
          The story behind 30 years of discipline, dedication, and transformation. Real insights and honest perspectives.
        </p>
      </div>

      {/* Featured Blogs */}
      {featuredBlogs.map((blog, index) => (
        <FeaturedBlogCard key={blog.title} blog={blog} index={index} />
      ))}
    </div>
  )
}

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Blogs Section */}
        <FeaturedBlogsSection />

        {/* Other Blog Posts Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
              More Insights
            </h3>
            <div className="h-1 w-16 bg-accent-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {otherBlogs.map((blog, index) => (
              <BlogCard key={blog.title} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
