'use client'

import Image from 'next/image'
import ChapterShell from './story/ChapterShell'

const testimonials = [
  {
    quote:
      "Robin doesn't just train your body—he trains your mind. After 18 months, I've developed a discipline that extends to every area of my life.",
    author: 'Abhishek Kathalye',
    profession: 'Actor · Chhaava',
    instagram: 'https://www.instagram.com/abhishekathalye/',
    avatar: '/images/abhishek-kathalye.jpg',
    rotate: -3,
  },
  {
    quote:
      "30 years of experience shows. Robin's programming is intelligent, his coaching is precise, and his approach is no-nonsense. This is what real training looks like.",
    author: 'Saurav Chakrabarti',
    profession: 'Film Actor · Bagghi, Tadap, Farzi',
    instagram: 'https://www.instagram.com/saurav_chakrabarti/',
    avatar: '/images/saurav-chakrabarti.jpg',
    rotate: 2,
  },
  {
    quote:
      'The community at eGym is unlike any other gym. Serious lifters, zero ego, all focus. Robin has built something special.',
    author: 'Amit Kumar Das',
    profession: 'CTO · Cofounder ratl.ai',
    instagram: 'https://www.instagram.com/amitkumardas___/',
    avatar: '/images/amit-kumar-das.jpg',
    rotate: -2,
  },
  {
    quote:
      "I came in looking for a quick fix. Robin showed me transformation is a process, not an event. Two years later, I'm stronger, leaner, and more disciplined than I thought possible.",
    author: 'Ronnie Chouhan',
    profession: 'Director · Choreographer',
    instagram: 'https://www.instagram.com/roniechouhann/',
    avatar: '/images/ronnie-chouhan.jpg',
    rotate: 3,
  },
  {
    quote:
      "Robin has a distinctive talent for motivation, pushing me beyond my self-imposed limits. Profoundly rewarding to train under his guidance — measurable gains in strength.",
    author: 'Sai Ghatpande',
    profession: 'SVP · Influencer Partnerships, Ogilvy India',
    instagram: 'https://www.instagram.com/sai_ghatpande/',
    avatar: '/images/sai-ghatpande.jpg',
    rotate: -2,
  },
]

/**
 * CH 06 — THE FRATERNITY
 * Testimonials as polaroids taped to the gym wall + video shorts as old TVs.
 */
export default function Testimonials() {
  return (
    <ChapterShell
      id="testimonials"
      title="The Fraternity"
      tone="brick-crop"
      tilt={1.5}
    >
      <div className="max-w-6xl mx-auto">
        <div className="legible-on-dark mb-12 sm:mb-14 max-w-3xl">
          <p className="font-painted text-base sm:text-lg md:text-xl text-rocky-paper uppercase tracking-[0.15em] leading-relaxed">
            Real results from real people. Long-term transformations,{' '}
            <span className="text-mighty-red">not quick fixes.</span>
          </p>
        </div>

        {/* Video testimonials — old TV monitors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20 max-w-3xl mx-auto">
          {['1AhvWkZJTOw', 'BsDx5LSZ5a8'].map((id, i) => (
            <div
              key={id}
              className="relative bg-mighty-shadow p-2 sm:p-3 border-4 border-mighty-shadow rounded-sm shadow-[0_14px_28px_rgba(0,0,0,0.85)]"
              style={{ transform: `rotate(${i === 0 ? -1.5 : 1.5}deg)` }}
            >
              <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -bottom-2 -right-2" aria-hidden="true" />
              <div
                className="relative w-full overflow-hidden border border-rocky-paper/15 rounded-sm"
                style={{ paddingBottom: '177.78%' }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Video Testimonial ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="font-mono text-[10px] text-rocky-paper tracking-[0.3em] uppercase text-center mt-2 text-shadow-readable">
                · Live From The Floor ·
              </p>
            </div>
          ))}
        </div>

        {/* Polaroid wall — testimonials as taped photos. Static tilts; no
            entrance animation — these are pictures already on the wall. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className={`relative bg-paper text-mighty-shadow p-4 sm:p-5 border border-mighty-shadow/40 shadow-plate ${
                i === testimonials.length - 1 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              <span className="pin-bolt absolute -top-2 left-6" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 right-6" aria-hidden="true" />

              {/* Polaroid photo */}
              {t.avatar && (
                <div className="relative aspect-square overflow-hidden bg-mighty-shadow border-2 border-mighty-shadow mb-4">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    sizes="(min-width: 1024px) 28vw, 80vw"
                    className="object-cover grayscale-[0.4] contrast-110"
                  />
                </div>
              )}

              {/* Quote */}
              <blockquote className="font-painted text-base sm:text-lg text-mighty-shadow leading-[1.35] mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Footer caption strip */}
              <figcaption className="border-t border-mighty-shadow/30 pt-3 flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs sm:text-sm font-extrabold text-mighty-shadow uppercase tracking-[0.15em] truncate">
                    {t.author}
                  </p>
                  <p className="font-mono text-[10px] text-mighty-shadow/60 uppercase tracking-wide truncate">
                    {t.profession}
                  </p>
                </div>
                {t.instagram && (
                  <a
                    href={t.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow ${t.author} on Instagram`}
                    className="text-mighty-red hover:text-mighty-shadow transition-colors flex-shrink-0"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </ChapterShell>
  )
}
