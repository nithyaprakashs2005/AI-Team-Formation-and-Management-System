import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import ChooseRole from './pages/auth/ChooseRole';
import StudentRegister from './pages/auth/StudentRegister';
import CollaboratorRegister from './pages/auth/CollaboratorRegister';
import MentorRegister from './pages/auth/MentorRegister';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/register/student" element={<StudentRegister />} />
        <Route path="/register/collaborator" element={<CollaboratorRegister />} />
        <Route path="/register/mentor" element={<MentorRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
