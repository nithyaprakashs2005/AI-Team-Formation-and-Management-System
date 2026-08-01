import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

import AuthModal from '../modals/AuthModal';
import DemoModal from '../modals/DemoModal';
import BookMentorModal from '../modals/BookMentorModal';
import JoinTeamModal from '../modals/JoinTeamModal';

export default function MainLayout() {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  // Modal States
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signup', role: 'student' });
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [mentorModal, setMentorModal] = useState({ isOpen: false, name: '', company: '' });
  const [applyModal, setApplyModal] = useState({ isOpen: false, project: null, type: 'project' });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const openAuthModal = (mode = 'signup', role = 'student') => {
    navigate('/login');
  };

  const openDemoModal = () => setDemoModalOpen(true);

  const openBookingModal = (name, company) => {
    setMentorModal({ isOpen: true, name, company });
  };

  const openApplyModal = (project, type = 'project') => {
    setApplyModal({ isOpen: true, project, type });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300 font-sans flex flex-col">
      {/* Navigation Header */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        openAuthModal={openAuthModal}
      />

      {/* Main Page Body */}
      <main className="flex-grow pt-20">
        <Outlet
          context={{
            openAuthModal,
            openDemoModal,
            openBookingModal,
            openApplyModal,
          }}
        />
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        initialRole={authModal.role}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <BookMentorModal
        isOpen={mentorModal.isOpen}
        mentorName={mentorModal.name}
        mentorCompany={mentorModal.company}
        onClose={() => setMentorModal({ ...mentorModal, isOpen: false })}
      />

      <JoinTeamModal
        isOpen={applyModal.isOpen}
        project={applyModal.project}
        onClose={() => setApplyModal({ ...applyModal, isOpen: false })}
      />
    </div>
  );
}
