'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

/**
 * MobileStickyCTA — a fixed iron beam at the bottom of the screen on mobile
 * with primary "Train With Robin" + "WhatsApp" CTAs. Always reachable with
 * the thumb. Auto-hides on desktop (md+) and on the contact section itself.
 */
export default function MobileStickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after the user scrolls past the hero (~600px)
      const past = window.scrollY > 600
      // Hide if they're already on the contact section
      const contact = document.getElementById('contact')
      const inContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight - 200
        : false
      setShow(past && !inContact)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!show}
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* The iron beam itself.
       * Brand-palette colours promoted to CSS vars (gate-58 mid-render
       * decision cleanup); the rgba()/linear-gradient noise that
       * remains is procedural surface texture (rim light, AO band,
       * vertical brush) and stays as literal alpha math. */}
      <div
        className="relative"
        style={{
          backgroundColor: 'var(--mighty-shadow)',
          backgroundImage: [
            'linear-gradient(180deg, rgba(254, 215, 170, 0.22) 0%, transparent 14%)',
            'linear-gradient(180deg, transparent 76%, rgba(0, 0, 0, 0.7) 100%)',
            'repeating-linear-gradient(90deg, transparent 0, rgba(255,255,255,0.05) 1px, transparent 3px, rgba(0,0,0,0.18) 4px, transparent 7px)',
            'linear-gradient(180deg, var(--iron-beam-top) 0%, var(--iron-beam-bottom) 100%)',
          ].join(', '),
          boxShadow: [
            'inset 0 2px 0 rgba(255, 235, 200, 0.22)',
            'inset 0 -2px 0 rgba(0, 0, 0, 0.92)',
            '0 -4px 18px rgba(0, 0, 0, 0.7)',
          ].join(', '),
          paddingBottom: 'env(safe-area-inset-bottom, 0)',
        }}
      >
        {/* Top welded seam (mirror of the navbar's bottom) */}
        <div className="absolute -top-[2px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-mighty-red/80 to-transparent" />
        {/* Rivets at each end */}
        <span
          className="absolute top-1/2 left-3 -translate-y-1/2 w-3 h-3 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 30% 30%, var(--steel-highlight) 0%, var(--steel-brushed) 30%, var(--steel-gunmetal) 75%, var(--iron-beam-bottom) 100%)',
            boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 1px rgba(0,0,0,0.9), 0 2px 3px rgba(0,0,0,0.7)',
          }}
          aria-hidden="true"
        />
        <span
          className="absolute top-1/2 right-3 -translate-y-1/2 w-3 h-3 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 30% 30%, var(--steel-highlight) 0%, var(--steel-brushed) 30%, var(--steel-gunmetal) 75%, var(--iron-beam-bottom) 100%)',
            boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 1px rgba(0,0,0,0.9), 0 2px 3px rgba(0,0,0,0.7)',
          }}
          aria-hidden="true"
        />

        <div className="px-4 py-2.5 flex gap-2">
          <Link
            href="#contact"
            className="flex-1 painted-metal-red wearouts border-2 border-mighty-shadow rounded-sm py-2.5 font-painted text-rocky-paper text-xs uppercase tracking-wider text-center"
          >
            Train With Robin
          </Link>
          <a
            href="https://wa.me/919372303172"
            target="_blank"
            rel="noopener noreferrer"
            className="painted-metal-dark wearouts border-2 border-rocky-paper/40 rounded-sm px-3 py-2.5 font-painted text-rocky-paper text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
            aria-label="WhatsApp Robin"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
