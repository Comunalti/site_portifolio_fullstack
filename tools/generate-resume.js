// Gera os curriculos em PDF (A4, max 2 paginas) via Chrome headless.
// Variantes: gamer  -> curriculo-pt.pdf / curriculo-en.pdf
//            formal -> curriculo-formal-pt.pdf / curriculo-formal-en.pdf
// Uso: node tools/generate-resume.js  (requer: npm i puppeteer-core e Chrome instalado)
const path = require('path');
const fs = require('fs');

const ASSETS = 'C:\\Users\\frps2\\Projetos\\site_portifolio_fullstack\\backend\\assets';

// ---------------- GAMER (base) ----------------

const gamerPt = {
  accent: '#c2185b',
  accent2: '#1c9ec9',
  title: 'Engenheiro da Computação · Desenvolvedor Full-Stack',
  contact: 'São Paulo, Brasil · frps2003@gmail.com · github.com/Comunalti',
  labels: {
    summary: 'Resumo',
    experience: 'Experiência Profissional',
    projects: 'Projetos em Destaque',
    education: 'Formação',
    academic: 'Atividades Acadêmicas',
    hard: 'Hard Skills',
    soft: 'Soft Skills',
    langs: 'Idiomas',
  },
  summary:
    'Engenheiro da Computação (Instituto Mauá de Tecnologia, 2025) com 3+ anos de experiência na indústria construindo plataformas web distribuídas, pipelines de IA e ferramentas internas de ponta a ponta — do deploy ao pixel. Especialista em sistemas data-driven: engines e plataformas que pessoas sem conhecimento técnico conseguem configurar e estender sem alterar código-fonte. Base sólida em desenvolvimento de jogos (Unity, shaders, geração procedural) aplicada à engenharia de software de alta qualidade.',
  experience: [
    {
      role: 'Desenvolvedor Full-Stack',
      org: 'Intelicity',
      period: 'dez 2024 — atual',
      bullets: [
        'Co-reescrevi o núcleo de processamento de imagens com IA da empresa como sistema distribuído: containers, orquestração e mensageria com RabbitMQ.',
        'Reescrevi a plataforma de classificação de imagens com Flutter (cliente), FastAPI (backend) e MongoDB: download paralelo de imagens, modo único flexível de classificação e gestão 100% por interface gráfica.',
        'Desenvolvi sozinho, de ponta a ponta (deploy, Docker, frontend, backend, banco), uma plataforma para prefeituras registrarem, consultarem e auditarem obras em vias urbanas: usuários, roles, permissões, controle de acesso por página/funcionalidade e jobs agendados disparados por eventos — tudo configurável dinamicamente pela interface.',
      ],
    },
    {
      role: 'Estagiário — IA & Cidades Inteligentes',
      org: 'Intelicity',
      period: 'mar 2023 — dez 2024',
      bullets: [
        'Pipelines de visão computacional em Python: detecção e classificação de objetos em milhares de imagens, com dados georreferenciados em PostgreSQL.',
        'Criei o SGC (Sistema Geral de Classificação), ferramenta interna de classificação de imagens (Unity/C#) com login por usuário, comunicação em tempo real via APIs e 4 modos de classificação configuráveis — substituindo um fluxo manual de ZIPs.',
      ],
    },
  ],
  projects: [
    {
      name: 'Engine de jogo de luta data-driven (TCC)',
      desc: 'Engine em Unity/C# que lê regras de XML externo e cria personagens de forma declarativa, sem recompilação; máquina de estados serializada + editor visual. Colaboração com TCC de Design (Iralem Studios).',
    },
    {
      name: 'Portfolio full-stack bilíngue',
      desc: 'React + Node + TypeScript em Docker Compose, conteúdo PT/EN servido por API e shader WebGL/GLSL interativo de fundo.',
    },
  ],
  education: [
    {
      degree: 'Bacharelado em Engenharia da Computação',
      org: 'Instituto Mauá de Tecnologia',
      period: '2021 — 2025',
    },
    {
      degree: 'Técnico em Mecatrônica (integrado ao Ensino Médio)',
      org: 'ETEC Júlio de Mesquita',
      period: '2018 — 2020',
    },
  ],
  academic: [
    'Aluno monitor de Desenvolvimento de Jogos (2023–2024): ensinei Unity, SOLID, DRY e design patterns a calouros; aulas de shaders (HLSL, CG/ShaderLab, GLSL) e GPGPU com compute shaders; workshops de geração procedural (wave function collapse, perlin noise).',
    'Nawat Games — entidade estudantil de desenvolvimento de jogos: membro (2022), presidente (2024); jogos em Unity/C# publicados no itch.io, liderando equipes multidisciplinares de alunos.',
  ],
  hard: [
    ['Linguagens', 'TypeScript/JavaScript, Python, C#, Dart, SQL, HLSL/GLSL'],
    ['Backend', 'Node.js, Express, FastAPI, REST APIs, RabbitMQ, WebSockets'],
    ['Frontend', 'React, Vite, Flutter, HTML/CSS, WebGL'],
    ['Dados', 'PostgreSQL (incl. dados georreferenciados), MongoDB'],
    ['DevOps', 'Docker, Docker Compose, orquestração de containers, CI/CD, Linux, Git'],
    ['IA & Visão', 'Visão computacional, classificação/detecção de objetos, anotação de dados'],
    ['Jogos & Gráficos', 'Unity, engines data-driven, compute shaders, geração procedural (WFC, Perlin)'],
    ['Arquitetura', 'Sistemas distribuídos, mensageria, RBAC, design patterns (GoF), SOLID, DRY'],
  ],
  soft: [
    'Liderança (presidente de entidade estudantil)',
    'Didática e mentoria (monitor com bolsa por 2 anos)',
    'Ownership de ponta a ponta (plataforma inteira solo)',
    'Colaboração interdisciplinar (engenharia + design)',
    'Resolução pragmática de problemas',
    'Aprendizado contínuo e autodidata',
    'Comunicação técnica clara',
    'Visão de produto para usuários não técnicos',
  ],
  langs: ['Português — nativo', 'Inglês — profissional (leitura, escrita e documentação técnica)'],
};

