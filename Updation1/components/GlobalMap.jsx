import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, GraduationCap, Building2, Rocket, MapPin, CheckCircle } from 'lucide-react';

const pinData = [
  {
    id: 'india',
    country: 'India',
    flag: '🇮🇳',
    top: '42%',
    left: '68%',
    students: '5,400+',
    pros: '1,200+',
    mentors: '180+',
    projects: '1,450+',
    topHubs: 'Bengaluru, Delhi NCR, Mumbai'
  },
  {
    id: 'usa',
    country: 'USA',
    flag: '🇺🇸',
    top: '32%',
    left: '24%',
    students: '4,200+',
    pros: '2,100+',
    mentors: '340+',
    projects: '1,200+',
    topHubs: 'San Francisco, New York, Seattle'
  },
  {
    id: 'germany',
    country: 'Germany',
    flag: '🇩🇪',
    top: '28%',
    left: '52%',
    students: '1,800+',
    pros: '750+',
    mentors: '110+',
    projects: '480+',
    topHubs: 'Berlin, Munich, Hamburg'
  },
  {
    id: 'japan',
    country: 'Japan',
    flag: '🇯🇵',
    top: '36%',
    left: '84%',
    students: '1,100+',
    pros: '620+',
    mentors: '95+',
    projects: '390+',
    topHubs: 'Tokyo, Kyoto, Osaka'
  },
  {
    id: 'singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    top: '55%',
    left: '75%',
    students: '950+',
    pros: '480+',
    mentors: '85+',
    projects: '310+',
    topHubs: 'Singapore Tech City'
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    top: '25%',
    left: '48%',
    students: '1,500+',
    pros: '890+',
    mentors: '140+',
    projects: '520+',
    topHubs: 'London, Cambridge, Oxford'
  }
];

export default function GlobalMap() {
  const [activePin, setActivePin] = useState(pinData[0]);

  return (
    <section id="global-map" className="relative py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Cross-Border Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Global <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">Collaboration Network</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Hover or click pins across the world to see real-time active developers, students, mentors, and open hackathon projects.
          </p>
        </div>

        {/* World Map Box */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-2xl overflow-hidden min-h-[460px] flex flex-col justify-between shadow-xl">
          
          {/* Decorative Map SVG Graphic */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none flex items-center justify-center p-4">
            <svg viewBox="0 0 1000 500" className="w-full h-full text-indigo-400 stroke-indigo-300 dark:stroke-indigo-500 stroke-1 fill-indigo-50 dark:fill-indigo-900/30">
              <path d="M150,150 Q200,100 300,150 T500,200 T700,150 T900,250" fill="none" strokeDasharray="4 4" />
              <path d="M250,200 Q400,300 650,200 T850,300" fill="none" strokeDasharray="4 4" />
              {/* World outline dots */}
              <circle cx="240" cy="160" r="80" fill="currentColor" opacity="0.15" />
              <circle cx="500" cy="140" r="70" fill="currentColor" opacity="0.15" />
              <circle cx="680" cy="210" r="90" fill="currentColor" opacity="0.15" />
              <circle cx="840" cy="180" r="60" fill="currentColor" opacity="0.15" />
            </svg>
          </div>

          {/* Interactive Pins */}
          {pinData.map((pin) => {
            const isSelected = activePin.id === pin.id;

            return (
              <div
                key={pin.id}
                style={{ top: pin.top, left: pin.left }}
                onClick={() => setActivePin(pin)}
                onMouseEnter={() => setActivePin(pin)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
              >
                {/* Pulse ring */}
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full ${isSelected ? 'bg-indigo-500/30' : 'bg-slate-200 dark:bg-slate-800/60'}`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSelected ? 'bg-indigo-500' : 'bg-purple-400'}`} />
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-white'}`}>
                    <MapPin className="w-3 h-3" />
                  </div>
                </div>

                {/* Pin Tooltip label */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap border shadow-md transition-all ${
                  isSelected 
                    ? 'bg-indigo-600 text-white border-indigo-400 scale-110' 
                    : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}>
                  {pin.flag} {pin.country}
                </div>
              </div>
            );
          })}

          {/* Selected Pin Details Drawer Card */}
          <div className="relative z-30 max-w-xl mx-auto w-full mt-auto pt-8">
            <motion.div 
              key={activePin.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-white/95 dark:bg-slate-950/90 border border-indigo-200 dark:border-indigo-500/30 backdrop-blur-xl shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activePin.flag}</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-base">{activePin.country} Hub</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Key Tech Hubs: {activePin.topHubs}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                  {activePin.projects} Active Teams
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Students</span>
                  <span className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400">{activePin.students}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Professionals</span>
                  <span className="text-sm font-extrabold text-purple-600 dark:text-purple-400">{activePin.pros}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Mentors</span>
                  <span className="text-sm font-extrabold text-amber-600 dark:text-amber-400">{activePin.mentors}</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
