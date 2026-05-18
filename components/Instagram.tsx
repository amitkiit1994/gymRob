'use client'

import { motion } from 'framer-motion'
import { getAllReels } from '@/config/images'
import ChapterShell from './story/ChapterShell'

const reels = getAllReels()

/**
 * CH 09 — THE FEED
 * Reels presented as old CCTV monitor screens stacked on a wall.
 */
export default function Instagram() {
  return (
    <ChapterShell
      id="instagram"
      numeral="09"
      era="The Feed · Live From The Floor"
      title="On Camera"
      tone="concrete"
      tilt={0.8}
    >
      <div className="max-w-6xl mx-auto">
        <div className="legible-on-dark mb-12 sm:mb-14 max-w-3xl">
          <p className="font-rocky text-base sm:text-lg md:text-xl text-rocky-paper uppercase tracking-[0.12em]">
            Real training. Real results.{' '}
            <span className="text-mighty-red">Cuts through the noise.</span>
          </p>
        </div>

        {/* CCTV grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {reels.map((reel, i) => (
            <motion.a
              key={i}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-mighty-shadow border-2 border-mighty-shadow rounded-sm overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(254,250,224,0.05)] hover:border-mighty-red transition-colors group"
              aria-label={`Watch reel ${i + 1} on Instagram`}
            >
              {/* CCTV top metadata strip */}
              <div className="absolute top-1 left-1 right-1 z-10 flex justify-between items-center px-2 py-0.5 bg-mighty-shadow/85 font-mono text-[8px] sm:text-[9px] text-mighty-red font-bold tracking-[0.2em] uppercase">
                <span>CAM_0{i + 1}</span>
                <span className="text-rocky-paper/70">REC</span>
              </div>
              <div
                className="aspect-[9/16] w-full bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-500"
                style={{ backgroundImage: `url('${reel.thumbnail}')` }}
              >
                <div className="w-full h-full bg-gradient-to-t from-mighty-shadow/85 via-transparent to-mighty-shadow/40 flex items-end justify-center pb-3 sm:pb-4">
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-rocky-paper uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity">
                    ► Play
                  </span>
                </div>
              </div>
              {/* Faint scanlines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)',
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          className="text-center"
        >
          <a
            href="https://instagram.com/gymrob123"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 painted-metal-red wearouts border-4 border-mighty-shadow px-7 py-3.5 sm:px-9 sm:py-4 font-painted text-rocky-paper text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:brightness-110 active:translate-y-[3px] transition-all"
          >
            <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
            <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @gymrob123
          </a>
        </motion.div>
      </div>
    </ChapterShell>
  )
}
