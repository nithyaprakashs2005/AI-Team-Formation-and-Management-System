import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Briefcase, Sparkles, ChevronRight, PlusCircle } from 'lucide-react';
import FeaturedProjects from '../components/FeaturedProjects';
import CallToAction from '../components/CallToAction';

export default function Projects() {
  const { openApplyModal, openAuthModal } = useOutletContext();

  return (
    <div className="space-y-12 pb-12">
      {/* Page Header */}
      <section className="relative py-12 bg-gradient-to-b from-purple-50/50 via-slate-50 to-transparent dark:from-purple-950/20 dark:via-slate-950 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-purple-600 dark:text-purple-400 font-bold">Find Teams & Projects</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Collaborative Openings</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Featured <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent">Collaborative Projects</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Discover active open-source, startup, and research projects seeking complementary talent across frontend, backend, AI/ML, and product design.
              </p>
            </div>

            {/* Quick Action */}
            <button
              onClick={() => openAuthModal('signup', 'student')}
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Post a Project Opening
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedProjects openApplyModal={openApplyModal} />
      </div>

      {/* Call to Action */}
      <CallToAction openAuthModal={openAuthModal} />
    </div>
  );
}
