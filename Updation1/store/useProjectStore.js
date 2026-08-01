import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialProjects = [
  {
    id: 'med-ai',
    title: 'AI Medical Assistant',
    category: 'AI / Healthcare',
    owner: 'Dr. Sarah Jenkins',
    org: 'Stanford MedTech Lab',
    desc: 'Building an LLM-driven diagnostic copilot that synthesizes patient symptoms, lab reports, and radiological imagery in real time.',
    neededRoles: ['React Developer', 'Backend Developer', 'AI Engineer'],
    skills: ['React', 'Python', 'PyTorch', 'FastAPI', 'Tailwind'],
    membersCount: 3,
    maxMembers: 6,
    badgeColor: 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20',
    type: 'Research',
    difficulty: 'Advanced',
    location: 'Global',
    deadline: '2026-08-15',
    duration: '3 Months',
    members: [
      { id: 'm1', name: 'Dr. Sarah Jenkins', role: 'Leader' },
      { id: 'm2', name: 'Alex T.', role: 'Backend Developer' },
      { id: 'm3', name: 'Maria G.', role: 'AI Engineer' }
    ]
  },
  {
    id: 'smart-agri',
    title: 'Smart Agriculture Platform',
    category: 'IoT / Machine Learning',
    owner: 'Vikram Patel',
    org: 'IIT Madras AgTech Group',
    desc: 'Autonomous soil moisture analysis, satellite yield forecasting, and automated micro-irrigation controller using edge IoT devices.',
    neededRoles: ['Flutter Specialist', 'IoT Engineer', 'ML Researcher'],
    skills: ['Flutter', 'IoT', 'Machine Learning', 'TensorFlow Lite', 'Embedded C++'],
    membersCount: 2,
    maxMembers: 5,
    badgeColor: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
    type: 'Startup',
    difficulty: 'Intermediate',
    location: 'Online',
    deadline: '2026-09-01',
    duration: '6 Months',
    members: [
      { id: 'm4', name: 'Vikram Patel', role: 'Leader' },
      { id: 'm5', name: 'Arjun S.', role: 'AI Engineer' }
    ]
  },
  {
    id: 'drone-nav',
    title: 'Autonomous Drone Delivery',
    category: 'Robotics / Computer Vision',
    owner: 'Marcus Vance',
    org: 'ETH Zurich Robotics Guild',
    desc: 'Obstacle avoidance system using stereo-cameras, LiDAR point clouds, and real-time path planning for urban medical payload delivery.',
    neededRoles: ['ROS Developer', 'C++ Expert', 'Computer Vision Specialist'],
    skills: ['ROS 2', 'C++', 'OpenCV', 'LiDAR', 'PyTorch'],
    membersCount: 4,
    maxMembers: 6,
    badgeColor: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20',
    type: 'Hackathon',
    difficulty: 'Expert',
    location: 'Global',
    deadline: '2026-07-30',
    duration: '1 Month',
    members: [
      { id: 'm6', name: 'Marcus Vance', role: 'Leader' },
      { id: 'm7', name: 'Elena R.', role: 'Computer Vision Specialist' },
      { id: 'm8', name: 'David W.', role: 'C++ Expert' },
      { id: 'm9', name: 'Sam K.', role: 'Backend Developer' }
    ]
  }
];

export const useProjectStore = create(
  persist(
    (set) => ({
      projects: initialProjects,
      applications: [],
      notifications: [],
      
      applyToProject: (application) =>
        set((state) => ({
          applications: [
            ...state.applications,
            { ...application, id: Date.now().toString(), status: 'pending', date: new Date().toISOString() }
          ],
        })),

      acceptApplication: (appId) =>
        set((state) => {
          const app = state.applications.find((a) => a.id === appId);
          if (!app) return state;

          const projectIndex = state.projects.findIndex((p) => p.id === app.projectId);
          if (projectIndex === -1) return state;

          const project = state.projects[projectIndex];
          if (project.membersCount >= project.maxMembers) return state; // Full

          const updatedProject = {
            ...project,
            membersCount: project.membersCount + 1,
            members: [
              ...project.members,
              { id: `new_${appId}`, name: app.applicantName, role: app.role, profilePic: app.profilePic }
            ]
          };

          const newProjects = [...state.projects];
          newProjects[projectIndex] = updatedProject;

          return {
            applications: state.applications.map((a) =>
              a.id === appId ? { ...a, status: 'accepted' } : a
            ),
            projects: newProjects,
            notifications: [
              { id: Date.now().toString(), type: 'success', message: `Your application to ${project.title} was accepted!` },
              ...state.notifications
            ]
          };
        }),

      rejectApplication: (appId) =>
        set((state) => {
          const app = state.applications.find((a) => a.id === appId);
          if (!app) return state;

          const project = state.projects.find((p) => p.id === app.projectId);
          const projectName = project ? project.title : 'a project';

          return {
            applications: state.applications.map((a) =>
              a.id === appId ? { ...a, status: 'rejected' } : a
            ),
            notifications: [
              { id: Date.now().toString(), type: 'error', message: `Your application to ${projectName} was rejected.` },
              ...state.notifications
            ]
          };
        }),

      clearNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id)
        }))
    }),
    {
      name: 'team-sync-storage',
    }
  )
);
