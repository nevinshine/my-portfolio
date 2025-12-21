// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind'; // <--- Standard Integration

// https://astro.build/config
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/my-portfolio', // This must match your GitHub repository name
  integrations: [mdx(), sitemap(), tailwind()],
});
