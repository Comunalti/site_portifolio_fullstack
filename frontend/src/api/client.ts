import { useEffect, useState, type DependencyList } from 'react';
import type { Lang, Profile, History, Project } from './types';

const BASE = '/api';

async function get<T>(path: string, lang: Lang): Promise<T> {
  const sep = path.includes('?') ? '&' : '?';
  const res = await fetch(`${BASE}${path}${sep}lang=${lang}`);
  if (!res.ok) throw new Error(`API ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  profile: (lang: Lang) => get<Profile>('/profile', lang),
  history: (lang: Lang) => get<History>('/history', lang),
  projects: (lang: Lang) => get<Project[]>('/projects', lang),
  resumeUrl: (lang: Lang) => `${BASE}/resume?lang=${lang}`,
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
