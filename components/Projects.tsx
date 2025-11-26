import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="p-3 bg-indigo-500/10 rounded-2xl mb-6">
            <Layers className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Selected Work
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Highlighting automation workflows and AI integrations that drive efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col bg-[#0b1121] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Tech Stack Overlay on Image */}
                <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-2 justify-end">
                   {project.techStack.slice(0, 2).map(tech => (
                     <span key={tech} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md rounded-md border border-white/10">
                       {tech}
                     </span>
                   ))}
                   {project.techStack.length > 2 && (
                      <span className="px-2 py-1 text-[10px] font-bold bg-black/60 text-white backdrop-blur-md rounded-md border border-white/10">
                        +{project.techStack.length - 2}
                      </span>
                   )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col">
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      className="flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};