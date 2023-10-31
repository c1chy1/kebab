import {checkError} from "~/utils/checkError";
import jwt from "jsonwebtoken"

export class useAuth {



    setTokenAndRedirect = (token: string) => {
        cookieOperations("set", "token", token)
        navigateTo("/")
    }

    loginEmailPassword = async (email: string, password: string) => {



        loadingAnimation("login-process", "start")
        const { data: response, error } = await useFetch('/api/user/login', {
            method: 'POST',
            body: {
                email,
                password
            }
        })


        console.log(response)
        loadingAnimation("login-process")
        return error.value ? console.log(error.value?.data) : this.setTokenAndRedirect(response.value as string)
    }

/*
    loginGoogle = () => {
        const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${import.meta.env.VITE_scope}&response_type=${import.meta.env.VITE_responseType}&redirect_uri=${import.meta.env.VITE_redirectUri}&client_id=${import.meta.env.VITE_clientId}&prompt=select_account&nonce=${generateUuid()}`
        navigateTo(url, { external: true })
    }
*/

    register = async (username: string, email: string, password: string) => {

        loadingAnimation("register-process", "start")
        const { data: response, error } = await useFetch('/api/user/register', {
            method: 'POST',
            body: {
                 username,
                email,
                password
            }
        })
        loadingAnimation("register-process")
        return error.value ? checkError(error.value?.data) : this.setTokenAndRedirect(response.value as string)
    }

    logout = () => {
        cookieOperations("remove", "token")
        const user = useState("user")
        user.value = null
        navigateTo("/login")
    }
}