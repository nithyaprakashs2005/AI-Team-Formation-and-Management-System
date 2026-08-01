import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AuthLayout({ children, leftPanelContent, maxWidth = 'max-w-xl' }) {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300">
      {/* Left Panel (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 relative bg-gradient-to-br from-indigo-700 via-purple-700 to-cyan-600 overflow-hidden items-center justify-center p-12 sticky top-0 h-screen">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40V0h40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Content provided by the specific page */}
        <div className="relative z-10 w-full max-w-lg">
          {leftPanelContent}
        </div>
      </div>

      {/* Right Panel (Form) */}
      <div className="flex-1 flex flex-col min-h-screen w-full lg:w-7/12 xl:w-1/2 bg-slate-50 dark:bg-slate-950">
        {/* Sticky Top Bar Header */}
        <header className="sticky top-0 z-30 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md px-6 sm:px-10 py-4 border-b border-slate-200/60 dark:border-slate-800/60 flex justify-between items-center w-full">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors cursor-pointer border border-slate-200 dark:border-slate-800"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </header>

        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 py-8 sm:py-12">
          <div className={`w-full ${maxWidth} mx-auto my-auto space-y-6`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
