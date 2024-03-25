import { defineStore } from "pinia"
import { register , logOutUser , login , getUser} from "~/composables/useApi";
import type {logInReq,signUpReq,logoutReq, getUserRes} from '~/types/user'

import {toast} from 'vue3-toastify'


export const useUserStore = defineStore('User', {
    state: () => {
        return {
            isLoggedIn: false,
            userInfo: {},
        }
    },
    getters: {},
    actions: {


        async login(body: logInReq) {
            const { success, message } = await login(body)
            if (success) {
                const token = useCookie('token')
                token.value = message.token
                setToken(message.token)
                this.isLoggedIn = true
                this.userInfo = message.user
            }
        },


        async register(body : signUpReq) {

            const { success, message } = await register(body)

            if (success) {
                const token = useCookie('token')
                token.value = message.token
                setToken(message.token)
                this.userInfo = message.user
                this.isLoggedIn = true
                this.userInfo = message.user

            } else {
             toast.error(message)
            }

        },

        async logout() {
            const { success } = await logOutUser({ token: getToken()! })
            if (success) {
                const token = useCookie('token')
                token.value = ''
                clearToken()
                this.isLoggedIn = false
            }
        },
    },
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))