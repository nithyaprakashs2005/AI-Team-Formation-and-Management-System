import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Trophy, Sparkles, ChevronRight, Search, Filter } from 'lucide-react';
import FeaturedHackathons from '../components/FeaturedHackathons';
import CallToAction from '../components/CallToAction';

export default function Hackathons() {
  const { openApplyModal, openAuthModal } = useOutletContext();

  return (
    <div className="space-y-12 pb-12">
      {/* Page Header */}
      <section className="relative py-12 bg-gradient-to-b from-indigo-50/50 via-slate-50 to-transparent dark:from-indigo-950/20 dark:via-slate-950 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">Hackathons</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5" />
                <span>Global Competitions & Sprints</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Featured <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Hackathons</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Form high-compatibility AI teams, compete in global hackathons, build breakthrough projects, and win prizes from top tech sponsors.
              </p>
            </div>

            {/* Quick Action */}
            <button
              onClick={() => openAuthModal('signup', 'collaborator')}
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Submit Your Hackathon
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedHackathons openApplyModal={openApplyModal} />
      </div>

      {/* Call to Action */}
      <CallToAction openAuthModal={openAuthModal} />
    </div>
  );
}
