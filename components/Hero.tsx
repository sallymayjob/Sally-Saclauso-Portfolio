import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-900/30 rounded-full">
            Available for hire
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Hi, I'm <span className="text-indigo-400">{PORTFOLIO_DATA.name}</span>.
            <br />
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">intelligent workflows</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
            {PORTFOLIO_DATA.about}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/20"
            >
              View Automations
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <button 
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
              onClick={() => window.open('https://example.com/resume.pdf', '_blank')}
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="relative hidden md:block group">
          <div className="relative w-full aspect-square max-w-md mx-auto">
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-2xl rotate-6 opacity-30 group-hover:rotate-12 transition-transform duration-500"></div>
             <img 
              src="https://picsum.photos/seed/automation/800/800" 
              alt="Profile" 
              className="relative rounded-2xl shadow-2xl w-full h-full object-cover border border-slate-700/50"
             />
          </div>
        </div>
      </div>
    </section>
  );
};