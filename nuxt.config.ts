// https://nuxt.com/docs/api/configuration/nuxt-config

import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineNuxtConfig({

  // ssr :false,

  devtools: { enabled: true },
    modules: ['@tailwindcss/typography',['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
    }], '@nuxtjs/tailwindcss', '@formkit/nuxt', '@nuxt/image', '@nuxtjs/color-mode', 'vue3-carousel-nuxt','nuxt-font-loader'],

/*  routeRules: {
    '/api/!**': { cors: true },
  },*/
  build: {
    transpile: ['gsap'],
  },
/*  vite: {
    plugins: [
      nodePolyfills({
        protocolImports: true,
      }),
    ],

    optimizeDeps: {
      include: ['jsonwebtoken'],
    },
    build: {
      reportCompressedSize: true,
      watch: {},
      commonjsOptions: {
        include: [/jsonwebtoken/, /node_modules/],
      },


    },

  },*/
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
        'stores','helper'
    ]
  },
  runtimeConfig: {
    mongoUrl: process.env.MONGODB_URI,
    jwtSecret: process.env.JWTSECRET,
  },

})

