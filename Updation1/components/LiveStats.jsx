import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Building2, Code2, Trophy, Network } from 'lucide-react';

const statsData = [
  {
    icon: Users,
    label: 'Developers',
    target: 15000,
    suffix: '+',
    color: 'from-indigo-500 to-purple-500',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-50 dark:bg-indigo-500/10'
  },
  {
    icon: GraduationCap,
    label: 'Universities',
    target: 320,
    suffix: '+',
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-500/10'
  },
  {
    icon: Building2,
    label: 'Companies',
    target: 180,
    suffix: '+',
    color: 'from-pink-500 to-rose-500',
    iconColor: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-50 dark:bg-pink-500/10'
  },
  {
    icon: Code2,
    label: 'Projects',
    target: 3500,
    suffix: '+',
    color: 'from-cyan-500 to-blue-500',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-50 dark:bg-cyan-500/10'
  },
  {
    icon: Trophy,
    label: 'Hackathons',
    target: 850,
    suffix: '+',
    color: 'from-amber-500 to-orange-500',
    iconColor: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-500/10'
  },
  {
    icon: Network,
    label: 'Teams Formed',
    target: 4700,
    suffix: '+',
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-500/10'
  }
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // ms
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = Math.ceil(target / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function LiveStats() {
  return (
    <section className="relative py-12 bg-white dark:bg-slate-950/60 border-y border-slate-200/80 dark:border-slate-800/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold tracking-widest text-indigo-700 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20">
            Real-Time Ecosystem Growth
          </span>
        </div>

        {/* Grid of Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
