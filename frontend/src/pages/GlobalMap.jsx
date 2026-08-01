import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Globe, Sparkles, ChevronRight, MapPin } from 'lucide-react';
import GlobalMap from '../components/GlobalMap';
import CallToAction from '../components/CallToAction';

export default function GlobalMapPage() {
  const { openAuthModal } = useOutletContext();

  return (
    <div className="space-y-12 pb-12">
      {/* Page Header */}
      <section className="relative py-12 bg-gradient-to-b from-teal-50/50 via-slate-50 to-transparent dark:from-teal-950/20 dark:via-slate-950 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-teal-600 dark:text-teal-400 font-bold">Global Map</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 text-teal-700 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>Worldwide Community Ecosystem</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Global Collaboration <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-indigo-600 dark:from-teal-400 dark:via-emerald-400 dark:to-indigo-400 bg-clip-text text-transparent">Network</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Explore real-time team formation activity, regional hackathon hubs, and active collaborator nodes across North America, Europe, Asia-Pacific, Latin America, and Africa.
              </p>
            </div>

            {/* Quick Action */}
            <button
              onClick={() => openAuthModal('signup')}
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Pin Your Regional Hub
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalMap />
      </div>

      {/* Call to Action */}
      <CallToAction openAuthModal={openAuthModal} />
    </div>
  );
}
