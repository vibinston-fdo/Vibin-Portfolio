import React from 'react'
import FadeInSection from './FadeInSection'

const projects = [
  {
    title: 'SysWatch AI — Real-Time System Monitor',
    description:
      'A fullstack web app using FastAPI, React and MySQL to monitor 5 microservices in real time. Uses Scikit-learn\'s Isolation Forest to detect CPU spikes, memory leaks and latency anomalies automatically. Features JWT login, REST APIs and a live dashboard with charts, alerts and AI-generated fix suggestions.',
    tech: ['FastAPI', 'React', 'MySQL', 'Scikit-learn', 'JWT', 'REST API', 'Docker'],
    link: '#',
  },
  {
    title: 'Interactive Quiz Application',
    description:
      'A quiz app built with Python and Streamlit featuring real-time score tracking, a JSON-based leaderboard and session handling. Deployed online for public access during the EVS Day exhibition.',
    tech: ['Python', 'Streamlit', 'JSON'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-slate-900 relative">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="group bg-slate-800 rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-slate-900 text-cyan-300 text-xs font-semibold rounded-md border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
