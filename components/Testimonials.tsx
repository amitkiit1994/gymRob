'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/config/images'

const testimonials = [
  {
    quote: "Robin doesn't just train your body—he trains your mind. After 18 months, I've not only transformed physically but developed a discipline that extends to every area of my life.",
    author: "Abhishek Kathalye",
    profession: "Actor - Chhaava",
    instagram: "https://www.instagram.com/abhishekathalye/",
    avatar: '/images/abhishek-kathalye.jpg',
  },
  {
    quote: "30 years of experience shows. Robin's programming is intelligent, his coaching is precise, and his approach is no-nonsense. This is what real training looks like.",
    author: "Saurav Chakrabarti",
    profession: "Film Actor - Bagghi, Tadap, Farzi, Dhruva, Agent, Gully Rowdy...",
    instagram: "https://www.instagram.com/saurav_chakrabarti/",
    avatar: '/images/saurav-chakrabarti.jpg',
  },
  {
    quote: "The community at eGym is unlike any other gym.\nSerious lifters, zero ego, all focus.\nRobin has built something special here,\nand it shows in every training session.",
    author: "Amit Kumar Das",
    profession: "CTO, Cofounder - ratl.ai, Software Techie",
    instagram: "https://www.instagram.com/amitkumardas___/",
    avatar: '/images/amit-kumar-das.jpg',
  },
  {
    quote: "I came in looking for a quick fix. Robin showed me that transformation is a process, not an event. Two years later, I'm stronger, leaner, and more disciplined than I ever thought possible.",
    author: "Ronnie Chouhan",
    profession: "Director | 💃 Choreographer | 📲 Creator / Storyteller",
    instagram: "https://www.instagram.com/roniechouhann/",
    avatar: '/images/ronnie-chouhan.jpg',
  },
  {
    quote: "My previous encounters with gym environments have been challenging, so while I joined E-gym I was very sceptical and hence not a regular. Once I became somewhat regular, I have found that I enjoy working out and that has everything to do with Robin being my trainer. He possesses a distinctive talent for motivation, adeptly pushing me beyond my self-imposed limits to achieve better performance, progressively increase my lifting capacity, and ultimately foster measurable gains in strength. It has been a profoundly rewarding experience to train under his guidance and I am particularly grateful for the positive shift he has inspired in my fitness journey.",
    author: "Sai Ghatpande",
    profession: "Sr.VP - Head of Influencer and Partnership Practice, Ogilvy India | Photographer, Mom, Cat Mom",
    instagram: "https://www.instagram.com/sai_ghatpande/",
    avatar: '/images/sai-ghatpande.jpg',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('${images.egym.background}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
            Testimonials
          </h2>
          <div className="h-1 w-24 bg-accent-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Real results from real people. Long-term transformations, not quick fixes.
          </p>
        </motion.div>

        {/* Video Testimonials */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center mb-12 md:mb-16 px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md w-full"
          >
            <div className="relative w-full rounded-lg border-2 border-accent-600/60 shadow-2xl bg-primary-900 p-1 sm:p-2">
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '177.78%' }}> {/* 9:16 aspect ratio for YouTube Shorts */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/1AhvWkZJTOw"
                  title="Video Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md w-full"
          >
            <div className="relative w-full rounded-lg border-2 border-accent-600/60 shadow-2xl bg-primary-900 p-1 sm:p-2">
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '177.78%' }}> {/* 9:16 aspect ratio for YouTube Shorts */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/BsDx5LSZ5a8"
                  title="Video Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-primary-950 p-4 sm:p-5 md:p-6 rounded-lg border border-primary-800 relative ${
                index === testimonials.length - 1 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
              }`}
            >
              <div className="absolute top-2 left-3 sm:left-4 text-4xl sm:text-5xl md:text-6xl text-accent-600/30 font-serif leading-none">
                "
              </div>
              <blockquote className="relative z-10">
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed italic whitespace-pre-line">
                  {testimonial.quote}
                </p>
                <footer className="flex items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                    {testimonial.avatar && (
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-accent-600/60 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.author} profile picture`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 40px, 48px"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-semibold text-sm sm:text-base truncate">{testimonial.author}</p>
                      <p className="text-gray-500 text-xs sm:text-sm truncate">{testimonial.profession}</p>
                    </div>
                  </div>
                  {testimonial.instagram && (
                    <a
                      href={testimonial.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 sm:ml-4 p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-primary-800 flex-shrink-0"
                      aria-label={`Follow ${testimonial.author} on Instagram`}
                      title={`Follow ${testimonial.author} on Instagram`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  )}
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

