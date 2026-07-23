import React from 'react'
import FadeInSection from './FadeInSection'

const skills = [
  // Languages
  { name: 'Python', category: 'Languages' },
  { name: 'HTML', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },

  // Frameworks & Libraries
  { name: 'React', category: 'Frameworks & Libraries' },
  { name: 'FastAPI', category: 'Frameworks & Libraries' },
  { name: 'Django', category: 'Frameworks & Libraries' },
  { name: 'Bootstrap', category: 'Frameworks & Libraries' },
  { name: 'Ionic Framework', category: 'Frameworks & Libraries' },
  { name: 'Scikit-learn', category: 'Frameworks & Libraries' },

  // Backend Concepts
  { name: 'REST API Design', category: 'Backend Concepts' },
  { name: 'JWT Authentication', category: 'Backend Concepts' },
  { name: 'Machine Learning', category: 'Backend Concepts' },

  // Database
  { name: 'MySQL', category: 'Database' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Linux', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
]

export default function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-slate-900/50 relative">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category} className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50 shadow-lg">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => s.category === category).map((skill) => (
                    <span 
                      key={skill.name}
                      className="px-4 py-2 bg-slate-900 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
