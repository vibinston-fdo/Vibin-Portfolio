'use client'
import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Find current active section
      let current = '';
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          // Offset by a bit to trigger earlier
          if (window.scrollY >= sectionTop - 100) {
            current = link.id;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-indigo-500/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          VJ
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                activeSection === link.id ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-xl">
          <div className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-lg font-medium transition-colors ${
                  activeSection === link.id ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
