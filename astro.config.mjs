// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://madyanes.github.io",
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
