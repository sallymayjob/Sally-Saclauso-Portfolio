import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Automating Workflows";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#030712]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-[128px] animate-blob"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-indigo-300 uppercase">Available for Hire</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                {PORTFOLIO_DATA.name}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[200%_auto] animate-gradient">
                  {text}
                </span>
                <span className="animate-pulse text-indigo-400">|</span>
              </h1>
              <p className="font-light text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                {PORTFOLIO_DATA.about}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a 
                href="#projects" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-xl hover:bg-indigo-700 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button 
                className="inline-flex items-center justify-center px-8 py-4 font-medium text-slate-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white hover:border-white/20"
                onClick={() => window.open('https://example.com/resume.pdf', '_blank')}
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block perspective-1000">
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] transform rotate-y-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm group hover:rotate-y-0 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent opacity-60"></div>
              
              {/* Code overlay effect */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
              
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-overlay"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/30 backdrop-blur-md">
                    <Sparkles className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">AI Integration</h3>
                    <p className="text-indigo-300 text-sm">Gemini 3.0 Powered</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};