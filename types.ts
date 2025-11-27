
export type Language = 'vi' | 'en';

export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'twitter' | 'mail' | 'globe';
}

export interface Profile {
  name: string;
  title: string;
  about: string;
  avatarUrl: string;
  skills: string[];
  socials: SocialLink[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  imageUrl: string;
  tags: string[];
  readTime: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  conference: string;
  abstract: string;
  year: string;
  imageUrl?: string;
  paperUrl: string;
  authors: string[];
}

export enum SectionId {
  HOME = 'home',
  CV = 'cv',
  PROJECTS = 'projects',
  RESEARCH = 'research',
  BLOG = 'blog'
}

// UI Translation Interfaces
export interface SectionContent {
  title: string;
  subtitle?: string;
}

export interface UILabels {
  nav: {
    [key in SectionId]: string;
  };
  buttons: {
    viewProjects: string;
    viewCV: string;
    readMore: string;
    viewDemo: string;
    viewCode: string;
    readPaper: string;
    techStack: string;
    experience: string;
    education: string;
    skillsTitle: string;
  };
  sections: {
    [key in SectionId]?: SectionContent;
  };
  hero: {
    greeting: string;
  };
}

export interface AppData {
  profile: Profile;
  experience: Experience[];
  education: Education[];
  blog: BlogPost[];
  projects: Project[];
  research: ResearchPaper[];
  ui: UILabels;
}
