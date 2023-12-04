module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './composables/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
    ],
    plugins: [require("daisyui")],
    theme: {
        extend: {
            colors: {
                "primary": '#006b00',
            },
            fontFamily: {
                sans: ["'Bebas Neue'", 'bebas'],
                mono: ["'Alfa Slab One'", 'alfa'],
                display: ["'Montserrat'", 'mont'],
            },
            animation: {
                shake: 'shake 2.5s cubic-bezier(.36,.07,.19,.97) infinite',
            },
            keyframes: {
                shake: {
                    '10%, 90%' : {
                        transform: 'translate3d(-1px, 0,0)'
                    }, '20%, 80%': {
                        transform: 'translate3d(2px,0,0)'
                    },
                    '30%,50%,70%' : {
                        transform: 'translate3d(-4px,0,0)'
                    },
                    '40%,60%': {
                        transform: 'translate3d(4px,0,0)'
                    }
                }
            }

        },
    },
}