'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { images } from '@/config/images'

export default function EGym() {
  return (
    <section id="egym" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('${images.egym.background}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              eGym Lokhandwala
            </h2>
            <div className="h-1 w-24 bg-accent-600 mx-auto mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Where old-school strength culture meets modern coaching excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg text-gray-300"
            >
              <p>
                eGym Lokhandwala isn't just a gym—it's a training environment built for serious 
                lifters. We've created a space where the focus is on the work, not the aesthetics. 
                Where plates clang, chalk dust flies, and progress is measured in strength, not likes.
              </p>

              <p>
                Our facility combines the best of both worlds: the raw, no-nonsense atmosphere of 
                old-school strength gyms with modern equipment and evidence-based coaching methods. 
                Here, you'll find a community of dedicated individuals who understand that 
                transformation requires discipline, not shortcuts.
              </p>

              <div className="bg-primary-800 p-6 rounded-lg border border-primary-700">
                <h3 className="text-xl font-bold text-white mb-4">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 font-bold">•</span>
                    <span>Old-school strength culture with modern coaching science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 font-bold">•</span>
                    <span>Community of serious, committed lifters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 font-bold">•</span>
                    <span>Focus on long-term progress over quick results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 font-bold">•</span>
                    <span>Training environment that respects the craft</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden border-2 border-primary-700">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${images.egym.main}')`,
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-12 space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-block px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-bold text-base sm:text-lg rounded transition-all transform hover:scale-105 shadow-lg text-center min-h-[44px] flex items-center justify-center"
              >
                Train at eGym Lokhandwala
              </Link>
              <a
                href="https://instagram.com/egymlokhandwala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold text-base sm:text-lg rounded transition-all transform hover:scale-105 min-h-[44px]"
                aria-label="Follow eGym Lokhandwala on Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow eGym
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

