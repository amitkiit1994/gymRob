'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Format message for WhatsApp
      const whatsappMessage = `Hi Robin! I'm interested in training with you.

Name: ${formData.name}
Email: ${formData.email}

Goal: ${formData.goal}`

      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage)
      
      // WhatsApp phone number with country code (India: 91)
      // Number provided: 9372303172
      const phoneNumber = '919372303172'
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      
      // Open WhatsApp in new tab/window
      window.open(whatsappUrl, '_blank')
      
      // Show success message
        setSubmitStatus('success')
        setFormData({ name: '', email: '', goal: '' })
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
    } catch (error) {
      console.error('Error opening WhatsApp:', error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Start Your Training Journey
            </h2>
            <div className="h-1 w-24 bg-accent-600 mx-auto mb-6" />
            <p className="text-xl text-gray-400">
              Ready to transform? Let's discuss your goals and how we can achieve them together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary-900 p-6 sm:p-8 rounded-lg border border-primary-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20 transition-all"
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20 transition-all"
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="goal" className="block text-white font-semibold mb-2">
                  Your Goal
                </label>
                <textarea
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20 transition-all resize-none"
                  placeholder="Tell us about your training goals, experience level, and what you hope to achieve..."
                  aria-required="true"
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/30 border border-green-700 rounded text-green-400"
                >
                  Thank you! We'll be in touch soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/30 border border-red-700 rounded text-red-400"
                >
                  <p className="font-semibold mb-2">Error opening WhatsApp</p>
                  <p className="text-sm">
                    There was an issue opening WhatsApp. Please try again or reach out directly via Instagram{' '}
                    <a 
                      href="https://instagram.com/gymrob123" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:text-red-300"
                    >
                      @gymrob123
                    </a>
                    {' '}or email at carruthersrobin3@gmail.com.
                  </p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent-600 hover:bg-accent-700 disabled:bg-accent-800 disabled:cursor-not-allowed text-white font-bold text-base sm:text-lg rounded transition-all transform hover:scale-105 shadow-lg min-h-[44px] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Opening WhatsApp...'
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center text-gray-500 text-sm"
          >
            <p>Or reach out directly at eGym Lokhandwala or via WhatsApp: 9372303172</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

