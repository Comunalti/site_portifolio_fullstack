import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Em Docker o proxy aponta para http://backend:3001 (via VITE_PROXY_TARGET);
// rodando local sem Docker, cai no localhost.
const proxyTarget = process.env.VITE_PROXY_TARGET ?? 'http://localhost:3001';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: proxyTarget,
        changeOrigin: true,
      },
    },
    watch: {
      // Necessário para hot-reload funcionar em volume Docker no Windows
      usePolling: true,
    },
  },
});
