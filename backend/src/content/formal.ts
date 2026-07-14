import type { Lang, SiteContent } from '../types.js';

// ============================================================
// Variante FORMAL — pensada para recrutadores e entrevistadores
// corporativos (bancos, grandes empresas). Ênfase em full-stack,
// IA, princípios de engenharia (SOLID, boas práticas) e gestão
// de pessoas. As conquistas com jogos aparecem reenquadradas
// como experiência de engenharia e liderança.
// ============================================================

const pt: SiteContent = {
  profile: {
    name: 'Felipe Rodrigues Peixoto da Silva',
    role: 'Engenheiro de Software · Full-Stack & IA',
    tagline:
      'Plataformas robustas de ponta a ponta: arquitetura limpa, sistemas distribuídos e software que outras pessoas conseguem manter e estender.',
    bio: [
      'Engenheiro da Computação pelo Instituto Mauá de Tecnologia (2025), com mais de 3 anos de experiência na indústria construindo plataformas web distribuídas e pipelines de inteligência artificial. Atuo em todo o ciclo de desenvolvimento: requisitos, arquitetura, implementação, dockerização e deploy.',
      'Trabalho orientado por princípios de engenharia — SOLID, DRY e design patterns — com foco em sistemas configuráveis por interface, que reduzem a dependência de programadores para tarefas operacionais. Tenho experiência prática em liderança e desenvolvimento de pessoas: presidi uma organização estudantil e fui monitor bolsista por dois anos, ensinando arquitetura de software e boas práticas a dezenas de alunos.',
    ],
    location: 'São Paulo, Brasil',
    email: 'frps2003@gmail.com',
    links: [
      { label: 'GitHub', url: 'https://github.com/Comunalti' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-rodrigues-peixoto-da-silva-501919209/' },
    ],
    skills: [
      'TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'Docker',
      'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Flutter', 'REST APIs',
      'SOLID & Design Patterns', 'Visão Computacional', 'CI/CD',
    ],
    stats: [
      { label: 'anos de indústria', value: '3+' },
      { label: 'anos programando', value: '6+' },
      { label: 'formações concluídas', value: '2' },
    ],
  },

  history: {
    professional: [
      {
        id: 'pro-intelicity-pleno',
        period: 'dez 2024 — hoje',
        title: 'Desenvolvedor Full-Stack',
        organization: 'Intelicity',
        description:
          'Efetivado após o estágio, participei da reescrita do núcleo de processamento de imagens com IA da empresa, transformando-o em um sistema distribuído baseado em containers, orquestração e mensageria com RabbitMQ. Em seguida, reescrevi a plataforma de classificação de imagens com Flutter, FastAPI e MongoDB — download paralelo para reduzir latência, regras de negócio flexíveis e administração 100% por interface gráfica, eliminando a dependência de programadores na operação. Por fim, desenvolvi sozinho, de ponta a ponta, uma plataforma para prefeituras registrarem, consultarem e auditarem obras em vias urbanas, com usuários, roles, permissões, controle de acesso por página e funcionalidade e jobs agendados disparados por eventos — tudo configurável dinamicamente.',
        highlights: [
          'Sistema distribuído: containers, orquestração e RabbitMQ',
          'Plataforma Flutter + FastAPI + MongoDB gerida por interface',
          'Plataforma GovTech completa desenvolvida solo (RBAC, jobs, auditoria)',
          'Deploy, Docker, frontend, backend e banco de dados',
        ],
      },
      {
        id: 'pro-intelicity-estagio',
        period: 'mar 2023 — dez 2024',
        title: 'Estagiário — IA & Cidades Inteligentes',
        organization: 'Intelicity',
        description:
          'Ainda no 3º ano da faculdade, trabalhei com pipelines de visão computacional em Python: detecção e classificação de objetos em milhares de imagens, com dados georreferenciados em PostgreSQL. Identifiquei o gargalo do fluxo manual de anotação de dados e desenvolvi o SGC (Sistema Geral de Classificação), aplicação interna em C# com autenticação por usuário, comunicação em tempo real via APIs e quatro modos de classificação configuráveis por usuário — a principal entrega do meu estágio, adotada pela equipe de operação.',
        highlights: [
          'Visão computacional em Python + PostgreSQL georreferenciado',
          'SGC: ferramenta interna com APIs em tempo real (C#)',
          'Melhoria de processo: fim do fluxo manual de anotação',
        ],
      },
    ],
    academic: [
      {
        id: 'acad-maua',
        period: '2021 — 2025',
        title: 'Bacharelado em Engenharia da Computação',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Formação completa em engenharia, do hardware ao software. Concluído no final de 2025.',
        highlights: ['Formado no final de 2025'],
      },
      {
        id: 'acad-tcc',
        period: '2025',
        title: 'TCC — Arquitetura de software data-driven',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Projeto de conclusão focado em arquitetura extensível: uma engine que interpreta regras declaradas em XML externo e monta entidades customizadas em tempo de execução, sem recompilação — máquina de estados serializada, parsing declarativo e um editor visual próprio. Desenvolvido em C# em colaboração interdisciplinar com uma equipe de design, exercitando integração entre times de competências distintas.',
        highlights: [
          'Arquitetura declarativa e extensível (XML, zero recompilação)',
          'Máquina de estados serializada + editor visual próprio',
          'Colaboração interdisciplinar com equipe de design',
        ],
        links: [
          { label: 'Repositório', url: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC' },
        ],
      },
      {
        id: 'acad-monitor',
        period: '2023 — 2024',
        title: 'Monitor bolsista — Boas práticas de engenharia de software',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Selecionado como monitor com bolsa de estudos por dois anos consecutivos. Ensinei calouros a estruturar projetos com SOLID, DRY e design patterns (Gang of Four), além de ministrar aulas de computação gráfica e GPGPU. A experiência consolidou minha capacidade de comunicar conceitos técnicos complexos e de elevar o padrão de qualidade de código de uma equipe.',
        highlights: [
          'Mentoria técnica de dezenas de alunos',
          'SOLID, DRY e design patterns (GoF) na prática',
          'Didática: aulas e workshops técnicos regulares',
        ],
      },
      {
        id: 'acad-nawat',
        period: '2022 — 2025',
        title: 'Liderança estudantil — Membro → Presidente',
        organization: 'Organização estudantil de desenvolvimento (Nawat)',
        description:
          'Entrei como membro no 2º ano e fui eleito presidente no 4º, liderando equipes multidisciplinares de alunos em projetos de software com entregas reais publicadas. Responsável por planejamento, divisão de tarefas, acompanhamento de prazos e desenvolvimento dos membros — uma experiência concreta de gestão de pessoas e projetos antes mesmo de me formar.',
        highlights: [
          'Presidente eleito em 2024',
          'Gestão de equipes multidisciplinares',
          'Projetos com entregas publicadas',
        ],
      },
      {
        id: 'acad-etec',
        period: '2018 — 2020',
        title: 'Técnico em Mecatrônica',
        organization: 'ETEC Júlio de Mesquita',
        description:
          'Ensino médio integrado ao técnico — base sólida em eletrônica, automação e lógica de programação. Formado no final de 2020.',
        highlights: ['Formado no final de 2020'],
      },
    ],
  },

  projects: [
    {
      id: 'sb-obras',
      title: 'Plataforma de Gestão de Obras Urbanas',
      summary: 'Plataforma GovTech completa para prefeituras — desenvolvida integralmente por mim.',
      description:
        'Sistema para prefeituras registrarem, consultarem e auditarem obras em vias urbanas. Inclui gestão de usuários, roles e permissões, controle de acesso por página e por funcionalidade, grupos com acesso restrito a tipos específicos de obra e jobs agendados disparados por eventos (criação, edição ou remoção de obras) para integração com outros sistemas e processamento com IA. Tudo configurável por interface gráfica, sem alterações de código. Responsável por deploy, build, dockerização, frontend, backend, banco de dados e regras de negócio.',
      tags: ['Full-Stack', 'RBAC', 'Docker', 'Jobs & Eventos', 'GovTech'],
      year: '2025 — 2026',
      media: { type: 'none' },
      mediaRequest:
        'Envie screenshots da plataforma (telas de obras, permissões e configuração de jobs) — use ambiente de demonstração se os dados forem sensíveis.',
      hue: 210,
    },
    {
      id: 'sb-pipeline',
      title: 'Pipeline Distribuído de Processamento com IA',
      summary: 'Reescrita da infraestrutura central de processamento de imagens da empresa.',
      description:
        'Participação direta na reescrita do fluxo de processamento de imagens com IA como sistema distribuído: serviços containerizados, orquestração e RabbitMQ como camada de mensageria entre as etapas. O resultado foi uma infraestrutura mais robusta, observável e escalável — o coração operacional da empresa.',
      tags: ['Sistemas Distribuídos', 'RabbitMQ', 'Containers', 'IA'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Envie um diagrama da arquitetura do pipeline (posso desenhar um se preferir).',
      hue: 230,
    },
    {
      id: 'sb-classificacao',
      title: 'Plataforma de Classificação v2',
      summary: 'Flutter + FastAPI + MongoDB, administrada 100% por interface gráfica.',
      description:
        'Reescrita da ferramenta de anotação de dados para IA com tecnologias adequadas ao problema: cliente Flutter com download paralelo de imagens para reduzir a latência entre classificações, backend FastAPI e MongoDB. Um modo único e flexível substituiu os quatro modos da versão anterior, e a configuração de tarefas e usuários passou a ser feita por interface gráfica — permitindo que pessoas sem conhecimento técnico administrem a plataforma.',
      tags: ['Flutter', 'FastAPI', 'MongoDB', 'UX de ferramenta interna'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Envie screenshots do app (tela de classificação e configuração de tarefas).',
      hue: 190,
    },
    {
      id: 'sb-sgc',
      title: 'SGC — Sistema Geral de Classificação',
      summary: 'Ferramenta interna que substituiu um fluxo manual de anotação de dados.',
      description:
        'Primeira versão da ferramenta de anotação, desenvolvida em C# durante o estágio: autenticação por usuário, imagens servidas por API e classificações sincronizadas em tempo real com o servidor, com quatro modos de classificação configuráveis por usuário via JSON. Eliminou um processo manual de download e upload de arquivos ZIP e virou a base do fluxo de anotação da equipe.',
      tags: ['C#', 'APIs', 'Ferramenta interna', 'IA'],
      year: '2023 — 2024',
      media: { type: 'none' },
      mediaRequest: 'Envie um screenshot de qualquer um dos 4 modos de classificação do SGC.',
      hue: 260,
    },
    {
      id: 'sb-tcc',
      title: 'Engine Data-Driven (TCC)',
      summary: 'Arquitetura declarativa: entidades definidas em XML, sem recompilação.',
      description:
        'Trabalho de conclusão de curso com foco em arquitetura de software extensível: uma engine em C# que interpreta regras de um arquivo XML externo e monta entidades customizadas em tempo de execução — máquina de estados serializada, parsing declarativo e editor visual próprio. O domínio de aplicação foi um jogo, mas os princípios (inversão de dependência, configuração sobre código, extensibilidade sem recompilação) são os mesmos de sistemas corporativos configuráveis.',
      tags: ['C#', 'Arquitetura', 'XML', 'Máquina de Estados'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Envie screenshots do State Machine Editor (as do CMD04.pdf servem de base).',
      repoUrl: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC',
      hue: 280,
    },
    {
      id: 'sb-portfolio',
      title: 'Este Site',
      summary: 'Full-stack bilíngue com múltiplas variantes de apresentação por rota.',
      description:
        'React + Node + TypeScript em Docker Compose, com conteúdo em dois idiomas servido por API e um sistema de variantes por rota — esta versão formal e uma versão criativa em /gamer-resume. Deploy contínuo na Vercel (frontend) e Render (backend), com domínio próprio.',
      tags: ['React', 'Node', 'TypeScript', 'Docker', 'CI/CD'],
      year: '2026',
      media: { type: 'none' },
      repoUrl: 'https://github.com/Comunalti/site_portifolio_fullstack',
      hue: 215,
    },
  ],
};

const en: SiteContent = {
  profile: {
    name: 'Felipe Rodrigues Peixoto da Silva',
    role: 'Software Engineer · Full-Stack & AI',
    tagline:
      'Robust platforms end to end: clean architecture, distributed systems and software other people can maintain and extend.',
    bio: [
      'Computer Engineer from Instituto Mauá de Tecnologia (2025), with 3+ years of industry experience building distributed web platforms and artificial intelligence pipelines. I work across the whole development cycle: requirements, architecture, implementation, dockerization and deployment.',
      'My work is guided by engineering principles — SOLID, DRY and design patterns — with a focus on systems configurable through the UI, reducing operational dependency on programmers. I also have hands-on leadership and people-development experience: I presided over a student organization and spent two years as a scholarship teaching assistant, teaching software architecture and best practices to dozens of students.',
    ],
    location: 'São Paulo, Brazil',
    email: 'frps2003@gmail.com',
    links: [
      { label: 'GitHub', url: 'https://github.com/Comunalti' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-rodrigues-peixoto-da-silva-501919209/' },
    ],
    skills: [
      'TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'Docker',
      'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Flutter', 'REST APIs',
      'SOLID & Design Patterns', 'Computer Vision', 'CI/CD',
    ],
    stats: [
      { label: 'years in industry', value: '3+' },
      { label: 'years coding', value: '6+' },
      { label: 'degrees completed', value: '2' },
    ],
  },

  history: {
    professional: [
      {
        id: 'pro-intelicity-pleno',
        period: 'Dec 2024 — today',
        title: 'Full-Stack Developer',
        organization: 'Intelicity',
        description:
          "Hired full-time after the internship, I took part in rewriting the company's core AI image-processing pipeline into a distributed system based on containers, orchestration and RabbitMQ messaging. I then rebuilt the image classification platform with Flutter, FastAPI and MongoDB — parallel downloads to cut latency, flexible business rules and 100% GUI-based administration, removing programmers from day-to-day operations. Finally, I single-handedly built, end to end, a platform for city governments to register, browse and audit urban roadwork, with users, roles, permissions, per-page and per-feature access control and event-triggered scheduled jobs — all dynamically configurable.",
        highlights: [
          'Distributed system: containers, orchestration and RabbitMQ',
          'Flutter + FastAPI + MongoDB platform managed via GUI',
          'Complete GovTech platform built solo (RBAC, jobs, auditing)',
          'Deploy, Docker, frontend, backend and database',
        ],
      },
      {
        id: 'pro-intelicity-estagio',
        period: 'Mar 2023 — Dec 2024',
        title: 'Intern — AI & Smart Cities',
        organization: 'Intelicity',
        description:
          'While still in my 3rd year of college, I worked on computer vision pipelines in Python: object detection and classification across thousands of images, with georeferenced data in PostgreSQL. I identified the bottleneck in the manual data-annotation workflow and built SGC (General Classification System), an internal C# application with per-user authentication, real-time API communication and four classification modes configurable per user — the main deliverable of my internship, adopted by the operations team.',
        highlights: [
          'Computer vision in Python + georeferenced PostgreSQL',
          'SGC: internal tool with real-time APIs (C#)',
          'Process improvement: replaced a manual annotation workflow',
        ],
      },
    ],
    academic: [
      {
        id: 'acad-maua',
        period: '2021 — 2025',
        title: 'B.Sc. in Computer Engineering',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Complete engineering education, from hardware to software. Graduated at the end of 2025.',
        highlights: ['Graduated at the end of 2025'],
      },
      {
        id: 'acad-tcc',
        period: '2025',
        title: 'Thesis — Data-driven software architecture',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Capstone project focused on extensible architecture: an engine that interprets rules declared in an external XML file and assembles custom entities at runtime, with zero recompilation — serialized state machine, declarative parsing and a custom visual editor. Built in C# in interdisciplinary collaboration with a design team, exercising integration between teams with distinct skill sets.',
        highlights: [
          'Declarative, extensible architecture (XML, zero recompilation)',
          'Serialized state machine + custom visual editor',
          'Interdisciplinary collaboration with a design team',
        ],
        links: [
          { label: 'Repository', url: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC' },
        ],
      },
      {
        id: 'acad-monitor',
        period: '2023 — 2024',
        title: 'Scholarship TA — Software engineering best practices',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Selected as a scholarship teaching assistant for two consecutive years. I taught freshmen how to structure projects with SOLID, DRY and design patterns (Gang of Four), and lectured on computer graphics and GPGPU. The experience consolidated my ability to communicate complex technical concepts and raise a team’s code quality bar.',
        highlights: [
          'Technical mentoring of dozens of students',
          'SOLID, DRY and design patterns (GoF) in practice',
          'Regular technical lectures and workshops',
        ],
      },
      {
        id: 'acad-nawat',
        period: '2022 — 2025',
        title: 'Student leadership — Member → President',
        organization: 'Student development organization (Nawat)',
        description:
          'Joined as a member in my 2nd year and was elected president in my 4th, leading multidisciplinary student teams through software projects with real, published deliverables. Responsible for planning, task allocation, deadline tracking and member development — concrete people and project management experience before graduating.',
        highlights: [
          'Elected president in 2024',
          'Managed multidisciplinary teams',
          'Projects with published deliverables',
        ],
      },
      {
        id: 'acad-etec',
        period: '2018 — 2020',
        title: 'Mechatronics Technician',
        organization: 'ETEC Júlio de Mesquita',
        description:
          'High school integrated with a technical program — a solid foundation in electronics, automation and programming logic. Graduated at the end of 2020.',
        highlights: ['Graduated at the end of 2020'],
      },
    ],
  },

  projects: [
    {
      id: 'sb-obras',
      title: 'Urban Roadwork Management Platform',
      summary: 'Complete GovTech platform for city governments — built entirely by me.',
      description:
        'A system for city governments to register, browse and audit roadwork on urban streets. Includes user, role and permission management, per-page and per-feature access control, groups scoped to specific work types, and scheduled jobs triggered by events (work created, edited or removed) for integration with other systems and AI processing. Everything configurable through the GUI, with zero code changes. Responsible for deploy, build, dockerization, frontend, backend, database and business rules.',
      tags: ['Full-Stack', 'RBAC', 'Docker', 'Jobs & Events', 'GovTech'],
      year: '2025 — 2026',
      media: { type: 'none' },
      mediaRequest:
        'Send platform screenshots (works, permissions and job configuration screens) — use a demo environment if real data is sensitive.',
      hue: 210,
    },
    {
      id: 'sb-pipeline',
      title: 'Distributed AI Processing Pipeline',
      summary: "Rewrite of the company's core image-processing infrastructure.",
      description:
        "Direct participation in rewriting the AI image-processing flow as a distributed system: containerized services, orchestration and RabbitMQ as the messaging layer between stages. The result was a more robust, observable and scalable infrastructure — the company's operational core.",
      tags: ['Distributed Systems', 'RabbitMQ', 'Containers', 'AI'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Send an architecture diagram of the pipeline (I can draw one if you prefer).',
      hue: 230,
    },
    {
      id: 'sb-classificacao',
      title: 'Classification Platform v2',
      summary: 'Flutter + FastAPI + MongoDB, administered 100% through the GUI.',
      description:
        'A rewrite of the AI data-annotation tool with technologies suited to the problem: a Flutter client with parallel image downloads to cut latency between classifications, a FastAPI backend and MongoDB. A single flexible mode replaced the previous four, and task/user configuration moved to a GUI — allowing non-technical people to administer the platform.',
      tags: ['Flutter', 'FastAPI', 'MongoDB', 'Internal tooling UX'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Send app screenshots (classification screen and task configuration).',
      hue: 190,
    },
    {
      id: 'sb-sgc',
      title: 'SGC — General Classification System',
      summary: 'Internal tool that replaced a manual data-annotation workflow.',
      description:
        'First version of the annotation tool, built in C# during my internship: per-user authentication, images served via API and classifications synced to the server in real time, with four classification modes configurable per user via JSON. It eliminated a manual ZIP download/upload process and became the foundation of the team’s annotation workflow.',
      tags: ['C#', 'APIs', 'Internal tool', 'AI'],
      year: '2023 — 2024',
      media: { type: 'none' },
      mediaRequest: 'Send a screenshot of any of the 4 SGC classification modes.',
      hue: 260,
    },
    {
      id: 'sb-tcc',
      title: 'Data-Driven Engine (Thesis)',
      summary: 'Declarative architecture: entities defined in XML, zero recompilation.',
      description:
        'Capstone project focused on extensible software architecture: a C# engine that interprets rules from an external XML file and assembles custom entities at runtime — serialized state machine, declarative parsing and a custom visual editor. The application domain was a game, but the principles (dependency inversion, configuration over code, extensibility without recompilation) are the same ones behind configurable enterprise systems.',
      tags: ['C#', 'Architecture', 'XML', 'State Machine'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Send State Machine Editor screenshots (the CMD04.pdf ones work as a base).',
      repoUrl: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC',
      hue: 280,
    },
    {
      id: 'sb-portfolio',
      title: 'This Website',
      summary: 'Bilingual full-stack site with multiple presentation variants per route.',
      description:
        'React + Node + TypeScript on Docker Compose, with bilingual content served via API and a route-based variant system — this formal version and a creative one at /gamer-resume. Continuous deployment on Vercel (frontend) and Render (backend), with a custom domain.',
      tags: ['React', 'Node', 'TypeScript', 'Docker', 'CI/CD'],
      year: '2026',
      media: { type: 'none' },
      repoUrl: 'https://github.com/Comunalti/site_portifolio_fullstack',
      hue: 215,
    },
  ],
};

export const formal: Record<Lang, SiteContent> = { pt, en };
