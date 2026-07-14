import { api, useApi } from './api/client';
import { isResumeHubPath, LangProvider, useLang, useVariant } from './i18n/LangContext';
import { ShaderBackground } from './components/ShaderBackground';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { ProfessionalHistory, AcademicHistory } from './components/History';
import { Sandboxes } from './components/Sandboxes';
import { Footer } from './components/Footer';
import { ResumeHub } from './components/ResumeHub';

function Site() {
  const { lang } = useLang();
  const variant = useVariant();
  const profile = useApi(() => api.profile(lang, variant), [lang, variant]);
  const history = useApi(() => api.history(lang, variant), [lang, variant]);
  const projects = useApi(() => api.projects(lang, variant), [lang, variant]);

  return (
    <>
      {variant === 'gamer' && <ShaderBackground />}
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
      {isResumeHubPath() ? <ResumeHub /> : <Site />}
    </LangProvider>
  );
}
