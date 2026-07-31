import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LiveStats from '../components/LiveStats';
import WhyTeamSync from '../components/WhyTeamSync';
import HowItWorks from '../components/HowItWorks';
import FeaturedHackathons from '../components/FeaturedHackathons';
import FeaturedProjects from '../components/FeaturedProjects';
import AiRecommendationPreview from '../components/AiRecommendationPreview';
import IndustryMentors from '../components/IndustryMentors';
import GlobalMap from '../components/GlobalMap';
import Leaderboard from '../components/Leaderboard';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

// Modals
import AuthModal from '../components/modals/AuthModal';
import DemoModal from '../components/modals/DemoModal';
import BookMentorModal from '../components/modals/BookMentorModal';
import JoinTeamModal from '../components/modals/JoinTeamModal';

import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
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

  const openBookingModal = (name, company) => {
    setMentorModal({ isOpen: true, name, company });
  };

  const openApplyModal = (project, type = 'project') => {
    setApplyModal({ isOpen: true, project, type });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300 font-sans">
      {/* Sticky Blur Header Navigation */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        openAuthModal={openAuthModal}
      />

      {/* Hero Section */}
      <main>
        <Hero
          openAuthModal={openAuthModal}
          openDemoModal={() => setDemoModalOpen(true)}
        />

        {/* Live Platform Stats */}
        <LiveStats />

        {/* Why TeamSync AI (4 Premium Cards) */}
        <WhyTeamSync />

        {/* How It Works Timeline */}
        <HowItWorks openAuthModal={openAuthModal} />

        {/* Featured Hackathons */}
        <FeaturedHackathons openApplyModal={openApplyModal} />

        {/* Featured Projects */}
        <FeaturedProjects openApplyModal={openApplyModal} />

        {/* AI Recommendation Engine Dashboard Preview */}
        <AiRecommendationPreview openAuthModal={openAuthModal} />

        {/* Industry Mentors */}
        <IndustryMentors openBookingModal={openBookingModal} />

        {/* Global Collaboration Map */}
        <GlobalMap />

        {/* Leaderboard Section */}
        <Leaderboard />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* Call to Action Banner */}
        <CallToAction openAuthModal={openAuthModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
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
