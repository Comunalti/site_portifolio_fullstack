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
  phone: string;
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
  /**
   * Como o sandbox é exibido:
   *  - 'iframe': roda o site ao vivo dentro de um iframe (embedUrl)
   *  - 'image':  mostra uma captura de tela (imageUrl)
   *  - 'none':   capa gerada; se houver mediaRequest, vira um placeholder pedindo mídia
   */
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
  /** Pedido de mídia pendente — mostrado como placeholder no site */
  mediaRequest?: string;
  repoUrl?: string;
  liveUrl?: string;
  extraLinks?: LinkRef[];
  /** Matiz (0-360) usado para gerar a capa do card quando não há imagem */
  hue: number;
}

export interface SiteContent {
  profile: Profile;
  history: History;
  projects: Project[];
}
