import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { images } from '@/config/images'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://robincarruthers.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Robin Carruthers | Fitness & Life Coach | 30+ Years of Excellence',
  description: '30+ years of coaching strength, discipline & life. Owner of eGym Lokhandwala. Transform your body and mind with proven training methods.',
  keywords: ['fitness coach', 'personal trainer', 'strength training', 'life coach', 'eGym Lokhandwala', 'Robin Carruthers'],
  authors: [{ name: 'Robin Carruthers' }],
  openGraph: {
    title: 'Robin Carruthers | Fitness & Life Coach',
    description: '30+ years of coaching strength, discipline & life. Owner of eGym Lokhandwala.',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Robin Carruthers',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <StructuredData />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

