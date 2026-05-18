'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if we're on a blog post page
  const isBlogPostPage = pathname?.startsWith('/blog/')

  // Helper function to get the correct href
  const getNavHref = (hash: string) => {
    // If on blog post page, prepend with '/' to go to homepage first
    return isBlogPostPage ? `/${hash}` : hash
  }

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#egym', label: 'eGym' },
    { href: '#blog', label: 'Transformation & Insights' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b-2 border-accent-800/60 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex flex-col text-xl sm:text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
            aria-label="GymRob - Robin Carruthers - Home"
          >
            <span className="font-mono text-[0.6rem] sm:text-xs font-bold text-accent-400 tracking-[0.3em] uppercase">
              GymRob
            </span>
            <span className="iron-text font-serif uppercase tracking-tight leading-none">Robin Carruthers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getNavHref(link.href)}
                className="font-mono text-xs text-accent-200/80 hover:text-accent-300 transition-colors font-semibold uppercase tracking-[0.2em]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={getNavHref('#contact')}
              className="px-5 py-2 bg-gradient-to-b from-accent-500 to-accent-700 hover:from-accent-400 hover:to-accent-600 text-black font-bold rounded-sm transition-all uppercase tracking-wider text-sm border-2 border-accent-800 shadow-[0_3px_0_0_rgba(0,0,0,0.6)] active:translate-y-0.5"
            >
              Train With Robin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-primary-700"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={getNavHref(link.href)}
                    className="font-mono text-sm text-accent-200/80 hover:text-accent-300 transition-colors font-semibold uppercase tracking-[0.2em] py-2 break-words"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={getNavHref('#contact')}
                  className="px-6 py-3 bg-gradient-to-b from-accent-500 to-accent-700 hover:from-accent-400 hover:to-accent-600 text-black font-bold rounded-sm transition-all uppercase tracking-wider border-2 border-accent-800 shadow-[0_3px_0_0_rgba(0,0,0,0.6)] active:translate-y-0.5 text-center min-h-[44px] flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Train With Robin
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

