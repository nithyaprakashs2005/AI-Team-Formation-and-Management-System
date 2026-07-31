import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Building2, Award, Flame, Star, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github } from './icons/GithubIcon';

const universityData = [
  { rank: 1, name: 'MIT (Massachusetts Institute of Tech)', score: '98,450 pts', teams: '340 Teams', wins: '42 Hackathon Firsts', logo: '🎓', country: 'USA' },
  { rank: 2, name: 'IIT Bombay', score: '96,120 pts', teams: '410 Teams', wins: '38 Hackathon Firsts', logo: '🇮🇳', country: 'India' },
  { rank: 3, name: 'Stanford University', score: '94,800 pts', teams: '290 Teams', wins: '35 Hackathon Firsts', logo: '🌲', country: 'USA' },
  { rank: 4, name: 'NTU (Nanyang Technological Univ)', score: '91,200 pts', teams: '210 Teams', wins: '29 Hackathon Firsts', logo: '🦁', country: 'Singapore' },
  { rank: 5, name: 'ETH Zurich', score: '89,900 pts', teams: '180 Teams', wins: '26 Hackathon Firsts', logo: '🇨🇭', country: 'Switzerland' }
];

const companyData = [
  { rank: 1, name: 'Google (Brain & Cloud Devs)', score: '124,000 pts', teams: '185 Pro Teams', wins: '56 Global Awards', logo: '🌐', domain: 'Cloud & AI' },
  { rank: 2, name: 'Microsoft (Azure & Copilot Labs)', score: '118,500 pts', teams: '160 Pro Teams', wins: '48 Global Awards', logo: '💻', domain: 'Enterprise Software' },
  { rank: 3, name: 'Meta (AI Research & FAIR)', score: '109,200 pts', teams: '130 Pro Teams', wins: '41 Global Awards', logo: '♾️', domain: 'Open Source AI' },
  { rank: 4, name: 'Stripe (Infrastructure Team)', score: '98,700 pts', teams: '95 Pro Teams', wins: '32 Global Awards', logo: '💳', domain: 'FinTech' },
  { rank: 5, name: 'OpenAI (Developer Guild)', score: '95,400 pts', teams: '80 Pro Teams', wins: '30 Global Awards', logo: '🤖', domain: 'Generative AI' }
];

const contributorData = [
  { rank: 1, name: 'Elena Rostova', score: '48,200 commits', teams: '14 Open Source Repos', wins: 'Core Contributor', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80', badge: 'Diamond Rank' },
  { rank: 2, name: 'Aarav Sharma', score: '42,900 commits', teams: '11 Open Source Repos', wins: 'React 19 Contributor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80', badge: 'Gold Rank' },
  { rank: 3, name: 'Dr. Sophia Chen', score: '39,400 commits', teams: '9 AI Framework Repos', wins: 'PyTorch Committer', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80', badge: 'Gold Rank' },
  { rank: 4, name: 'Lucas Rossi', score: '35,100 commits', teams: '8 UI Library Repos', wins: 'Tailwind Plugin Author', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80', badge: 'Silver Rank' },
  { rank: 5, name: 'Kavya Ramanathan', score: '31,800 commits', teams: '6 Database Tool Repos', wins: 'Postgres Extension Lead', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80', badge: 'Silver Rank' }
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('unis');

  return (
    <section id="leaderboard" className="relative py-24 bg-white dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Global Hall of Fame</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ecosystem <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 dark:from-amber-300 dark:via-yellow-400 dark:to-amber-500 bg-clip-text text-transparent">Leaderboard</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Track top-performing universities, enterprise organizations, and individual open-source contributors worldwide.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('unis')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'unis'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Top Universities</span>
            </button>

            <button
              onClick={() => setActiveTab('companies')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'companies'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Top Companies</span>
            </button>

            <button
              onClick={() => setActiveTab('contributors')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'contributors'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>Top Contributors</span>
            </button>
          </div>
        </div>

        {/* Leaderboard Table Container */}
        <div className="max-w-4xl mx-auto rounded-3xl p-4 sm:p-6 bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-xl space-y-3">
          
          {activeTab === 'unis' && universityData.map((item) => (
            <motion.div
              key={item.rank}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-4 rounded-2xl flex items-center justify-between border transition-all ${
                item.rank === 1
                  ? 'bg-amber-50/70 dark:bg-gradient-to-r dark:from-amber-500/10 dark:via-slate-900 dark:to-slate-900 border-amber-300 dark:border-amber-500/40 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-950/70 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
                  item.rank === 1 ? 'bg-amber-400 text-slate-950' : item.rank === 2 ? 'bg-slate-300 text-slate-950' : item.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                }`}>
                  #{item.rank}
                </div>
                <div className="text-2xl">{item.logo}</div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{item.country} • {item.teams}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm sm:text-base font-extrabold text-amber-600 dark:text-amber-400 block">{item.score}</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{item.wins}</span>
              </div>
            </motion.div>
          ))}

          {activeTab === 'companies' && companyData.map((item) => (
            <motion.div
              key={item.rank}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-4 rounded-2xl flex items-center justify-between border transition-all ${
                item.rank === 1
                  ? 'bg-purple-50/70 dark:bg-gradient-to-r dark:from-purple-500/10 dark:via-slate-900 dark:to-slate-900 border-purple-300 dark:border-purple-500/40 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-950/70 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
                  item.rank === 1 ? 'bg-amber-400 text-slate-950' : item.rank === 2 ? 'bg-slate-300 text-slate-950' : item.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                }`}>
                  #{item.rank}
                </div>
                <div className="text-2xl">{item.logo}</div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{item.domain} • {item.teams}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm sm:text-base font-extrabold text-indigo-600 dark:text-indigo-400 block">{item.score}</span>
                <span className="text-[10px] text-purple-600 dark:text-purple-300 font-semibold">{item.wins}</span>
              </div>
            </motion.div>
          ))}

          {activeTab === 'contributors' && contributorData.map((item) => (
            <motion.div
              key={item.rank}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-4 rounded-2xl flex items-center justify-between border transition-all ${
                item.rank === 1
                  ? 'bg-cyan-50/70 dark:bg-gradient-to-r dark:from-cyan-500/10 dark:via-slate-900 dark:to-slate-900 border-cyan-300 dark:border-cyan-500/40 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-950/70 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
                  item.rank === 1 ? 'bg-amber-400 text-slate-950' : item.rank === 2 ? 'bg-slate-300 text-slate-950' : item.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                }`}>
                  #{item.rank}
                </div>
                <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover border border-indigo-500" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{item.wins} • {item.teams}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm sm:text-base font-extrabold text-cyan-600 dark:text-cyan-400 block">{item.score}</span>
                <span className="text-[10px] text-indigo-700 dark:text-indigo-300 font-semibold bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/20">{item.badge}</span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
