'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'

const services = [
  {
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your goals, experience level, and timeline. Direct guidance, real-time form correction, and programming that adapts to your progress.',
    outcomes: [
      'Personalized programming',
      'Form mastery and injury prevention',
      'Accountability and motivation',
      'Accelerated progress',
    ],
  },
  {
    title: 'Strength & Body Recomposition',
    description: 'Build lean muscle while reducing body fat. Science-backed methods that prioritize strength gains and metabolic efficiency over quick fixes.',
    outcomes: [
      'Increased strength and power',
      'Improved body composition',
      'Enhanced metabolic health',
      'Sustainable results',
    ],
  },
  {
    title: 'Lifestyle & Habit Coaching',
    description: 'Training is only part of the equation. Learn to build habits that support your goals—nutrition, recovery, sleep, and stress management.',
    outcomes: [
      'Sustainable habit formation',
      'Better work-life balance',
      'Improved energy and focus',
      'Long-term lifestyle change',
    ],
  },
  {
    title: 'Long-term Transformation Programs',
    description: 'Multi-month programs designed for complete transformation. Not just physical change, but mental resilience and lifestyle overhaul.',
    outcomes: [
      'Complete physical transformation',
      'Mental toughness and discipline',
      'Lifelong skills and knowledge',
      'Confidence and self-efficacy',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="iron-bg iron-grain spark-corner-tl spark-corner-br relative py-24 overflow-hidden border-t-2 border-b-2 border-accent-800/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionEyebrow number="02" label="What I Offer" />
          <h2 className="iron-text font-serif text-4xl sm:text-5xl md:text-6xl mb-4 px-4 uppercase tracking-tight leading-[1.05]">
            Coaching Services
          </h2>
          <div className="iron-divider w-40 mx-auto mb-6" />
          <p className="font-mono text-xs sm:text-sm text-accent-200/70 max-w-2xl mx-auto uppercase tracking-[0.2em]">
            Proven methods · Real results · Three decades of refinement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="iron-frame bg-black/70 p-6 sm:p-8 rounded-sm transition-all"
            >
              <h3 className="font-serif text-2xl font-bold text-accent-200 mb-4 uppercase tracking-wide">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-2">
                <p className="font-mono text-xs font-bold text-accent-500 uppercase tracking-[0.25em] mb-3">
                  Key Outcomes
                </p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="text-gray-400 flex items-start">
                      <span className="text-accent-600 mr-2">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

