import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"


export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: ['astro.liamdsouza.com', 'localhost'],
  },

  integrations: [icon()],
  site: "https://dev.liamdsouza.com",
  base: "/",
});
