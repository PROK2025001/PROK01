export enum Screen {
  Home = 'Home',
  Jobs = 'Jobs',
  Network = 'Network',
  Community = 'Community',
  Profile = 'Profile',
}

export interface User {
  name: string;
  role: string;
  avatarUrl: string;
  company?: string;
  industry?: string;
}

export interface Job {
  id: number;
  title: string;
  companyName: string;
  companyLogoUrl: string;
  location: string;
  visa: string;
  isFeatured?: boolean;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  industry: string;
  experienceLevel: string;
  companyDescription: string;
}

export interface CommunityGroup {
    id: number;
    name: string;
    memberCount: number;
    imageUrl: string;
}

export interface CommunityEvent {
    id: number;
    title: string;
    date: string;
    time: string;
}

export interface ForumPost {
    id: number;
    title: string;
    author: string;
    replyCount: number;
}