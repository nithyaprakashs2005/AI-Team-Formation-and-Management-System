import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AuthLayout({ children, leftPanelContent }) {
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
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-indigo-700 via-purple-700 to-cyan-600 overflow-hidden items-center justify-center p-12">
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
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 relative max-h-screen overflow-y-auto">
        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="w-full max-w-md mt-12 mb-8">
          {children}
        </div>
      </div>
    </div>
  );
}
