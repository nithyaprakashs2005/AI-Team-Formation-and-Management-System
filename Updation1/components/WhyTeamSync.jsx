import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe2, Award, Sparkles, CheckCircle, Shield, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github } from './icons/GithubIcon';

const features = [
  {
    id: 1,
    title: 'AI Team Recommendation',
    description: 'Automatically matches teammates based on skills, GitHub activity, specialization, experience, and project requirements.',
    icon: Cpu,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    iconBg: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20',
    highlights: ['Skill Complementarity', 'Timezone Alignment', 'Role Compatibility']
  },
  {
    id: 2,
    title: 'GitHub Skill Verification',
    description: 'Analyze repositories, contributions, languages, and consistency to verify technical skills without resume fluff.',
    icon: Github,
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    iconBg: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20',
    highlights: ['Commit Graph Parsing', 'Language Mastery Rate', 'Clean Code Index']
  },
  {
    id: 3,
    title: 'Global Collaboration',
    description: 'Connect students and professionals from different colleges, companies, and countries for cross-border innovation.',
    icon: Globe2,
    gradient: 'from-cyan-500 via-indigo-500 to-purple-500',
    iconBg: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20',
    highlights: ['Cross-College Teams', 'Multi-Language Hub', 'Global Hackathons']
  },
  {
    id: 4,
    title: 'Industry Mentorship',
    description: 'Connect with experienced software engineers, startup founders, and technical mentors for 1-on-1 guidance.',
    icon: Award,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    iconBg: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
    highlights: ['Ex-FAANG Engineers', '1-on-1 Code Reviews', 'Pitch Deck Coaching']
  }
];

export default function WhyTeamSync() {
  return (
    <section id="features" className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Built for Modern Collaborators</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Top Developers Choose <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">TeamSync AI</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Say goodbye to random chat groups and incomplete hackathon teams. Our AI algorithm constructs high-performing, balanced teams in seconds.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl p-8 bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-300 dark:hover:border-slate-700 backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Gradient Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl border ${feature.iconBg} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      0{feature.id}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Highlights Pills */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-2">
                  {feature.highlights.map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                      <CheckCircle className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
