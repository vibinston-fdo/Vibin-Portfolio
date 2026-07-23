'use client'

import React, { useState, useRef, useEffect } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: "Hi! 👋 I'm Vibinston's portfolio assistant. Ask me anything about his skills, projects, or experience!",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMsg: Message = { role: 'user', content: trimmed }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      })
      
      let data
      try {
        data = await res.json()
      } catch (jsonErr) {
        throw new Error('Server returned an invalid response.')
      }

      if (!res.ok) {
        throw new Error(data.reply ?? 'Server error occurred.')
      }

      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: data.reply ?? "Sorry, I couldn't process that." },
      ])
    } catch (err: any) {
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: err.message || 'Error connecting to the server. Please try again.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-xl hover:shadow-indigo-500/50 flex items-center justify-center transition-all duration-200 hover:scale-110 z-50"
      >
        {isOpen ? (
          /* X icon */
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Chat bubble icon */
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[370px] h-[500px] bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 flex items-center justify-between shrink-0">
            <h3 className="font-semibold text-white flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Portfolio Assistant
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-3 scroll-smooth">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[82%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-indigo-500 text-white self-end rounded-br-sm'
                    : 'bg-slate-700 text-slate-200 self-start rounded-bl-sm'
                }`}
              >
                {msg.content}
              </div>
            ))}

            {/* Thinking indicator */}
            {isLoading && (
              <div className="bg-slate-700 text-slate-400 self-start px-4 py-3 rounded-2xl rounded-bl-sm text-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-3 bg-slate-900 border-t border-slate-700 flex gap-2 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Vibinston…"
              disabled={isLoading}
              className="flex-grow bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-slate-700 disabled:text-slate-500 text-white p-2.5 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
