// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Usa el adaptador serverless

export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Importante para que Vercel use serverless
  adapter: vercel({}), // Configura el adaptador de Vercel
});
