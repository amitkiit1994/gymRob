import type { Metadata } from 'next'
import { images } from '@/config/images'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://robincarruthers.com'

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Robin Carruthers | Fitness & Life Coach | 30+ Years of Excellence',
    template: '%s | Robin Carruthers',
  },
  description: '30+ years of coaching strength, discipline & life. Owner of eGym Lokhandwala. Transform your body and mind with proven training methods.',
  keywords: [
    'fitness coach',
    'personal trainer',
    'strength training',
    'life coach',
    'eGym Lokhandwala',
    'Robin Carruthers',
    'body recomposition',
    'lifestyle coaching',
    'transformation programs',
  ],
  authors: [{ name: 'Robin Carruthers' }],
  creator: 'Robin Carruthers',
  publisher: 'Robin Carruthers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Robin Carruthers',
    title: 'Robin Carruthers | Fitness & Life Coach',
    description: '30+ years of coaching strength, discipline & life. Owner of eGym Lokhandwala.',
    images: [
      {
        url: images.social.ogImage.startsWith('http') 
          ? images.social.ogImage 
          : `${siteUrl}${images.social.ogImage}`,
        width: 1200,
        height: 630,
        alt: 'Robin Carruthers - Fitness & Life Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robin Carruthers | Fitness & Life Coach',
    description: '30+ years of coaching strength, discipline & life.',
    images: [
      images.social.ogImage.startsWith('http') 
        ? images.social.ogImage 
        : `${siteUrl}${images.social.ogImage}`
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Fitness & Health',
}

