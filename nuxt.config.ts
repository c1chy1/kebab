// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({


    devtools: {enabled: true},
    modules: ['@tailwindcss/typography', ['@pinia/nuxt', {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
    }],'@nuxtjs/tailwindcss', 'nuxt-swiper', '@formkit/nuxt', '@nuxt/image', '@nuxtjs/color-mode', 'nuxt-font-loader', '@nuxt/image-edge'],


    build: {
        transpile: ["gsap"],
    },
    fontLoader: {

        autoImport: true,
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

    image: {
        format: ["webp"],
    },
    nitro: {
        plugins: ["plugins/mongodb.ts"]
    },
    imports: {
        dirs: [
            'store', 'helper'
        ]
    },

    runtimeConfig: {
        mongoUrl: process.env.MONGODB_URI,
        jwtSecret: process.env.JWTSECRET,
    },

})

