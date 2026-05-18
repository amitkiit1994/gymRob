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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: isScrolled ? '#0e0a07' : 'rgba(14, 10, 7, 0.92)',
        backgroundImage: [
          // Top key highlight bar (light catching the top edge of the beam)
          'linear-gradient(180deg, rgba(254, 215, 170, 0.22) 0%, transparent 14%)',
          // Bottom heavy shadow (beam sits proud of the wall, casts down)
          'linear-gradient(180deg, transparent 76%, rgba(0, 0, 0, 0.7) 100%)',
          // Brushed horizontal grain
          'repeating-linear-gradient(90deg, transparent 0, rgba(255,255,255,0.05) 1px, transparent 3px, rgba(0,0,0,0.18) 4px, transparent 7px)',
          // Rust streaks at both ends
          'radial-gradient(ellipse 12% 80% at 5% 50%, rgba(164, 39, 31, 0.28) 0%, transparent 70%)',
          'radial-gradient(ellipse 12% 80% at 95% 50%, rgba(124, 45, 18, 0.30) 0%, transparent 70%)',
          // Base iron gradient
          'linear-gradient(180deg, #1f1611 0%, #050201 100%)',
        ].join(', '),
        boxShadow: [
          // Inset top highlight (beam edge)
          'inset 0 2px 0 rgba(255, 235, 200, 0.22)',
          // Inset bottom shadow (beam edge)
          'inset 0 -2px 0 rgba(0, 0, 0, 0.92)',
          // Outer cast shadow on the wall below the beam
          '0 4px 0 rgba(0, 0, 0, 0.5)',
          '0 10px 18px rgba(0, 0, 0, 0.55)',
          '0 20px 28px rgba(0, 0, 0, 0.35)',
        ].join(', '),
      }}
    >
      {/* Heavy weld-seam bottom border (rust-orange light leak under the beam) */}
      <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-mighty-red/80 to-transparent shadow-[0_1px_0_rgba(0,0,0,0.9)]" />

      {/* Rivets along the beam — bolting it to the wall (left + right ends + 2 inset) */}
      <span className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 w-3 h-3 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #f3f4f6 0%, #9ca3af 30%, #1f2937 75%, #000 100%)',
          boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 1px rgba(0,0,0,0.9), 0 2px 3px rgba(0,0,0,0.7)',
        }}
        aria-hidden="true"
      />
      <span className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 w-3 h-3 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #f3f4f6 0%, #9ca3af 30%, #1f2937 75%, #000 100%)',
          boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 1px rgba(0,0,0,0.9), 0 2px 3px rgba(0,0,0,0.7)',
        }}
        aria-hidden="true"
      />

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative" aria-label="Main navigation">
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
              className="relative inline-flex items-center gap-2 painted-metal-red wearouts border-2 border-mighty-shadow px-4 py-2 font-painted text-rocky-paper text-xs uppercase tracking-wider rounded-sm shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] hover:brightness-110 active:translate-y-[2px] active:shadow-[0_1px_0_-1px_rgba(0,0,0,0.85)] transition-all"
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
                  className="relative mt-3 inline-flex items-center justify-center painted-metal-red wearouts border-2 border-mighty-shadow px-6 py-3 font-painted text-rocky-paper text-sm uppercase tracking-wider rounded-sm shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] active:translate-y-[2px] transition-all"
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
