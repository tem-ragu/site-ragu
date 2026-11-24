import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        ferramenta: resolve(import.meta.dirname, 'ferramenta/index.html'),
        termos: resolve(import.meta.dirname, 'termos/index.html'),
        privacidade: resolve(import.meta.dirname, 'privacidade/index.html'),
      },
    },
  },
});
