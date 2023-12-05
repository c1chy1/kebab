import { defineStore } from 'pinia'

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
}

export const useThemeStore = defineStore('theme', () => {
    const theme = reactive({ dark: false })

    function toggle() {
        theme.dark = !theme.dark
    }

    return { theme, toggle }
})