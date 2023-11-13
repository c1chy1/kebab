import { defineStore } from "pinia"
import { register , logOutUser , login , getUser} from "~/composables/useApi";
import type {UserRequestBody , signUpReq} from "~/types/user";
import checkError from "~/utils/checkError";

import {toast} from 'vue3-toastify'

type logInReq = Pick<signUpReq, 'email' | 'password'>



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
                useRouter().push('/account')

                console.log(success)
            }
        },


        async register(body : any) {

            const { success, message } = await register(body)

            if (success) {
                const token = useCookie('token')
                token.value = message.token
                setToken(message.token)
                this.userInfo = message.user
                this.isLoggedIn = true
                this.userInfo = message.user
                useRouter().push('/account')

            } else {
             toast.error(message)
            }

        },

        async getUser() {
            const { success, message } = await getUser()
            if (success && message)
                this.userInfo = message.user
        },

        async logout() {
            const { success } = await logOutUser({ token: getToken()! })
            if (success) {
                const token = useCookie('token')
                token.value = ''
                clearToken()
                this.isLoggedIn = false
                useRouter().push('/')
            }
        },
    },
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))