import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
             A selection of projects that showcase my passion for building robust applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div key={project.id} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium text-indigo-300 bg-indigo-900/30 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="flex items-center text-sm font-medium text-white hover:text-indigo-400 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4 mr-1.5" />
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