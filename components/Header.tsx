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

  const isBlogPostPage = pathname?.startsWith('/blog/') || pathname?.startsWith('/press/')
  const getNavHref = (hash: string) => (isBlogPostPage ? `/${hash}` : hash)

  const navLinks = [
    { href: '#story', label: 'The Story' },
    { href: '#services', label: 'Offerings' },
    { href: '#egym', label: 'The Temple' },
    { href: '#testimonials', label: 'Fraternity' },
    { href: '#press', label: 'Press' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-mighty-shadow/95 backdrop-blur-md shadow-[0_4px_18px_rgba(0,0,0,0.85)]'
          : 'bg-mighty-shadow/30 backdrop-blur-sm'
      }`}
    >
      {/* Heavy weld-seam bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-mighty-red/80 to-transparent shadow-[0_1px_0_rgba(0,0,0,0.9)]" />

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Wordmark — painted gym-sign style */}
          <Link
            href="/"
            className="flex flex-col leading-none hover:opacity-90 transition-opacity"
            aria-label="GymRob - Robin Carruthers - Home"
          >
            <span className="font-mono text-[0.55rem] sm:text-[0.65rem] font-bold text-mighty-red tracking-[0.4em] uppercase mb-0.5">
              Est · GymRob
            </span>
            <span className="font-painted text-rocky-paper text-lg sm:text-xl uppercase tracking-tight">
              Robin Carruthers
            </span>
          </Link>

          {/* Desktop Navigation — stenciled wall labels */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getNavHref(link.href)}
                className="font-mono text-[0.7rem] lg:text-xs text-rocky-paper/80 hover:text-rocky-paper font-bold uppercase tracking-[0.25em] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-mighty-red group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}

            {/* CTA — small painted-metal sign with bolts */}
            <Link
              href={getNavHref('#contact')}
              className="relative inline-flex items-center gap-2 bg-mighty-red border-2 border-mighty-shadow px-4 py-2 font-painted text-rocky-paper text-xs uppercase tracking-wider rounded-sm shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] hover:bg-rocky-leather hover:text-mighty-shadow active:translate-y-[2px] active:shadow-[0_1px_0_-1px_rgba(0,0,0,0.85)] transition-all"
            >
              <span className="pin-bolt absolute -top-1.5 -left-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
              <span className="pin-bolt absolute -top-1.5 -right-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
              Train With Robin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-rocky-paper p-2 border border-rocky-paper/30 rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
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
              className="md:hidden py-4 border-t border-mighty-red/40"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={getNavHref(link.href)}
                    className="font-mono text-sm text-rocky-paper/80 hover:text-rocky-paper hover:bg-mighty-shadow/60 font-bold uppercase tracking-[0.2em] py-3 px-2 break-words border-l-2 border-transparent hover:border-mighty-red transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={getNavHref('#contact')}
                  className="relative mt-3 inline-flex items-center justify-center bg-mighty-red border-2 border-mighty-shadow px-6 py-3 font-painted text-rocky-paper text-sm uppercase tracking-wider rounded-sm shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] active:translate-y-[2px] transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="pin-bolt absolute -top-1.5 -left-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
                  <span className="pin-bolt absolute -top-1.5 -right-1.5" style={{ width: 10, height: 10 }} aria-hidden="true" />
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
