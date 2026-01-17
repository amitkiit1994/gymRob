'use client'

import { motion } from 'framer-motion'
import { images } from '@/config/images'

export default function Transformation() {
  return (
    <section id="transformation" className="py-24 bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            The Transformation
          </h2>
          <div className="h-1 w-24 bg-accent-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The story behind 30 years of discipline, dedication, and transformation
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Before/After Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden border-2 border-primary-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-primary-900/60 z-10" />
                <img
                  src={images.transformation.beforeAfter}
                  alt="Before and After Transformation"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-primary-900 px-6 py-2 rounded-full border-2 border-accent-600">
                <span className="text-white font-semibold text-sm">The Journey</span>
              </div>
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
            >
              <p className="text-xl sm:text-2xl font-bold text-white mb-4">
                "For love of the game"
              </p>
              
              <p>
                Every trainer has a story. Mine started 30 years ago, not as a coach, but as someone 
                who needed to change. I wasn't always the person standing in front of you now.
              </p>

              <p>
                The transformation you see wasn't quick. It wasn't easy. It was years of showing up 
                when I didn't want to. Years of choosing discipline over comfort. Years of understanding 
                that the weight on the bar doesn't lie—it shows you exactly who you are, and who you 
                can become.
              </p>

              <p>
                That journey taught me something that no certification or course could: what it actually 
                takes to transform your body and mind. It's not about the perfect program or the latest 
                supplement. It's about consistency. It's about discipline. It's about doing the work 
                when nobody's watching.
              </p>
            </motion.div>
          </div>

          {/* Detailed Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-900 p-6 sm:p-8 md:p-12 rounded-lg border border-primary-800 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">The Real Story</h3>
            
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Three decades ago, I was just another person who decided enough was enough. The mirror 
                didn't lie, and neither did the scale. But here's what I learned: motivation gets you 
                started, discipline keeps you going.
              </p>

              <p>
                The transformation wasn't linear. There were setbacks. There were plateaus. There were 
                days when I questioned everything. But there were also breakthroughs. Moments when the 
                work finally clicked. When I understood that this wasn't just about changing my body—it 
                was about changing who I was.
              </p>

              <p>
                That's what I bring to every client now: not just the knowledge of how to train, but the 
                understanding of what it takes. The real work. The hard days. The discipline to keep 
                going when you want to quit.
              </p>

              <div className="mt-8 p-6 bg-primary-800 border-l-4 border-accent-600 rounded">
                <p className="text-xl text-white font-semibold italic mb-2">
                  "Friends may come and go but 200 pounds will always be 200 pounds"
                </p>
                <p className="text-gray-400">
                  This isn't just a saying—it's a philosophy. Some things in life are constant. Your 
                  commitment to them defines who you become. The weights will always be there. The question 
                  is: will you be?
                </p>
              </div>

              <p className="mt-6">
                That transformation shaped me into the coach I am today. It's why I don't sell you dreams 
                or quick fixes. I give you the truth: real transformation takes time, discipline, and 
                unwavering commitment. But it's possible. I'm living proof.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-400 mb-6">
              Ready to start your own transformation?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-bold text-base sm:text-lg rounded transition-all transform hover:scale-105 shadow-lg min-h-[44px] flex items-center justify-center"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

