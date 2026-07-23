'use client'

import React from 'react'
import FadeInSection from './FadeInSection'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-slate-900/60 relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col items-center mb-16">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">Background &amp; Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></div>
          </div>
          
          {/* Main Bio Card */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-md mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Vibinston J</span>, a Full Stack Developer currently pursuing my B.Sc. in Computer Science (3rd Year) at <span className="text-cyan-400 font-medium">Madras Christian College, Chennai</span>. I specialize in building robust, end-to-end web applications using <span className="text-indigo-400 font-medium">Python, FastAPI, React, and MySQL</span>.
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mt-6">
              With practical experience gained from my fullstack web development internship at <span className="text-purple-400 font-medium">Postulate Info Tech</span>, I take pride in crafting clean REST APIs, secure authentication systems, and dynamic user interfaces. My landmark project, <span className="text-cyan-400 font-medium">SysWatch AI</span>, combines real-time system monitoring with Scikit-learn machine learning for automated anomaly detection.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Education Card */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Education</h3>
              <p className="text-sm font-semibold text-cyan-400">B.Sc. Computer Science (3rd Year)</p>
              <p className="text-xs text-slate-400 mt-2">Madras Christian College, Chennai</p>
            </div>

            {/* Experience Card */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Experience</h3>
              <p className="text-sm font-semibold text-indigo-400">Fullstack Web Dev Intern</p>
              <p className="text-xs text-slate-400 mt-2">Postulate Info Tech (May - Jun 2026)</p>
            </div>

            {/* Certifications Card */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Certifications</h3>
              <p className="text-xs text-slate-300">• Microsoft &amp; LinkedIn Software Dev</p>
              <p className="text-xs text-slate-300 mt-1">• Meta Python • Google Linux &amp; SQL</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
