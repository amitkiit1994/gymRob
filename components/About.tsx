'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'

export default function About() {
  return (
    <section id="about" className="iron-grain relative py-24 bg-[#0a0604]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionEyebrow number="01" label="The Story" />
            <h2 className="iron-text font-serif text-4xl sm:text-5xl md:text-6xl mb-8 text-center px-4 uppercase tracking-tight leading-[1.05]">
              About Robin
            </h2>
            <div className="h-1 w-24 bg-accent-600 mx-auto mb-12" />

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I didn't come to fitness from a pedestal.
              </p>

              <p>
                I came to it because I needed it.
              </p>

              <p>
                For years, my life looked successful from the outside—but inside, it was slowly breaking me down. Long hours, high stress, late nights, habits that felt normal until they weren't. Somewhere along the way, I lost connection with my body, my energy, and myself.
              </p>

              <p>
                At my heaviest, I was 120 kilos.
              </p>

              <p>
                What hurt more than the weight was what came with it: low confidence, low energy, and the feeling that the best version of me was already behind me.
              </p>

              <p>
                The change didn't come from a dramatic moment or a magic plan. It started with a simple decision: to show up. No shortcuts. No hacks. Just consistency on the days motivation was absent.
              </p>

              <p>
                As my body began to change, something deeper shifted. Strength returned. Confidence followed. Mental clarity came back. Fitness stopped being about looking a certain way—it became the foundation that gave me my life back.
              </p>

              <p>
                That experience changed how I see training.
              </p>

              {/* Credentials & Education */}
              <div className="mt-10 mb-10">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-accent-300 mb-2 uppercase tracking-wide">
                  Training & Education
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Grounded in experience. Backed by study.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Certified Personal Trainer */}
                  <div className="bg-black/60 border-2 border-accent-800/60 rounded-sm p-4 hover:border-accent-600 transition-colors shadow-[inset_0_1px_0_rgba(254,215,170,0.1)]">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-accent-200 font-semibold text-sm mb-1 uppercase tracking-wide">Certified Personal Trainer</p>
                        <p className="text-gray-400 text-xs">Renewed 2022</p>
                      </div>
                    </div>
                  </div>

                  {/* Sports Medicine Rehabilitation */}
                  <div className="bg-black/60 border-2 border-accent-800/60 rounded-sm p-4 hover:border-accent-600 transition-colors shadow-[inset_0_1px_0_rgba(254,215,170,0.1)]">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-accent-200 font-semibold text-sm mb-1 uppercase tracking-wide">Sports Medicine Rehabilitation</p>
                        <p className="text-gray-400 text-xs">Injury-aware training</p>
                      </div>
                    </div>
                  </div>

                  {/* Strength & Conditioning */}
                  <div className="bg-black/60 border-2 border-accent-800/60 rounded-sm p-4 hover:border-accent-600 transition-colors shadow-[inset_0_1px_0_rgba(254,215,170,0.1)]">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-accent-200 font-semibold text-sm mb-1 uppercase tracking-wide">Strength & Conditioning</p>
                        <p className="text-gray-400 text-xs">Performance-based training</p>
                      </div>
                    </div>
                  </div>

                  {/* Speed & Agility */}
                  <div className="bg-black/60 border-2 border-accent-800/60 rounded-sm p-4 hover:border-accent-600 transition-colors shadow-[inset_0_1px_0_rgba(254,215,170,0.1)]">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-accent-200 font-semibold text-sm mb-1 uppercase tracking-wide">Speed & Agility</p>
                        <p className="text-gray-400 text-xs">Athletic performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-accent-300 mt-10 mb-6 uppercase tracking-wide">
                Why I Coach the Way I Do
              </h3>

              <p>
                I understand the frustration of starting when you feel far from your best. I understand the mental resistance, the self-doubt, the slow days where progress feels invisible. I've lived it. And that's why my coaching isn't built on trends or gimmicks—it's built on fundamentals that don't age: discipline, consistency, and respect for the process.
              </p>

              <p>
                I've trained across generations—from old-school iron and chalk to today's digital, over-informed fitness world. What I've learned is simple: the principles that built strength decades ago still work today. The tools may evolve, but the work remains the same.
              </p>

              <p>
                At eGym Lokhandwala, we carry forward that old-school strength culture, supported by modern coaching methods. Not flash. Not fads. Just intelligent training, done consistently, with purpose.
              </p>

              <div className="mt-12 p-6 bg-black/70 border-l-4 border-accent-600 rounded-sm shadow-[inset_0_1px_0_rgba(254,215,170,0.1)]">
                <p className="font-serif text-xl text-accent-100 italic mb-2 pull-quote leading-snug">
                  Friends may come and go but 200 pounds will always be 200 pounds.
                </p>
                <p className="text-gray-400">
                  This isn't just about lifting weights. It's about character. About understanding that some things in life are constant—and your commitment to them defines who you become.
                </p>
              </div>

              <p className="mt-8">
                My philosophy is straightforward: train hard, train smart, and train consistently. Whether your goal is strength, body recomposition, or a complete lifestyle reset, the path is the same.
              </p>

              <div className="mt-6 space-y-2">
                <p className="font-serif text-2xl text-accent-400 font-bold uppercase tracking-wider">Show up.</p>
                <p className="font-serif text-2xl text-accent-400 font-bold uppercase tracking-wider">Do the work.</p>
                <p className="font-serif text-2xl text-accent-400 font-bold uppercase tracking-wider">Trust the process.</p>
              </div>

              <p className="mt-8 text-gray-400 italic">
                If this resonates, training together makes sense.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

