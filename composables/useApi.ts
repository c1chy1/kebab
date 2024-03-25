
import type {logInReq,signUpReq,logoutReq, getUserRes} from '~/types/user'

import {toast} from 'vue3-toastify'
const useApi = async function (url: string, body: Record<string, any> = {}): Promise<any> {
    const origin = useRequestURL().origin
    return useFetch(url, {
        baseURL: `${origin}/api`,
        method: 'POST',
        body,
        credentials: 'include',
        watch: false,
        onResponseError({ response }) {
            // 處理請求回應發生的錯誤
            console.error(response)
        },
    })
        .then((res) => {
            const data: any = res.data.value
            const error = res.error.value
            if (data) {                if (data.error)
                    toast.error(data.error.message)

                return data
            }

            if (error)
                console.error(error)
        })
}
export async function login(body: logInReq) {
    return await useApi('/auth/login', body)
}
export async function register(body : signUpReq) {

    return await useApi('/auth/register', body)
}
export async function logOutUser(body: logoutReq) {
    return await useApi('/auth/logout', body)
}
export async function getUser(): Promise<getUserRes> {
    return await useApi('/user/getUser')
}


