// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Apex custom domain (arrca.ai) -> base path is '/', no `base` needed.
export default defineConfig({
  site: 'https://arrca.ai',
  vite: {
    plugins: [tailwindcss()],
  },
});
