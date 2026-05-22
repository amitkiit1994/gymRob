import { Inter, JetBrains_Mono, Alfa_Slab_One } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import SvgFilters from '@/components/SvgFilters'
import MobileStickyCTA from '@/components/MobileStickyCTA'
import { siteMetadata } from './metadata'
import { getCanonicalUrl, getAlternateLinks } from '@/lib/seo'

// 2+1 typographic system (Hallmark rule):
//   Inter      — body prose
//   Alfa Slab  — painted display / Mighty Mick's signage
//   JetBrains  — receipts, dates, fight-card metadata
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// JetBrains Mono — metadata / stamped serial IDs (design.md §3)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Alfa Slab One — vintage slab/poster signage (Mighty Mick's painted lettering).
// Inherits every retired display role (Anton/Oswald/Bowlby/Playfair) under the
// 2+1 cull. The stencil-paint utilities still ride on top of this face.
const alfaSlab = Alfa_Slab_One({
  subsets: ['latin'],
  variable: '--font-painted',
  display: 'swap',
  weight: ['400'],
})

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const canonicalUrl = getCanonicalUrl()
  const alternateLinks = getAlternateLinks()
  
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${alfaSlab.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href={canonicalUrl} />
        {alternateLinks.map((link, index) => (
          <link key={index} rel="alternate" hrefLang={link.hreflang} href={link.href} />
        ))}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.1364;72.8296" />
        <meta name="ICBM" content="19.1364, 72.8296" />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="kJTwjnnqH6O7UP_QHfKp0NUyA8XhsRbtAvda7AyHdb4" />
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        )}
      </head>
      <body className="min-h-screen flex flex-col film-grain color-grade">
        {/* Skip-to-content link — first focusable element. Keyboard users land
            here on first Tab so they bypass the 96px chapter-spine rail, the
            mobile sticky CTA, and the hamburger sheet trigger. Hidden via
            sr-only until focused, then painted as a brand chip in the corner. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-mighty-red focus:text-rocky-paper focus:px-4 focus:py-2 focus:rounded-sm focus:shadow-rail focus:outline-none focus:ring-2 focus:ring-rocky-paper"
        >
          Skip to content
        </a>
        <SvgFilters />
        <StructuredData />
        <Header />
        {/* lg:pl-[var(--rail-w)] shifts page content off the N3 chapter-spine
            rail. Rail is hidden below the lg breakpoint, so no padding on
            mobile. Footer rides the same offset so the wall reads continuous. */}
        <main id="main" className="flex-1 lg:pl-[var(--rail-w,96px)]">
          {children}
        </main>
        <div className="lg:pl-[var(--rail-w,96px)]">
          <Footer />
        </div>
        <MobileStickyCTA />
      </body>
    </html>
  )
}

