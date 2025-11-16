import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'Frontend development',
  'Backend development',
  'Multi-tasking',
  'Quick learner',
  'Project management',
  'Software debugging',
  'Software troubleshooting'
]

const experienceItems = [
   {
    company: 'Freelancer',
    role: 'Full Stack Developer',
    duration: '12/2024 to Present',
    location: 'Mangalore, KA',
    description: [
      'Delivered freelance and personal projects focused on client solutions and UI/UX innovation.',
      'Created full-stack applications showcasing React, PHP, MySQL, and Next.js.',
      'Integrated real-time features and chart visualizations for user-centric tools.',
      'Analyzed user feedback to identify improvements and enhance functionality.',
      'Maintained a live project portfolio to showcase engineering capabilities.'
    ]
  },
  {
    company: 'Glowtouch Technologies',
    role: 'Graduate Engineer Trainee',
    duration: '08/2024 to 12/2024',
    location: 'Mangalore, KA',
    description: [
      'Delivered live chat support, resolving hosting, domain, and website issues.',
      'Troubleshot WordPress, PHP, MySQL, and server-related problems.',
      'Assisted with DNS setup, website migrations, and email configurations.',
      'Documented issues to improve team efficiency.',
      'Collaborated with teams to address technical challenges and ensure customer satisfaction.'
    ]
  },
  {
    company: 'Vitvara Technologies',
    role: 'Web Developer Intern',
    duration: '01/2024 to 05/2024',
    location: 'Mangalore, KA',
    description: [
      'Developed responsive web applications using HTML, CSS, JavaScript, and React.js.',
      'Implemented scalable API functionalities and optimized code performance.',
      'Streamlined software performance through debugging and testing.'
    ]
  }
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-12">
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="glass-effect rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                <p className="text-purple-400 font-medium">{item.company}</p>
                <p className="text-gray-300 italic mb-2">{item.duration} | {item.location}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
