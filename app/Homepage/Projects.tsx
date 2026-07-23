'use client'

import React from 'react'
import FadeInSection from './FadeInSection'

const projects = [
  {
    title: 'SysWatch AI — Real-Time System Monitor',
    badge: 'Featured Full Stack + ML',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    description:
      'A fullstack web application built with FastAPI, React, and MySQL to monitor microservice health metrics in real time. Integrated Scikit-learn Isolation Forest to detect CPU spikes, memory leaks, and latency anomalies automatically with live alerts and AI-driven fix recommendations.',
    highlights: [
      'Monitors 5 microservices concurrently with real-time status tracking',
      'Isolation Forest ML model for automated anomaly detection',
      'JWT Authentication & Secure REST API endpoints',
      'Live interactive dashboard with charts & health alerts'
    ],
    tech: ['FastAPI', 'React', 'MySQL', 'Scikit-learn', 'JWT', 'REST API', 'Docker'],
    github: 'https://github.com/vibinston-fdo',
    demo: '#contact',
  },
  {
    title: 'Interactive Quiz Application',
    badge: 'Exhibition Winner',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    description:
      'An interactive web-based quiz application built with Python and Streamlit featuring real-time scoring, custom JSON-based leaderboard persistence, and session management. Successfully deployed online and featured during the EVS Day exhibition.',
    highlights: [
      'Real-time score calculation and interactive feedback',
      'JSON-backed persistent leaderboard & session state handling',
      'Publicly deployed and accessed by exhibition visitors'
    ],
    tech: ['Python', 'Streamlit', 'JSON', 'Session State'],
    github: 'https://github.com/vibinston-fdo',
    demo: '#contact',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-slate-900/90 relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col items-center mb-16">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Technical Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="group bg-slate-950/80 rounded-2xl p-8 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/15 flex flex-col h-full relative overflow-hidden backdrop-blur-md"
              >
                {/* Top Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mb-6 space-y-1.5 flex-grow">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-slate-900 text-cyan-300 text-xs font-medium rounded-md border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-white transition-colors gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </a>

                  <a 
                    href="#contact"
                    className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors gap-1"
                  >
                    Inquire Project
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