const gamerEn = {
  accent: '#c2185b',
  accent2: '#1c9ec9',
  title: 'Computer Engineer · Full-Stack Developer',
  contact: 'São Paulo, Brazil · frps2003@gmail.com · github.com/Comunalti',
  labels: {
    summary: 'Summary',
    experience: 'Professional Experience',
    projects: 'Highlighted Projects',
    education: 'Education',
    academic: 'Academic Activities',
    hard: 'Hard Skills',
    soft: 'Soft Skills',
    langs: 'Languages',
  },
  summary:
    'Computer Engineer (Instituto Mauá de Tecnologia, 2025) with 3+ years of industry experience building distributed web platforms, AI pipelines and internal tools end to end — from deployment to pixels. Specialist in data-driven systems: engines and platforms that non-technical people can configure and extend without touching source code. Solid game development background (Unity, shaders, procedural generation) applied to high-quality software engineering.',
  experience: [
    {
      role: 'Full-Stack Developer',
      org: 'Intelicity',
      period: 'Dec 2024 — present',
      bullets: [
        "Co-rewrote the company's core AI image-processing pipeline as a distributed system: containers, orchestration and RabbitMQ messaging.",
        'Rebuilt the image classification platform with Flutter (client), FastAPI (backend) and MongoDB: parallel image downloads, a single flexible classification mode and 100% GUI-based management.',
        'Single-handedly built, end to end (deploy, Docker, frontend, backend, database), a platform for city governments to register, browse and audit urban roadwork: users, roles, permissions, per-page/per-feature access control and event-triggered scheduled jobs — all dynamically configurable through the UI.',
      ],
    },
    {
      role: 'Intern — AI & Smart Cities',
      org: 'Intelicity',
      period: 'Mar 2023 — Dec 2024',
      bullets: [
        'Computer vision pipelines in Python: object detection and classification across thousands of images, with georeferenced data in PostgreSQL.',
        'Created SGC (Sistema Geral de Classificação — General Classification System), an internal image classification tool (Unity/C#) with per-user login, real-time API communication and 4 configurable classification modes — replacing a manual ZIP-based workflow.',
      ],
    },
  ],
  projects: [
    {
      name: 'Data-driven fighting game engine (Thesis)',
      desc: 'Unity/C# engine that reads rules from an external XML file and builds characters declaratively, with zero recompilation; serialized state machine + visual editor. Built with a partner Design thesis team (Iralem Studios).',
    },
    {
      name: 'Bilingual full-stack portfolio',
      desc: 'React + Node + TypeScript on Docker Compose, PT/EN content served via API and an interactive WebGL/GLSL background shader.',
    },
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Engineering',
      org: 'Instituto Mauá de Tecnologia',
      period: '2021 — 2025',
    },
    {
      degree: 'Mechatronics Technician (integrated with high school)',
      org: 'ETEC Júlio de Mesquita',
      period: '2018 — 2020',
    },
  ],
  academic: [
    'Game Development teaching assistant (2023–2024): taught Unity, SOLID, DRY and design patterns to freshmen; lectured on shaders (HLSL, CG/ShaderLab, GLSL) and GPGPU with compute shaders; ran procedural generation workshops (wave function collapse, perlin noise).',
    'Nawat Games — game development student organization: member (2022), president (2024); Unity/C# games published on itch.io, leading multidisciplinary student teams.',
  ],
  hard: [
    ['Languages', 'TypeScript/JavaScript, Python, C#, Dart, SQL, HLSL/GLSL'],
    ['Backend', 'Node.js, Express, FastAPI, REST APIs, RabbitMQ, WebSockets'],
    ['Frontend', 'React, Vite, Flutter, HTML/CSS, WebGL'],
    ['Data', 'PostgreSQL (incl. georeferenced data), MongoDB'],
    ['DevOps', 'Docker, Docker Compose, container orchestration, CI/CD, Linux, Git'],
    ['AI & Vision', 'Computer vision, object detection/classification, data annotation'],
    ['Games & Graphics', 'Unity, data-driven engines, compute shaders, procedural generation (WFC, Perlin)'],
    ['Architecture', 'Distributed systems, messaging, RBAC, design patterns (GoF), SOLID, DRY'],
  ],
  soft: [
    'Leadership (student organization president)',
    'Teaching and mentoring (2 years as a scholarship TA)',
    'End-to-end ownership (entire platform built solo)',
    'Cross-disciplinary collaboration (engineering + design)',
    'Pragmatic problem solving',
    'Continuous, self-driven learning',
    'Clear technical communication',
    'Product thinking for non-technical users',
  ],
  langs: ['Portuguese — native', 'English — professional (technical reading, writing and documentation)'],
};

