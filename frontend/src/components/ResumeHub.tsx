import { useEffect, useRef, useState } from 'react';
import type { Variant } from '../api/types';
import { useLang } from '../i18n/LangContext';

const copyFallback = (value: string) => {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  if (!copied) throw new Error('copy failed');
};

const content = {
  pt: {
    eyebrow: 'PORTFÓLIO · CURRÍCULOS',
    title: 'Escolha como conhecer o meu trabalho.',
    intro:
      'Duas versões, a mesma trajetória. Explore o currículo mais alinhado ao contexto da sua visita.',
    name: 'Felipe Rodrigues Peixoto da Silva',
    role: 'Desenvolvedor Full-Stack · Engenheiro da Computação',
    about:
      'Construo produtos completos — da modelagem e infraestrutura até interfaces que pessoas realmente gostam de usar.',
    location: 'São Paulo, Brasil',
    availability: 'Aberto a novas oportunidades',
    sectionLabel: 'ESCOLHA UMA VERSÃO',
    formal: {
      kicker: 'PARA PROCESSOS SELETIVOS',
      title: 'Currículo formal',
      description:
        'Uma leitura objetiva da minha experiência em full-stack, IA aplicada, arquitetura e liderança técnica.',
      tags: ['Full-Stack', 'IA aplicada', 'Arquitetura'],
    },
    gamer: {
      kicker: 'PARA CONHECER O BUILDER',
      title: 'Resume gamer',
      description:
        'Uma versão criativa da mesma história, com foco em games, shaders, sistemas data-driven e experimentação.',
      tags: ['Game Dev', 'Shaders', 'Data-driven'],
    },
    open: 'Abrir currículo',
    copy: 'Copiar link',
    copied: 'Link copiado',
    copyError: 'Não foi possível copiar',
    footer: 'Feito em React, Node e TypeScript.',
  },
  en: {
    eyebrow: 'PORTFOLIO · RESUMES',
    title: 'Choose how to discover my work.',
    intro:
      'Two versions, one journey. Explore the resume that best matches the context of your visit.',
    name: 'Felipe Rodrigues Peixoto da Silva',
    role: 'Full-Stack Developer · Computer Engineer',
    about:
      'I build complete products — from data modeling and infrastructure to interfaces people genuinely enjoy using.',
    location: 'São Paulo, Brazil',
    availability: 'Open to new opportunities',
    sectionLabel: 'CHOOSE A VERSION',
    formal: {
      kicker: 'FOR HIRING PROCESSES',
      title: 'Formal resume',
      description:
        'An objective view of my experience in full-stack development, applied AI, architecture and technical leadership.',
      tags: ['Full-Stack', 'Applied AI', 'Architecture'],
    },
    gamer: {
      kicker: 'TO MEET THE BUILDER',
      title: 'Gamer resume',
      description:
        'A creative version of the same story, focused on games, shaders, data-driven systems and experimentation.',
      tags: ['Game Dev', 'Shaders', 'Data-driven'],
    },
    open: 'Open resume',
    copy: 'Copy link',
    copied: 'Link copied',
    copyError: 'Could not copy',
    footer: 'Built with React, Node and TypeScript.',
  },
};

