export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  socials: SocialLink[];
  email: string;
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}