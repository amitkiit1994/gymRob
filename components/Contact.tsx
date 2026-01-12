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
      // Use Formspree or your preferred form service
      // Get your endpoint from environment variable
      // In Next.js, NEXT_PUBLIC_ variables are available at build time
      const formEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
      
      console.log('Form endpoint check:', {
        exists: !!formEndpoint,
        value: formEndpoint ? `${formEndpoint.substring(0, 20)}...` : 'undefined',
        fullValue: formEndpoint
      })
      
      if (!formEndpoint || formEndpoint.trim() === '' || formEndpoint.includes('YOUR_FORM_ID')) {
        // Show user-friendly error message
        setSubmitStatus('error')
        setIsSubmitting(false)
        // Log to console for developer
        console.error('Form endpoint not configured. Please set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT in .env.local and restart the dev server.')
        return
      }
      
      // Formspree expects form-urlencoded data, not JSON
      const formDataToSend = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.goal,
        _subject: 'New Training Inquiry from Portfolio',
      })

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: formDataToSend.toString(),
      })

      const responseData = await response.json().catch(() => ({ error: 'No response data' }))
      
      console.log('Form response status:', response.status)
      console.log('Form response data:', responseData)
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', goal: '' })
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        // Formspree returns error details in response
        const errorMessage = responseData.error || responseData.message || 'Form submission failed'
        console.error('Form submission failed:', errorMessage)
        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error('Form submission error:', error)
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
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
            className="bg-primary-900 p-8 rounded-lg border border-primary-800"
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
                  <p className="font-semibold mb-2">Form submission failed</p>
                  <p className="text-sm">
                    There was an issue submitting your form. Please try again or reach out directly via Instagram{' '}
                    <a 
                      href="https://instagram.com/gymrob123" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:text-red-300"
                    >
                      @gymrob123
                    </a>
                    {' '}or email us at eGym Lokhandwala.
                  </p>
                  <p className="text-xs mt-2 text-red-500">
                    Check browser console (F12) for details. If endpoint is configured, restart dev server.
                  </p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent-600 hover:bg-accent-700 disabled:bg-accent-800 disabled:cursor-not-allowed text-white font-bold text-lg rounded transition-all transform hover:scale-105 shadow-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Start Your Training Journey'}
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
            <p>Or reach out directly at eGym Lokhandwala</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

