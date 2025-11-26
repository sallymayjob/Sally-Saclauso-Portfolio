import React from 'react';
import { Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and the organizations I've contributed to.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-slate-800" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center md:justify-between`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-[-8px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-950 z-10" />

                  {/* Spacer for layout */}
                  <div className="w-full md:w-5/12" />

                  {/* Content Card */}
                  <div className="w-full md:w-5/12 pl-8 md:pl-0">
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-indigo-400" />
                        <span className="text-indigo-400 text-sm font-semibold">{exp.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <span className="inline-block text-xs text-slate-500 mb-4 font-mono">{exp.period}</span>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 text-sm leading-relaxed marker:text-indigo-500/50">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};