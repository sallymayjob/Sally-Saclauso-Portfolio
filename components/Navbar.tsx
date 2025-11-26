import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav 
        className={`transition-all duration-500 ease-out ${
          scrolled || isOpen
            ? 'glass-nav rounded-2xl w-full max-w-5xl px-6 py-3 shadow-2xl shadow-indigo-500/5' 
            : 'bg-transparent w-full max-w-7xl px-0 py-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${scrolled ? 'bg-white/5' : 'bg-white/10'} group-hover:bg-indigo-600 group-hover:text-white`}>
              <Terminal className="h-5 w-5 text-indigo-400 group-hover:text-white transition-colors" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              DevFolio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 group"
              >
                {link.name}
                <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full opacity-50"></span>
              </a>
            ))}
            <a 
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] active:scale-95"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-1 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 mt-2 rounded-xl text-base font-medium text-white bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/20 text-center"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};