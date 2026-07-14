import { api, useApi } from './api/client';
import { LangProvider, useLang } from './i18n/LangContext';
import { ShaderBackground } from './components/ShaderBackground';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { ProfessionalHistory, AcademicHistory } from './components/History';
import { Sandboxes } from './components/Sandboxes';
import { Footer } from './components/Footer';

function Site() {
  const { lang } = useLang();
  const profile = useApi(() => api.profile(lang), [lang]);
  const history = useApi(() => api.history(lang), [lang]);
  const projects = useApi(() => api.projects(lang), [lang]);

  return (
    <>
      <ShaderBackground />
      <Nav />
      <main>
        <Hero profile={profile} />
        <Marquee skills={profile.data?.skills ?? []} />
        <About profile={profile} />
        <ProfessionalHistory state={history} />
        <AcademicHistory state={history} />
        <Sandboxes state={projects} />
      </main>
      <Footer profile={profile} />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  );
}
