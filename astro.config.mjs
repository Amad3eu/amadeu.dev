// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Domínio público do site. Ordem de prioridade:
// 1. SITE_URL (defina quando tiver um domínio próprio, ex.: https://amadeu.dev)
// 2. URL de produção que a Vercel injeta no build
// 3. localhost para desenvolvimento
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:4321");

export default defineConfig({
  site,
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "pt",
        locales: { pt: "pt-BR", en: "en-US" },
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark-dimmed" },
      defaultColor: false,
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
