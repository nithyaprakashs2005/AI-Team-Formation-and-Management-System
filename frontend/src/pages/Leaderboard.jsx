import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { BarChart3, Sparkles, ChevronRight, Medal } from 'lucide-react';
import Leaderboard from '../components/Leaderboard';
import CallToAction from '../components/CallToAction';

export default function LeaderboardPage() {
  const { openAuthModal } = useOutletContext();

  return (
    <div className="space-y-12 pb-12">
      {/* Page Header */}
      <section className="relative py-12 bg-gradient-to-b from-amber-50/50 via-slate-50 to-transparent dark:from-amber-950/20 dark:via-slate-950 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-600 dark:text-amber-400 font-bold">Leaderboard</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Medal className="w-3.5 h-3.5" />
                <span>Global Rankings & Badges</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Ecosystem <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600 dark:from-amber-400 dark:via-orange-400 dark:to-pink-400 bg-clip-text text-transparent">Leaderboard</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Recognizing top-performing universities, active open-source contributors, high-impact teams, and sponsor organizations driving innovation.
              </p>
            </div>

            {/* Quick Action */}
            <button
              onClick={() => openAuthModal('signup')}
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              View My Ranking
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Leaderboard />
      </div>

      {/* Call to Action */}
      <CallToAction openAuthModal={openAuthModal} />
    </div>
  );
}
