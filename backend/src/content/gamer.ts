import type { Lang, SiteContent } from '../types.js';

// ============================================================
// Conteúdo do site em PT e EN. Edite aqui — a API serve tudo.
// Campos `mediaRequest` viram placeholders no site pedindo a
// imagem/vídeo correspondente.
// ============================================================

const pt: SiteContent = {
  profile: {
    name: 'Felipe Rodrigues Peixoto da Silva',
    role: 'Engenheiro da Computação · Full-Stack & Game Dev',
    tagline:
      'Do shader ao servidor: construo engines, plataformas e ferramentas que outras pessoas conseguem estender sem tocar no código.',
    bio: [
      'Sou engenheiro da Computação, formado pelo Instituto Mauá de Tecnologia, e técnico em Mecatrônica pela ETEC Júlio de Mesquita. Minha trajetória começou pelo desenvolvimento de jogos, onde aprendi a combinar lógica, desempenho e experiência visual com Unity, C#, shaders e geração procedural. Essa base evoluiu para plataformas web distribuídas, integrações de IA, mensageria e containers.',
      'Gosto de transformar problemas difíceis em ferramentas simples de usar. Minha marca são sistemas data-driven: engines que interpretam regras externas, fluxos administrados por interface e produtos que pessoas sem conhecimento técnico conseguem adaptar sem depender de uma nova entrega de código.',
      'Minha experiência profissional mais recente foi na Intelicity, de março de 2023 a julho de 2026. Nesse período, saí de pipelines de visão computacional para assumir produtos completos de ponta a ponta. Agora busco um novo time em que eu possa unir engenharia sólida, criatividade e autonomia para construir algo relevante.',
    ],
    location: 'São Paulo, Brasil',
    email: 'frps2003@gmail.com',
    links: [
      { label: 'GitHub', url: 'https://github.com/Comunalti' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-rodrigues-peixoto-da-silva-501919209/' },
    ],
    skills: [
      'TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'Flutter',
      'C#', 'Unity', 'HLSL / GLSL', 'Docker', 'RabbitMQ',
      'PostgreSQL', 'MongoDB', 'Visão Computacional',
    ],
    stats: [
      { label: 'nível (idade)', value: 'LV 23' },
      { label: 'anos codando', value: '6+' },
      { label: 'anos de indústria', value: '3+' },
    ],
  },

  history: {
    professional: [
      {
        id: 'pro-intelicity-pleno',
        period: 'dez 2024 — jul 2026',
        title: 'Desenvolvedor Full-Stack',
        organization: 'Intelicity',
        description:
          'Efetivado após o estágio, ajudei a reescrever o coração da empresa: o fluxo de processamento de imagens com IA virou um sistema distribuído com containers, orquestração e RabbitMQ como mensageria. Em seguida, reescrevi a ferramenta de classificação com a stack certa — Flutter no cliente, FastAPI no backend e MongoDB — com download paralelo de imagens, um modo único que unifica todos os tipos de classificação e gestão completa por interface gráfica, sem depender de programador. Por fim, desenvolvi sozinho, de ponta a ponta, uma plataforma para prefeituras registrarem, consultarem e auditarem obras em vias urbanas: usuários, roles, permissões, controle de acesso por página e funcionalidade, e jobs agendados disparados por eventos — tudo configurável dinamicamente pela interface.',
        highlights: [
          'Sistema distribuído: containers + orquestração + RabbitMQ',
          'Plataforma de classificação: Flutter + FastAPI + MongoDB',
          'Plataforma de obras urbanas feita solo: deploy, docker, front, back e banco',
          'Regras de negócio configuráveis por UI, sem alterar código-fonte',
        ],
      },
      {
        id: 'pro-intelicity-estagio',
        period: 'mar 2023 — dez 2024',
        title: 'Estagiário — IA & Cidades Inteligentes',
        organization: 'Intelicity',
        description:
          'Aos 19 anos, no 3º ano da faculdade, mergulhei em inteligência artificial: Python para processar milhares de imagens, detectando e classificando objetos, com tudo georreferenciado em PostgreSQL. Vendo o gargalo do fluxo manual (baixar ZIP de imagens, classificar, subir de volta), criei o SGC (Sistema Geral de Classificação) — uma ferramenta de trabalho construída na Unity, em C#, com login por usuário e comunicação em tempo real via APIs. Tinha 4 modos de classificação com ferramentas diferentes, configuráveis por usuário através de um JSON no servidor. Foi a principal entrega do meu estágio.',
        highlights: [
          'Visão computacional em Python + dados georreferenciados em PostgreSQL',
          'SGC: ferramenta de classificação em Unity/C# com APIs em tempo real',
          '4 modos de classificação configuráveis por usuário',
        ],
      },
    ],
    academic: [
      {
        id: 'acad-tcc',
        period: '2025',
        title: 'TCC — Engine de jogo de luta data-driven',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Mais que um jogo de luta: uma engine que lê regras de um arquivo XML externo e cria personagens customizados de forma declarativa — sem tocar no código-fonte. Qualquer pessoa pode modificar e estender o jogo editando um arquivo de texto. Feito em colaboração com um TCC de Design (Iralem Studios), responsável pelas artes e animações.',
        highlights: [
          'Personagens definidos por XML, zero recompilação',
          'Máquina de estados serializada + editor visual próprio',
          'Colaboração interdisciplinar com equipe de design',
        ],
        links: [
          { label: 'Repositório', url: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC' },
          { label: 'Iralem Studios', url: 'https://iralemstudios.artstation.com/' },
        ],
      },
      {
        id: 'acad-monitor',
        period: '2023 — 2024',
        title: 'Aluno monitor — Desenvolvimento de Jogos',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Com bolsa de estudos, ensinei calouros a usar Unity seguindo bons princípios: SOLID, DRY e design patterns — com Game Programming Patterns e o Gang of Four como inspirações. Dei aulas de shaders (HLSL, CG/ShaderLab, GLSL no Shadertoy) e GPGPU com compute shaders, e conduzi workshops de geração procedural com wave function collapse e perlin noise. Foi onde aprendi a diferença entre código que só funciona e código de alta qualidade — e a ensinar isso.',
        highlights: [
          'SOLID, DRY e design patterns aplicados a jogos',
          'Aulas de shaders: HLSL, CG, ShaderLab, GLSL e compute shaders',
          'Workshops: wave function collapse e perlin noise',
        ],
      },
      {
        id: 'acad-nawat',
        period: '2022 — 2025',
        title: 'Membro → Presidente',
        organization: 'Nawat Games (entidade estudantil)',
        description:
          'Entrei na entidade de desenvolvimento de jogos no 2º ano da faculdade, virei presidente no 4º ano e passei o bastão no 5º para focar no trabalho e no TCC. Todos os jogos foram feitos na Unity, em C#, em colaboração com dezenas de alunos que passaram pela entidade.',
        highlights: [
          'Presidente da entidade em 2024',
          'Jogos publicados no itch.io',
          'Gestão de equipes multidisciplinares de alunos',
        ],
        links: [
          { label: 'itch.io', url: 'https://nawat-games.itch.io/' },
          { label: 'Instagram', url: 'https://www.instagram.com/nawat.maua/' },
        ],
      },
      {
        id: 'acad-maua',
        period: '2021 — 2025',
        title: 'Engenharia da Computação',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Cinco anos de formação em engenharia, do circuito ao software. Concluído no final de 2025.',
        highlights: ['Formado no final de 2025'],
      },
      {
        id: 'acad-etec',
        period: '2018 — 2020',
        title: 'Técnico em Mecatrônica',
        organization: 'ETEC Júlio de Mesquita',
        description:
          'Ensino médio integrado ao técnico em Mecatrônica — o primeiro contato sério com eletrônica, automação e programação. Formado no final de 2020.',
        highlights: ['Formado no final de 2020'],
      },
    ],
  },

  projects: [
    {
      id: 'sb-tcc',
      title: 'Engine de Luta Data-Driven (TCC)',
      summary: 'Jogo de luta cuja engine lê XML e cria personagens sem tocar no código.',
      description:
        'A equipe de computação não criou apenas um jogo: criou uma engine que interpreta regras de um arquivo XML externo e monta personagens customizados de forma declarativa. Qualquer pessoa pode modificar e estender o jogo editando um arquivo de texto — sem recompilar nada. Inclui uma máquina de estados serializada e um editor visual (State Machine Editor) para montar os comportamentos. As artes e animações vieram do TCC de Design parceiro, o Iralem Studios.',
      tags: ['Unity', 'C#', 'XML', 'Engine', 'Máquina de Estados'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest:
        'Envie um GIF/vídeo de gameplay do jogo de luta e screenshots do State Machine Editor (tenho os diagramas do CMD04.pdf, mas capturas reais ficam melhores).',
      repoUrl: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC',
      extraLinks: [
        { label: 'Iralem Studios (ArtStation)', url: 'https://iralemstudios.artstation.com/' },
        { label: 'Iralem Studios (Instagram)', url: 'https://www.instagram.com/iralemstudios.oficial/' },
      ],
      hue: 320,
    },
    {
      id: 'sb-obras',
      title: 'Plataforma de Obras Urbanas',
      summary: 'Plataforma para prefeituras registrarem, consultarem e auditarem obras nas vias.',
      description:
        'Desenvolvida inteiramente por mim — deploy, build, dockerização, frontend, backend e banco de dados. Usuários, roles, permissões e regras de acesso por página e por funcionalidade; grupos de usuários com acesso a tipos específicos de obra; e jobs agendados disparados por eventos (obra criada, editada, deletada) que comunicam outros sistemas ou disparam processamento com IA. Tudo configurável dinamicamente por interface gráfica, sem alterar o código-fonte.',
      tags: ['Full-Stack', 'Docker', 'RBAC', 'Jobs', 'GovTech'],
      year: '2025 — 2026',
      media: { type: 'none' },
      mediaRequest:
        'Envie screenshots da plataforma (telas de obras, permissões e configuração de jobs). Se houver dados sensíveis de prefeituras, use um ambiente de demonstração.',
      hue: 200,
    },
    {
      id: 'sb-classificacao',
      title: 'Plataforma de Classificação v2',
      summary: 'Sucessora do SGC: Flutter + FastAPI + MongoDB, gerida 100% por interface.',
      description:
        'Reescrita da ferramenta de classificação de imagens com tecnologias adequadas: cliente Flutter com download paralelo de imagens para reduzir a latência entre classificações, backend FastAPI e MongoDB. Um único modo flexível substituiu os 4 modos antigos, permitindo todos os tipos de classificação na mesma imagem. Tarefas e usuários são configurados por interface gráfica — qualquer pessoa sem conhecimento técnico gere a plataforma.',
      tags: ['Flutter', 'FastAPI', 'MongoDB', 'RabbitMQ', 'IA'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest:
        'Envie screenshots do app Flutter (tela de classificação e tela de configuração de tarefas).',
      hue: 180,
    },
    {
      id: 'sb-sgc',
      title: 'SGC — Sistema Geral de Classificação',
      summary: 'A ferramenta de trabalho que nasceu como um "joguinho" em Unity.',
      description:
        'Aos 19 anos, no 3º ano da faculdade, a ferramenta que eu dominava era a Unity — então usei ela. O SGC substituiu um fluxo manual de ZIPs por uma aplicação com login onde as imagens chegam por API e as classificações voltam ao servidor em tempo real. Quatro modos de classificação com ferramentas distintas, configuráveis por usuário via JSON no servidor. A prova de que ferramenta boa é a que resolve o problema.',
      tags: ['Unity', 'C#', 'APIs', 'IA', 'Ferramenta interna'],
      year: '2023 — 2024',
      media: { type: 'none' },
      mediaRequest: 'Envie screenshots do SGC (qualquer um dos 4 modos de classificação).',
      hue: 265,
    },
    {
      id: 'sb-nawat',
      title: 'Nawat Games',
      summary: 'Os jogos da entidade estudantil que ajudei a construir e presidi.',
      description:
        'Jogos desenvolvidos na Unity, em C#, em colaboração com dezenas de alunos da entidade. Entrei como membro em 2022, virei presidente em 2024 e deixei um legado de jogos publicados no itch.io.',
      tags: ['Unity', 'C#', 'Game Jams', 'Liderança'],
      year: '2022 — 2025',
      media: { type: 'none' },
      mediaRequest:
        'Envie capas/GIFs dos jogos favoritos do itch.io da Nawat (ou me diga quais destacar que eu busco as capas públicas).',
      liveUrl: 'https://nawat-games.itch.io/',
      extraLinks: [{ label: 'Instagram', url: 'https://www.instagram.com/nawat.maua/' }],
      hue: 155,
    },
    {
      id: 'sb-portfolio',
      title: 'Este Portfolio',
      summary: 'React + Node + TypeScript + Docker — e um shader WebGL de fundo.',
      description:
        'O site que você está navegando: frontend React com shader GLSL reagindo ao mouse e ao scroll, backend Node servindo todo o conteúdo por API em dois idiomas, tudo containerizado com Docker Compose.',
      tags: ['React', 'Node', 'TypeScript', 'WebGL', 'Docker'],
      year: '2026',
      media: { type: 'none' },
      repoUrl: 'https://github.com/seu-usuario/site_portifolio_fullstack',
      hue: 195,
    },
  ],
};

const en: SiteContent = {
  profile: {
    name: 'Felipe Rodrigues Peixoto da Silva',
    role: 'Computer Engineer · Full-Stack & Game Dev',
    tagline:
      'From shaders to servers: I build engines, platforms and tools that other people can extend without touching the code.',
    bio: [
      'I am a Computer Engineer from Instituto Mauá de Tecnologia and a Mechatronics technician from ETEC Júlio de Mesquita. My journey started in game development, where I learned to combine logic, performance and visual experience with Unity, C#, shaders and procedural generation. That foundation evolved into distributed web platforms, AI integrations, messaging and containers.',
      'I enjoy turning difficult problems into tools that are simple to use. My trademark is data-driven systems: engines that interpret external rules, workflows managed through an interface and products that non-technical people can adapt without waiting for another code release.',
      'My most recent professional experience was at Intelicity, from March 2023 to July 2026. During that time, I moved from computer-vision pipelines to owning complete products end to end. I am now looking for a new team where I can combine solid engineering, creativity and autonomy to build something meaningful.',
    ],
    location: 'São Paulo, Brazil',
    email: 'frps2003@gmail.com',
    links: [
      { label: 'GitHub', url: 'https://github.com/Comunalti' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-rodrigues-peixoto-da-silva-501919209/' },
    ],
    skills: [
      'TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'Flutter',
      'C#', 'Unity', 'HLSL / GLSL', 'Docker', 'RabbitMQ',
      'PostgreSQL', 'MongoDB', 'Computer Vision',
    ],
    stats: [
      { label: 'level (age)', value: 'LV 23' },
      { label: 'years coding', value: '6+' },
      { label: 'years in industry', value: '3+' },
    ],
  },

  history: {
    professional: [
      {
        id: 'pro-intelicity-pleno',
        period: 'Dec 2024 — Jul 2026',
        title: 'Full-Stack Developer',
        organization: 'Intelicity',
        description:
          "Hired full-time after the internship, I helped rewrite the company's core: the AI image-processing pipeline became a distributed system with containers, orchestration and RabbitMQ messaging. Then I rewrote the classification tool with the right stack — Flutter client, FastAPI backend and MongoDB — featuring parallel image downloads, a single flexible mode unifying every classification type, and full management through a GUI, no programmer required. Finally, I single-handedly built, end to end, a platform for city governments to register, browse and audit roadwork: users, roles, permissions, per-page and per-feature access control, and event-triggered scheduled jobs — all dynamically configurable through the interface.",
        highlights: [
          'Distributed system: containers + orchestration + RabbitMQ',
          'Classification platform: Flutter + FastAPI + MongoDB',
          'Roadwork platform built solo: deploy, docker, front, back and database',
          'Business rules configurable via UI, no source-code changes',
        ],
      },
      {
        id: 'pro-intelicity-estagio',
        period: 'Mar 2023 — Dec 2024',
        title: 'Intern — AI & Smart Cities',
        organization: 'Intelicity',
        description:
          'At 19, in my 3rd year of college, I dove into artificial intelligence: Python pipelines processing thousands of images, detecting and classifying objects, all georeferenced in PostgreSQL. Seeing the bottleneck of the manual workflow (download a ZIP of images, classify, upload back), I built SGC (Sistema Geral de Classificação — General Classification System), a work tool made in Unity, in C#, with per-user login and real-time API communication. It had 4 classification modes with different toolsets, configurable per user through a JSON on the server. It was the main deliverable of my internship.',
        highlights: [
          'Computer vision in Python + georeferenced data in PostgreSQL',
          'SGC: Unity/C# classification tool with real-time APIs',
          '4 classification modes configurable per user',
        ],
      },
    ],
    academic: [
      {
        id: 'acad-tcc',
        period: '2025',
        title: 'Thesis — Data-driven fighting game engine',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'More than a fighting game: an engine that reads rules from an external XML file and builds custom characters declaratively — without touching the source code. Anyone can modify and extend the game by editing a text file. Built in collaboration with a Design thesis team (Iralem Studios), who created all art and animations.',
        highlights: [
          'Characters defined via XML, zero recompilation',
          'Serialized state machine + custom visual editor',
          'Interdisciplinary collaboration with a design team',
        ],
        links: [
          { label: 'Repository', url: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC' },
          { label: 'Iralem Studios', url: 'https://iralemstudios.artstation.com/' },
        ],
      },
      {
        id: 'acad-monitor',
        period: '2023 — 2024',
        title: 'Teaching Assistant — Game Development',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'On a scholarship, I taught freshmen how to use Unity following solid principles: SOLID, DRY and design patterns — inspired by Game Programming Patterns and the Gang of Four. I lectured on shaders (HLSL, CG/ShaderLab, GLSL on Shadertoy) and GPGPU with compute shaders, and ran procedural generation workshops covering wave function collapse and perlin noise. That is where I learned the difference between code that merely works and high-quality code — and how to teach it.',
        highlights: [
          'SOLID, DRY and design patterns applied to games',
          'Shader lectures: HLSL, CG, ShaderLab, GLSL and compute shaders',
          'Workshops: wave function collapse and perlin noise',
        ],
      },
      {
        id: 'acad-nawat',
        period: '2022 — 2025',
        title: 'Member → President',
        organization: 'Nawat Games (student organization)',
        description:
          'I joined the game development student org in my 2nd year, became president in my 4th, and passed the torch in my 5th to focus on work and my thesis. Every game was built in Unity, in C#, in collaboration with dozens of students who passed through the org.',
        highlights: [
          'Org president in 2024',
          'Games published on itch.io',
          'Led multidisciplinary student teams',
        ],
        links: [
          { label: 'itch.io', url: 'https://nawat-games.itch.io/' },
          { label: 'Instagram', url: 'https://www.instagram.com/nawat.maua/' },
        ],
      },
      {
        id: 'acad-maua',
        period: '2021 — 2025',
        title: 'Computer Engineering',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Five years of engineering education, from circuits to software. Graduated at the end of 2025.',
        highlights: ['Graduated at the end of 2025'],
      },
      {
        id: 'acad-etec',
        period: '2018 — 2020',
        title: 'Mechatronics Technician',
        organization: 'ETEC Júlio de Mesquita',
        description:
          'High school integrated with a Mechatronics technical program — my first serious contact with electronics, automation and programming. Graduated at the end of 2020.',
        highlights: ['Graduated at the end of 2020'],
      },
    ],
  },

  projects: [
    {
      id: 'sb-tcc',
      title: 'Data-Driven Fighting Engine (Thesis)',
      summary: 'A fighting game whose engine reads XML and builds characters without code changes.',
      description:
        'The engineering team did not just build a game: they built an engine that interprets rules from an external XML file and assembles custom characters declaratively. Anyone can modify and extend the game by editing a text file — no recompilation. It includes a serialized state machine and a visual State Machine Editor to author behaviors. Art and animations came from the partner Design thesis, Iralem Studios.',
      tags: ['Unity', 'C#', 'XML', 'Engine', 'State Machine'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest:
        'Send a gameplay GIF/video of the fighting game and screenshots of the State Machine Editor.',
      repoUrl: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC',
      extraLinks: [
        { label: 'Iralem Studios (ArtStation)', url: 'https://iralemstudios.artstation.com/' },
        { label: 'Iralem Studios (Instagram)', url: 'https://www.instagram.com/iralemstudios.oficial/' },
      ],
      hue: 320,
    },
    {
      id: 'sb-obras',
      title: 'Urban Roadwork Platform',
      summary: 'A platform for city governments to register, browse and audit street works.',
      description:
        'Built entirely by me — deploy, build, dockerization, frontend, backend and database. Users, roles, permissions and access rules per page and per feature; user groups scoped to specific work types; and scheduled jobs triggered by events (work created, edited, deleted) that notify other systems or trigger AI processing. Everything dynamically configurable through the GUI, with zero source-code changes.',
      tags: ['Full-Stack', 'Docker', 'RBAC', 'Jobs', 'GovTech'],
      year: '2025 — 2026',
      media: { type: 'none' },
      mediaRequest:
        'Send platform screenshots (works list, permissions and job configuration screens). Use a demo environment if real city data is sensitive.',
      hue: 200,
    },
    {
      id: 'sb-classificacao',
      title: 'Classification Platform v2',
      summary: "SGC's successor: Flutter + FastAPI + MongoDB, managed 100% through the UI.",
      description:
        'A rewrite of the image classification tool with proper technologies: a Flutter client with parallel image downloads to cut latency between classifications, a FastAPI backend and MongoDB. A single flexible mode replaced the old 4 modes, allowing every classification type on the same image. Tasks and users are configured through a GUI — anyone without technical knowledge can run the platform.',
      tags: ['Flutter', 'FastAPI', 'MongoDB', 'RabbitMQ', 'AI'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest:
        'Send screenshots of the Flutter app (classification screen and task configuration screen).',
      hue: 180,
    },
    {
      id: 'sb-sgc',
      title: 'SGC — General Classification System',
      summary: 'The work tool that started as a Unity "mini game".',
      description:
        'At 19, in my 3rd year of college, the tool I mastered was Unity — so I used it. SGC replaced a manual ZIP workflow with a logged-in application where images arrive via API and classifications flow back to the server in real time. Four classification modes with distinct toolsets, configured per user through a JSON on the server. Proof that a good tool is the one that solves the problem.',
      tags: ['Unity', 'C#', 'APIs', 'AI', 'Internal tool'],
      year: '2023 — 2024',
      media: { type: 'none' },
      mediaRequest: 'Send SGC screenshots (any of the 4 classification modes).',
      hue: 265,
    },
    {
      id: 'sb-nawat',
      title: 'Nawat Games',
      summary: 'The student org games I helped build and presided over.',
      description:
        'Games developed in Unity, in C#, in collaboration with dozens of students from the org. I joined as a member in 2022, became president in 2024 and left a legacy of games published on itch.io.',
      tags: ['Unity', 'C#', 'Game Jams', 'Leadership'],
      year: '2022 — 2025',
      media: { type: 'none' },
      mediaRequest:
        "Send covers/GIFs of your favorite Nawat games from itch.io (or tell me which ones to feature and I'll fetch the public covers).",
      liveUrl: 'https://nawat-games.itch.io/',
      extraLinks: [{ label: 'Instagram', url: 'https://www.instagram.com/nawat.maua/' }],
      hue: 155,
    },
    {
      id: 'sb-portfolio',
      title: 'This Portfolio',
      summary: 'React + Node + TypeScript + Docker — with a WebGL shader background.',
      description:
        'The site you are browsing: a React frontend with a GLSL shader reacting to mouse and scroll, a Node backend serving all content through a bilingual API, everything containerized with Docker Compose.',
      tags: ['React', 'Node', 'TypeScript', 'WebGL', 'Docker'],
      year: '2026',
      media: { type: 'none' },
      repoUrl: 'https://github.com/seu-usuario/site_portifolio_fullstack',
      hue: 195,
    },
  ],
};

export const gamer: Record<Lang, SiteContent> = { pt, en };
