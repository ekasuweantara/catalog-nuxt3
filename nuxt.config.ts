import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    ['unplugin-icons/nuxt', {}],
    ['@pinia/nuxt', { disableVuex: true }],
  ],
  css: [
    "assets/styles/main.scss"
  ],
  runtimeConfig: {
    apiKey: '8453ad2fa0msh21875f1cfb62ef9p1d1a0bjsn7d58b800df3b',
    apiHost: 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
    public: {
      apiBase: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  },
})
