import { useEffect, useState } from 'react';
import { api } from '../api/client';
import { useLang, useVariant } from '../i18n/LangContext';

interface BackendSplashProps {
  onReady: () => void;
}

export function BackendSplash({ onReady }: BackendSplashProps) {
  const { lang } = useLang();
  const variant = useVariant();
  const [progress, setProgress] = useState(8);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((value) => Math.min(92, value + Math.max(1, Math.round((92 - value) / 9))));
    }, 450);

    return () => window.clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    let active = true;
    let retryTimer: number | undefined;

    const check = async () => {
      try {
        const health = await api.health();
        if (!active || !health.ready) throw new Error('not-ready');
        setProgress(100);
        window.setTimeout(() => active && onReady(), 450);
      } catch {
        if (active) retryTimer = window.setTimeout(() => setAttempt((value) => value + 1), 1200);
      }
    };

    check();
    return () => {
      active = false;
      window.clearTimeout(retryTimer);
    };
  }, [attempt, onReady]);

  const copy = lang === 'pt'
    ? {
        eyebrow: variant === 'gamer' ? 'BOOT_SEQUENCE' : 'Preparando o portfólio',
        title: variant === 'gamer' ? 'Servidor iniciando...' : 'Estamos quase prontos.',
        detail: variant === 'gamer'
          ? 'Sincronizando perfil, projetos e currículos.'
          : 'O servidor está preparando as informações do portfólio.',
        status: progress === 100 ? 'Sistema online' : 'Verificando serviços',
      }
    : {
        eyebrow: variant === 'gamer' ? 'BOOT_SEQUENCE' : 'Preparing the portfolio',
        title: variant === 'gamer' ? 'Server starting...' : 'Almost ready.',
        detail: variant === 'gamer'
          ? 'Syncing profile, projects and resumes.'
          : 'The server is preparing the portfolio information.',
        status: progress === 100 ? 'System online' : 'Checking services',
      };

  return (
    <div className={`backend-splash backend-splash-${variant}`} role="status" aria-live="polite">
      <div className="backend-splash-card">
        <div className="backend-splash-mark" aria-hidden="true">
          {variant === 'gamer' ? '>_' : 'FP'}
        </div>
        <p className="backend-splash-eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="backend-splash-detail">{copy.detail}</p>
        <div className="backend-progress" aria-label={`${progress}%`}>
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="backend-progress-meta">
          <span>{copy.status}</span>
          <strong>{progress}%</strong>
        </div>
      </div>
    </div>
  );
}
