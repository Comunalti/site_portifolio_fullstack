import { api, type ApiState } from '../api/client';
import type { Profile } from '../api/types';
import { UI, useLang, useVariant } from '../i18n/LangContext';

export function Hero({ profile }: { profile: ApiState<Profile> }) {
  const { lang } = useLang();
  const variant = useVariant();
  const t = UI[variant][lang];
  const p = profile.data;

  return (
    <section className="hero">
      <div className="container">
        <p className="term hero-kicker hero-enter">
          {p?.role ?? '...'} · {p?.location ?? ''}
        </p>
        <h1 className="hero-title hero-enter hero-enter-2">
          Felipe
          <span className="alt">Peixoto</span>
        </h1>
        <p className="hero-fullname hero-enter hero-enter-2">
          {p?.name ?? 'Felipe Rodrigues Peixoto da Silva'}
        </p>
        <p className="hero-tagline hero-enter hero-enter-3">{p?.tagline ?? ''}</p>
        <div className="hero-actions hero-enter hero-enter-3">
          <a className="btn btn-pink" href="#sandboxes">
            ▸ {t.viewSandboxes}
          </a>
          <a className="btn" href={api.resumeUrl(lang, variant)} download>
            ↓ {t.downloadResume}
          </a>
        </div>
        <div className="hero-stats hero-enter hero-enter-4">
          {(p?.stats ?? []).map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="hero-stat-value">{s.value}</div>
              <div className="term hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <a href="#sobre" className="hero-scroll" aria-label={t.pressStart}>
        {t.pressStart}
      </a>
    </section>
  );
}
