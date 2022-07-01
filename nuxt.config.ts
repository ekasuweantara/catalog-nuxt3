import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    ['unplugin-icons/nuxt', {}],
    ['@pinia/nuxt', { disableVuex: true }],
  ],
  meta: {
    meta: [
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
  },
  css: [
    "assets/styles/main.scss"
  ],
  runtimeConfig: {
    // Private config that is only available on the server
    apiKey: '8453ad2fa0msh21875f1cfb62ef9p1d1a0bjsn7d58b800df3b',
    apiHost: 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
    // Config within public will be also exposed to the client
    public: {
      apiBase: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  },
})
