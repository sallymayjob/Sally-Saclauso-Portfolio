import React from 'react';
import { Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-[#050b1d] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
            <p className="text-slate-400 text-lg">My professional track record in building automation solutions.</p>
          </div>
          <div className="h-px bg-slate-800 flex-grow md:ml-8 mb-4"></div>
        </div>

        <div className="space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div key={exp.id} className="group relative pl-8 md:pl-0 border-l border-slate-800 md:border-none">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                
                {/* Period - Desktop */}
                <div className="hidden md:block md:col-span-3 text-right pt-2">
                  <span className="font-mono text-sm text-indigo-400 font-semibold tracking-wider uppercase">
                    {exp.period}
                  </span>
                </div>

                {/* Timeline Dot (Desktop only) */}
                <div className="hidden md:flex md:col-span-1 justify-center pt-2">
                  <div className="w-3 h-3 rounded-full bg-slate-800 ring-4 ring-[#050b1d] group-hover:bg-indigo-500 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="col-span-12 md:col-span-8 relative">
                  {/* Mobile Dot */}
                  <div className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-slate-800 border-4 border-[#050b1d] md:hidden group-hover:bg-indigo-500 transition-colors"></div>
                  
                  {/* Mobile Date */}
                  <span className="md:hidden font-mono text-xs text-indigo-400 font-bold uppercase mb-2 block">
                    {exp.period}
                  </span>

                  <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-indigo-500">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                          <span className="mr-3 mt-1.5 w-1 h-1 rounded-full bg-indigo-500/50 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};