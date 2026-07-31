import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "TeamSync AI matched our team in less than 2 minutes for NASA Space Apps. We had an AI engineer from Zurich, a backend dev from India, and a designer from London. We won 1st Place globally!",
    name: "Alex Rivera",
    role: "Hackathon Winner & Founder",
    affiliation: "UC Berkeley",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tag: "NASA Space Apps 1st Winner"
  },
  {
    id: 2,
    quote: "As a mentor at Microsoft, TeamSync AI allows me to directly connect with highly driven student teams building realistic GenAI apps. The skill verification via GitHub is ridiculously accurate.",
    name: "David K. Miller",
    role: "Senior AI Engineer",
    affiliation: "Microsoft",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tag: "100+ Sessions Conducted"
  },
  {
    id: 3,
    quote: "I was looking for a PyTorch researcher to build a FinTech fraud detector for Flipkart GRID. Within an hour of posting, TeamSync's match engine sent me 3 verified candidate profiles with 95%+ compatibility.",
    name: "Priya Sundaram",
    role: "Computer Science Lead",
    affiliation: "IIT Bombay",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tag: "Flipkart GRID Finalist"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[current];

  return (
    <section className="relative py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 text-pink-700 dark:text-pink-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span>Community Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">Hackathon Champions</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Hear how developers and researchers formed winning teams on TeamSync AI.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-2xl shadow-xl space-y-6 text-center sm:text-left relative overflow-hidden"
            >
              <Quote className="w-12 h-12 text-indigo-500/15 dark:text-indigo-500/20 absolute top-6 right-6 pointer-events-none" />

              {/* Tag & Rating */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                  {item.tag}
                </span>

                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed italic">
                "{item.quote}"
              </p>

              {/* User Bio */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center sm:justify-start gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.name}</h4>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{item.role} • <span className="text-slate-500 dark:text-slate-400 font-normal">{item.affiliation}</span></p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white shadow-xs hover:border-slate-300 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold">
              0{current + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white shadow-xs hover:border-slate-300 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
