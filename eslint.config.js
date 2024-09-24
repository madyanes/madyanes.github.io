import eslintPluginAstro from "eslint-plugin-astro";

// Docs can be seen here: https://ota-meshi.github.io/eslint-plugin-astro/user-guide/

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"

      "astro/no-unused-css-selector": "warn",
    },
  },
];
