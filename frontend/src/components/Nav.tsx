import { useEffect, useState } from 'react';
import { api } from '../api/client';
import { UI, useLang, useVariant } from '../i18n/LangContext';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();
  const variant = useVariant();
  const t = UI[variant][lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#sobre', label: t.nav.about },
    { href: '#carreira', label: t.nav.career },
    { href: '#academia', label: t.nav.academic },
    { href: '#sandboxes', label: t.nav.sandboxes },
    { href: '#contato', label: t.nav.contact },
  ];

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          {t.logo}
          {variant === 'gamer' && <span className="cursor" />}
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="nav-variant-switch" href={t.switchVariantHref} title={t.switchVariant}>
            {variant === 'gamer' ? '▤' : '🕹'} {t.switchVariant}
          </a>
          <a className="btn btn-pink" href={api.resumeUrl(lang, variant)} download>
            ↓ {t.resume}
          </a>
          <button
            className="lang-toggle"
            onClick={toggle}
            aria-label="Português / English"
            title="Português / English"
          >
            <span className={lang === 'pt' ? 'on' : ''}>PT</span>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
