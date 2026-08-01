import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Star, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const mentors = [
  {
    id: 'm1',
    name: 'David K. Miller',
    title: 'Senior AI Engineer',
    company: 'Microsoft',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    exp: '10+ Years Exp',
    rating: '4.98 (142 Sessions)',
    skills: ['PyTorch', 'GenAI Copilots', 'LLM Fine-Tuning', 'Azure AI'],
    availability: 'Available This Week',
    badgeColor: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/20'
  },
  {
    id: 'm2',
    name: 'Ananya Sharma',
    title: 'Principal Cloud Architect',
    company: 'Google',
    companyLogo: 'https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    exp: '8+ Years Exp',
    rating: '4.95 (98 Sessions)',
    skills: ['GCP', 'Kubernetes', 'Distributed Systems', 'Go'],
    availability: 'Available Tomorrow',
    badgeColor: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
  },
  {
    id: 'm3',
    name: 'Robert Vance',
    title: 'Software Engineer II',
    company: 'Amazon',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    exp: '6+ Years Exp',
    rating: '4.92 (115 Sessions)',
    skills: ['AWS Infra', 'System Design', 'Java', 'DynamoDB'],
    availability: 'Available Weekend',
    badgeColor: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20'
  },
  {
    id: 'm4',
    name: 'Siddharth Natarajan',
    title: 'Lead Backend Engineer',
    company: 'Zoho',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Zoho_Logo.svg',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    exp: '9+ Years Exp',
    rating: '4.99 (210 Sessions)',
    skills: ['High Scale Systems', 'PostgreSQL', 'Redis', 'Microservices'],
    availability: 'Available Today',
    badgeColor: 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-500/20'
  },
  {
    id: 'm5',
    name: 'Elena Rostova',
    title: 'Deep Learning Scientist',
    company: 'NVIDIA',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    exp: '7+ Years Exp',
    rating: '5.0 (86 Sessions)',
    skills: ['CUDA', 'TensorRT', 'Computer Vision', 'NeMo'],
    availability: 'Available Next Week',
    badgeColor: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
  }
];

export default function IndustryMentors({ openBookingModal }) {
  return (
    <section id="mentors" className="relative py-24 bg-white dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-slate-800/80">
      
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>World-Class Guidance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learn From <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600 dark:from-amber-300 dark:via-orange-400 dark:to-pink-400 bg-clip-text text-transparent">Industry Mentors</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Connect 1-on-1 with veterans from top tech companies for code reviews, architecture advice, and pitch deck refinement.
          </p>
        </div>

        {/* Mentors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mentors.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl p-5 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500/40 backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Mentor Photo & Company Badge */}
                <div className="relative mb-4 text-center">
                  <img 
                    src={m.avatar} 
                    alt={m.name} 
                    className="w-20 h-20 mx-auto rounded-2xl object-cover border-2 border-indigo-500/40 shadow-md"
                  />
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-800 dark:text-white shadow-2xs">
                    <img 
                      src={m.companyLogo} 
                      alt={m.company} 
                      className="w-3.5 h-3.5 object-contain"
                      onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                    />
                    <span>{m.company}</span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center space-y-1 mb-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{m.name}</h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{m.title}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{m.exp}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-semibold mb-3">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{m.rating}</span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {m.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability & Book Trigger */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 text-center font-semibold flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {m.availability}
                </div>

                <button
                  onClick={() => openBookingModal(m.name, m.company)}
                  className="w-full py-2.5 rounded-xl bg-amber-50 hover:bg-amber-500 dark:bg-amber-500/10 dark:hover:bg-amber-500 text-amber-700 dark:text-amber-400 hover:text-white dark:hover:text-slate-950 font-bold text-xs border border-amber-200 dark:border-amber-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Mentor</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