// ---------------- FORMAL (corporativo: full-stack, IA, SOLID, gestão) ----------------

const formalPt = {
  ...gamerPt,
  accent: '#16385e',
  accent2: '#33608d',
  title: 'Desenvolvedor Full-Stack · IA Aplicada',
  summary:
    'Desenvolvedor full-stack com mais de 3 anos de indústria construindo plataformas web completas: APIs em Node e Python, bancos relacionais e não relacionais, filas de mensageria, containers e interfaces em React e Flutter. Engenheiro da Computação (Instituto Mauá de Tecnologia, 2025). Código guiado por SOLID, DRY e design patterns, com foco em sistemas administráveis por interface, que reduzem a dependência operacional de desenvolvedores. Além do código: dois anos ensinando boas práticas como monitor bolsista e um mandato como presidente de organização estudantil, liderando equipes multidisciplinares.',
  experience: [
    {
      role: 'Desenvolvedor Full-Stack',
      org: 'Intelicity',
      period: 'dez 2024 — atual',
      bullets: [
        'Entreguei sozinho, de ponta a ponta (modelagem de dados, APIs, frontend, dockerização e deploy), uma plataforma de gestão de obras urbanas para prefeituras: controle de acesso granular (usuários, roles, permissões por página e por funcionalidade) e automações disparadas por eventos — tudo configurável pela interface administrativa, sem alteração de código.',
        'Reconstruí a plataforma de anotação de dados com Flutter, FastAPI e MongoDB: download paralelo de imagens, fluxo único flexível e administração 100% por interface, eliminando a dependência de desenvolvedores na operação.',
        'Participei, com a equipe de IA, da migração do processamento de imagens para arquitetura distribuída: serviços containerizados, orquestração e mensageria com RabbitMQ.',
      ],
    },
    {
      role: 'Estagiário de Desenvolvimento — IA',
      org: 'Intelicity',
      period: 'mar 2023 — dez 2024',
      bullets: [
        'Pipelines de visão computacional em Python: detecção e classificação de objetos em grandes volumes de imagens, com dados georreferenciados em PostgreSQL.',
        'Identifiquei o gargalo do fluxo manual de anotação de dados e propus o SGC (Sistema Geral de Classificação): aplicação em C# com autenticação por usuário e sincronização em tempo real via APIs — adotada pela equipe de operação como ferramenta oficial.',
      ],
    },
  ],
  projects: [
    {
      name: 'Arquitetura de software data-driven (TCC)',
      desc: 'Engine em C# que interpreta regras declaradas em XML externo e monta entidades em tempo de execução, sem recompilação: máquina de estados serializada, parsing declarativo e editor visual próprio — os mesmos princípios de sistemas corporativos extensíveis por configuração.',
    },
    {
      name: 'Site pessoal full-stack',
      desc: 'React + Node + TypeScript em Docker Compose, conteúdo bilíngue servido por API, variantes de apresentação por rota (formal/criativa, com tema claro/escuro) e deploy contínuo (Vercel + Render) com domínio próprio.',
    },
  ],
  academic: [
    'Presidente eleito de organização estudantil de desenvolvimento de software (2024; membro desde 2022): liderança de equipes multidisciplinares — programação, arte e produção — com planejamento de ciclos, delegação por nível, acompanhamento de prazos e sucessão organizada ao deixar o cargo.',
    'Monitor bolsista por dois anos consecutivos (2023–2024): ensinei SOLID, DRY e design patterns (Gang of Four) a alunos mais novos, com revisão de projetos e aulas de computação gráfica e programação em GPU — a base da minha prática de mentoria e code review.',
  ],
  hard: [
    ['Linguagens', 'TypeScript/JavaScript, Python, C#, Dart, SQL'],
    ['Backend', 'Node.js, Express, FastAPI, REST APIs, RabbitMQ, WebSockets'],
    ['Frontend', 'React, Vite, Flutter, HTML/CSS'],
    ['Dados', 'PostgreSQL (incl. dados georreferenciados), MongoDB'],
    ['DevOps', 'Docker, Docker Compose, orquestração de containers, CI/CD, Linux, Git'],
    ['IA & Visão', 'Visão computacional, classificação/detecção de objetos, anotação de dados'],
    ['Arquitetura & Práticas', 'Sistemas distribuídos, mensageria, RBAC, SOLID, DRY, design patterns (GoF)'],
    ['Outros', 'Unity, GPGPU/compute shaders, geração procedural'],
  ],
  soft: [
    'Gestão de pessoas e liderança de equipes',
    'Mentoria e didática técnica (2 anos como monitor)',
    'Ownership de ponta a ponta (plataforma inteira solo)',
    'Colaboração interdisciplinar',
    'Comunicação técnica clara',
    'Resolução pragmática de problemas',
    'Aprendizado contínuo',
    'Visão de produto para usuários não técnicos',
  ],
};

