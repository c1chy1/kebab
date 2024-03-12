// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({


  devtools: { enabled: true },
    modules: ['@tailwindcss/typography',['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
    }], /*'@hypernym/nuxt-gsap',*/ '@nuxtjs/tailwindcss','nuxt-swiper', '@formkit/nuxt', '@nuxt/image', '@nuxtjs/color-mode','nuxt-font-loader','@nuxt/image-edge'],


  build: {
    transpile: ["gsap"],
  },
  fontLoader: {

    autoImport: true , // enables auto-import feature,
    local: [
      {
        src: '/fonts/BebasNeue-Regular.ttf',
        family: 'Bebas Neue',
        class: 'font-bebas'
      },
      {

        src: '/fonts/AlfaSlabOne-Regular.ttf',
        family: 'Alfa Slab One',
        class: 'font-alfa'

      },
      {

        src: '/fonts/Montserrat-Regular.ttf',
        family: 'Montserrat',
        class: 'font-mont'

      }

    ]
  },


  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
    viewer: true,
  },
  nitro: {
    plugins: ["@/server/db/index.js"],
  },
  imports: {
    dirs: [
        'store','helper'
    ]
  },

  runtimeConfig: {
    mongoUrl: process.env.MONGODB_URI,
    jwtSecret: process.env.JWTSECRET,
  },

})

