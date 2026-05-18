'use client'

import { motion } from 'framer-motion'
import ChapterShell from './story/ChapterShell'

const services = [
  {
    plate: '01',
    title: 'Personal Training',
    description:
      'One-on-one coaching tailored to your goals, experience level, and timeline. Real-time form correction, programming that adapts to your progress.',
    outcomes: [
      'Personalized programming',
      'Form mastery & injury prevention',
      'Accountability + motivation',
      'Accelerated progress',
    ],
  },
  {
    plate: '02',
    title: 'Strength & Body Recomposition',
    description:
      'Build lean muscle while cutting body fat. Science-backed strength progression over quick fixes.',
    outcomes: [
      'Increased strength & power',
      'Improved body composition',
      'Metabolic health',
      'Sustainable results',
    ],
  },
  {
    plate: '03',
    title: 'Lifestyle & Habit Coaching',
    description:
      'Training is part of the equation. Build habits that support it — nutrition, recovery, sleep, stress.',
    outcomes: [
      'Habit formation',
      'Work-life balance',
      'Energy & focus',
      'Lifestyle change',
    ],
  },
  {
    plate: '04',
    title: 'Long-term Transformation',
    description:
      'Multi-month programs for complete transformation. Not just the body — mental resilience and lifestyle overhaul.',
    outcomes: [
      'Complete physical transformation',
      'Mental toughness',
      'Lifelong skills',
      'Confidence',
    ],
  },
]

/**
 * CH 04 — THE OFFERINGS
 * Coaching programs displayed as numbered LOCKERS along the gym wall.
 * Each locker has a stamped plate number + the program label burned into it.
 */
export default function Services() {
  return (
    <ChapterShell
      id="services"
      numeral="04"
      era="The Offerings · Coaching Programs"
      title="Offerings"
      tone="dark"
      tilt={1.5}
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-rocky text-base sm:text-lg md:text-xl text-rocky-paper/85 uppercase tracking-[0.12em] mb-10 sm:mb-14 max-w-3xl">
          Proven methods. Real results.{' '}
          <span className="text-mighty-red">Three decades of refinement.</span>
        </p>

        {/* Locker grid — each program is a locker */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="
                relative bg-[#1a1411] border-2 border-mighty-shadow rounded-sm
                p-5 sm:p-7
                shadow-[0_14px_28px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(254,250,224,0.06)]
                hover:border-mighty-red transition-colors
                group
              "
            >
              {/* Locker handle / hinge effect — left edge */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 sm:h-16 bg-mighty-shadow border-r border-rocky-paper/15 rounded-r" />
              {/* Stamped plate top-right */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <span className="pin-bolt" style={{ width: 8, height: 8 }} aria-hidden="true" />
                <span className="font-mono text-[10px] sm:text-xs font-bold text-mighty-red tracking-[0.2em] uppercase bg-mighty-shadow px-2 py-0.5 border border-mighty-red/40 rounded-sm">
                  No. {service.plate}
                </span>
              </div>

              <h3 className="font-painted text-painted text-xl sm:text-2xl md:text-3xl leading-tight uppercase pr-20 sm:pr-24 mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-rocky-paper/75 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Outcomes — stamped list */}
              <div>
                <p className="font-mono text-[10px] sm:text-xs font-bold text-mighty-red tracking-[0.25em] uppercase mb-3 pb-2 border-b border-mighty-shadow/60">
                  Outcomes
                </p>
                <ul className="space-y-1.5">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="text-sm text-rocky-paper/80 flex items-start gap-2 font-mono"
                    >
                      <span className="text-mighty-red mt-0.5">+</span>
                      <span className="uppercase tracking-wide text-[11px] sm:text-xs">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ChapterShell>
  )
}
