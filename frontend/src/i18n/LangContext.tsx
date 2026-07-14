import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang, Variant } from '../api/types';

// ---------- variante (skin) por rota ----------
// /formal-resume → 'formal' · /gamer-resume ou / → 'gamer'
// A variante é fixa por carregamento de página (trocar = navegação completa).
export function getVariant(): Variant {
  return window.location.pathname.includes('formal') ? 'formal' : 'gamer';
}

export function useVariant(): Variant {
  return getVariant();
}

// ---------- idioma ----------
interface LangCtx {
  lang: Lang;
  toggle: () => void;
}

const Ctx = createContext<LangCtx>({ lang: 'pt', toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang');
    return saved === 'en' ? 'en' : 'pt';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  return (
    <Ctx.Provider value={{ lang, toggle: () => setLang((l) => (l === 'pt' ? 'en' : 'pt')) }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  return useContext(Ctx);
}

// ---------- strings estáticas da interface ----------
// O conteúdo (bio, histórias, projetos) vem da API já traduzido;
// aqui ficam só os rótulos fixos, por variante e idioma.

const gamerPt = {
  nav: { about: 'Sobre', career: 'Carreira', academic: 'Academia', sandboxes: 'Sandboxes', contact: 'Contato' },
  resume: 'Currículo',
  downloadResume: 'Baixar currículo',
  viewSandboxes: 'Ver sandboxes',
  pressStart: 'PRESS START ↓',
  sectionAbout: 'Sobre',
  sectionProfessional: 'História Profissional',
  sectionAcademic: 'História Acadêmica',
  sectionSandboxes: 'Sandboxes',
  sectionContact: 'Contato',
  base: 'Base',
  email: 'Email',
  fullName: 'Nome completo',
  openSandbox: 'Abrir sandbox',
  openSite: 'Abrir site',
  repository: 'Repositório',
  close: 'Fechar',
  live: 'live',
  mediaPending: 'INSERT MEDIA',
  mediaRequestLabel: 'Placeholder — me envie esta mídia:',
  projectKicker: 'SANDBOX',
  ctaTitle: 'CONTINUE?',
  ctaSubtitle: 'Vamos construir algo juntos.',
  sendEmail: 'Enviar email',
  apiError: 'Falha ao falar com a API. O backend está rodando?',
  stack: 'React · Node · TypeScript · WebGL · Docker',
  switchVariant: 'Modo formal',
  switchVariantHref: '/formal-resume',
  logo: 'FELIPE.EXE',
  themeTitle: 'Alternar tema claro/escuro',
};

const gamerEn: typeof gamerPt = {
  nav: { about: 'About', career: 'Career', academic: 'Academic', sandboxes: 'Sandboxes', contact: 'Contact' },
  resume: 'Resume',
  downloadResume: 'Download resume',
  viewSandboxes: 'View sandboxes',
  pressStart: 'PRESS START ↓',
  sectionAbout: 'About',
  sectionProfessional: 'Professional History',
  sectionAcademic: 'Academic History',
  sectionSandboxes: 'Sandboxes',
  sectionContact: 'Contact',
  base: 'Based in',
  email: 'Email',
  fullName: 'Full name',
  openSandbox: 'Open sandbox',
  openSite: 'Open site',
  repository: 'Repository',
  close: 'Close',
  live: 'live',
  mediaPending: 'INSERT MEDIA',
  mediaRequestLabel: 'Placeholder — send me this media:',
  projectKicker: 'SANDBOX',
  ctaTitle: 'CONTINUE?',
  ctaSubtitle: "Let's build something together.",
  sendEmail: 'Send email',
  apiError: 'Failed to reach the API. Is the backend running?',
  stack: 'React · Node · TypeScript · WebGL · Docker',
  switchVariant: 'Formal mode',
  switchVariantHref: '/formal-resume',
  logo: 'FELIPE.EXE',
  themeTitle: 'Toggle light/dark theme',
};

const formalPt: typeof gamerPt = {
  nav: { about: 'Sobre', career: 'Experiência', academic: 'Formação', sandboxes: 'Projetos', contact: 'Contato' },
  resume: 'Currículo',
  downloadResume: 'Baixar currículo',
  viewSandboxes: 'Ver projetos',
  pressStart: 'role para explorar ↓',
  sectionAbout: 'Sobre',
  sectionProfessional: 'Experiência Profissional',
  sectionAcademic: 'Formação Acadêmica',
  sectionSandboxes: 'Projetos',
  sectionContact: 'Contato',
  base: 'Localização',
  email: 'Email',
  fullName: 'Nome completo',
  openSandbox: 'Ver detalhes',
  openSite: 'Abrir site',
  repository: 'Repositório',
  close: 'Fechar',
  live: 'ao vivo',
  mediaPending: 'Mídia em breve',
  mediaRequestLabel: 'Em breve:',
  projectKicker: 'PROJETO',
  ctaTitle: 'Vamos conversar?',
  ctaSubtitle: 'Aberto a novas oportunidades em engenharia de software.',
  sendEmail: 'Enviar email',
  apiError: 'Falha ao falar com a API. O backend está rodando?',
  stack: 'React · Node · TypeScript · Docker',
  switchVariant: 'Versão criativa',
  switchVariantHref: '/gamer-resume',
  logo: 'Felipe Peixoto',
  themeTitle: 'Alternar tema claro/escuro',
};

const formalEn: typeof gamerPt = {
  nav: { about: 'About', career: 'Experience', academic: 'Education', sandboxes: 'Projects', contact: 'Contact' },
  resume: 'Resume',
  downloadResume: 'Download resume',
  viewSandboxes: 'View projects',
  pressStart: 'scroll to explore ↓',
  sectionAbout: 'About',
  sectionProfessional: 'Professional Experience',
  sectionAcademic: 'Academic Background',
  sectionSandboxes: 'Projects',
  sectionContact: 'Contact',
  base: 'Location',
  email: 'Email',
  fullName: 'Full name',
  openSandbox: 'View details',
  openSite: 'Open site',
  repository: 'Repository',
  close: 'Close',
  live: 'live',
  mediaPending: 'Media coming soon',
  mediaRequestLabel: 'Coming soon:',
  projectKicker: 'PROJECT',
  ctaTitle: "Shall we talk?",
  ctaSubtitle: 'Open to new software engineering opportunities.',
  sendEmail: 'Send email',
  apiError: 'Failed to reach the API. Is the backend running?',
  stack: 'React · Node · TypeScript · Docker',
  switchVariant: 'Creative version',
  switchVariantHref: '/gamer-resume',
  logo: 'Felipe Peixoto',
  themeTitle: 'Toggle light/dark theme',
};

export const UI: Record<Variant, Record<Lang, typeof gamerPt>> = {
  gamer: { pt: gamerPt, en: gamerEn },
  formal: { pt: formalPt, en: formalEn },
};

export type UIStrings = typeof gamerPt;
