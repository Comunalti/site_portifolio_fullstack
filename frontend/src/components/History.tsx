import type { ApiState } from '../api/client';
import type { History, HistoryEntry } from '../api/types';
import { Section, StateNote } from './Section';
import { useReveal } from '../hooks/useReveal';
import { UI, useLang, useVariant } from '../i18n/LangContext';

function MapItem({ entry, index }: { entry: HistoryEntry; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className={`history-item panel reveal reveal-delay-${Math.min(index, 3)}`} ref={ref}>
      <div className="history-period">{entry.period}</div>
      <h3 className="history-title">{entry.title}</h3>
      <div className="history-org">{entry.organization}</div>
      <p className="history-desc">{entry.description}</p>
      {entry.highlights.length > 0 && (
        <div className="history-highlights">
          {entry.highlights.map((h) => (
            <span className="chip" key={h}>
              {h}
            </span>
          ))}
        </div>
      )}
      {entry.links && entry.links.length > 0 && (
        <div className="history-links">
          {entry.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function HistoryMap({ entries, pink }: { entries: HistoryEntry[]; pink?: boolean }) {
  return (
    <div className={`history-map ${pink ? 'history-pink' : ''}`}>
      {entries.map((entry, i) => (
        <MapItem key={entry.id} entry={entry} index={i} />
      ))}
    </div>
  );
}

export function ProfessionalHistory({ state }: { state: ApiState<History> }) {
  const { lang } = useLang();
  const variant = useVariant();
  return (
    <Section id="carreira" num="02" title={UI[variant][lang].sectionProfessional}>
      {state.data ? (
        <HistoryMap entries={state.data.professional} />
      ) : (
        <StateNote loading={state.loading} error={state.error} />
      )}
    </Section>
  );
}

export function AcademicHistory({ state }: { state: ApiState<History> }) {
  const { lang } = useLang();
  const variant = useVariant();
  return (
    <Section id="academia" num="03" title={UI[variant][lang].sectionAcademic}>
      {state.data ? (
        <HistoryMap entries={state.data.academic} pink />
      ) : (
        <StateNote loading={state.loading} error={state.error} />
      )}
    </Section>
  );
}
