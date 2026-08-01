import axios from 'axios';
import { getSession } from './authSession';

const API_BASE_URL = 'http://localhost:8000/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = getSession()?.access_token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auth API calls
export const authApi = {
  login: async (credentials) => {
    const res = await api.post('/auth/login', credentials);
    return res.data;
  },
  register: async (userData) => {
    const res = await api.post('/auth/register', userData);
    return res.data;
  },
  me: async () => {
    const res = await api.get('/auth/me');
    return res.data;
  },
};

export const usersApi = {
  updateMyLocation: async ({ latitude, longitude }) => {
    const res = await api.put('/auth/me/location', { latitude, longitude });
    return res.data;
  },
  getNearby: async ({ latitude, longitude, limit = 5 }) => {
    const res = await api.get('/auth/nearby', { params: { latitude, longitude, limit } });
    return res.data;
  },
};

// Projects API calls
export const projectsApi = {
  getAll: async (category = '') => {
    const res = await api.get('/projects', { params: { category } });
    return res.data;
  },
  create: async (projectData) => {
    const res = await api.post('/projects', projectData);
    return res.data;
  },
  apply: async (applicationData) => {
    const res = await api.post('/projects/apply', applicationData);
    return res.data;
  },
  getPendingApplications: async () => {
    const res = await api.get('/projects/applications/pending');
    return res.data;
  },
};

// Hackathons API calls
export const hackathonsApi = {
  getAll: async () => {
    const res = await api.get('/hackathons');
    return res.data;
  },
  create: async (hackathonData) => {
    const res = await api.post('/hackathons', hackathonData);
    return res.data;
  },
};

// Mentors API calls
export const mentorsApi = {
  getAll: async () => {
    const res = await api.get('/mentors');
    return res.data;
  },
  book: async (bookingData) => {
    const res = await api.post('/mentors/book', bookingData);
    return res.data;
  },
};

// AI Match Engine API call
export const matchApi = {
  calculate: async (skillsData) => {
    const res = await api.post('/match/calculate', skillsData);
    return res.data;
  },
};
