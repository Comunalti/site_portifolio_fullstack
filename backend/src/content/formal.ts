import type { Lang, SiteContent } from '../types.js';

// ============================================================
// Variante FORMAL — texto próprio, escrito para processos
// seletivos corporativos (bancos, grandes empresas).
// Posicionamento: desenvolvedor FULL-STACK com IA aplicada.
// Soft skills em destaque: ensino/mentoria (monitoria) e
// gestão de pessoas (presidência de organização estudantil).
// Jogos aparecem apenas como contexto, de passagem.
// ============================================================

const pt: SiteContent = {
  profile: {
    name: 'Felipe Rodrigues Peixoto da Silva',
    role: 'Desenvolvedor Full-Stack',
    tagline:
      'Do banco de dados à interface: plataformas web completas, com IA aplicada e código guiado por princípios — não por improviso.',
    bio: [
      'Sou engenheiro da Computação pelo Instituto Mauá de Tecnologia e técnico em Mecatrônica pela ETEC Júlio de Mesquita. Ao longo de mais de três anos de experiência profissional, desenvolvi plataformas completas envolvendo interfaces em React e Flutter, APIs em Node e Python, bancos de dados, mensageria, containers e processamento com inteligência artificial.',
      'Tenho preferência por sistemas configuráveis, extensíveis e simples de operar. Já construí desde engines orientadas a dados até plataformas administradas inteiramente por interface, permitindo que usuários não técnicos adaptem regras e fluxos sem depender de alterações no código. Para mim, boa engenharia transforma complexidade técnica em produtos claros, confiáveis e fáceis de evoluir.',
    ],
    location: 'São Paulo, Brasil',
    email: 'frps2003@gmail.com',
    links: [
      { label: 'GitHub', url: 'https://github.com/Comunalti' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-rodrigues-peixoto-da-silva-501919209/' },
    ],
    skills: [
      'TypeScript', 'JavaScript', 'React', 'Node.js', 'Express', 'Python',
      'FastAPI', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'Docker',
      'REST APIs', 'Flutter', 'CI/CD',
    ],
    stats: [
      { label: 'anos de indústria', value: '3+' },
      { label: 'anos de mentoria técnica', value: '2' },
      { label: 'organização presidida', value: '1' },
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
          'Atuei na evolução das plataformas web da empresa em três frentes. Na infraestrutura, trabalhei com a equipe de IA na migração do processamento de imagens para uma arquitetura distribuída — serviços containerizados, orquestração e RabbitMQ conectando as etapas do fluxo. No produto, reconstruí a plataforma de anotação de dados com Flutter, FastAPI e MongoDB, priorizando a experiência da equipe de operação: menos espera entre tarefas e administração completa por interface, sem depender de desenvolvedores. E no projeto de maior responsabilidade, entreguei sozinho uma plataforma de gestão de obras urbanas para prefeituras — da modelagem de dados ao deploy, passando por APIs, controle de acesso granular (usuários, roles, permissões por página e por funcionalidade) e automações disparadas por eventos, todas configuráveis pela própria interface.',
        highlights: [
          'Entrega solo de plataforma completa: modelagem → APIs → deploy',
          'Controle de acesso granular (RBAC) configurável por interface',
          'Automações orientadas a eventos, sem alteração de código',
          'Arquitetura distribuída com RabbitMQ e containers',
        ],
      },
      {
        id: 'pro-intelicity-estagio',
        period: 'mar 2023 — dez 2024',
        title: 'Estagiário de Desenvolvimento — IA',
        organization: 'Intelicity',
        description:
          'Entrei no 3º ano da faculdade para trabalhar com visão computacional: pipelines em Python detectando e classificando objetos em grandes volumes de imagens, com resultados georreferenciados em PostgreSQL. No dia a dia, percebi que a etapa de anotação de dados — essencial para treinar os modelos — dependia de um processo manual de download e upload de arquivos. Propus e desenvolvi o SGC (Sistema Geral de Classificação): uma aplicação em C# com autenticação por usuário e sincronização em tempo real via APIs, com quatro fluxos de trabalho configuráveis por usuário. A ferramenta foi adotada pela equipe de operação e virou a principal entrega do meu estágio.',
        highlights: [
          'Visão computacional em Python com PostgreSQL georreferenciado',
          'Iniciativa: identifiquei o gargalo e propus a solução',
          'SGC adotado pela operação como ferramenta oficial',
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
        id: 'acad-monitor',
        period: '2023 — 2024',
        title: 'Monitor bolsista — Engenharia de Software',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Selecionado por dois anos consecutivos para receber bolsa e ensinar alunos mais novos. Minha missão era mostrar a diferença entre código que apenas funciona e código de qualidade: princípios SOLID e DRY, design patterns do Gang of Four e revisão de projetos dos alunos. Também preparei e ministrei aulas de computação gráfica e programação em GPU. Foi minha primeira experiência formal de mentoria — e a base do jeito como reviso código e nivelo equipes até hoje.',
        highlights: [
          'Dois anos consecutivos de mentoria técnica remunerada',
          'Ensino de SOLID, DRY e design patterns (GoF)',
          'Preparação e condução de aulas e workshops',
        ],
      },
      {
        id: 'acad-nawat',
        period: '2022 — 2025',
        title: 'Presidente eleito — Organização estudantil',
        organization: 'Organização de desenvolvimento de software (Nawat)',
        description:
          'Entrei como membro no 2º ano da faculdade e fui eleito presidente no 4º. Liderei equipes multidisciplinares de alunos — programação, arte e produção — em projetos de software com entregas reais publicadas. Na prática, isso significou planejar ciclos de projeto, distribuir tarefas conforme o nível de cada um, acompanhar prazos e desenvolver pessoas tecnicamente. Deixei o cargo no 5º ano, com sucessão organizada, para focar no TCC e no trabalho. O domínio da organização era desenvolvimento de jogos, mas o aprendizado foi de gestão.',
        highlights: [
          'Gestão de pessoas: planejamento, delegação e acompanhamento',
          'Equipes multidisciplinares (programação, arte, produção)',
          'Sucessão planejada ao deixar a presidência',
        ],
      },
      {
        id: 'acad-tcc',
        period: '2025',
        title: 'TCC — Arquitetura de software data-driven',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Projeto de conclusão centrado em um problema clássico de engenharia: como permitir que um sistema seja estendido sem alterar seu código-fonte. A resposta foi uma engine em C# que interpreta regras declaradas em XML e monta entidades completas em tempo de execução — máquina de estados serializada, parsing declarativo e um editor visual para autoria das regras. O domínio de demonstração foi um jogo, em parceria com uma equipe de design; os princípios (configuração sobre código, inversão de dependência, extensibilidade) são os mesmos de qualquer sistema corporativo configurável.',
        highlights: [
          'Extensibilidade sem recompilação (configuração sobre código)',
          'Máquina de estados serializada + editor visual',
          'Parceria interdisciplinar com equipe de design',
        ],
        links: [
          { label: 'Repositório', url: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC' },
        ],
      },
      {
        id: 'acad-etec',
        period: '2018 — 2020',
        title: 'Técnico em Mecatrônica',
        organization: 'ETEC Júlio de Mesquita',
        description:
          'Ensino médio integrado ao técnico — primeira formação em eletrônica, automação e lógica de programação. Concluído no final de 2020.',
        highlights: ['Formado no final de 2020'],
      },
    ],
  },

  projects: [
    {
      id: 'sb-obras',
      title: 'Plataforma de Gestão de Obras Urbanas',
      summary: 'Sistema completo para prefeituras — entregue de ponta a ponta por uma pessoa.',
      description:
        'Plataforma que permite a prefeituras registrar, consultar e auditar obras em vias urbanas. O núcleo é um sistema de permissões granular: usuários, roles, regras de acesso por página e por funcionalidade, e grupos restritos a tipos específicos de obra. Eventos do sistema (obra criada, editada, removida) disparam automações agendadas que integram outros sistemas e processamentos com IA — tudo configurado pela interface administrativa, sem tocar em código. Responsabilidade integral: modelagem de dados, APIs, frontend, dockerização e deploy.',
      tags: ['Full-Stack', 'RBAC', 'Automações', 'Docker', 'GovTech'],
      year: '2025 — 2026',
      media: { type: 'none' },
      mediaRequest:
        'Envie screenshots da plataforma (telas de obras, permissões e configuração de automações) — use ambiente de demonstração se os dados forem sensíveis.',
      hue: 210,
    },
    {
      id: 'sb-pipeline',
      title: 'Infraestrutura Distribuída de IA',
      summary: 'Migração do processamento central de imagens para arquitetura de mensageria.',
      description:
        'Trabalho conjunto com a equipe de IA para migrar o fluxo de processamento de imagens — o núcleo operacional da empresa — para uma arquitetura distribuída: serviços containerizados e orquestrados, com RabbitMQ conectando as etapas. O redesenho trouxe isolamento de falhas, escalabilidade por etapa e visibilidade do fluxo de ponta a ponta.',
      tags: ['Sistemas Distribuídos', 'RabbitMQ', 'Containers', 'IA'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Envie um diagrama da arquitetura do pipeline (posso desenhar um se preferir).',
      hue: 230,
    },
    {
      id: 'sb-classificacao',
      title: 'Plataforma de Anotação de Dados',
      summary: 'Flutter + FastAPI + MongoDB — administrada inteiramente pela interface.',
      description:
        'Segunda geração da ferramenta de anotação de dados para IA. Cliente Flutter com download paralelo de imagens (menos espera entre tarefas), backend FastAPI e MongoDB. Um único fluxo flexível substituiu os quatro modos da versão anterior, e a configuração de tarefas e usuários migrou de arquivos estáticos para uma interface administrativa — qualquer pessoa da operação gerencia a plataforma sem apoio técnico.',
      tags: ['Flutter', 'FastAPI', 'MongoDB', 'Ferramentas internas'],
      year: '2025',
      media: {
        type: 'image',
        imageUrl: '/sandboxes/annotation-platform-dashboard.png',
        images: [
          {
            imageUrl: '/sandboxes/annotation-platform-classification.png',
            alt: 'Tela de classificação da plataforma com caixas delimitadoras',
            caption: 'Classificação de múltiplos objetos com bounding boxes e classes configuráveis.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-dashboard.png',
            alt: 'Dashboard administrativo da plataforma de anotação',
            caption: 'Dashboard com tarefas, metas, feedback e indicadores operacionais.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-tasks.png',
            alt: 'Lista de tarefas disponíveis para classificação',
            caption: 'Busca, ordenação e acompanhamento das tarefas de classificação.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-task-settings.png',
            alt: 'Tela de configuração de uma tarefa de anotação',
            caption: 'Configuração completa da tarefa por interface administrativa.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-upload.png',
            alt: 'Tela de upload de imagens para uma tarefa de anotação',
            caption: 'Seleção, pré-visualização e envio de imagens diretamente pela plataforma.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-classes.png',
            alt: 'Configuração de classes da tarefa de anotação',
            caption: 'Cadastro de classes, identificadores e cores utilizados na classificação.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-users.png',
            alt: 'Seleção de usuários para uma tarefa de anotação',
            caption: 'Distribuição de tarefas e controle dos usuários responsáveis.',
          },
        ],
      },
      hue: 190,
    },
    {
      id: 'sb-sgc',
      title: 'SGC — Sistema Geral de Classificação',
      summary: 'A ferramenta que propus no estágio e a operação adotou como oficial.',
      description:
        'Primeira geração da ferramenta de anotação, nascida de uma iniciativa minha ao identificar o gargalo do processo manual (baixar ZIPs de imagens, classificar offline, subir de volta). Aplicação em C# com autenticação por usuário, imagens servidas por API e classificações sincronizadas em tempo real, com quatro fluxos configuráveis por usuário. Reduziu o retrabalho da operação e virou peça central do treinamento dos modelos.',
      tags: ['C#', 'APIs', 'Iniciativa própria', 'IA'],
      year: '2023 — 2024',
      media: {
        type: 'image',
        imageUrl: '/sandboxes/sgc-label-me.png',
        images: [
          {
            imageUrl: '/sandboxes/sgc-label-me.png',
            alt: 'Tela do SGC com segmentação de imagem por polígono',
            caption: 'Segmentação por polígonos no módulo Label Me.',
          },
          {
            imageUrl: '/sandboxes/sgc-spacely.png',
            alt: 'Tela do SGC com classificação por caixa delimitadora',
            caption: 'Classificação por bounding box no módulo Spacely.',
          },
          {
            imageUrl: '/sandboxes/sgc-login.png',
            alt: 'Tela de autenticação do SGC',
            caption: 'Autenticação individual para acesso às tarefas.',
          },
        ],
      },
      hue: 260,
    },
    {
      id: 'sb-tcc',
      title: 'Engine Data-Driven (TCC)',
      summary: 'Sistema extensível por configuração: entidades definidas em XML, sem recompilar.',
      description:
        'Projeto acadêmico de arquitetura de software: uma engine em C# que interpreta regras declaradas em XML externo e monta entidades completas em tempo de execução, com máquina de estados serializada e editor visual próprio. Demonstrado em um jogo, construído em parceria com uma equipe de design — mas o problema resolvido é o de qualquer plataforma corporativa que precise ser estendida por configuração, não por código.',
      tags: ['C#', 'Arquitetura', 'XML', 'Extensibilidade'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Envie screenshots do editor visual de máquina de estados.',
      repoUrl: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC',
      hue: 280,
    },
    {
      id: 'sb-portfolio',
      title: 'Este Site',
      summary: 'Full-stack bilíngue com variantes de apresentação por rota.',
      description:
        'React + Node + TypeScript em Docker Compose, com conteúdo em dois idiomas servido por API e variantes de apresentação por rota — esta versão e uma versão criativa em /gamer-resume. Deploy contínuo (Vercel + Render) com domínio próprio.',
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
    role: 'Full-Stack Developer',
    tagline:
      'From database to interface: complete web platforms, with applied AI and code guided by principles — not improvisation.',
    bio: [
      'I am a Computer Engineering graduate from Instituto Mauá de Tecnologia and a Mechatronics technician from ETEC Júlio de Mesquita. Throughout more than three years of professional experience, I have developed complete platforms involving React and Flutter interfaces, Node and Python APIs, databases, messaging, containers and artificial intelligence processing.',
      'I am particularly interested in systems that are configurable, extensible and simple to operate. I have built everything from data-driven engines to platforms managed entirely through graphical interfaces, allowing non-technical users to adapt rules and workflows without requiring code changes. To me, good engineering turns technical complexity into products that are clear, reliable and easy to evolve.',
    ],
    location: 'São Paulo, Brazil',
    email: 'frps2003@gmail.com',
    links: [
      { label: 'GitHub', url: 'https://github.com/Comunalti' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-rodrigues-peixoto-da-silva-501919209/' },
    ],
    skills: [
      'TypeScript', 'JavaScript', 'React', 'Node.js', 'Express', 'Python',
      'FastAPI', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'Docker',
      'REST APIs', 'Flutter', 'CI/CD',
    ],
    stats: [
      { label: 'years in industry', value: '3+' },
      { label: 'years of technical mentoring', value: '2' },
      { label: 'organization presided', value: '1' },
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
          "I worked on the evolution of the company's web platforms across three fronts. On infrastructure, I worked with the AI team to migrate image processing to a distributed architecture — containerized services, orchestration and RabbitMQ connecting the pipeline stages. On product, I rebuilt the data-annotation platform with Flutter, FastAPI and MongoDB, prioritizing the operations team's experience: less waiting between tasks and full administration through the interface, with no developer dependency. And on my highest-responsibility project, I single-handedly delivered an urban roadwork management platform for city governments — from data modeling to deployment, including APIs, granular access control (users, roles, per-page and per-feature permissions) and event-triggered automations, all configurable through the interface itself.",
        highlights: [
          'Solo delivery of a complete platform: modeling → APIs → deploy',
          'Granular access control (RBAC) configurable via UI',
          'Event-driven automations, zero code changes required',
          'Distributed architecture with RabbitMQ and containers',
        ],
      },
      {
        id: 'pro-intelicity-estagio',
        period: 'Mar 2023 — Dec 2024',
        title: 'Development Intern — AI',
        organization: 'Intelicity',
        description:
          'I joined in my 3rd year of college to work with computer vision: Python pipelines detecting and classifying objects across large volumes of images, with georeferenced results in PostgreSQL. Day to day, I noticed that data annotation — essential for training the models — depended on a manual file download/upload process. I proposed and built SGC (General Classification System): a C# application with per-user authentication and real-time synchronization via APIs, offering four user-configurable workflows. The tool was adopted by the operations team and became the main deliverable of my internship.',
        highlights: [
          'Computer vision in Python with georeferenced PostgreSQL',
          'Initiative: identified the bottleneck and proposed the solution',
          'SGC adopted by operations as the official tool',
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
        id: 'acad-monitor',
        period: '2023 — 2024',
        title: 'Scholarship TA — Software Engineering',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Selected two years in a row for a paid teaching-assistant position. My mission was showing students the difference between code that merely works and quality code: SOLID and DRY principles, Gang of Four design patterns, and reviewing student projects. I also prepared and delivered lectures on computer graphics and GPU programming. It was my first formal mentoring experience — and the foundation of how I review code and level teams up to this day.',
        highlights: [
          'Two consecutive years of paid technical mentoring',
          'Taught SOLID, DRY and design patterns (GoF)',
          'Prepared and delivered lectures and workshops',
        ],
      },
      {
        id: 'acad-nawat',
        period: '2022 — 2025',
        title: 'Elected President — Student organization',
        organization: 'Software development student organization (Nawat)',
        description:
          'I joined as a member in my 2nd year and was elected president in my 4th. I led multidisciplinary student teams — programming, art and production — through software projects with real, published deliveries. In practice, that meant planning project cycles, assigning tasks according to each member’s level, tracking deadlines and developing people technically. I stepped down in my 5th year, with an organized succession, to focus on my thesis and my job. The organization’s domain was game development, but the lessons were in management.',
        highlights: [
          'People management: planning, delegation and follow-up',
          'Multidisciplinary teams (programming, art, production)',
          'Planned succession when leaving the presidency',
        ],
      },
      {
        id: 'acad-tcc',
        period: '2025',
        title: 'Thesis — Data-driven software architecture',
        organization: 'Instituto Mauá de Tecnologia',
        description:
          'Capstone project centered on a classic engineering problem: how to let a system be extended without changing its source code. The answer was a C# engine that interprets rules declared in XML and assembles complete entities at runtime — serialized state machine, declarative parsing and a visual editor for authoring rules. The demonstration domain was a game, in partnership with a design team; the principles (configuration over code, dependency inversion, extensibility) are the same behind any configurable enterprise system.',
        highlights: [
          'Extensibility without recompilation (configuration over code)',
          'Serialized state machine + visual editor',
          'Interdisciplinary partnership with a design team',
        ],
        links: [
          { label: 'Repository', url: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC' },
        ],
      },
      {
        id: 'acad-etec',
        period: '2018 — 2020',
        title: 'Mechatronics Technician',
        organization: 'ETEC Júlio de Mesquita',
        description:
          'High school integrated with a technical program — first training in electronics, automation and programming logic. Completed at the end of 2020.',
        highlights: ['Graduated at the end of 2020'],
      },
    ],
  },

  projects: [
    {
      id: 'sb-obras',
      title: 'Urban Roadwork Management Platform',
      summary: 'A complete system for city governments — delivered end to end by one person.',
      description:
        'A platform that lets city governments register, browse and audit roadwork on urban streets. Its core is a granular permission system: users, roles, per-page and per-feature access rules, and groups restricted to specific work types. System events (work created, edited, removed) trigger scheduled automations that integrate other systems and AI processing — all configured through the admin interface, without touching code. Full responsibility: data modeling, APIs, frontend, dockerization and deployment.',
      tags: ['Full-Stack', 'RBAC', 'Automations', 'Docker', 'GovTech'],
      year: '2025 — 2026',
      media: { type: 'none' },
      mediaRequest:
        'Send platform screenshots (works, permissions and automation configuration screens) — use a demo environment if real data is sensitive.',
      hue: 210,
    },
    {
      id: 'sb-pipeline',
      title: 'Distributed AI Infrastructure',
      summary: 'Migration of core image processing to a messaging architecture.',
      description:
        "Joint work with the AI team to migrate the image-processing flow — the company's operational core — to a distributed architecture: containerized, orchestrated services with RabbitMQ connecting the stages. The redesign brought failure isolation, per-stage scalability and end-to-end visibility of the flow.",
      tags: ['Distributed Systems', 'RabbitMQ', 'Containers', 'AI'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Send an architecture diagram of the pipeline (I can draw one if you prefer).',
      hue: 230,
    },
    {
      id: 'sb-classificacao',
      title: 'Data Annotation Platform',
      summary: 'Flutter + FastAPI + MongoDB — administered entirely through the interface.',
      description:
        'Second generation of the AI data-annotation tool. Flutter client with parallel image downloads (less waiting between tasks), FastAPI backend and MongoDB. A single flexible workflow replaced the previous four modes, and task/user configuration moved from static files to an admin interface — anyone in operations manages the platform without technical support.',
      tags: ['Flutter', 'FastAPI', 'MongoDB', 'Internal tooling'],
      year: '2025',
      media: {
        type: 'image',
        imageUrl: '/sandboxes/annotation-platform-dashboard.png',
        images: [
          {
            imageUrl: '/sandboxes/annotation-platform-classification.png',
            alt: 'Classification workspace with bounding boxes',
            caption: 'Multi-object classification with bounding boxes and configurable classes.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-dashboard.png',
            alt: 'Data-annotation platform admin dashboard',
            caption: 'Dashboard with tasks, goals, feedback and operational indicators.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-tasks.png',
            alt: 'List of available classification tasks',
            caption: 'Search, sorting and progress tracking for classification tasks.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-task-settings.png',
            alt: 'Data-annotation task configuration screen',
            caption: 'Complete task configuration through the admin interface.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-upload.png',
            alt: 'Image upload screen for a data-annotation task',
            caption: 'Image selection, preview and upload directly through the platform.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-classes.png',
            alt: 'Annotation task class configuration',
            caption: 'Class names, identifiers and colors configured for classification.',
          },
          {
            imageUrl: '/sandboxes/annotation-platform-users.png',
            alt: 'User assignment for an annotation task',
            caption: 'Task distribution and control of assigned users.',
          },
        ],
      },
      hue: 190,
    },
    {
      id: 'sb-sgc',
      title: 'SGC — General Classification System',
      summary: 'The tool I proposed as an intern that operations adopted as official.',
      description:
        'First generation of the annotation tool, born from my own initiative after identifying the bottleneck in the manual process (downloading ZIPs of images, classifying offline, uploading back). A C# application with per-user authentication, images served via API and classifications synced in real time, with four user-configurable workflows. It cut operational rework and became a central piece of model training.',
      tags: ['C#', 'APIs', 'Own initiative', 'AI'],
      year: '2023 — 2024',
      media: {
        type: 'image',
        imageUrl: '/sandboxes/sgc-label-me.png',
        images: [
          {
            imageUrl: '/sandboxes/sgc-label-me.png',
            alt: 'SGC screen with polygon image segmentation',
            caption: 'Polygon segmentation in the Label Me module.',
          },
          {
            imageUrl: '/sandboxes/sgc-spacely.png',
            alt: 'SGC screen with bounding-box classification',
            caption: 'Bounding-box classification in the Spacely module.',
          },
          {
            imageUrl: '/sandboxes/sgc-login.png',
            alt: 'SGC authentication screen',
            caption: 'Per-user authentication for task access.',
          },
        ],
      },
      hue: 260,
    },
    {
      id: 'sb-tcc',
      title: 'Data-Driven Engine (Thesis)',
      summary: 'A system extensible by configuration: entities defined in XML, no recompiling.',
      description:
        'Academic software-architecture project: a C# engine that interprets rules declared in an external XML file and assembles complete entities at runtime, with a serialized state machine and a custom visual editor. Demonstrated on a game, built in partnership with a design team — but the problem it solves belongs to any enterprise platform that must be extended through configuration rather than code.',
      tags: ['C#', 'Architecture', 'XML', 'Extensibility'],
      year: '2025',
      media: { type: 'none' },
      mediaRequest: 'Send screenshots of the visual state machine editor.',
      repoUrl: 'https://github.com/TCC-5-Ano-Engenharia-de-Computacao/TCC',
      hue: 280,
    },
    {
      id: 'sb-portfolio',
      title: 'This Website',
      summary: 'Bilingual full-stack site with route-based presentation variants.',
      description:
        'React + Node + TypeScript on Docker Compose, with bilingual API-served content and route-based presentation variants — this version and a creative one at /gamer-resume. Continuous deployment (Vercel + Render) with a custom domain.',
      tags: ['React', 'Node', 'TypeScript', 'Docker', 'CI/CD'],
      year: '2026',
      media: { type: 'none' },
      repoUrl: 'https://github.com/Comunalti/site_portifolio_fullstack',
      hue: 215,
    },
  ],
};

export const formal: Record<Lang, SiteContent> = { pt, en };
