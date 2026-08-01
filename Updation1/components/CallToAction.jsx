import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction({ openAuthModal }) {
  return (
    <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      
      {/* Background glowing gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-indigo-50 via-purple-50 to-white dark:from-slate-900/90 dark:via-indigo-950/40 dark:to-slate-900/90 border border-indigo-200 dark:border-indigo-500/30 backdrop-blur-2xl shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          {/* Subtle overlay lines */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Sparkles className="w-64 h-64 text-indigo-600 dark:text-indigo-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Join 15,000+ Innovators Worldwide</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Start Building Your <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">Dream Team</span> Today.
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Whether you are competing in a global hackathon, writing a research paper, launching a startup, or mentoring the next generation.
          </p>

          {/* Role CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            <button
              onClick={() => openAuthModal('student')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xl shadow-indigo-600/25 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Join as Student</span>
            </button>

            <button
              onClick={() => openAuthModal('professional')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-xl shadow-purple-600/25 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              <span>Join as Professional</span>
            </button>

            <button
              onClick={() => openAuthModal('mentor')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>Become a Mentor</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
