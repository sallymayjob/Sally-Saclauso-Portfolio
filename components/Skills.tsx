import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Frontend', 'Backend', 'Tools', 'AI'].map((category) => {
             const categorySkills = PORTFOLIO_DATA.skills.filter(s => s.category === category);
             if (categorySkills.length === 0) return null;

             return (
               <div key={category} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors duration-300">
                 <h3 className="text-xl font-semibold text-white mb-6 border-b border-slate-700 pb-2">{category}</h3>
                 <div className="space-y-5">
                   {categorySkills.map((skill) => (
                     <div key={skill.name}>
                       <div className="flex justify-between mb-1">
                         <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                         <span className="text-slate-500 text-xs">{skill.level}%</span>
                       </div>
                       <div className="w-full bg-slate-700 rounded-full h-2">
                         <div 
                            className="bg-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                            style={{ width: `${skill.level}%` }}
                          />
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};