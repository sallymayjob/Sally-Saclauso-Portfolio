import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Contact: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github': return <Github className="w-6 h-6" />;
      case 'linkedin': return <Linkedin className="w-6 h-6" />;
      case 'twitter': return <Twitter className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center items-center gap-8 mb-12">
           <a 
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="flex flex-col items-center gap-2 group"
           >
             <div className="p-4 bg-slate-900 rounded-full group-hover:bg-indigo-600 transition-colors duration-300">
               <Mail className="w-6 h-6 text-slate-300 group-hover:text-white" />
             </div>
             <span className="text-sm text-slate-500 group-hover:text-indigo-400 transition-colors">Email Me</span>
           </a>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          {PORTFOLIO_DATA.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label={social.platform}
            >
              {getIcon(social.iconName)}
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};