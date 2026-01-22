import { Inter } from 'next/font/google'
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

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const canonicalUrl = getCanonicalUrl()
  const alternateLinks = getAlternateLinks()
  
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
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

