import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Users, Sparkles, ChevronRight, Award } from 'lucide-react';
import IndustryMentors from '../components/IndustryMentors';
import CallToAction from '../components/CallToAction';

export default function Mentors() {
  const { openBookingModal, openAuthModal } = useOutletContext();

  return (
    <div className="space-y-12 pb-12">
      {/* Page Header */}
      <section className="relative py-12 bg-gradient-to-b from-blue-50/50 via-slate-50 to-transparent dark:from-blue-950/20 dark:via-slate-950 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 dark:text-blue-400 font-bold">Mentors</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Industry Advisory Network</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Learn From <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Industry Mentors</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect 1-on-1 with principal engineers, startup founders, research leads, and product directors from top technology organizations.
              </p>
            </div>

            {/* Quick Action */}
            <button
              onClick={() => openAuthModal('signup', 'mentor')}
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 mr-2" />
              Apply as a Mentor
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IndustryMentors openBookingModal={openBookingModal} />
      </div>

      {/* Call to Action */}
      <CallToAction openAuthModal={openAuthModal} />
    </div>
  );
}
