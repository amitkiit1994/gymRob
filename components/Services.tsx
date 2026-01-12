'use client'

import { motion } from 'framer-motion'

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
    <section id="services" className="py-24 bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Coaching Services
          </h2>
          <div className="h-1 w-24 bg-accent-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Proven methods. Real results. Three decades of refinement.
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
              className="bg-primary-900 p-8 rounded-lg border border-primary-800 hover:border-accent-600 transition-all hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-accent-500 uppercase tracking-wide mb-3">
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

