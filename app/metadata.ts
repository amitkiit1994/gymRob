import type { Metadata } from 'next'
import { images } from '@/config/images'
import { getSiteUrl, getCanonicalUrl, getAlternateLinks } from '@/lib/seo'

const siteUrl = getSiteUrl()

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Robin Carruthers | Fitness & Life Coach | 30+ Years of Excellence',
    template: '%s | Robin Carruthers',
  },
  description: 'Robin Carruthers - Personal trainer and fitness coach with 30+ years of experience. Owner of eGym Lokhandwala in Mumbai. Transform your body and mind with proven training methods. GymRob fitness coaching.',
  keywords: [
    'Robin Carruthers',
    'GymRob',
    'gymrob',
    'fitness coach',
    'personal trainer',
    'personal trainer Mumbai',
    'fitness coach Andheri',
    'strength training',
    'life coach',
    'eGym Lokhandwala',
    'body recomposition',
    'lifestyle coaching',
    'transformation programs',
    'personal trainer Lokhandwala',
    'fitness coach Mumbai',
    'Robin Carruthers fitness',
    'GymRob personal trainer',
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
    canonical: getCanonicalUrl(),
    languages: {
      'en': getCanonicalUrl(),
      'en-US': getCanonicalUrl(),
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '16x16 32x32 48x48' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  category: 'Fitness & Health',
}

