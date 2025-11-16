
import { motion, useInView } from 'framer-motion'
import React, { useRef, useMemo, memo } from 'react'

function SkillsSectionComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = useMemo(() => [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
        { name: 'React', level: 85, color: 'from-cyan-500 to-blue-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'PHP', level: 80, color: 'from-purple-500 to-indigo-500' },
        { name: 'API Development', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'MySQL', level: 82, color: 'from-blue-600 to-blue-800' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 88, color: 'from-orange-600 to-red-600' },
        { name: 'VSCode', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'Postman', level: 80, color: 'from-orange-500 to-yellow-500' },
        { name: 'Debugging', level: 92, color: 'from-red-500 to-pink-500' },
        { name: 'DNS Setup', level: 75, color: 'from-green-400 to-green-600' },
        { name: 'Project Management', level: 85, color: 'from-purple-400 to-purple-600' }
      ]
    }
  ], [])

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 2,
                      z: 5
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(SkillsSectionComponent)
