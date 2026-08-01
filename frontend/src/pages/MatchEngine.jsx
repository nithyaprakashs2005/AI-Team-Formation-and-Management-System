import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Cpu, Sparkles, ChevronRight, Zap } from 'lucide-react';
import AiRecommendationPreview from '../components/AiRecommendationPreview';
import CallToAction from '../components/CallToAction';

export default function MatchEngine() {
  const { openAuthModal } = useOutletContext();

  return (
    <div className="space-y-12 pb-12">
      {/* Page Header */}
      <section className="relative py-12 bg-gradient-to-b from-indigo-50/50 via-slate-50 to-transparent dark:from-indigo-950/20 dark:via-slate-950 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">AI Match Engine</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI Compatibility Simulator</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Interactive <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">AI Compatibility Dashboard</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Experience our multi-dimensional matching engine analyze skill overlaps, timezone compatibility, work styles, and project goals to form optimal teams.
              </p>
            </div>

            {/* Quick Action */}
            <button
              onClick={() => openAuthModal('signup')}
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 mr-2" />
              Calculate My Compatibility Score
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AiRecommendationPreview openAuthModal={openAuthModal} />
      </div>

      {/* Call to Action */}
      <CallToAction openAuthModal={openAuthModal} />
    </div>
  );
}
