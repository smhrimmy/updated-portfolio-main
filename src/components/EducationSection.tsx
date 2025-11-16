import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const educationItems = [
    {
      degree: 'Diploma: Full Stack Development',
      institution: 'KARNATAKA (GOVT) POLYTECHNIC, MANGALORE, KARNATAKA',
      graduation: '05/2024'
    },
    {
      degree: '10th High School',
      institution: 'Milagres High School, Mangalore',
      graduation: '05/2018'
    }
  ]

  const certifications = [
    'Project Management Course, 2024, CodeNinja (Completed)',
    'Java 11 Essentials, 2023, Infosys Springboard (Completed)'
  ]

  return (
    <section id="education" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-effect rounded-lg p-6"
                >
                  <h4 className="text-white font-bold text-lg">{item.degree}</h4>
                  <p className="text-purple-400 font-semibold">{item.institution}</p>
                  <p className="text-gray-300 mt-2">Graduation: {item.graduation}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
