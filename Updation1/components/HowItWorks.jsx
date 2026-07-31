import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Rocket, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from './icons/GithubIcon';

const steps = [
  {
    step: '01',
    title: 'Create Your Profile',
    sub: 'Highlight your expertise',
    desc: 'Set up your developer identity with role preferences, hackathon goals, availability, and preferred tech stack.',
    icon: UserPlus,
    badge: 'Quick 2-Min Setup',
    details: ['Specialization selection (Frontend, Backend, AI, Mobile)', 'Timezone & availability', 'Competition goals']
  },
  {
    step: '02',
    title: 'Connect GitHub',
    sub: 'Automated Skill Verification',
    desc: 'Our AI engine parses your public repos, commit history, language distribution, and pull requests to build a verified skill graph.',
    icon: Github,
    badge: 'Zero Resume Fluff',
    details: ['Language distribution analysis', 'Commit frequency mapping', 'Clean code & repo rating']
  },
  {
    step: '03',
    title: 'Create or Join Projects',
    sub: 'Post ideas or browse teams',
    desc: 'Launch your own hackathon venture or apply to existing team rosters seeking your exact skillset.',
    icon: Rocket,
    badge: 'Global Marketplace',
    details: ['Hackathon filter tags', 'Role opening posts', 'One-click application flow']
  },
  {
    step: '04',
    title: 'AI Recommends Team',
    sub: 'Instant compatibility scoring',
    desc: 'Receive AI match recommendations with high skill synergy, balanced roles, and high chance of winning hackathon prizes.',
    icon: Cpu,
    badge: '98% Success Synergy',
    details: ['Skill gap filling algorithm', 'Personality & timezone sync', 'Instant automated team invites']
  }
];

export default function HowItWorks({ openAuthModal }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-24 bg-white dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-bold tracking-widest text-purple-700 dark:text-purple-400 uppercase bg-purple-50 dark:bg-purple-500/10 px-3.5 py-1 rounded-full border border-purple-200 dark:border-purple-500/20">
            Streamlined Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">TeamSync AI</span> Works
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            From solo developer to dream team in 4 seamless steps.
          </p>
        </div>

        {/* Timeline Desktop & Tablet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 relative border flex flex-col justify-between ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-500/10 dark:shadow-indigo-950/60 -translate-y-1'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
                      {item.step}
                    </span>
                    <div className={`p-3 rounded-2xl ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Sub */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{item.sub}</p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Details list */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                  {item.details.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner under timeline */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openAuthModal('signup')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Start Step 1: Create Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
