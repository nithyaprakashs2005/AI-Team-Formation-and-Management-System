import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, GraduationCap, Briefcase, Award, Rocket, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from '../icons/GithubIcon';

export default function AuthModal({ isOpen, onClose, initialMode = 'signup', initialRole = 'student' }) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [role, setRole] = useState(initialRole);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-md rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden text-slate-900 dark:text-slate-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-200 dark:border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Welcome to TeamSync AI!</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Authenticating GitHub Skill Graph and setting up your workspace...</p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 mx-auto mb-2">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {isLogin ? 'Log In to TeamSync AI' : 'Create Your Account'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {isLogin ? 'Welcome back! Sync your team progress.' : 'Join thousands of developers building hackathon teams.'}
              </p>
            </div>

            {/* GitHub OAuth Button */}
            <button
              onClick={() => setSubmitted(true)}
              className="w-full py-3 px-4 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center gap-3 shadow-md group cursor-pointer"
            >
              <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Continue with GitHub (Recommended)</span>
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
              <span className="text-[10px] uppercase text-slate-400 dark:text-slate-500 font-bold">Or Email Signup</span>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
            </div>

            {/* Role Picker (if signup) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">Select Primary Role:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`py-2 px-2 rounded-xl text-[11px] font-semibold border flex items-center justify-center gap-1 transition-all cursor-pointer ${
                      role === 'student' ? 'bg-indigo-600 text-white border-indigo-500 shadow-xs' : 'bg-slate-50 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Student</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('professional')}
                    className={`py-2 px-2 rounded-xl text-[11px] font-semibold border flex items-center justify-center gap-1 transition-all cursor-pointer ${
                      role === 'professional' ? 'bg-purple-600 text-white border-purple-500 shadow-xs' : 'bg-slate-50 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Pro Dev</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('mentor')}
                    className={`py-2 px-2 rounded-xl text-[11px] font-semibold border flex items-center justify-center gap-1 transition-all cursor-pointer ${
                      role === 'mentor' ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-xs' : 'bg-slate-50 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Mentor</span>
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs shadow-md shadow-indigo-500/25 transition-all mt-2 cursor-pointer"
              >
                {isLogin ? 'Log In' : 'Create Free Account'}
              </button>
            </form>

            {/* Toggle Login / Signup */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-colors cursor-pointer"
              >
                {isLogin ? "Don't have an account? Sign up free" : "Already have an account? Log in"}
              </button>
            </div>

          </div>
        )}
      </motion.div>
    </div>
  );
}
