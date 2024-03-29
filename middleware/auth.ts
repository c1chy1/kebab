import { useUserStore } from "~~/store/userStore";
import {storeToRefs} from "pinia";

export default defineNuxtRouteMiddleware(() => {
    const user = useUserStore()
    const { isLoggedIn } = storeToRefs(user)
    const token = useCookie('token')

    console.log(token)

    if (token.value)
        isLoggedIn.value = true // update the state to authenticated

})