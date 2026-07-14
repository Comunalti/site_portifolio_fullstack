import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';
import { UI, useLang, useVariant } from '../i18n/LangContext';

interface SectionProps {
  id: string;
  num: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, num, title, children }: SectionProps) {
  const headRef = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-num">{num}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export function StateNote({ loading, error }: { loading: boolean; error: string | null }) {
  const { lang } = useLang();
  const variant = useVariant();
  if (loading) return <div className="skeleton" />;
  if (error)
    return (
      <div className="state-note error">
        {UI[variant][lang].apiError} ({error})
      </div>
    );
  return null;
}
