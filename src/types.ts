export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}