import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Chatbot from './Chatbot'

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Chatbot />
    </div>
  )
}
