export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/storybook'],

  css: ['@/assets/scss/main.scss'],
  compatibilityDate: '2025-03-01',
})