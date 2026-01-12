'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Robin doesn't just train your body—he trains your mind. After 18 months, I've not only transformed physically but developed a discipline that extends to every area of my life.",
    author: "Abhishek Kathalye",
    role: "Client, 7 years",
    instagram: "https://www.instagram.com/abhishekathalye/",
  },
  {
    quote: "30 years of experience shows. Robin's programming is intelligent, his coaching is precise, and his approach is no-nonsense. This is what real training looks like.",
    author: "Saurav Chakrabarti",
    role: "Strength Athlete, 6 years",
    instagram: "https://www.instagram.com/saurav_chakrabarti/",
  },
  {
    quote: "The community at eGym is unlike any other gym. Serious lifters, zero ego, all focus. Robin has built something special here.",
    author: "Amit Kumar Das",
    role: "Member, 3 years",
    instagram: "https://www.instagram.com/amitkumardas___/",
  },
  {
    quote: "I came in looking for a quick fix. Robin showed me that transformation is a process, not an event. Two years later, I'm stronger, leaner, and more disciplined than I ever thought possible.",
    author: "Ronnie Chouhan",
    role: "Client, 2 years",
    instagram: "https://www.instagram.com/roniechouhann/",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Testimonials
          </h2>
          <div className="h-1 w-24 bg-accent-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from real people. Long-term transformations, not quick fixes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-primary-950 p-8 rounded-lg border border-primary-800 relative"
            >
              <div className="absolute top-6 left-6 text-6xl text-accent-600/20 font-serif leading-none">
                "
              </div>
              <blockquote className="relative z-10">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <footer className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                  {testimonial.instagram && (
                    <a
                      href={testimonial.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-primary-800"
                      aria-label={`Follow ${testimonial.author} on Instagram`}
                      title={`Follow ${testimonial.author} on Instagram`}
                    >
                      <svg
                        className="w-5 h-5"
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

