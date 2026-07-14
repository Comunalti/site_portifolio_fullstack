import { useCallback, useEffect, useState } from 'react';

/**
 * Adiciona a classe .revealed quando o elemento entra na viewport.
 * Combine com as classes .reveal / .reveal-delay-N do global.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const [element, setElement] = useState<T | null>(null);
  const ref = useCallback((node: T | null) => setElement(node), []);

  useEffect(() => {
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return ref;
}
