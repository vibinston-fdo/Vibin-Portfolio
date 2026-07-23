import React from 'react'
import FadeInSection from './FadeInSection'

export default function Hero() {
  return (
    <section 
      id="hero" 
      className='min-h-screen w-full flex flex-col items-center justify-center text-center px-4 pt-20 pb-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-slate-950 relative overflow-hidden'
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>

      <FadeInSection className="z-10 relative">
        <h1 className='text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white'>
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Vibinston J</span>
        </h1>
        <p className='text-xl md:text-2xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed'>
          Full Stack Developer — Building intelligent web apps with Python, React &amp; AI
        </p>
        
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-slate-800/80 text-white font-medium border border-slate-700 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
            Contact Me
          </a>
        </div>
      </FadeInSection>
    </section>
  )
}
