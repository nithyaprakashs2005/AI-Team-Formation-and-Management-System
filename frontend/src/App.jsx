import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Wrappers & Utilities
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/layout/ScrollToTop';

// Dedicated Page Views
import Home from './pages/Home';
import Hackathons from './pages/Hackathons';
import Projects from './pages/Projects';
import MatchEngine from './pages/MatchEngine';
import Mentors from './pages/Mentors';
import GlobalMap from './pages/GlobalMap';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';

// Auth & App Views
import Login from './pages/auth/Login';
import ChooseRole from './pages/auth/ChooseRole';
import StudentRegister from './pages/auth/StudentRegister';
import CollaboratorRegister from './pages/auth/CollaboratorRegister';
import MentorRegister from './pages/auth/MentorRegister';
import Dashboard from './pages/Dashboard';
import RequireAuth from './components/auth/RequireAuth';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Application Routes with Shared Layout (Header + Footer + Modals) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/match-engine" element={<MatchEngine />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/global-map" element={<GlobalMap />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Dedicated Auth & App Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/register/student" element={<StudentRegister />} />
        <Route path="/register/collaborator" element={<CollaboratorRegister />} />
        <Route path="/register/mentor" element={<MentorRegister />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      </Routes>
    </Router>
  );
}
