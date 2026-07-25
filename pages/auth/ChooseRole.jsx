import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, Users } from 'lucide-react';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { RoleCard } from '../../components/ui/RoleCard';
import { motion } from 'framer-motion';

export default function ChooseRole() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = React.useState(document.documentElement.classList.contains('dark'));

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const roles = [
    {
      id: 'student',
      title: '🎓 Student',
      icon: GraduationCap,
      description: 'Looking for teammates, hackathons, research projects, internships, and open-source collaboration.',
      features: ['Join Projects', 'Find Teams', 'GitHub Verification', 'AI Recommendations'],
      path: '/register/student'
    },
    {
      id: 'collaborator',
      title: '🤝 Collaborator',
      icon: Users,
      description: 'Industry professionals, startup founders, freelancers, researchers, and developers who want to build innovative products and collaborate with students.',
      features: ['Join Teams', 'Create Projects', 'Recruit Members', 'Collaborate Globally'],
      path: '/register/collaborator'
    },
    {
      id: 'mentor',
      title: '👨‍🏫 Mentor',
      icon: Briefcase,
      description: 'Guide students, review projects, answer technical questions, and mentor innovation teams.',
      features: ['Review Projects', 'Conduct Mentoring Sessions', 'Technical Guidance', 'Career Support'],
      path: '/register/mentor'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
      {/* Top Navbar */}
      <div className="flex justify-between items-center p-6 lg:px-12">
        <button 
          onClick={() => navigate('/login')} 
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Login</span>
        </button>
        
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg mr-2">
              <span className="text-white font-bold text-lg">T</span>
           </div>
           <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white hidden sm:block">
             TeamSync <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">AI</span>
           </span>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Choose Your Role
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Select how you want to participate in the global collaboration platform. 
            You can always change your focus later.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {roles.map((role, idx) => (
            <RoleCard
              key={role.id}
              icon={role.icon}
              title={role.title}
              description={role.description}
              features={role.features}
              onClick={() => navigate(role.path)}
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative Bottom Background */}
      <div className="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none -z-10" />
    </div>
  );
}
