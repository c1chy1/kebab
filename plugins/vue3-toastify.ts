import { toast, updateGlobalOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.Vue3Toastify = {
        install: () => {
            updateGlobalOptions({
                autoClose: 2000,
                theme: toast.THEME.DARK,
                position: toast.POSITION.BOTTOM_CENTER,
                transition: toast.TRANSITIONS.SLIDE, });
        },
    };

    return {
        provide: {
            toast,
        },
    };
});