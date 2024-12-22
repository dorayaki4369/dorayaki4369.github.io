import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx"],
  preprocess: [
    mdsvex({
      extensions: [".svx"],
    }),
    vitePreprocess(),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $routes: "src/routes",
    },
  },
};

export default config;
