import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// Astro Configuration
export default defineConfig({
  integrations: [
    tailwind(), // Keep Tailwind for your styles
    icon({
      include: {
        fa: ["github", "linkedin"], // Only import GitHub and LinkedIn icons from FontAwesome
      },
    }),
  ],
});