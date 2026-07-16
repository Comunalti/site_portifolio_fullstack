export type Lang = 'pt' | 'en';

export type Variant = 'gamer' | 'formal';

export interface LinkRef {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  links: LinkRef[];
  skills: string[];
  stats: { label: string; value: string }[];
}

export interface HistoryEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
  links?: LinkRef[];
}

export interface History {
  professional: HistoryEntry[];
  academic: HistoryEntry[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  year: string;
  media: {
    type: 'iframe' | 'image' | 'none';
    embedUrl?: string;
    imageUrl?: string;
    images?: {
      imageUrl: string;
      alt: string;
      caption?: string;
    }[];
  };
  mediaRequest?: string;
  repoUrl?: string;
  liveUrl?: string;
  extraLinks?: LinkRef[];
  hue: number;
}
