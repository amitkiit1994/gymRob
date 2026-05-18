import { Inter, Playfair_Display, Anton, Bowlby_One_SC, JetBrains_Mono, Oswald, Alfa_Slab_One } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { siteMetadata } from './metadata'
import { getCanonicalUrl, getAlternateLinks } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

// Iron / machinery headline — Anton = heavy condensed industrial sans
// Reads as factory signage / forklift plate / heavy-equipment label.
const anton = Anton({
  subsets: ['latin'],
  variable: '--font-iron',
  display: 'swap',
  weight: ['400'],
})

// Bowlby One SC — chunky hammered display kept around for section sub-heads
const bowlby = Bowlby_One_SC({
  subsets: ['latin'],
  variable: '--font-stamp',
  display: 'swap',
  weight: ['400'],
})

// JetBrains Mono — metadata / stamped serial IDs (design.md §3)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Oswald — closest free match to Franklin Gothic Heavy (the ROCKY title font)
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-rocky',
  display: 'swap',
  weight: ['500', '600', '700'],
})

// Alfa Slab One — vintage slab/poster signage (Mighty Mick's painted lettering)
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${anton.variable} ${bowlby.variable} ${jetbrainsMono.variable} ${oswald.variable} ${alfaSlab.variable}`}>
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

