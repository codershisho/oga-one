// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: "static",
  css: ["quasar/dist/quasar.prod.css", "@quasar/extras/material-icons/material-icons.css"],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
});
