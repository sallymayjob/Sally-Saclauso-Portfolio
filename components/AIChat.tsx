import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, Bot, ChevronDown } from 'lucide-react';
import { getGeminiChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { PORTFOLIO_DATA } from '../constants';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: `Hi there! I'm the AI concierge for ${PORTFOLIO_DATA.name}. Ask me about his automation workflows or technical skills!`,
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', text: userMessage, timestamp: new Date() }]);
    setIsLoading(true);

    const responseText = await getGeminiChatResponse(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-indigo-600 text-white'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
           <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-white text-slate-900 text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             Talk to AI
           </span>
        )}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 z-40 w-[90vw] md:w-[380px] bg-[#0f172a] border border-slate-700/50 rounded-3xl shadow-2xl transition-all duration-300 origin-bottom-right overflow-hidden flex flex-col ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 120px)', height: '600px' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
               <Bot className="w-6 h-6 text-white" />
             </div>
             <div>
               <h3 className="text-white font-bold text-sm">Portfolio Assistant</h3>
               <div className="flex items-center gap-1.5">
                 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                 <span className="text-indigo-100 text-xs font-medium">Online</span>
               </div>
             </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-white/80 transition-colors">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-sm' 
                  : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-sm p-4 flex gap-2 items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-[#0f172a] border-t border-slate-800 shrink-0">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-2xl pl-5 pr-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 border border-slate-700 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl disabled:opacity-50 disabled:hover:bg-indigo-500 transition-all"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-slate-600 font-medium uppercase tracking-wider">
             <Sparkles className="w-3 h-3" />
             Powered by Gemini 2.5 Flash
          </div>
        </div>
      </div>
    </>
  );
};