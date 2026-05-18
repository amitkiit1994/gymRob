'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import ChapterShell from './story/ChapterShell'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', goal: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const whatsappMessage = `Hi Robin! I'm interested in training with you.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nGoal: ${formData.goal}`
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const phoneNumber = '919372303172'
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
      setSubmitStatus('success')
      setFormData({ name: '', email: '', goal: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputCls =
    'w-full bg-rocky-paper text-mighty-shadow placeholder-mighty-shadow/40 ' +
    'border-2 border-mighty-shadow rounded-sm px-4 py-3 font-mono text-sm sm:text-base ' +
    'focus:outline-none focus:border-mighty-red focus:ring-2 focus:ring-mighty-red/30 transition-all'

  const labelCls =
    'block font-mono text-[10px] sm:text-xs font-bold text-mighty-red tracking-[0.3em] uppercase mb-2'

  return (
    <ChapterShell
      id="contact"
      numeral="10"
      era="The Bell · Begin"
      title="Train With Robin"
      tone="dark"
      tilt={-1.2}
    >
      <div className="max-w-2xl mx-auto">
        <p className="font-rocky text-base sm:text-lg md:text-xl text-rocky-paper/90 uppercase tracking-[0.12em] mb-10 sm:mb-12 text-center">
          Ready to transform?{' '}
          <span className="text-mighty-red">Step up to the bell.</span>
        </p>

        {/* The form — pinned-to-wall clipboard */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-paper text-mighty-shadow p-6 sm:p-8 md:p-10 border-4 border-mighty-shadow shadow-hung -rotate-[0.5deg]"
        >
          {/* Clipboard clip at top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mighty-shadow border-2 border-mighty-shadow rounded-sm px-4 py-1 shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
            <p className="font-mono text-[10px] sm:text-xs font-extrabold text-mighty-red tracking-[0.3em] uppercase">
              Form · 10A
            </p>
          </div>

          <span className="pin-bolt absolute top-3 left-3" aria-hidden="true" />
          <span className="pin-bolt absolute top-3 right-3" aria-hidden="true" />

          <form onSubmit={handleSubmit} className="space-y-6 mt-2">
            <div>
              <label htmlFor="name" className={labelCls}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputCls}
                placeholder="Your name"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className={labelCls}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputCls}
                placeholder="your.email@example.com"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="goal" className={labelCls}>
                Your Goal
              </label>
              <textarea
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputCls} resize-none`}
                placeholder="Tell Robin about your goals, experience, and what you want to achieve…"
                aria-required="true"
              />
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-rocky-dust/40 border-2 border-mighty-shadow rounded-sm text-mighty-shadow font-mono text-sm"
              >
                Bell rung. We&apos;ll be in touch — check WhatsApp.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-mighty-red/15 border-2 border-mighty-red rounded-sm text-mighty-shadow font-mono text-sm"
              >
                <p className="font-bold mb-1">Couldn&apos;t open WhatsApp.</p>
                <p>
                  Reach out directly:{' '}
                  <a
                    href="https://instagram.com/gymrob123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-mighty-red"
                  >
                    @gymrob123
                  </a>{' '}
                  · carruthersrobin3@gmail.com
                </p>
              </motion.div>
            )}

            {/* Big red bell CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full inline-flex items-center justify-center gap-3 bg-mighty-red border-4 border-mighty-shadow px-6 py-4 font-painted text-rocky-paper text-base sm:text-lg uppercase tracking-wider rounded-sm shadow-[0_6px_0_-1px_rgba(0,0,0,0.85)] hover:bg-mighty-shadow active:translate-y-[3px] active:shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              <span className="pin-bolt absolute -top-2 -left-2" aria-hidden="true" />
              <span className="pin-bolt absolute -top-2 -right-2" aria-hidden="true" />
              {isSubmitting ? (
                'Ringing…'
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </>
              )}
            </button>
          </form>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 text-center font-mono text-[11px] sm:text-xs text-rocky-paper/60 tracking-[0.2em] uppercase"
        >
          Or walk in · eGym Lokhandwala · WhatsApp 9372303172
        </motion.p>
      </div>
    </ChapterShell>
  )
}
