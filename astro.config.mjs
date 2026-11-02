import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yenpoll.github.io",
  base: "/Yen_Portal",
  integrations: [sitemap()],
  trailingSlash: "never",
  build: {
    format: "directory",
  },
});
