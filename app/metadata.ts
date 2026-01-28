import type { Metadata } from 'next'
import { images } from '@/config/images'
import { getSiteUrl, getCanonicalUrl, getAlternateLinks } from '@/lib/seo'

const siteUrl = getSiteUrl()

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GymRob | Robin Carruthers | Fitness & Life Coach | Strength. Discipline. Life.',
    template: '%s | GymRob | Robin Carruthers',
  },
  description: 'GymRob - Robin Carruthers. Strength. Discipline. Life. Personal trainer and fitness coach. Owner of eGym Lokhandwala in Mumbai. Transform your body and mind with proven training methods.',
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
    siteName: 'GymRob - Robin Carruthers',
    title: 'GymRob | Robin Carruthers | Fitness & Life Coach',
    description: 'GymRob - Strength. Discipline. Life. Owner of eGym Lokhandwala in Mumbai.',
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
    title: 'GymRob | Robin Carruthers | Fitness & Life Coach',
    description: 'GymRob - Strength. Discipline. Life.',
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
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '192x192' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
  },
  category: 'Fitness & Health',
}

