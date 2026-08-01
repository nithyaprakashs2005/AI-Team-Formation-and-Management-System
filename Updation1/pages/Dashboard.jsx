import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useProjectStore } from '../store/useProjectStore';
import { Check, X, ShieldCheck, User, Users, Briefcase, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false);
  const projects = useProjectStore(state => state.projects);
  const applications = useProjectStore(state => state.applications);
  const acceptApplication = useProjectStore(state => state.acceptApplication);
  const rejectApplication = useProjectStore(state => state.rejectApplication);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} openAuthModal={() => {}} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Project Owner Dashboard</h1>
          <p className="text-slate-500 mt-2">Manage your project teams and review incoming applications.</p>
        </div>

        <div className="space-y-16">
          {projects.map(project => {
            const projectApps = applications.filter(a => a.projectId === project.id && a.status === 'pending');
            
            return (
              <div key={project.id} className="space-y-8">
                {/* Project Header */}
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl ${project.badgeColor.split(' ')[0]} ${project.badgeColor.split(' ')[1]}`}>
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
                    <p className="text-sm text-slate-500">
                      Team Capacity: {project.membersCount} / {project.maxMembers} Members
                    </p>
                  </div>
                </div>

                {/* Team Applications */}
                <section>
                  <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-800 dark:text-slate-200">
                    <FileText className="w-5 h-5 text-indigo-500" /> Pending Applications ({projectApps.length})
                  </h3>
                  
                  {projectApps.length === 0 ? (
                    <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center text-slate-500">
                      No pending applications for this project.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {projectApps.map(app => (
                          <motion.div 
                            key={app.id} 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            layout
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between space-y-5"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <img src={app.profilePic} alt={app.applicantName} className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800" />
                                <div>
                                  <h4 className="font-bold text-slate-900 dark:text-white">{app.applicantName}</h4>
                                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{app.role}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className={`text-xl font-black ${app.compatibilityScore >= 70 ? 'text-emerald-500' : 'text-amber-500'}`}>
                                  {app.compatibilityScore}%
                                </div>
                                <span className="text-[9px] uppercase font-bold text-slate-500">Match</span>
                              </div>
                            </div>

                            {app.githubVerified && (
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 rounded-md self-start border border-emerald-200 dark:border-emerald-800/50">
                                <ShieldCheck className="w-3.5 h-3.5" /> GitHub Verified
                              </div>
                            )}

                            <div className="text-sm text-slate-600 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50">
                              "{app.message}"
                            </div>
                            
                            <div className="flex flex-wrap gap-1.5">
                              {app.skills.map(s => (
                                <span key={s} className="px-2 py-1 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                                  {s}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center justify-between text-xs text-slate-500">
                              <span><strong className="text-slate-700 dark:text-slate-300">Available:</strong> {app.availability}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-2">
                              <button 
                                onClick={() => rejectApplication(app.id)}
                                className="py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 font-semibold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                              >
                                <X className="w-4 h-4" /> Reject
                              </button>
                              <button 
                                onClick={() => acceptApplication(app.id)}
                                className="py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-1 cursor-pointer"
                              >
                                <Check className="w-4 h-4" /> Accept
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}
                </section>

                {/* Current Team Members */}
                <section>
                  <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-800 dark:text-slate-200">
                    <Users className="w-5 h-5 text-purple-500" /> Current Team Members
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {project.members.map(member => (
                      <div key={member.id} className="bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                          {member.profilePic ? (
                            <img src={member.profilePic} alt={member.name} className="w-full h-full rounded-full" />
                          ) : (
                            <User className="w-5 h-5 text-indigo-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-900 dark:text-white">{member.name}</p>
                          <p className="text-[10px] uppercase font-semibold text-indigo-600 dark:text-indigo-400">{member.role}</p>
                        </div>
                      </div>
                    ))}
                    
                    {Array.from({ length: project.maxMembers - project.membersCount }).map((_, idx) => (
                      <div key={`vacant-${idx}`} className="bg-slate-50 dark:bg-slate-950/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 flex items-center gap-4 opacity-70">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                          <User className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-slate-500 dark:text-slate-400">Vacant Position</p>
                          <p className="text-[10px] uppercase font-semibold text-slate-400">Recruiting</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                
                <hr className="border-slate-200 dark:border-slate-800 mt-12" />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
