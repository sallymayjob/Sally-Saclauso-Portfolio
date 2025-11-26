import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { getGeminiChatResponse } from '../services/geminiService';
import { ChatMessage, PortfolioData } from '../types';
import { PORTFOLIO_DATA } from '../constants';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: `Hi! I'm an AI assistant trained on ${PORTFOLIO_DATA.name.split(' ')[0]}'s professional background. Ask me about skills, experience, or projects!`,
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isMinimized]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    const newMessages: ChatMessage[] = [
      ...messages, 
      { role: 'user', text: userMessage, timestamp: new Date() }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    // Get response
    const responseText = await getGeminiChatResponse(userMessage);

    setMessages(prev => [
      ...prev, 
      { role: 'model', text: responseText, timestamp: new Date() }
    ]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          Ask my AI
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed z-50 transition-all duration-300 ease-in-out bg-slate-800 border border-slate-700 shadow-2xl rounded-2xl overflow-hidden flex flex-col
      ${isMinimized 
        ? 'bottom-6 right-6 w-72 h-14 cursor-pointer' 
        : 'bottom-6 right-6 w-[90vw] md:w-96 h-[500px] max-h-[80vh]'
      }`}
    >
      {/* Header */}
      <div 
        className="bg-slate-900 p-4 flex items-center justify-between border-b border-slate-700 cursor-pointer"
        onClick={() => isMinimized && setIsMinimized(false)}
      >
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-500/20 rounded-lg">
            <Sparkles className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Assistant</h3>
            {!isMinimized && <p className="text-xs text-slate-400">Powered by Gemini</p>}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
            className="p-1.5 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="p-1.5 hover:bg-red-900/50 rounded-md text-slate-400 hover:text-red-400 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat Body */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none' 
                      : 'bg-slate-700 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                <div className="bg-slate-700/50 p-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
                  <span className="text-xs text-slate-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-slate-900 border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects..."
                className="w-full bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};