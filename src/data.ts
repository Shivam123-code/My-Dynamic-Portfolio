import { Experience, Education, Project, Skill } from './types';

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Python Developer Intern',
    company: 'CodeAlpha Solutions',
    period: '2023 - Present',
    description: [
      'Developed a QR code generator using Python for seamless information sharing',
      'Enhanced data processing workflows by implementing automation scripts',
      'Built and deployed RESTful APIs using Flask',
      'Contributed to the internal round of the Smart India Hackathon with a Data Duplication Alert System'
    ],
    skills: ['Python', 'Flask', 'Automation', 'API Development']
  },
  {
    id: 2,
    title: 'Group Leader & Developer',
    company: 'Smart India Hackathon (Internal Round)',
    period: '2024',
    description: [
      'Led a team to develop a Data Duplication Alert System for the Ministry of Earth Sciences',
      'Collaborated on problem-solving and efficient data management strategies',
      'Prepared project documentation and delivered successful presentations'
    ],
    skills: ['Leadership', 'Python', 'Collaboration', 'Problem Solving']
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'RK University',
    period: '2020 - 2026',
    description: 'Specialization in Python Development, Data Science, and AI Technologies'
  },
  {
    id: 2,
    degree: 'Pyhton for Data Science Certification',
    institution: 'Swayam NPTEL',
    period: '2023',
    description: 'Focused on Data Analysys, Pandas,Matplotlib, and data Visualization'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'AttendEasyApp',
    description: 'An attendance management app with location-based validation and real-time code generation for faculty and students',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/username/attend-easy-app'
  },
  {
    id: 2,
    title: 'Cryptoverser Website',
    description: 'A React-based web app for getting information about crypto coins and their exchanges.',
    technologies: ['React', 'TypeScript', 'Material UI', 'OpenAI API'],
    link: 'https://github.com/username/ai-art-prompter'
  },
  {
    id: 3,
    title: 'Data Duplication Alert System',
    description: 'Developed for the Smart India Hackathon, this system identifies and alerts on duplicate data records',
    technologies: ['Python', 'Flask', 'SQLite'],
    link: 'https://github.com/username/data-duplication-alert-system'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Dart', 'SQL', 'JavaScript']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Django', 'Flask', 'Flutter', 'FastAPI', 'Pandas']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Firebase', 'VS Code', 'Jupyter Notebook']
  },
  {
    category: 'Soft Skills',
    items: ['Leadership', 'Team Collaboration', 'Problem Solving', 'Quick Learning']
  }
];