const formalEn = {
  ...gamerEn,
  accent: '#16385e',
  accent2: '#33608d',
  title: 'Full-Stack Developer · Applied AI',
  summary:
    'Full-stack developer with 3+ years in industry building complete web platforms: APIs in Node and Python, relational and non-relational databases, message queues, containers and interfaces in React and Flutter. Computer Engineer (Instituto Mauá de Tecnologia, 2025). Code guided by SOLID, DRY and design patterns, focused on UI-administrable systems that reduce operational dependency on developers. Beyond code: two years teaching best practices as a scholarship TA and a term as student organization president, leading multidisciplinary teams.',
  experience: [
    {
      role: 'Full-Stack Developer',
      org: 'Intelicity',
      period: 'Dec 2024 — present',
      bullets: [
        'Single-handedly delivered, end to end (data modeling, APIs, frontend, dockerization and deployment), an urban roadwork management platform for city governments: granular access control (users, roles, per-page and per-feature permissions) and event-triggered automations — all configurable through the admin interface, with zero code changes.',
        'Rebuilt the data-annotation platform with Flutter, FastAPI and MongoDB: parallel image downloads, a single flexible workflow and 100% UI-based administration, removing developer dependency from operations.',
        'Worked with the AI team on migrating image processing to a distributed architecture: containerized services, orchestration and RabbitMQ messaging.',
      ],
    },
    {
      role: 'Development Intern — AI',
      org: 'Intelicity',
      period: 'Mar 2023 — Dec 2024',
      bullets: [
        'Computer vision pipelines in Python: object detection and classification across large volumes of images, with georeferenced data in PostgreSQL.',
        'Identified the bottleneck in the manual data-annotation workflow and proposed SGC (General Classification System): a C# application with per-user authentication and real-time API synchronization — adopted by the operations team as the official tool.',
      ],
    },
  ],
  projects: [
    {
      name: 'Data-driven software architecture (Thesis)',
      desc: 'A C# engine that interprets rules declared in an external XML file and assembles entities at runtime, with zero recompilation: serialized state machine, declarative parsing and a custom visual editor — the same principles behind enterprise systems extensible through configuration.',
    },
    {
      name: 'Personal full-stack website',
      desc: 'React + Node + TypeScript on Docker Compose, bilingual API-served content, route-based presentation variants (formal/creative, with light/dark theme) and continuous deployment (Vercel + Render) with a custom domain.',
    },
  ],
  academic: [
    'Elected president of a software development student organization (2024; member since 2022): led multidisciplinary teams — programming, art and production — with cycle planning, level-based delegation, deadline tracking and an organized succession when stepping down.',
    'Scholarship teaching assistant for two consecutive years (2023–2024): taught SOLID, DRY and design patterns (Gang of Four) to younger students, reviewing their projects and lecturing on computer graphics and GPU programming — the foundation of my mentoring and code review practice.',
  ],
  hard: [
    ['Languages', 'TypeScript/JavaScript, Python, C#, Dart, SQL'],
    ['Backend', 'Node.js, Express, FastAPI, REST APIs, RabbitMQ, WebSockets'],
    ['Frontend', 'React, Vite, Flutter, HTML/CSS'],
    ['Data', 'PostgreSQL (incl. georeferenced data), MongoDB'],
    ['DevOps', 'Docker, Docker Compose, container orchestration, CI/CD, Linux, Git'],
    ['AI & Vision', 'Computer vision, object detection/classification, data annotation'],
    ['Architecture & Practices', 'Distributed systems, messaging, RBAC, SOLID, DRY, design patterns (GoF)'],
    ['Other', 'Unity, GPGPU/compute shaders, procedural generation'],
  ],
  soft: [
    'People management and team leadership',
    'Technical mentoring and teaching (2 years as TA)',
    'End-to-end ownership (entire platform built solo)',
    'Cross-disciplinary collaboration',
    'Clear technical communication',
    'Pragmatic problem solving',
    'Continuous learning',
    'Product thinking for non-technical users',
  ],
};

