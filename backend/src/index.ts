import express from 'express';
import cors from 'cors';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { content, pickLang } from './data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT ?? 3001);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Todas as rotas de conteúdo aceitam ?lang=pt|en (padrão: pt)
app.get('/api/profile', (req, res) => {
  res.json(content[pickLang(req.query.lang)].profile);
});

app.get('/api/history', (req, res) => {
  res.json(content[pickLang(req.query.lang)].history);
});

app.get('/api/projects', (req, res) => {
  res.json(content[pickLang(req.query.lang)].projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = content[pickLang(req.query.lang)].projects.find(
    (p) => p.id === req.params.id,
  );
  if (!project) {
    res.status(404).json({ error: 'Projeto não encontrado' });
    return;
  }
  res.json(project);
});

// Download do currículo no idioma pedido (?lang=pt|en)
// Os PDFs ficam em backend/assets/curriculo-pt.pdf e curriculo-en.pdf
app.get('/api/resume', (req, res) => {
  const lang = pickLang(req.query.lang);
  const resumePath = path.resolve(__dirname, '..', 'assets', `curriculo-${lang}.pdf`);
  if (!fs.existsSync(resumePath)) {
    res.status(404).json({ error: 'Currículo ainda não disponível' });
    return;
  }
  const downloadName =
    lang === 'en' ? 'resume-felipe-peixoto.pdf' : 'curriculo-felipe-peixoto.pdf';
  res.download(resumePath, downloadName);
});

app.listen(PORT, () => {
  console.log(`API do portfolio rodando em http://localhost:${PORT}`);
});
