import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
    title: 'HR+ Platform – Internal HRMS & Operations',
    description:
      'A fully featured internal HR platform supporting leaves, payroll, recruitment, RLS-based permissions, helpdesk, OKRs, and AI-powered resume matching. Built with Supabase, PostgreSQL, and custom role policies.',
    image:
      'https://images.unsplash.com/photo-1612832021074-1302cdab8f37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tech: ['Supabase', 'PostgreSQL', 'React', 'Tailwind', 'Framer Motion', 'SQL RLS'],
    liveUrl: 'https://hrms-five-alpha.vercel.app/',
    gradient: 'from-cyan-700 to-blue-800',
    status: 'Currently Working',
  },
    {
    title: 'SmartTracker+ – Educational Fee Management App',
    description:
      'A modern role-based web app for schools to track student fee payments, manage school and course data, and export Excel reports. Built with Next.js, Supabase, and ShadCN UI.',
    image:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tech: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'ShadCN', 'PostgreSQL', 'TypeScript'],
    liveUrl: 'https://client1-mu.vercel.app/',
    gradient: 'from-teal-600 to-indigo-700',
    status: 'Client Work (Modified)',
  }, {
    title: 'Sparkle',
    description:
      'An online jewelry store with product browsing and gold exchange program.this is updated version of Sparkling Gem Bazaar with internal server  Frontend finished, backend not finished.',
    image:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tech: ['Next.js', 'React', 'CSS'],
    liveUrl: 'https://sparky-lilac.vercel.app/',
    gradient: 'from-yellow-600 to-pink-600',
  }, {
    title: 'Sparkling Gem Bazaar',
    description:
      'An online jewelry store with product browsing and gold exchange program. Frontend finished, backend not finished.',
    image:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tech: ['Next.js', 'React', 'CSS'],
    liveUrl: 'https://sparkling-gem-bazaar.vercel.app/',
    gradient: 'from-yellow-600 to-pink-600',
  },
    {
  title: 'TermiAI – Offline AI Terminal Assistant',
  description:
    'A personal AI assistant that converts natural language into shell commands and runs them locally using CMD or PowerShell. Frontend complete and backend with AI is in progress.',
  image:
    'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  tech: ['PyQt5', 'FastAPI', 'Ollama', 'LLM', 'CMD', 'PowerShell'],
  liveUrl: 'https://termi-ai-scribe.vercel.app/',
  gradient: 'from-blue-600 to-gray-800',
  status: 'Frontend Complete',
},

  {
    title: 'Real Estate Website',
    description: 'A comprehensive real estate platform with property listings.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tech: ['React', 'Frontend', 'CSS'],
    liveUrl: 'https://real-estate1-virid.vercel.app',
    gradient: 'from-blue-600 to-purple-600',
  },
    {
  title: 'Remote PC Control UI',
  description:
    'Frontend dashboard for controlling and monitoring your PC remotely with real-time system stats, file explorer, screenshots, and command execution.',
  image:
    'https://images.unsplash.com/photo-1581091870630-bc71f0c7b1b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  tech: ['React', 'Tailwind CSS', 'Axios', 'FastAPI'],
  liveUrl: 'https://remote-pc1.onrender.com/',
  gradient: 'from-gray-800 to-slate-700',
  status: 'System Stats Finished'
}
,
  {
    title: 'Tech Chat App',
    description:
      'Real-time messaging app for tech enthusiasts with group chat, file sharing, and emoji reactions.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tech: ['JavaScript', 'React', 'API', 'CSS'],
    liveUrl: '#',
    gradient: 'from-green-600 to-blue-600',
    status: 'Working on project'
  },
  {
    title: 'Portfolio Dashboard',
    description:
      'A portfolio management system with analytics, project tracking, and client tools.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tech: ['React', 'PHP', 'MySQL', 'Chart.js'],
    liveUrl: '#',
    gradient: 'from-purple-600 to-pink-600',
    status: 'working on project'
  },
  {
    title: 'AI To-Do Hub',
    description:
      'A dynamic To-Do List app combining AI with Notion and Google Keep features.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tech: ['React', 'PHP', 'MySQL', 'Chart.js'],
    liveUrl: 'https://noti-keep-ai-hub.vercel.app/',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Next.js AI Chatbot',
    description:
      'An AI-powered chatbot built with Next.js, offering a modern conversational UI.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tech: ['Next.js', 'React', 'AI', 'TypeScript'],
    liveUrl: 'https://ai-chatbot-mu-brown.vercel.app/',
    gradient: 'from-indigo-600 to-blue-600',
  },
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-blue-900/10"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my latest work and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <div className="mb-2">
                  <span className={`inline-block text-xs font-semibold px-2 py-1 rounded ${
                    project.status === 'Complete' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-purple-300 hover:text-white transition-colors bg-purple-900/30 hover:bg-purple-800 px-6 py-2 rounded-full"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
