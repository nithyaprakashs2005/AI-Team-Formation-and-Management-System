import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Code, Sparkles, Filter, ArrowRight, UserPlus, CheckCircle } from 'lucide-react';

import { useProjectStore } from '../store/useProjectStore';

export default function FeaturedProjects({ openApplyModal }) {
  const projects = useProjectStore(state => state.projects);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'AI / Healthcare', 'IoT / Machine Learning', 'Robotics / Computer Vision', 'Cybersecurity / Web3', 'Fullstack / EdTech'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-slate-950/70 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold">
            <Rocket className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>High Impact Initiatives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Collaborative Projects</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Explore teams recruiting now for open-source ventures, startup MVPs, and research papers.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl p-6 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-slate-700 backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-5"
            >
              <div>
                {/* Top Badge & Member Count */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono font-semibold">
                    <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    {project.membersCount}/{project.maxMembers} Members
                  </span>
                </div>

                {/* Title & Owner */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{project.owner} • <span className="text-slate-800 dark:text-slate-300 font-semibold">{project.org}</span></p>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Needed Roles Section */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 space-y-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1">
                    <UserPlus className="w-3 h-3" /> Needed Roles:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.neededRoles.map((role) => (
                      <span key={role} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-500/30">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-transparent">
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => openApplyModal(project, 'project')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Join Team</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
