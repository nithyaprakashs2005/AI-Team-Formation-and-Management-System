import React from 'react';
import { Sparkles, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { GithubIcon as Github } from './icons/GithubIcon';
import { LinkedinIcon as Linkedin, TwitterIcon as Twitter } from './icons/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80 dark:border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                TeamSync <span className="text-indigo-600 dark:text-indigo-400">AI</span>
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              The premier AI-powered global collaboration platform connecting students, developers, researchers, startup founders, and mentors worldwide.
            </p>

            {/* System Operational Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AI Match Engine Operational (99.9%)</span>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Platform</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#features" className="hover:text-slate-950 dark:hover:text-white transition-colors">Features</a></li>
              <li><a href="#hackathons" className="hover:text-slate-950 dark:hover:text-white transition-colors">Hackathons</a></li>
              <li><a href="#projects" className="hover:text-slate-950 dark:hover:text-white transition-colors">Find Teams</a></li>
              <li><a href="#ai-preview" className="hover:text-slate-950 dark:hover:text-white transition-colors">AI Match Engine</a></li>
              <li><a href="#mentors" className="hover:text-slate-950 dark:hover:text-white transition-colors">Mentors</a></li>
              <li><a href="#leaderboard" className="hover:text-slate-950 dark:hover:text-white transition-colors">Leaderboard</a></li>
            </ul>
          </div>

          {/* Column 3: Community & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Community & Support</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#about" className="hover:text-slate-950 dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#support" className="hover:text-slate-950 dark:hover:text-white transition-colors">Help Center / Support</a></li>
              <li><a href="#contact" className="hover:text-slate-950 dark:hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#discord" className="hover:text-slate-950 dark:hover:text-white transition-colors">Discord Guild</a></li>
              <li><a href="#github-verify" className="hover:text-slate-950 dark:hover:text-white transition-colors">GitHub Skill Audit</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Legal & Social</h4>
            <ul className="space-y-2 text-xs font-medium mb-4">
              <li><a href="#privacy" className="hover:text-slate-950 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-950 dark:hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-slate-950 dark:hover:text-white transition-colors">Security Audit</a></li>
            </ul>

            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 TeamSync AI, Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with passion for innovators worldwide</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}
