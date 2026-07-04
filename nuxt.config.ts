// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', 'motion-v/nuxt'],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Fraunces', provider: 'google' },
      { name: 'Inter', provider: 'google' },
      { name: 'IBM Plex Mono', provider: 'google' }
    ]
  },
  runtimeConfig: {
    smtpHost: '',
    smtpPort: 587,
    smtpUser: '',
    smtpPass: '',
    contactToEmail: '',
    contactFromEmail: ''
  }
})
