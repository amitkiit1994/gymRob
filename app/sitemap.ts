import { MetadataRoute } from 'next'
import { getCanonicalUrl } from '@/lib/seo'
import { getAllBlogSlugs } from '@/lib/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalUrl().replace(/\/$/, '') // Remove trailing slash
  const now = new Date()

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#egym`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#location`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#testimonials`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Blog post pages
  const blogSlugs = getAllBlogSlugs()
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...mainPages, ...blogPages]
}

