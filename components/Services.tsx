'use client'

import ChapterShell from './story/ChapterShell'

/**
 * Four lockers along a back wall, absolute-positioned on desktop so doors
 * overlap and tilt at different angles. No. 01 is cracked open (bigger,
 * leaning forward); No. 02 is the shut neighbor butted right up against
 * 01's right edge; No. 03 hangs low-left, its top corner sliding under 01's
 * skirt; No. 04 is jammed at bottom-right with the biggest tilt and partly
 * tucked behind 02 on its left edge.
 *
 * Mobile (default): clean vertical stack with alternating tilts only —
 * tap-safe, no overlap. Reading order = source order.
 */
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
    // Desktop: top-left, cracked open, biggest, in front of everyone
    deskPos:
      'sm:absolute sm:left-[0%] sm:top-[2%] sm:w-[52%] sm:-rotate-[2deg] sm:scale-[1.04] sm:z-30',
    mobileTilt: '-rotate-[1.2deg]',
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
    // Desktop: top-right, butted up against 01's right edge, slightly smaller
    deskPos:
      'sm:absolute sm:right-[0%] sm:top-[8%] sm:w-[48%] sm:rotate-[1.2deg] sm:scale-[0.98] sm:z-20',
    mobileTilt: 'rotate-[0.8deg]',
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
    // Desktop: bottom-left, drops down, top-right corner slides under 01
    deskPos:
      'sm:absolute sm:left-[3%] sm:bottom-[3%] sm:w-[50%] sm:-rotate-[1deg] sm:z-25',
    mobileTilt: '-rotate-[0.6deg]',
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
    // Desktop: bottom-right, sits lowest & furthest back, biggest tilt
    deskPos:
      'sm:absolute sm:right-[2%] sm:bottom-[0%] sm:w-[46%] sm:rotate-[2.5deg] sm:z-10',
    mobileTilt: 'rotate-[1.4deg]',
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
      title="Offerings"
      tone="brick-left"
      tilt={1.5}
    >
      <div className="max-w-6xl mx-auto">
        <div className="legible-on-dark mb-10 sm:mb-14 max-w-3xl">
          <p className="font-painted text-base sm:text-lg md:text-xl text-rocky-paper uppercase tracking-[0.15em] leading-relaxed">
            Proven methods. Real results.{' '}
            <span className="text-mighty-red">Three decades of refinement.</span>
          </p>
        </div>

        {/* Locker wall — four overlapping doors at different angles & depths.
            Desktop uses absolute positioning to break the grid; mobile keeps
            a clean flex column stack (with alternating tilts) so the cards
            stay tap-safe and the reading order = source order. */}
        <div
          className="
            relative flex flex-col gap-5
            sm:block sm:gap-0
            sm:h-[900px] md:h-[820px] lg:h-[780px]
          "
        >
          {services.map((service) => (
            <div
              key={service.title}
              className={`${service.mobileTilt} ${service.deskPos} flex w-full`}
            >
            <div
              className="
                relative bg-locker-dark border-2 border-mighty-shadow rounded-sm
                p-5 sm:p-7 flex-1
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
              <p className="text-sm sm:text-base text-rocky-paper leading-relaxed mb-5">
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
                      className="text-sm text-rocky-paper flex items-start gap-2 font-mono"
                    >
                      <span className="text-mighty-red mt-0.5">+</span>
                      <span className="uppercase tracking-wide text-[11px] sm:text-xs">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </ChapterShell>
  )
}
