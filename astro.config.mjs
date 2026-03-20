import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"
import mdx from "@astrojs/mdx"


export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: ['astro.liamdsouza.com', 'localhost'],
  },

  integrations: [icon(), mdx()],
  site: "https://dev.liamdsouza.com",
  base: "/",
});
