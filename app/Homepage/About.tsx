import React from 'react'
import FadeInSection from './FadeInSection'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-slate-900 relative">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              I&apos;m Vibinston J, a Full Stack Developer currently pursuing my B.Sc. in Computer Science (3rd Year) at Madras Christian College, Chennai. I specialize in building end-to-end web applications using Python, FastAPI, React, and MySQL, with hands-on experience gained through a fullstack internship at Postulate Info Tech.
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mt-6">
              I built SysWatch AI — a real-time system monitoring platform featuring REST APIs, JWT authentication, and Scikit-learn-based anomaly detection — which reflects my passion for combining practical engineering with machine learning. I enjoy working across the entire stack, from database design to responsive UIs, and I&apos;m driven by writing clean, industry-relevant code that solves real problems.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
