import React from 'react';
import { motion } from 'framer-motion';
import { X, Play, Cpu, Sparkles, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-3xl rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden text-slate-900 dark:text-slate-100 space-y-6"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Product Walkthrough</span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">TeamSync AI Interactive Demo</h3>
        </div>

        {/* Video Player Frame Container */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-800 flex items-center justify-center group shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 pointer-events-none" />
          
          {/* Animated Demo Graphic inside video frame */}
          <div className="text-center p-8 space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white mx-auto flex items-center justify-center shadow-xl shadow-indigo-600/50 group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <div>
              <p className="text-base font-bold text-white">Watch How AI Matches 4,700+ Hackathon Teams</p>
              <p className="text-xs text-slate-300">Duration: 2 min 15 sec • High Definition 4K Walkthrough</p>
            </div>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>Automated Skill Graphing</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>GitHub Commit Verification</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
            <Users className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
            <span>Real-time Chat & Video Hub</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
