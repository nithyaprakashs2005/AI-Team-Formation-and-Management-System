import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Users, Flame, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

const hackathons = [
  {
    id: 'gsc',
    name: 'Google Solution Challenge 2026',
    organizer: 'Google Developers',
    logo: 'https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png',
    prize: '$50,000 USD',
    deadline: '14 Days Left',
    teamSize: '1 - 4 Members',
    difficulty: 'Advanced',
    tags: ['AI / ML', 'UN Sustainability', 'Flutter', 'Firebase'],
    gradient: 'from-blue-500/20 to-red-500/20 border-blue-500/30'
  },
  {
    id: 'grid',
    name: 'Flipkart GRID 6.0',
    organizer: 'Flipkart Tech',
    logo: 'https://assets.flipkart.com/www/promos/new/20150528-140547-favicon.ico',
    prize: '₹15 Lakhs INR',
    deadline: '8 Days Left',
    teamSize: '2 - 3 Members',
    difficulty: 'Intermediate',
    tags: ['E-Commerce Robotics', 'Supply Chain AI', 'System Design'],
    gradient: 'from-yellow-500/20 to-blue-500/20 border-yellow-500/30'
  },
  {
    id: 'mic',
    name: 'Microsoft Imagine Cup',
    organizer: 'Microsoft Azure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    prize: '$100,000 Azure',
    deadline: '22 Days Left',
    teamSize: '1 - 4 Members',
    difficulty: 'Expert',
    tags: ['Cloud Native', 'GenAI', 'Copilot Integration'],
    gradient: 'from-cyan-500/20 to-indigo-500/20 border-cyan-500/30'
  },
  {
    id: 'nasa',
    name: 'NASA Space Apps Challenge',
    organizer: 'NASA Earth Data',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    prize: 'Global Launch Pass',
    deadline: '30 Days Left',
    teamSize: '2 - 5 Members',
    difficulty: 'All Levels',
    tags: ['Astrophysics', 'Satellite Data', 'Open Source'],
    gradient: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
  },
  {
    id: 'sih',
    name: 'Smart India Hackathon 2026',
    organizer: 'Ministry of Education',
    logo: 'https://sih.gov.in/img1/logo.png',
    prize: '₹1,00,000 / Problem',
    deadline: '5 Days Left',
    teamSize: '6 Members (1 Female mandatory)',
    difficulty: 'All Levels',
    tags: ['GovTech', 'Smart Agriculture', 'Healthcare Tech'],
    gradient: 'from-amber-500/20 to-emerald-500/20 border-amber-500/30'
  }
];

export default function FeaturedHackathons({ openApplyModal }) {
  return (
    <section id="hackathons" className="relative py-24 bg-slate-50 dark:bg-slate-950">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Live Global Competitions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600 dark:from-amber-300 dark:via-orange-400 dark:to-pink-400 bg-clip-text text-transparent">Hackathons</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Apply with a pre-matched AI team or invite compatible developers looking for your exact tech stack.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">850+ Total Active Hackathons</span>
          </div>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`rounded-3xl p-6 bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-5`}
            >
              <div>
                {/* Header with Logo & Difficulty */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 p-2 flex items-center justify-center shrink-0">
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = 'https://via.placeholder.com/48?text=HACK';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.organizer}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20 shrink-0">
                    {item.difficulty}
                  </span>
                </div>

                {/* Metadata Pills Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 text-center mb-4">
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-slate-500">Prize Pool</span>
                    <span className="text-xs font-extrabold text-amber-700 dark:text-amber-400 flex items-center justify-center gap-1">
                      <Trophy className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                      {item.prize}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-slate-500">Deadline</span>
                    <span className="text-xs font-bold text-rose-700 dark:text-rose-400 flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                      {item.deadline}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-slate-500">Team Size</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1">
                      <Users className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                      {item.teamSize.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => openApplyModal({
                  id: item.id,
                  title: item.name,
                  category: 'Hackathon',
                  owner: item.organizer,
                  org: item.organizer,
                  desc: `Join our team for ${item.name}! We are looking for passionate developers.`,
                  neededRoles: ['Frontend Developer', 'Backend Developer', 'UI Designer'],
                  skills: item.tags,
                  membersCount: 1,
                  maxMembers: 4,
                  badgeColor: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20',
                  type: 'Hackathon',
                  difficulty: item.difficulty,
                  location: 'Online',
                  deadline: item.deadline,
                  duration: 'Hackathon',
                  members: [
                     { id: 'h1', name: item.organizer, role: 'Organizer' }
                  ]
                }, 'hackathon')}
                className="w-full py-3 rounded-xl bg-indigo-50 hover:bg-indigo-600 dark:bg-indigo-600/20 dark:hover:bg-indigo-600 text-indigo-700 dark:text-indigo-300 hover:text-white font-semibold text-xs border border-indigo-200 dark:border-indigo-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Find Teammates & Join</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
