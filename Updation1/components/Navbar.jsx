import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, Menu, X, ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjectStore } from '../store/useProjectStore';

export default function Navbar({ isDark, toggleTheme, openAuthModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const notifications = useProjectStore(state => state.notifications);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Find Teams', href: '#projects' },
    { name: 'AI Match Engine', href: '#ai-preview' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Global Map', href: '#global-map' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-xl bg-white/85 dark:bg-slate-950/85 border-b border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-900/5 dark:shadow-indigo-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                TeamSync <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">AI</span>
              </span>
              <span className="text-[10px] tracking-wider text-indigo-600 dark:text-indigo-400 uppercase font-semibold -mt-1">
                Global Network
              </span>
            </div>
          </a>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/60 rounded-full transition-all shadow-2xs"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/60 rounded-full transition-all shadow-2xs"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Right: Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Notifications */}
            <div className="relative flex items-center justify-center p-2 mr-1">
              <Bell className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              {notifications.length > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-950"></span>
              )}
            </div>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Login */}
            <button
              onClick={() => openAuthModal('login')}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl transition-all border border-slate-200 dark:border-slate-800/40 cursor-pointer"
            >
              Log in
            </button>

            {/* Get Started */}
            <button
              onClick={() => openAuthModal('signup')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-xl group bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 rounded-[10px] bg-slate-900/10 dark:bg-slate-950/20 group-hover:bg-opacity-0 flex items-center gap-1.5">
                Get Started
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800/60"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); openAuthModal('login'); }}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
            >
              Log in
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); openAuthModal('signup'); }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
