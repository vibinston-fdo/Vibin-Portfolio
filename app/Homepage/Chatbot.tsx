'use client'
import React, { useState } from 'react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: "Hi! I'm Vibinston's portfolio assistant. I can answer questions about his skills, projects, and experience. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });
      const data = await res.json();
      
      setMessages([...newMessages, { role: 'assistant', content: data.reply || "Sorry, I couldn't process that." }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: "Error connecting to server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-xl hover:shadow-indigo-500/50 flex items-center justify-center transition-all hover:scale-110 z-50"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[350px] h-[450px] bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
          <div className="bg-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Portfolio Assistant
            </h3>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-indigo-500 text-white self-end rounded-br-none' : 'bg-slate-700 text-slate-200 self-start rounded-bl-none'}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-slate-700 text-slate-200 self-start p-3 rounded-lg rounded-bl-none max-w-[80%] text-sm flex gap-1">
                <span className="animate-bounce">.</span><span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span><span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
              </div>
            )}
          </div>
          
          <form onSubmit={sendMessage} className="p-3 bg-slate-900 border-t border-slate-700 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..." 
              className="flex-grow bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-slate-700 text-white p-2 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
