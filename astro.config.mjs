// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://verastrimboetiekje.nl',
  // Preview-fase: alleen de homepage in de sitemap. Het geheime pad mag
  // daar nooit in belanden, anders is de code publiek. Filter weghalen
  // bij livegang (zie src/data/site.ts).
  integrations: [sitemap({ filter: (page) => new URL(page).pathname === '/' })],
  vite: {
    plugins: [tailwindcss()],
  },
});