const variants = {
  gamer: { pt: gamerPt, en: gamerEn },
  formal: { pt: formalPt, en: formalEn },
};

function html(d) {
  return `<!doctype html>
<html><head><meta charset="utf-8">
<style>
  @page { size: A4; margin: 13mm 14mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #1c2333; font-size: 9.6pt; line-height: 1.45; background: #fff; }
  a { color: inherit; text-decoration: none; }

  .name { font-size: 21pt; font-weight: 700; letter-spacing: 0.5px; color: #141a2a; }
  .title { font-size: 11pt; color: #444e66; margin-top: 2px; }
  .contact { font-size: 8.8pt; color: #5a6478; margin-top: 5px; }
  .rule { height: 2.5px; background: linear-gradient(90deg, ${d.accent} 0 90px, ${d.accent2} 90px 180px, #d9dde6 180px 100%); margin: 9px 0 12px; }

  h2 { font-size: 10.5pt; text-transform: uppercase; letter-spacing: 1.4px; color: ${d.accent};
       border-bottom: 1px solid #e3e6ee; padding-bottom: 3px; margin: 12px 0 7px; }
  section { break-inside: avoid-page; }
  section.allow-break { break-inside: auto; }

  .job { margin-bottom: 8px; }
  .job-head { display: flex; justify-content: space-between; align-items: baseline; }
  .job-role { font-weight: 700; font-size: 10.3pt; }
  .job-org { color: ${d.accent2}; font-weight: 600; }
  .job-period { color: #5a6478; font-size: 8.8pt; white-space: nowrap; }
  ul { padding-left: 14px; margin-top: 3px; }
  li { margin-bottom: 2.5px; }

  .proj { margin-bottom: 5px; }
  .proj b { color: #141a2a; }

  .edu { display: flex; justify-content: space-between; margin-bottom: 4px; }

  table.skills { width: 100%; border-collapse: collapse; }
  table.skills td { padding: 2px 0; vertical-align: top; }
  table.skills td.k { width: 128px; font-weight: 700; color: #141a2a; padding-right: 8px; }

  .chips { display: flex; flex-wrap: wrap; gap: 4px 5px; }
  .chip { border: 1px solid #d3d8e3; border-left: 3px solid ${d.accent2}; padding: 2px 7px; border-radius: 3px;
          font-size: 8.8pt; color: #2a3348; background: #f7f8fb; }

  .langs { display: flex; gap: 24px; }
</style></head>
<body>
  <header>
    <div class="name">FELIPE RODRIGUES PEIXOTO DA SILVA</div>
    <div class="title">${d.title}</div>
    <div class="contact">${d.contact}</div>
    <div class="rule"></div>
  </header>

  <section>
    <h2>${d.labels.summary}</h2>
    <p>${d.summary}</p>
  </section>

  <section class="allow-break">
    <h2>${d.labels.experience}</h2>
    ${d.experience
      .map(
        (e) => `<div class="job">
      <div class="job-head"><span class="job-role">${e.role} · <span class="job-org">${e.org}</span></span>
      <span class="job-period">${e.period}</span></div>
      <ul>${e.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
    </div>`,
      )
      .join('')}
  </section>

  <section>
    <h2>${d.labels.projects}</h2>
    ${d.projects.map((p) => `<p class="proj"><b>${p.name}</b> — ${p.desc}</p>`).join('')}
  </section>

  <section>
    <h2>${d.labels.education}</h2>
    ${d.education
      .map(
        (e) => `<div class="edu"><span><b>${e.degree}</b> · <span class="job-org">${e.org}</span></span>
        <span class="job-period">${e.period}</span></div>`,
      )
      .join('')}
  </section>

  <section>
    <h2>${d.labels.academic}</h2>
    <ul>${d.academic.map((a) => `<li>${a}</li>`).join('')}</ul>
  </section>

  <section>
    <h2>${d.labels.hard}</h2>
    <table class="skills">${d.hard
      .map(([k, v]) => `<tr><td class="k">${k}</td><td>${v}</td></tr>`)
      .join('')}</table>
  </section>

  <section>
    <h2>${d.labels.soft}</h2>
    <div class="chips">${d.soft.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
  </section>

  <section>
    <h2>${d.labels.langs}</h2>
    <div class="langs">${d.langs.map((l) => `<span>${l}</span>`).join('')}</div>
  </section>
</body></html>`;
}

(async () => {
  const puppeteer = (await import('puppeteer-core')).default;
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox'],
  });

  for (const [variant, langs] of Object.entries(variants)) {
    for (const [lang, data] of Object.entries(langs)) {
      const page = await browser.newPage();
      const content = html(data);
      const suffix = variant === 'formal' ? `formal-${lang}` : lang;
      fs.writeFileSync(path.join(__dirname, `resume_${variant}_${lang}.html`), content);
      await page.setContent(content, { waitUntil: 'load' });
      await page.pdf({
        path: path.join(ASSETS, `curriculo-${suffix}.pdf`),
        format: 'A4',
        printBackground: true,
      });
      await page.setViewport({ width: 900, height: 1272 });
      await page.screenshot({
        path: path.join(__dirname, `resume_${variant}_${lang}.png`),
        fullPage: true,
      });
      await page.close();
      console.log(`gerado curriculo-${suffix}.pdf`);
    }
  }
  await browser.close();
})().catch((e) => {
  console.error('FAIL:', e.message);
  process.exit(1);
});
