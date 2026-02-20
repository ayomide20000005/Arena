"use client";

import React, { useState } from 'react';
import { 
  Plus, Search, Terminal, BookOpen, GitBranch, Star, 
  ChevronDown, Code2, PlayCircle, Settings, History, 
  Eye, Copy, Send, Sparkles, Inbox
} from 'lucide-react';

export default function ArenaMaster() {
  // Navigation State: 'feed' (Explore) or 'repo' (Project View)
  const [view, setView] = useState<'feed' | 'repo'>('feed');
  // Tab State for the Repository View: 'prompt' | 'playground' | 'history'
  const [activeTab, setActiveTab] = useState('prompt');
  // Currently selected repository data
  const [selectedRepo, setSelectedRepo] = useState<any>(null);

  // Mock Ecosystem Data
  const prompts = [
    { 
        id: 1, 
        title: "SEO_Master_v2", 
        description: "Optimizes blog posts for search rankings and keyword density.", 
        model: "GPT-4o", 
        lastCommit: "2h ago", 
        stars: 12, 
        content: "You are an SEO expert. Analyze the following text for keyword density, LSI keywords, and meta-tag optimization. Provide a score out of 100." 
    },
    { 
        id: 2, 
        title: "Code_Reviewer_Pro", 
        description: "Deep dive logic analysis for React, Next.js, and TypeScript.", 
        model: "Gemini 1.5 Pro", 
        lastCommit: "5h ago", 
        stars: 45, 
        content: "You are a Senior Software Engineer. Review this code for memory leaks, performance bottlenecks, and adherence to SOLID principles. Suggest refactoring where necessary." 
    },
    { 
        id: 3, 
        title: "Creative_Writing_Helper", 
        description: "Assists with narrative structure and character development arcs.", 
        model: "Claude 3.5", 
        lastCommit: "1d ago", 
        stars: 8, 
        content: "You are a world-class novelist. Help me expand this scene by adding sensory details, improving the dialogue flow, and deepening the emotional subtext." 
    },
  ];

  const openRepo = (repo: any) => {
    setSelectedRepo(repo);
    setView('repo');
    setActiveTab('prompt');
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans flex flex-col">
      
      {/* --- SHARED HEADER --- */}
      <header className="border-b border-[#30363d] bg-[#161b22] px-4 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('feed')}>
          <div className="bg-[#21262d] p-1.5 rounded-md border border-[#30363d]">
            <Terminal size={20} className="text-blue-400" />
          </div>
          <span className="text-sm font-bold text-white tracking-tight uppercase">Arena</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1 gap-2">
            <Search size={14} className="text-[#8b949e]" />
            <input type="text" placeholder="Search Arena..." className="bg-transparent border-none focus:outline-none text-xs w-64 text-white" />
          </div>
          <div className="flex items-center gap-3 border-l border-[#30363d] ml-2 pl-4">
            <Plus size={18} className="hover:text-white cursor-pointer" />
            <Inbox size={18} className="hover:text-white cursor-pointer" />
            <div className="w-7 h-7 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full border border-[#30363d]" />
          </div>
        </div>
      </header>

      {view === 'feed' ? (
        /* --- FEED VIEW --- */
        <main className="max-w-6xl mx-auto p-8 w-full animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white">Explore Prompts</h1>
              <p className="text-[#8b949e] text-sm mt-1">Version control, fork, and test the community's best prompts.</p>
            </div>
            <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-1.5 rounded-md text-sm font-bold transition-all">
              New Project
            </button>
          </div>

          <div className="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden shadow-2xl">
            {prompts.map((p) => (
              <div key={p.id} className="p-5 border-b border-[#30363d] last:border-b-0 hover:bg-[#161b22]/50 transition-all flex justify-between items-center">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-[#8b949e]" />
                    <h3 onClick={() => openRepo(p)} className="text-[#58a6ff] font-bold text-xl hover:underline cursor-pointer">
                      {p.title}
                    </h3>
                    <span className="text-[10px] border border-[#30363d] px-2 py-0.5 rounded-full text-[#8b949e] font-bold uppercase tracking-wider">Public</span>
                  </div>
                  <p className="text-sm text-[#8b949e] max-w-2xl">{p.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-[#8b949e]">
                    <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-blue-500" /> {p.model}</span>
                    <span className="flex items-center gap-1.5"><Star size={14} /> {p.stars}</span>
                    <span>Updated {p.lastCommit}</span>
                  </div>
                </div>
                <button className="bg-[#21262d] border border-[#30363d] px-3 py-1.5 rounded-md text-xs font-bold hover:bg-[#30363d] flex items-center gap-2">
                  <Star size={14} className="text-[#8b949e]" /> Star
                </button>
              </div>
            ))}
          </div>
        </main>
      ) : (
        /* --- REPOSITORY VIEW --- */
        <div className="animate-in fade-in duration-300">
          <div className="bg-[#161b22] border-b border-[#30363d] pt-6 px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xl">
                <BookOpen size={20} className="text-[#8b949e]" />
                <span className="text-[#58a6ff] hover:underline cursor-pointer">arena-user</span>
                <span className="text-[#8b949e]">/</span>
                <span className="font-bold text-white">{selectedRepo?.title}</span>
                <span className="text-[10px] border border-[#30363d] px-2 py-0.5 rounded-full text-[#8b949e] ml-2 font-bold uppercase tracking-wider">Public</span>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-[#21262d] border border-[#30363d] px-3 py-1.5 rounded-md text-xs font-bold hover:bg-[#30363d]">
                  <Star size={14} /> Star <span className="bg-[#30363d] px-2 rounded-full ml-1 text-white">{selectedRepo?.stars}</span>
                </button>
              </div>
            </div>

            {/* TAB NAVIGATION */}
            <div className="flex gap-6">
              {[
                { id: 'prompt', icon: Code2, label: 'Prompt' },
                { id: 'playground', icon: PlayCircle, label: 'Playground' },
                { id: 'history', icon: History, label: 'Commits', count: 12 },
                { id: 'settings', icon: Settings, label: 'Settings' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 pb-3 px-1 text-sm transition-colors border-b-2 ${
                    activeTab === tab.id 
                    ? 'border-[#f78166] text-white font-semibold' 
                    : 'border-transparent text-[#8b949e] hover:border-[#8b949e]'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                  {tab.count && <span className="bg-[#30363d] text-[10px] px-1.5 py-0.5 rounded-full">{tab.count}</span>}
                </button>
              ))}
            </div>
          </div>

          <main className="max-w-7xl mx-auto p-8">
            {activeTab === 'prompt' && (
              <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between bg-[#161b22] border border-[#30363d] rounded-t-md p-3">
                    <div className="flex items-center gap-3 text-sm font-semibold">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white">AU</div>
                      <span className="text-white">arena-user</span>
                      <span className="text-[#8b949e] font-normal tracking-tight">Version bump: Improved {selectedRepo?.model} logic</span>
                    </div>
                    <span className="text-xs text-[#8b949e]">{selectedRepo?.lastCommit}</span>
                  </div>
                  <div className="border border-[#30363d] border-t-0 rounded-b-md p-6 font-mono text-sm bg-[#0d1117] relative group leading-relaxed">
                    <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-[#21262d] border border-[#30363d] rounded hover:bg-[#30363d] transition-all">
                      <Copy size={14} />
                    </button>
                    <p className="text-[#8b949e] mb-4 text-xs uppercase tracking-widest">// System Message</p>
                    <p className="text-white">{selectedRepo?.content}</p>
                  </div>
                </div>
                <div className="w-full lg:w-72">
                  <h3 className="text-sm font-bold text-white mb-3 border-b border-[#30363d] pb-2 uppercase tracking-tighter">About</h3>
                  <p className="text-sm text-[#8b949e] leading-relaxed">{selectedRepo?.description}</p>
                  <div className="mt-6 pt-6 border-t border-[#30363d] space-y-4 text-xs font-semibold text-[#8b949e]">
                    <div className="flex items-center gap-2 text-white"><GitBranch size={14} /> main</div>
                    <div className="flex items-center gap-2"><History size={14} /> 12 Commits</div>
                    <div className="flex items-center gap-2"><Star size={14} /> {selectedRepo?.stars} stars</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'playground' && (
              <div className="animate-in fade-in grid grid-cols-1 lg:grid-cols-2 gap-6 h-[550px]">
                <div className="flex flex-col border border-[#30363d] rounded-md overflow-hidden bg-[#161b22]">
                  <div className="p-3 border-b border-[#30363d] bg-[#0d1117] flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b949e]">Input Variable</span>
                    <span className="text-xs text-blue-400 font-mono">[{selectedRepo?.model}]</span>
                  </div>
                  <textarea 
                    placeholder="Type your test query here..."
                    className="flex-1 bg-[#0d1117] p-4 text-sm focus:outline-none resize-none text-white font-mono"
                  />
                  <div className="p-3 border-t border-[#30363d] flex justify-end bg-[#0d1117]">
                    <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-5 py-2 rounded-md text-xs font-bold flex items-center gap-2 transition-all">
                      <Send size={14} /> Run Prompt
                    </button>
                  </div>
                </div>
                <div className="flex flex-col border border-[#30363d] rounded-md overflow-hidden bg-[#161b22]">
                  <div className="p-3 border-b border-[#30363d] bg-[#0d1117] flex items-center gap-2">
                    <Sparkles size={14} className="text-purple-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b949e]">Model Output</span>
                  </div>
                  <div className="flex-1 bg-[#0d1117]/50 p-4 text-sm text-[#8b949e] font-mono italic flex items-center justify-center text-center">
                    Click "Run Prompt" to see how the LLM responds to your version.
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}