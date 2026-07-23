'use client'

import React from 'react'
import FadeInSection from './FadeInSection'

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0b1329] to-slate-950 relative overflow-hidden"
    >
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <FadeInSection className="z-10 relative max-w-4xl mx-auto">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs md:text-sm font-medium mb-8 backdrop-blur-md shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for Full Stack &amp; Python Developer Roles</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight">
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
            Vibinston J
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Full Stack Developer building high-performance web applications with <span className="text-cyan-400 font-normal">Python</span>, <span className="text-indigo-400 font-normal">FastAPI</span>, <span className="text-cyan-400 font-normal">React</span>, and <span className="text-purple-400 font-normal">Machine Learning</span>.
        </p>
        
        {/* Call to action buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
          <a 
            href="#projects" 
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a 
            href="/Vibinston_J_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-slate-800/90 text-white font-semibold border border-slate-700 hover:bg-slate-700/80 hover:border-slate-600 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
          >
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>View Resume</span>
          </a>

          <a 
            href="#contact" 
            className="px-8 py-3.5 rounded-xl bg-slate-900/60 text-slate-300 font-semibold border border-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>

        {/* Highlight Stats / Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-400">Full Stack</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Python, FastAPI, React</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-extrabold text-indigo-400">SysWatch AI</div>
            <div className="text-xs text-slate-400 font-medium mt-1">ML System Monitor</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-extrabold text-purple-400">Internship</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Postulate Info Tech</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">B.Sc. CS</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Madras Christian College</div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
