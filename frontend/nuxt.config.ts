// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target:"static",
  css: [
    'quasar/dist/quasar.prod.css'
  ],
})
