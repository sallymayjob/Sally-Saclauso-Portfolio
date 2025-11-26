import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#02040a] pt-40 pb-10 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
          Ready to automate?
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Let's turn your manual processes into intelligent, autonomous workflows.
        </p>

        <a 
          href={`mailto:${PORTFOLIO_DATA.email}`}
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all duration-300 shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_0_60px_-10px_rgba(79,70,229,0.6)] hover:-translate-y-1"
        >
          <Mail className="w-5 h-5 mr-3" />
          Start a Conversation
        </a>

        <div className="mt-20 flex justify-center gap-8">
          {PORTFOLIO_DATA.socials.map((social) => (
             <a
               key={social.platform}
               href={social.url}
               target="_blank"
               rel="noreferrer"
               className="text-slate-500 hover:text-white transition-colors transform hover:scale-110 duration-300"
             >
                {social.iconName === 'github' && <Github className="w-6 h-6" />}
                {social.iconName === 'linkedin' && <Linkedin className="w-6 h-6" />}
                {social.iconName === 'twitter' && <Twitter className="w-6 h-6" />}
             </a>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Engineered with Precision.</p>
        </div>
      </div>
    </footer>
  );
};