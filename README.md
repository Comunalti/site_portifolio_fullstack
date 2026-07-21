# Portfolio Full-Stack — Felipe Rodrigues Peixoto da Silva

Site de portfólio pessoal com uma página de seleção, **duas skins por rota** e toggle **PT/EN**:

- **`/`**: apresentação pessoal e cards para escolher ou copiar o link de cada currículo
- **`/gamer-resume`**: estética retro-gamer neon (azul + rosa, pixelado), fundo em
  **shader WebGL/GLSL** que reage ao mouse e ao scroll — ênfase em jogos e criatividade
- **`/formal-resume`**: skin corporativa (navy + branco, serif) — ênfase em full-stack, IA,
  SOLID/boas práticas e gestão de pessoas, pensada para recrutadores
- **Frontend**: React 18 + Vite + TypeScript (porta `5173`)
- **Backend**: Node.js + Express + TypeScript (porta `3001`), conteúdo por variante e idioma
- **Splash de inicialização**: consulta o readiness check do backend e só libera os
  skeletons e componentes depois que a API confirma que o conteúdo está pronto
- **Docker Compose** para o ambiente de desenvolvimento com hot-reload nos dois lados

### Como funciona o sistema de variantes

A rota define a skin (classe no `<body>` + tema CSS) e o conteúdo (`?variant=` na API).
Para criar uma nova variante: `backend/src/content/<nome>.ts` (conteúdo PT/EN), registrar
em `backend/src/data.ts` e no tipo `Variant`, adicionar os rótulos em
`frontend/src/i18n/LangContext.tsx` e o tema em `global.css` (`body.<nome> { ... }`).

## Rodando com Docker (recomendado)

```bash
docker compose up --build
```

- Site: http://localhost:5173
- API: http://localhost:3001/api/health

O código-fonte é montado como volume nos containers: edite os arquivos e o
hot-reload acontece automaticamente (Vite no frontend, nodemon + tsx no backend,
ambos com polling — necessário para volumes montados do Windows).

> **Adicionou/removeu dependência no package.json?** Recrie os volumes de
> `node_modules` dos containers:
>
> ```bash
> docker compose up --build -V
> ```

## Rodando sem Docker

```bash
# terminal 1
cd backend && npm install && npm run dev

# terminal 2
cd frontend && npm install && npm run dev
```

## Onde editar o conteúdo

Todo o conteúdo do site vem da API, em **um único arquivo** com as versões `pt` e `en`:

| O quê | Onde |
| --- | --- |
| Nome, contato, bio, skills, links, stats | `backend/src/content/gamer.ts` e `formal.ts` → `profile` (em `pt` e `en`) |
| História profissional | `backend/src/content/gamer.ts` e `formal.ts` → `history.professional` |
| História acadêmica | `backend/src/content/gamer.ts` e `formal.ts` → `history.academic` |
| Sandboxes (projetos) | `backend/src/content/gamer.ts` e `formal.ts` → `projects` |
| Currículo (PDF de download) | `backend/assets/*.pdf` — edite `tools/generate-resume.js` e siga a seção de regeneração abaixo |
| Screenshots dos sandboxes | coloque em `frontend/public/sandboxes/` |
| Textos fixos da interface | `frontend/src/i18n/LangContext.tsx` → `UI` |
| Shader de fundo (GLSL) | `frontend/src/components/ShaderBackground.tsx` |

As instruções internas de mídia (`mediaRequest`) não são exibidas ao visitante. A
interface mostra apenas "Mídia em breve", enquanto a descrição completa permanece no
atributo `data-media-request`, consultável pelo desenvolvedor no inspetor do navegador.

## Regenerando os currículos em PDF

O gerador cria os quatro arquivos (gamer/formal, PT/EN) usando Chrome em modo headless:

```bash
npm install --prefix tools
npm run generate --prefix tools
```

Os PDFs são gravados em `backend/assets/`. No Windows, o Chrome é detectado nos caminhos
padrão. Em outro sistema, defina `CHROME_PATH` com o caminho do Chrome ou Chromium. Para
também gerar HTML e PNG de depuração, execute com `RESUME_DEBUG=1`.

### Tipos de sandbox

Cada projeto tem um campo `media`:

- `{ type: 'iframe', embedUrl: '...' }` — roda o site ao vivo dentro do card (miniatura) e no modal (tela cheia). O site alvo precisa permitir embed (sem `X-Frame-Options: DENY`).
- `{ type: 'image', imageUrl: '/sandboxes/arquivo.png' }` — mostra uma captura de tela.
- `{ type: 'none' }` — capa gerada com as iniciais; se o projeto tiver `mediaRequest`,
  vira um placeholder "INSERT MEDIA" pedindo a mídia (card e modal).

## Endpoints da API

Todas as rotas de conteúdo aceitam `?lang=pt|en` (padrão `pt`) e
`?variant=gamer|formal` (padrão `gamer`).

| Rota | Retorno |
| --- | --- |
| `GET /api/health` | readiness da API (`ready`, uptime e checks de conteúdo/assets) |
| `GET /api/profile?lang=&variant=` | perfil (nome, bio, skills, links, stats) |
| `GET /api/history?lang=&variant=` | `{ professional: [...], academic: [...] }` |
| `GET /api/projects?lang=&variant=` | projetos/sandboxes |
| `GET /api/resume?lang=&variant=` | download do currículo (PDF) da variante/idioma |

## Deploy gratuito (Vercel + Render)

1. **GitHub**: suba este repositório (ex.: `github.com/Comunalti/site_portifolio_fullstack`).
2. **Backend no Render** (render.com → New → Web Service):
   - Root Directory: `backend` · Build: `npm install && npm run build` · Start: `npm start`
   - Instance type: Free. Anote a URL gerada (`https://xxxx.onrender.com`).
   - O plano free hiberna após 15 min sem tráfego (primeiro acesso demora ~30-50s).
3. **Frontend na Vercel** (vercel.com → Add New → Project):
   - Root Directory: `frontend` (framework Vite é detectado sozinho).
   - Antes do deploy, edite `frontend/vercel.json` trocando `SEU-BACKEND.onrender.com`
     pela URL real do Render — é esse rewrite que faz `/api/*` chegar no backend.
4. **Domínio**: compre (Registro.br para `.com.br`, Porkbun/Namecheap/Cloudflare para
   `.dev`/`.com`), depois em Vercel → Settings → Domains adicione o domínio e crie no
   registrador os registros DNS que a Vercel indicar (`A @ 76.76.21.21` e
   `CNAME www cname.vercel-dns.com`). HTTPS é automático.
