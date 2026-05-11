import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      // /words/not-here-yet is a joke link in maximum-likelihood-is-a-lie that
      // points at a post that doesn't exist; let it 404 instead of generating
      // a static 404 page for it.
      ignore: ["/words/not-here-yet"],
    },
  },
});
