import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronRight, ChevronLeft, Send, Sparkles, BrainCircuit, Activity, AlertTriangle, Users, Calendar, MapPin, Briefcase } from 'lucide-react';
import { useProjectStore } from '../../store/useProjectStore';
import { GithubIcon as Github } from '../icons/GithubIcon';

const slideVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

export default function JoinTeamModal({ isOpen, onClose, project }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: '',
    pitch: '',
    availability: 'Part Time'
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [compatibilityScore, setCompatibilityScore] = useState(0);
  const applyToProject = useProjectStore(state => state.applyToProject);

  useEffect(() => {
    if (isOpen && project) {
      setStep(1);
      setSubmitted(false);
      setFormData({ role: '', pitch: '', availability: 'Part Time' });
      // Generate a mock score between 65 and 98
      // If it's the "Smart Agriculture Platform", let's make it 55% to show the warning.
      if (project.id === 'smart-agri') {
        setCompatibilityScore(55);
      } else {
        setCompatibilityScore(Math.floor(Math.random() * (98 - 75 + 1) + 75));
      }
    }
  }, [isOpen, project]);

  if (!project) return null;

  const handleNext = () => setStep(s => Math.min(s + 1, 5));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Save to global store
    applyToProject({
      projectId: project.id,
      applicantName: 'Current User', // Mock user
      profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CurrentUser',
      role: formData.role,
      compatibilityScore,
      message: formData.pitch,
      availability: formData.availability,
      githubVerified: true,
      skills: ['React', 'Python', 'Tailwind'] // Mock user skills
    });

    setTimeout(() => {
      onClose();
    }, 2500);
  };

  const renderStep1 = () => (
    <motion.div variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className={`p-3 rounded-2xl ${project.badgeColor.split(' ')[0]} ${project.badgeColor.split(' ')[1]}`}>
          <Briefcase className="w-6 h-6" />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400">Project Details</span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{project.title}</h3>
        </div>
      </div>
      
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.desc}</p>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Users className="w-3.5 h-3.5"/> Owner</p>
          <p className="font-medium text-slate-900 dark:text-white">{project.owner}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/> Location</p>
          <p className="font-medium text-slate-900 dark:text-white">{project.location}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Calendar className="w-3.5 h-3.5"/> Duration</p>
          <p className="font-medium text-slate-900 dark:text-white">{project.duration}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Activity className="w-3.5 h-3.5"/> Difficulty</p>
          <p className="font-medium text-slate-900 dark:text-white">{project.difficulty}</p>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">Required Skills</h4>
        <div className="flex flex-wrap gap-2">
          {project.skills.map(s => (
             <span key={s} className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50">
               {s}
             </span>
          ))}
        </div>
      </div>
      
      <div className="pt-4 flex justify-end">
        <button onClick={handleNext} className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer">
          Next: AI Match <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
      <div className="text-center space-y-2 mb-6">
        <div className="inline-flex p-3 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mb-2">
          <BrainCircuit className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Compatibility Analysis</h3>
        <p className="text-xs text-slate-500">Comparing your profile to {project.title} requirements.</p>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Compatibility Score</span>
            <div className={`text-4xl font-extrabold ${compatibilityScore >= 70 ? 'text-emerald-500' : 'text-amber-500'}`}>
              {compatibilityScore}%
            </div>
          </div>
          <Sparkles className={`w-8 h-8 ${compatibilityScore >= 70 ? 'text-emerald-400' : 'text-amber-400'}`} />
        </div>

        <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: `${compatibilityScore}%` }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${compatibilityScore >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500"/> Matched Skills</h5>
            <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              {project.skills.slice(0, 3).map(s => <li key={s}>• {s}</li>)}
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1"><X className="w-3.5 h-3.5 text-rose-500"/> Missing Skills</h5>
            <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              {project.skills.slice(3).length > 0 ? project.skills.slice(3).map(s => <li key={s}>• {s}</li>) : <li>None!</li>}
            </ul>
          </div>
        </div>
      </div>

      {compatibilityScore < 60 && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 p-4 rounded-xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h5 className="text-sm font-bold text-amber-800 dark:text-amber-400">Low Compatibility Warning</h5>
            <p className="text-xs text-amber-700 dark:text-amber-300/80 mt-1">This project may not perfectly match your primary skills. We recommend exploring <span className="font-semibold underline cursor-pointer">3 similar projects</span> better suited for you, but you can still proceed.</p>
          </div>
        </div>
      )}

      <div className="pt-4 flex justify-between">
        <button onClick={handlePrev} className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors cursor-pointer">Back</button>
        <button onClick={handleNext} className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer">
          Choose Role <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Choose Your Role</h3>
        <p className="text-sm text-slate-500">Select the position you're applying for in this team.</p>
      </div>

      <div className="space-y-3">
        {project.neededRoles.map((role) => (
          <label 
            key={role} 
            onClick={() => setFormData({ ...formData, role })}
            className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.role === role ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.role === role ? 'border-indigo-600' : 'border-slate-300 dark:border-slate-600'}`}>
                {formData.role === role && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
              </div>
              <span className={`font-medium ${formData.role === role ? 'text-indigo-900 dark:text-indigo-300' : 'text-slate-700 dark:text-slate-300'}`}>{role}</span>
            </div>
          </label>
        ))}
      </div>

      <div className="pt-4 flex justify-between">
        <button onClick={handlePrev} className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors cursor-pointer">Back</button>
        <button onClick={handleNext} disabled={!formData.role} className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer">
          Next Details <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-5">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Application Details</h3>
        <p className="text-sm text-slate-500">Provide a quick summary of why you're a great fit.</p>
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Why do you want to join this project?</label>
        <textarea
          rows="4"
          value={formData.pitch}
          onChange={(e) => setFormData({...formData, pitch: e.target.value})}
          placeholder="I have extensive experience building scalable APIs and have won 3 hackathons previously..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">Availability</label>
        <div className="flex gap-4">
          {['Full Time', 'Part Time'].map(opt => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="availability" 
                checked={formData.availability === opt}
                onChange={() => setFormData({...formData, availability: opt})}
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-between text-xs mt-2">
        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
          <Github className="w-4 h-4" />
          <span className="font-medium">GitHub Profile Verified Automatically</span>
        </div>
        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      </div>

      <div className="pt-4 flex justify-between">
        <button onClick={handlePrev} className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors cursor-pointer">Back</button>
        <button onClick={handleNext} disabled={!formData.pitch} className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer">
          Review <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const renderStep5 = () => (
    <motion.div variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Review & Submit</h3>
        <p className="text-sm text-slate-500">Confirm your application details before sending.</p>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-sm">
        <div className="grid grid-cols-3 gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <span className="text-slate-500">Project</span>
          <span className="col-span-2 font-semibold text-slate-900 dark:text-white">{project.title}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <span className="text-slate-500">Selected Role</span>
          <span className="col-span-2 font-semibold text-indigo-600 dark:text-indigo-400">{formData.role}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <span className="text-slate-500">Compatibility</span>
          <span className="col-span-2 font-semibold text-emerald-600 dark:text-emerald-400">{compatibilityScore}% Match</span>
        </div>
        <div className="grid grid-cols-3 gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <span className="text-slate-500">Availability</span>
          <span className="col-span-2 font-semibold text-slate-900 dark:text-white">{formData.availability}</span>
        </div>
        <div className="grid grid-cols-1 gap-1">
          <span className="text-slate-500 mb-1">Application Message</span>
          <p className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 italic">"{formData.pitch}"</p>
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <button onClick={handlePrev} className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors cursor-pointer">Back</button>
        <button onClick={handleSubmit} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2 cursor-pointer">
          <Send className="w-4 h-4" /> Submit Application
        </button>
      </div>
    </motion.div>
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <div className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
            
            <Dialog.Close className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none z-10 cursor-pointer">
              <X className="w-5 h-5" />
            </Dialog.Close>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-12 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-200 dark:border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Application Submitted!</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  The project owner has been notified. You can track your application status in your dashboard.
                </p>
              </motion.div>
            ) : (
              <div className="p-6 sm:p-8">
                {/* Progress Indicators */}
                <div className="flex gap-2 mb-8 mt-2 px-1">
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <div key={idx} className={`h-1.5 flex-1 rounded-full transition-colors ${idx <= step ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-800'}`} />
                  ))}
                </div>

                <div className="overflow-hidden min-h-[350px]">
                  <AnimatePresence mode="wait">
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}
                    {step === 5 && renderStep5()}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
