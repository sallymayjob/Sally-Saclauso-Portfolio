import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative bg-[#030712] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-indigo-900/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Tech Ecosystem
          </h2>
          <p className="text-slate-400 text-lg">
            A carefully curated stack of technologies I use to build scalable, intelligent, and robust automation systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {['AI', 'Backend', 'Frontend', 'Tools'].map((category) => {
             const categorySkills = PORTFOLIO_DATA.skills.filter(s => s.category === category);
             if (categorySkills.length === 0) return null;

             return (
               <div key={category} className="group relative">
                 <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-60 blur transition duration-500"></div>
                 <div className="relative h-full bg-[#0b1121] rounded-2xl p-8 border border-white/5">
                   <h3 className="font-heading text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                      {category}
                   </h3>
                   <div className="flex flex-wrap gap-3">
                     {categorySkills.map((skill) => (
                       <div 
                        key={skill.name} 
                        className="relative overflow-hidden px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 group/chip"
                       >
                         <div className="flex items-center gap-2">
                           <span className="text-slate-300 font-medium group-hover/chip:text-white transition-colors">
                             {skill.name}
                           </span>
                           {/* Expert Indicator */}
                           {skill.level > 90 && (
                             <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                           )}
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};