import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const timelineItems = [
    {
      year: '2022',
      title: 'Started Coding Journey',
      description: 'Began learning programming fundamentals and web development'
    },
    {
      year: '2023',
      title: 'Full Stack Development',
      description: 'Mastered frontend and backend technologies, specializing in React and PHP'
    },
    {
      year: '2024',
      title: 'Professional Experience',
      description: 'Started working on real-world projects and gained industry experience'
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Hello! I'm Prajwal</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A passionate Full Stack Developer from the beautiful coastal city of Mangalore, India. 
                I specialize in creating robust web applications and have a keen eye for debugging complex software issues.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                With expertise in both frontend and backend technologies, I love bringing ideas to life 
                through clean, efficient code. My journey in software development has been driven by 
                curiosity and a constant desire to learn and innovate.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or planning my next technical adventure.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">My Journey</h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-purple-500"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <div className="glass-effect rounded-lg p-4">
                    <span className="text-purple-400 font-semibold">{item.year}</span>
                    <h4 className="text-white font-bold text-lg mt-1">{item.title}</h4>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
