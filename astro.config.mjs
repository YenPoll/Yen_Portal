import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://YenPoll.github.io",
  base: "/Yen_Portal",
  integrations: [sitemap()],
  trailingSlash: "never",
  build: {
    format: "directory",
  },
});
