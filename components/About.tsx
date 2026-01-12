'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
              About Robin
            </h2>
            <div className="h-1 w-24 bg-accent-600 mx-auto mb-12" />

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Three decades. That's how long I've been in the trenches, coaching athletes, 
                transforming bodies, and building minds. Not through trends or gimmicks, but 
                through the fundamentals that never change: discipline, consistency, and mental toughness.
              </p>

              <p>
                I've trained across generations—from those who remember when gyms were just iron 
                and chalk, to the digital age where everyone's an expert. What I've learned is 
                simple: the principles that built champions 30 years ago still build champions today.
              </p>

              <p>
                At eGym Lokhandwala, we maintain that old-school strength culture while applying 
                modern coaching methods. It's not about the latest fad or the flashiest equipment. 
                It's about the work. The grind. The commitment to showing up when you don't want to.
              </p>

              <div className="mt-12 p-6 bg-primary-800 border-l-4 border-accent-600 rounded">
                <p className="text-xl text-white font-semibold italic mb-2">
                  "Friends may come and go but 200 pounds will always be 200 pounds"
                </p>
                <p className="text-gray-400">
                  This isn't just about lifting weights. It's about building character. About 
                  understanding that some things in life are constant, and your commitment to 
                  them defines who you become.
                </p>
              </div>

              <p className="mt-8">
                My philosophy is straightforward: train hard, train smart, train consistently. 
                The results follow. Whether you're looking to build strength, recompose your body, 
                or transform your lifestyle, the path is the same—showing up, doing the work, 
                and trusting the process.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

