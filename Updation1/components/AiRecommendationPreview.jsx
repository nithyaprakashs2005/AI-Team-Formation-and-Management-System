import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, CheckCircle2, Send, RefreshCw, BarChart2, ShieldCheck, Zap } from 'lucide-react';
import { GithubIcon as Github } from './icons/GithubIcon';

const matchCandidates = [
  {
    id: 1,
    name: 'Dr. Sophia Chen',
    role: 'AI / ML Research Lead',
    matchedFor: 'AI Engineer',
    score: 98,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    university: 'MIT AI Lab',
    githubRepoScore: '99/100',
    commits: '2,450+',
    skills: ['PyTorch', 'Transformers', 'FastAPI', 'Python', 'CUDA'],
    radar: { skills: 99, consistency: 97, timezone: 95 }
  },
  {
    id: 2,
    name: 'Lucas Rossi',
    role: 'Senior Frontend Architect',
    matchedFor: 'Frontend Developer',
    score: 95,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    university: 'ETH Zurich',
    githubRepoScore: '96/100',
    commits: '1,890+',
    skills: ['React 19', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    radar: { skills: 96, consistency: 94, timezone: 96 }
  },
  {
    id: 3,
    name: 'Kavya Ramanathan',
    role: 'Backend Systems Engineer',
    matchedFor: 'Backend Developer',
    score: 93,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    university: 'IIT Bombay',
    githubRepoScore: '94/100',
    commits: '1,620+',
    skills: ['Python', 'PostgreSQL', 'Redis', 'Docker', 'gRPC'],
    radar: { skills: 94, consistency: 92, timezone: 93 }
  }
];

export default function AiRecommendationPreview({ openAuthModal }) {
  const [invited, setInvited] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleInvite = (id) => {
    setInvited(prev => ({ ...prev, [id]: true }));
  };

  const handleRefreshMatch = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <section id="ai-preview" className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Interactive Match Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            AI Compatibility <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 dark:from-purple-400 dark:via-indigo-300 dark:to-pink-400 bg-clip-text text-transparent">Engine Dashboard</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            See how TeamSync AI evaluates technical skills, GitHub history, and availability to curate the ultimate team synergy.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-indigo-950/50 relative">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Target Project</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-semibold">
                  Status: Active Recruiting
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">AI Healthcare Assistant</h3>
            </div>

            {/* Required Skills & Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium">
                <span className="font-semibold text-slate-900 dark:text-slate-300">Required Skills:</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">React</span> •
                <span className="text-purple-600 dark:text-purple-400 font-bold">Python</span> •
                <span className="text-pink-600 dark:text-pink-400 font-bold">Machine Learning</span>
              </div>

              <button
                onClick={handleRefreshMatch}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-indigo-600 dark:text-indigo-400' : ''}`} />
                <span>Re-Run AI Engine</span>
              </button>
            </div>
          </div>

          {/* Candidate Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {matchCandidates.map((c) => {
              const isInvited = invited[c.id];

              return (
                <div
                  key={c.id}
                  className="rounded-2xl p-5 bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    {/* Candidate Avatar & Match % */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={c.avatar} 
                          alt={c.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                        />
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">{c.name}</h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">{c.role}</p>
                          <p className="text-[10px] text-indigo-600 dark:text-indigo-300 font-mono font-semibold">{c.university}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                          {c.score}% Match
                        </span>
                      </div>
                    </div>

                    {/* Matched Role Badge */}
                    <div className="mb-3 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center justify-between">
                      <span>Match Role:</span>
                      <span className="text-slate-900 dark:text-white font-bold">{c.matchedFor}</span>
                    </div>

                    {/* Compatibility Bars */}
                    <div className="space-y-2 mb-4 bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800/60 text-xs">
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mb-1 font-semibold">
                          <span>Technical Skill Graph</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{c.radar.skills}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-indigo-600 to-emerald-500 h-full rounded-full" style={{ width: `${c.radar.skills}%` }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mb-1 font-semibold">
                          <span>GitHub Commit Synergy</span>
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">{c.radar.consistency}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${c.radar.consistency}%` }} />
                        </div>
                      </div>
                    </div>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1">
                      {c.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700/60">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Invite Trigger */}
                  <button
                    onClick={() => handleInvite(c.id)}
                    disabled={isInvited}
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isInvited
                        ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/30'
                    }`}
                  >
                    {isInvited ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Invitation Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Invite to Team</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