export function ResumeHub() {
  const { lang, toggle } = useLang();
  const t = content[lang];
  const [copied, setCopied] = useState<Variant | 'error' | null>(null);
  const resetTimer = useRef<number>();

  useEffect(() => {
    document.title = lang === 'pt' ? 'Felipe Peixoto — Currículos' : 'Felipe Peixoto — Resumes';
    return () => window.clearTimeout(resetTimer.current);
  }, [lang]);

  const copyLink = async (variant: Variant) => {
    const url = new URL(`/${variant}-resume`, window.location.origin);
    url.searchParams.set('lang', lang);
    const localizedUrl = url.toString();
    window.clearTimeout(resetTimer.current);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(localizedUrl);
      } else {
        copyFallback(localizedUrl);
      }
      setCopied(variant);
    } catch {
      try {
        copyFallback(localizedUrl);
        setCopied(variant);
      } catch {
        setCopied('error');
      }
    }

    resetTimer.current = window.setTimeout(() => setCopied(null), 2200);
  };

  const cards: Array<{ variant: Variant; href: string }> = [
    { variant: 'formal', href: `/formal-resume?lang=${lang}` },
    { variant: 'gamer', href: `/gamer-resume?lang=${lang}` },
  ];

  return (
    <div className="resume-hub">
      <div className="hub-glow hub-glow-one" />
      <div className="hub-glow hub-glow-two" />

      <header className="hub-header">
        <a
          className="hub-brand"
          href={`/?lang=${lang}`}
          aria-label={`Felipe Peixoto — ${lang === 'pt' ? 'início' : 'home'}`}
        >
          <span className="hub-brand-mark">FP</span>
          <span>
            Felipe Peixoto
            <small>{lang === 'pt' ? 'currículos' : 'resumes'}</small>
          </span>
        </a>
        <button
          className="hub-lang-toggle"
          onClick={toggle}
          aria-label="Português / English"
          title="Português / English"
        >
          <span className={lang === 'pt' ? 'on' : ''}>PT</span>
          <span className={lang === 'en' ? 'on' : ''}>EN</span>
        </button>
      </header>

      <main className="hub-main">
        <section className="hub-hero" aria-labelledby="hub-title">
          <div className="hub-heading">
            <p className="hub-eyebrow">{t.eyebrow}</p>
            <h1 id="hub-title">{t.title}</h1>
            <p className="hub-intro">{t.intro}</p>
          </div>

          <aside className="hub-profile" aria-label={t.name}>
            <div className="hub-profile-top">
              <div className="hub-avatar" aria-hidden="true">FP</div>
              <div>
                <h2>{t.name}</h2>
                <p>{t.role}</p>
              </div>
            </div>
            <p className="hub-about">{t.about}</p>
            <div className="hub-profile-meta">
              <span>{t.location}</span>
              <span className="hub-available">{t.availability}</span>
            </div>
            <div className="hub-socials">
              <a href="mailto:frps2003@gmail.com">Email ↗</a>
              <a href="https://github.com/Comunalti" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a
                href="https://www.linkedin.com/in/felipe-rodrigues-peixoto-da-silva-501919209/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </aside>
        </section>

        <section className="hub-resumes" aria-labelledby="resume-options-title">
          <div className="hub-section-head">
            <p id="resume-options-title">{t.sectionLabel}</p>
            <span>02</span>
          </div>

          <div className="hub-card-grid">
            {cards.map(({ variant, href }, index) => {
              const card = t[variant];
              const copyStatus = copied === variant ? t.copied : copied === 'error' ? t.copyError : t.copy;

              return (
                <article className={`hub-resume-card hub-resume-card-${variant}`} key={variant}>
                  <a className="hub-card-hit" href={href} aria-label={`${t.open}: ${card.title}`} />
                  <div className="hub-card-number">0{index + 1}</div>
                  <div className="hub-card-visual" aria-hidden="true">
                    {variant === 'formal' ? (
                      <div className="hub-paper">
                        <span className="hub-paper-name" />
                        <span /><span /><span />
                        <strong /><span /><span />
                      </div>
                    ) : (
                      <div className="hub-console">
                        <div className="hub-console-bar"><i /><i /><i /></div>
                        <p>&gt; FELIPE.EXE</p>
                        <p className="hub-console-accent">SELECT_PROFILE()</p>
                        <span className="hub-console-cursor" />
                      </div>
                    )}
                  </div>
                  <div className="hub-card-copy">
                    <p className="hub-card-kicker">{card.kicker}</p>
                    <h2>{card.title}</h2>
                    <p className="hub-card-description">{card.description}</p>
                    <div className="hub-card-tags">
                      {card.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <div className="hub-card-actions">
                    <span className="hub-card-open">{t.open} <b>↗</b></span>
                    <button
                      className={copied === variant ? 'copied' : ''}
                      type="button"
                      onClick={() => copyLink(variant)}
                      aria-label={`${t.copy}: ${card.title}`}
                      aria-live="polite"
                    >
                      <span aria-hidden="true">{copied === variant ? '✓' : '⧉'}</span> {copyStatus}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="hub-footer">
        <span>© {new Date().getFullYear()} Felipe Peixoto</span>
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}
