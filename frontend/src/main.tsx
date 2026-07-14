import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getVariant, isResumeHubPath } from './i18n/LangContext';
import './styles/global.css';

// A rota raiz tem uma apresentação própria; as demais mantêm suas skins.
const variant = getVariant();
const isHub = isResumeHubPath();
document.body.classList.add(isHub ? 'resume-hub-page' : variant);
if (isHub) {
  document.title = 'Felipe Peixoto — Currículos';
} else if (variant === 'formal') {
  document.title = 'Felipe Peixoto — Desenvolvedor Full-Stack';
  // Aplica o tema salvo cedo para não piscar claro → escuro.
  if (localStorage.getItem('formal-theme') === 'dark') {
    document.body.classList.add('dark');
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
