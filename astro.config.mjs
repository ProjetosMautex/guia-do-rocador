// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://guiadorocador.com.br',
  output: 'server',
  integrations: [react(), sitemap()],

  redirects: {
    '/melhor-rocadeira-eletrica': {
      status: 301,
      destination: '/melhor-rocadeira'
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});
