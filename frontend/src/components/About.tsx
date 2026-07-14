import type { ApiState } from '../api/client';
import type { Profile } from '../api/types';
import { Section, StateNote } from './Section';
import { useReveal } from '../hooks/useReveal';
import { UI, useLang } from '../i18n/LangContext';

export function About({ profile }: { profile: ApiState<Profile> }) {
  const bioRef = useReveal<HTMLDivElement>();
  const metaRef = useReveal<HTMLDivElement>();
  const { lang } = useLang();
  const t = UI[lang];
  const p = profile.data;

  return (
    <Section id="sobre" num="01" title={t.sectionAbout}>
      {p ? (
        <div className="about-grid">
          <div className="about-bio panel reveal" ref={bioRef}>
            {p.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="about-meta panel reveal reveal-delay-1" ref={metaRef}>
            <div className="about-meta-row">
              <span className="term k">{t.fullName}</span>
              <span>{p.name}</span>
            </div>
            <div className="about-meta-row">
              <span className="term k">{t.base}</span>
              <span>{p.location}</span>
            </div>
            <div className="about-meta-row">
              <span className="term k">{t.email}</span>
              <a href={`mailto:${p.email}`}>{p.email}</a>
            </div>
            {p.links.map((l) => (
              <div className="about-meta-row" key={l.label}>
                <span className="term k">{l.label}</span>
                <a href={l.url} target="_blank" rel="noreferrer">
                  {l.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <StateNote loading={profile.loading} error={profile.error} />
      )}
    </Section>
  );
}
