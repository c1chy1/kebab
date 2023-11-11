import { defineStore } from "pinia"
import { register , logOutUser } from "~/composables/useApi";
import type {UserRequestBody} from "~/types/user";
import checkError from "~/utils/checkError";
interface signUpReq{
    username: string,
    email: string,
    password: string
}

export const useUserStore = defineStore('User', {
    state: () => {
        return {
            isLoggedIn: false,
            userInfo: {},
        }
    },
    getters: {},
    actions: {

        async register(body: signUpReq) {
            const { success, message } = await register(body)
            if (success) {
                const token = useCookie('token')
                token.value = message.token
                setToken(message.token)
                this.userInfo = message.user
                this.isLoggedIn = true
                this.userInfo = message.user
                useRouter().push('/account')
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