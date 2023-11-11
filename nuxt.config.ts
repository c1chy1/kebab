// https://nuxt.com/docs/api/configuration/nuxt-config

import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineNuxtConfig({
  devtools: { enabled: true },
    modules: ['nuxt-security', ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
    }], '@nuxtjs/tailwindcss', '@formkit/nuxt', "@nuxt/image"],

  routeRules: {
    '/api/**': { cors: true },
  },

  build: {
    transpile: ['gsap'],
  },
  vite: {
    plugins: [
      nodePolyfills({
        protocolImports: true,
      }),
    ],
    optimizeDeps: {
      include: ['jsonwebtoken'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";',
        },
      },
    },
    ssr: {},
    build: {
      reportCompressedSize: true,
      watch: {},
      commonjsOptions: {
        include: [/jsonwebtoken/, /node_modules/],
      },

    },

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
/*
    publicRoutes: ['/api/user/login'],
*/
    mongoUrl: process.env.MONGODB_URI,
    jwtSecret: process.env.jwtSecret,
  },
  security: {
    corsHandler: {
      origin: '*'
    }
  },


})