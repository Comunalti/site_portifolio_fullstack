import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang } from '../api/types';

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

/** Strings estáticas da interface (o conteúdo vem da API já traduzido) */
export const UI = {
  pt: {
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
    ctaTitle: 'CONTINUE?',
    ctaSubtitle: 'Vamos construir algo juntos.',
    sendEmail: 'Enviar email',
    apiError: 'Falha ao falar com a API. O backend está rodando?',
    stack: 'React · Node · TypeScript · WebGL · Docker',
  },
  en: {
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
    ctaTitle: 'CONTINUE?',
    ctaSubtitle: "Let's build something together.",
    sendEmail: 'Send email',
    apiError: 'Failed to reach the API. Is the backend running?',
    stack: 'React · Node · TypeScript · WebGL · Docker',
  },
} as const;

export type UIStrings = (typeof UI)[Lang];
