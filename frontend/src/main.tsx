import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getVariant } from './i18n/LangContext';
import './styles/global.css';

// A variante (skin) é definida pela rota e aplicada como classe no <body>,
// para o CSS tematizar tudo antes mesmo do React montar.
const variant = getVariant();
document.body.classList.add(variant);
if (variant === 'formal') {
  document.title = 'Felipe Peixoto — Desenvolvedor Full-Stack';
  // aplica o tema salvo cedo para não piscar claro→escuro
  if (localStorage.getItem('formal-theme') === 'dark') {
    document.body.classList.add('dark');
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
