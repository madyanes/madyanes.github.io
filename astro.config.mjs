// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://madyanes.github.io",
  integrations: [
    tailwind(),
    mdx({
      gfm: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
