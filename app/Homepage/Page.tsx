import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 bg-slate-950 text-center border-t border-slate-900 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Vibinston J. Built with Next.js, Tailwind CSS &amp; AI.</p>
      </footer>
    </div>
  )
}
