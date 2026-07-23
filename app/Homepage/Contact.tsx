'use client'

import React, { useState } from 'react'
import FadeInSection from './FadeInSection'

const contactInfo = {
  email: 'vibinston506@gmail.com',
  phone: '+91 7092208316',
  linkedin: 'https://linkedin.com/in/vibinston-j',
  github: 'https://github.com/vibinston-fdo',
}

type FormState = 'idle' | 'sending' | 'success' | 'error'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const inputClass =
    'w-full px-4 py-3 bg-slate-950/60 border border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-slate-500 transition-all duration-200'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('sending')
    setErrorMsg('')

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL
    if (!endpoint) {
      setErrorMsg('Form endpoint is not configured. Please email me directly at vibinston506@gmail.com')
      setFormState('error')
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      })

      if (res.ok) {
        setFormState('success')
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.error ?? 'Something went wrong. Please try again or use direct email.')
        setFormState('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection or send a direct email.')
      setFormState('error')
    }
  }

  function resetForm() {
    setFormState('idle')
    setErrorMsg('')
  }

  if (formState === 'success') {
    return (
      <div className="bg-slate-800/90 border border-emerald-500/30 rounded-2xl p-8 md:p-10 text-center mb-16 max-w-xl mx-auto backdrop-blur-md shadow-2xl shadow-emerald-500/10 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-500/10">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Delivered! 🎉</h3>
        <p className="text-slate-300 mb-6 text-base leading-relaxed">
          Thank you for reaching out! Your message has been sent to my inbox. I&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 mx-auto"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto mb-16 space-y-5 text-left bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-md shadow-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
            Your Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-1.5">
            Your Email <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
          Subject / Reason for Inquiry
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
          placeholder="Job Opportunity / Project Collaboration / Saying Hi"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Tell me about your project, team, or role..."
        />
      </div>

      {/* Error banner */}
      {formState === 'error' && (
        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400">
          <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
          </svg>
          {errorMsg}
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={formState === 'sending'}
        className="w-full py-4 bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 group"
      >
        {formState === 'sending' ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending Message...
          </>
        ) : (
          <>
            Send Message
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-slate-950 relative border-t border-slate-800/80 overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeInSection>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Available For Opportunities
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Great Together</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            I&apos;m actively seeking Full Stack, Python &amp; Backend developer roles. Have a position available or want to discuss a project? Drop a message below!
          </p>

          <ContactForm />

          {/* Direct channels */}
          <div className="pt-6 border-t border-slate-800/60">
            <p className="text-slate-400 text-sm font-medium mb-6">Or reach out directly via these platforms:</p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <a
                href={`mailto:${contactInfo.email}?subject=Job%20Opportunity%20-%20Vibinston%20J`}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/50 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg flex items-center gap-2.5"
              >
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contactInfo.email}
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#0A66C2]/90 hover:bg-[#0A66C2] text-white text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-600/20 flex items-center gap-2.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg flex items-center gap-2.5"
              >
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub Profile
              </a>
            </div>

            <div className="text-slate-500 font-mono text-xs flex items-center justify-center gap-2">
              <span>📍 Chennai, India</span>
              <span>•</span>
              <span>📞 {contactInfo.phone}</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
