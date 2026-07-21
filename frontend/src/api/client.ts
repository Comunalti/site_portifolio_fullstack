import { useEffect, useState, type DependencyList } from 'react';
import type { Lang, Variant, Profile, History, Project } from './types';

const BASE = '/api';

async function get<T>(path: string, lang: Lang, variant: Variant): Promise<T> {
  const sep = path.includes('?') ? '&' : '?';
  const res = await fetch(`${BASE}${path}${sep}lang=${lang}&variant=${variant}`);
  if (!res.ok) throw new Error(`API ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  health: async () => {
    const res = await fetch(`${BASE}/health`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`API health → ${res.status}`);
    return res.json() as Promise<{ ready: boolean; status: string }>;
  },
  profile: (lang: Lang, variant: Variant) => get<Profile>('/profile', lang, variant),
  history: (lang: Lang, variant: Variant) => get<History>('/history', lang, variant),
  projects: (lang: Lang, variant: Variant) => get<Project[]>('/projects', lang, variant),
  resumeUrl: (lang: Lang, variant: Variant) => `${BASE}/resume?lang=${lang}&variant=${variant}`,
};

export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(fetcher: () => Promise<T>, deps: DependencyList): ApiState<T> {
  const [state, setState] = useState<ApiState<T>>({ data: null, loading: true, error: null });

  useEffect(() => {
    let alive = true;
    setState((s) => ({ ...s, loading: true, error: null }));
    fetcher()
      .then((data) => alive && setState({ data, loading: false, error: null }))
      .catch((err: Error) => alive && setState({ data: null, loading: false, error: err.message }));
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
