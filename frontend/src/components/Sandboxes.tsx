import { useEffect, useState, type CSSProperties } from 'react';
import type { ApiState } from '../api/client';
import type { Project } from '../api/types';
import { Section, StateNote } from './Section';
import { useReveal } from '../hooks/useReveal';
import { UI, useLang, useVariant, type UIStrings } from '../i18n/LangContext';

function Cover({ project, t }: { project: Project; t: UIStrings }) {
  const { media, title, hue, mediaRequest } = project;
  const coverImage = media.imageUrl ?? media.images?.[0]?.imageUrl;
  return (
    <div className="sandbox-cover" style={{ '--card-hue': hue } as CSSProperties}>
      {media.type === 'iframe' && media.embedUrl ? (
        <>
          <span className="sandbox-live-badge">{t.live}</span>
          <div className="sandbox-iframe-wrap">
            <iframe
              src={media.embedUrl}
              title={title}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </>
      ) : media.type === 'image' && coverImage ? (
        <img src={coverImage} alt={title} loading="lazy" />
      ) : mediaRequest ? (
        <div className="sandbox-cover-placeholder" data-media-request={mediaRequest}>
          <span className="big">▸ {t.mediaPending} ◂</span>
          <span className="small">{title}</span>
        </div>
      ) : (
        <div className="sandbox-cover-mono">
          {title
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0])
            .join('')}
        </div>
      )}
    </div>
  );
}

function Card({
  project,
  index,
  t,
  onOpen,
}: {
  project: Project;
  index: number;
  t: UIStrings;
  onOpen: () => void;
}) {
  const ref = useReveal<HTMLButtonElement>();
  return (
    <button
      className={`sandbox-card panel reveal reveal-delay-${Math.min(index % 3, 3)}`}
      ref={ref}
      onClick={onOpen}
    >
      <Cover project={project} t={t} />
      <div className="sandbox-body">
        <div className="sandbox-top">
          <h3 className="sandbox-title">{project.title}</h3>
          <span className="sandbox-year">{project.year}</span>
        </div>
        <p className="sandbox-summary">{project.summary}</p>
        <div className="sandbox-tags">
          {project.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <span className="sandbox-open">▸ {t.openSandbox}</span>
      </div>
    </button>
  );
}

function Modal({ project, t, onClose }: { project: Project; t: UIStrings; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = project.media.images?.length
    ? project.media.images
    : project.media.imageUrl
      ? [{ imageUrl: project.media.imageUrl, alt: project.title }]
      : [];
  const currentImage = images[activeImage] ?? images[0];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <span className="modal-kicker">{t.projectKicker} / {project.year}</span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label={t.close}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          {project.media.type === 'iframe' && project.media.embedUrl && (
            <iframe
              className="modal-iframe"
              src={project.media.embedUrl}
              title={project.title}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          )}
          {project.media.type === 'image' && currentImage && (
            <div className="modal-gallery">
              <figure className="modal-gallery-stage">
                <img src={currentImage.imageUrl} alt={currentImage.alt} />
                {currentImage.caption && <figcaption>{currentImage.caption}</figcaption>}
              </figure>
              {images.length > 1 && (
                <div className="modal-gallery-thumbnails" aria-label={project.title}>
                  {images.map((image, index) => (
                    <button
                      className={`modal-gallery-thumb ${activeImage === index ? 'active' : ''}`}
                      type="button"
                      key={image.imageUrl}
                      onClick={() => setActiveImage(index)}
                      aria-label={image.alt}
                      aria-pressed={activeImage === index}
                    >
                      <img src={image.imageUrl} alt="" loading="lazy" />
                      <span>{image.caption ?? image.alt}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          {project.media.type === 'none' && project.mediaRequest && (
            <div className="modal-media-placeholder" data-media-request={project.mediaRequest}>
              <span className="big">▸ {t.mediaPending} ◂</span>
              <span className="small">{t.mediaRequestLabel}</span>
            </div>
          )}
          <p className="modal-desc">{project.description}</p>
          <div className="sandbox-tags">
            {project.tags.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="modal-links">
            {project.liveUrl && (
              <a className="btn btn-pink" href={project.liveUrl} target="_blank" rel="noreferrer">
                {t.openSite} ↗
              </a>
            )}
            {project.repoUrl && (
              <a className="btn" href={project.repoUrl} target="_blank" rel="noreferrer">
                {t.repository} ↗
              </a>
            )}
            {(project.extraLinks ?? []).map((l) => (
              <a key={l.url} className="btn" href={l.url} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Sandboxes({ state }: { state: ApiState<Project[]> }) {
  const [open, setOpen] = useState<Project | null>(null);
  const { lang } = useLang();
  const variant = useVariant();
  const t = UI[variant][lang];

  return (
    <Section id="sandboxes" num="04" title={t.sectionSandboxes}>
      {state.data ? (
        <div className="sandbox-grid">
          {state.data.map((project, i) => (
            <Card
              key={project.id}
              project={project}
              index={i}
              t={t}
              onOpen={() => setOpen(project)}
            />
          ))}
        </div>
      ) : (
        <StateNote loading={state.loading} error={state.error} />
      )}
      {open && <Modal project={open} t={t} onClose={() => setOpen(null)} />}
    </Section>
  );
}
