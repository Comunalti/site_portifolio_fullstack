import { api, type ApiState } from '../api/client';
import type { Profile } from '../api/types';
import { useReveal } from '../hooks/useReveal';
import { UI, useLang, useVariant } from '../i18n/LangContext';

export function Footer({ profile }: { profile: ApiState<Profile> }) {
  const ref = useReveal<HTMLDivElement>();
  const { lang } = useLang();
  const variant = useVariant();
  const t = UI[variant][lang];
  const p = profile.data;
  const year = new Date().getFullYear();
  const linkedin = p?.links.find((link) => link.label === 'LinkedIn')?.url ??
    'https://www.linkedin.com/in/felipe-rodrigues-peixoto-da-silva-501919209/';

  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footer-cta reveal" ref={ref}>
          <span className="section-num">05 / {t.sectionContact}</span>
          <h2 className="footer-title">{t.ctaTitle}</h2>
          <p className="footer-subtitle">{t.ctaSubtitle}</p>
          <a className="footer-email" href={`mailto:${p?.email ?? ''}`}>
            {p?.email ?? '...'}
          </a>
          {p?.phone && <a className="footer-phone" href="https://wa.me/5511969042003" target="_blank" rel="noreferrer">{p.phone}</a>}
          <div className="hero-actions" style={{ marginTop: 0, justifyContent: 'center' }}>
            <a className="btn btn-pink" href={`mailto:${p?.email ?? ''}`}>
              ▸ {t.sendEmail}
            </a>
            <a className="btn" href={api.resumeUrl(lang, variant)} download>
              ↓ {t.downloadResume}
            </a>
            <a className="btn contact-btn whatsapp-btn" href="https://wa.me/5511969042003" target="_blank" rel="noreferrer">
              <span className="contact-icon" aria-hidden="true">WA</span> {t.whatsapp}
            </a>
            <a className="btn contact-btn linkedin-btn" href={linkedin} target="_blank" rel="noreferrer">
              <span className="contact-icon" aria-hidden="true">in</span> {t.linkedin}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {p?.name ?? 'Felipe Rodrigues Peixoto da Silva'}</span>
          <div className="footer-links">
            {(p?.links ?? []).map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
          <span>{t.stack}</span>
        </div>
      </div>
    </footer>
  );
}
