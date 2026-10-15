// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://hardskillslab.org", // TODO: Update once production domain is confirmed
  vite: {
    plugins: [tailwindcss()],
  },
});
