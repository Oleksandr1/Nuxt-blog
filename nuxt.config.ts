// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxt/content",
  ],
  future: {
    compatibilityVersion: 4,
  },
  colorMode: {
    classSuffix: "",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
