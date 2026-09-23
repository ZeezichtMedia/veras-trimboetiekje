// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Het kale domein stuurt door naar www, dus www is het echte adres.
  // Canonical-URL's, og:url en de sitemap gebruiken dit.
  site: 'https://www.verastrimboetiekje.nl',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
