


interface signUpReq{
    username: string,
    email: string,
    password: string
}

interface logoutReq{
    token: string
}

interface getUserRes{
    success: boolean,
    message: {
        user: Pick<signUpReq, 'username'>
    }
}

const useApi = async function (url: string, body: Record<string, any> = {}): Promise<any> {
    const { $toast } = useNuxtApp()
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
            if (data) {
                if (data.error)
                    $toast.error(data.error.message)

                return data
            }

            if (error)
                console.error(error)
        })
}

// Log In & Sign Up & Log out

export async function register(query: signUpReq) {

    console.log(query)

    return await useApi('/auth/register', query)
}

export async function logOutUser(query: logoutReq) {
    return await useApi('/auth/logout', query)
}

export async function getUser(): Promise<getUserRes> {
    return await useApi('/user/getUser')
}