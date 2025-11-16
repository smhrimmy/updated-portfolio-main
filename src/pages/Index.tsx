import React, { Suspense, lazy, memo } from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
const AboutSection = lazy(() => import('../components/AboutSection'))
const ExperienceSection = lazy(() => import('../components/ExperienceSection'))
const SkillsSection = lazy(() => import('../components/SkillsSection'))
const ProjectsSection = lazy(() => import('../components/ProjectsSection'))
const ContactSection = lazy(() => import('../components/ContactSection'))
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import LoadingOverlay from '@/components/LoadingOverlay'

const MemoizedHeroSection = memo(HeroSection)

const Index = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="space-bg stars min-h-screen">
        <Navigation />
        <MemoizedHeroSection />
        <Suspense fallback={<LoadingOverlay inline />}> 
          <AboutSection />
        </Suspense>
        <Suspense fallback={<LoadingOverlay inline />}> 
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<LoadingOverlay inline />}> 
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<LoadingOverlay inline />}> 
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<LoadingOverlay inline />}> 
          <ContactSection />
        </Suspense>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/60 glass-dark border-t border-purple-500/20 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-300">
                © 2024 Prajwal D L. Crafted with ❤️ and cutting-edge technology.
              </p>
              <p className="text-purple-300 mt-2">
                Full Stack Developer • Debugging Specialist • Innovation Enthusiast
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </LazyMotion>
  )
}

export default Index
