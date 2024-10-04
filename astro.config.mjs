import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// Check if the environment is production (i.e., GitHub Pages)
const isGitHubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isGitHubPages ? 'https://jurilorenz.github.io/maxwapp' : 'http://localhost:3000',
  base: isGitHubPages ? '/maxwapp/' : '/',  // Use the base path only for production
  build: {
    outDir: 'dist',
  },
  integrations: [
    tailwind(),
    icon({
      include: {
        fa: ["github", "linkedin"], 
      },
    }),
  ],
});