'use client'

import React from 'react'
import FadeInSection from './FadeInSection'

const skills = [
  // Languages
  { name: 'Python', category: 'Languages', level: 'Intermediate' },
  { name: 'JavaScript', category: 'Languages', level: 'Intermediate' },
  { name: 'SQL', category: 'Languages', level: 'Intermediate' },
  { name: 'HTML5', category: 'Languages', level: 'Advanced' },
  { name: 'CSS3', category: 'Languages', level: 'Advanced' },

  // Frameworks & Libraries
  { name: 'React', category: 'Frameworks & Libraries', level: 'Frontend' },
  { name: 'FastAPI', category: 'Frameworks & Libraries', level: 'Backend API' },
  { name: 'Django', category: 'Frameworks & Libraries', level: 'Web Framework' },
  { name: 'Scikit-learn', category: 'Frameworks & Libraries', level: 'Machine Learning' },
  { name: 'Bootstrap', category: 'Frameworks & Libraries', level: 'Styling' },
  { name: 'Ionic Framework', category: 'Frameworks & Libraries', level: 'Mobile App' },

  // Architecture & Backend
  { name: 'REST API Design', category: 'Architecture & Backend', level: 'Core Competency' },
  { name: 'JWT Authentication', category: 'Architecture & Backend', level: 'Security' },
  { name: 'Machine Learning', category: 'Architecture & Backend', level: 'Anomaly Detection' },

  // Database
  { name: 'MySQL', category: 'Database', level: 'Relational DB' },

  // Dev Tools & Workflow
  { name: 'Git', category: 'Dev Tools', level: 'Version Control' },
  { name: 'GitHub', category: 'Dev Tools', level: 'Collaboration' },
  { name: 'Linux', category: 'Dev Tools', level: 'CLI & Environment' },
  { name: 'Postman', category: 'Dev Tools', level: 'API Testing' },
  { name: 'Docker', category: 'Dev Tools', level: 'Containerization' },
]

export default function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-slate-950/80 relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col items-center mb-16">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">Technical Proficiency</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Skills &amp; Technologies</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div 
                key={category} 
                className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 shadow-xl backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-4 pb-2 border-b border-slate-800">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.filter(s => s.category === category).map((skill) => (
                      <span 
                        key={skill.name}
                        className="px-3.5 py-2 bg-slate-950 text-slate-300 text-xs font-medium rounded-xl border border-slate-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:text-white hover:border-transparent hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] cursor-default flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
