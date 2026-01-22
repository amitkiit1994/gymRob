import { MetadataRoute } from 'next'
import { getCanonicalUrl } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getCanonicalUrl().replace(/\/$/, '') // Remove trailing slash

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

