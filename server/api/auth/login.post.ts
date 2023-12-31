
import User from "~/server/db/models/user"

import {setToken,getToken} from "~/helper/localStorage.helper"


export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        const userData = await User.findByCredentials(body.email, body.password)

        const user = await User.findOne(
            { email: userData.email },
        )

        const token = await user!.generateAuthToken()


        setCookie(event, 'token', token)
/*
        setToken(token)

      const test =  getToken()
*/


        return {
            success: true,
            message: {
                user,
                token,
            },
        }
    }
    catch (err: any) {
        console.error(err.message )
        return {
            success: false,
            error: {
                code: 1001,
                message: err.message ,
            },
        }
    }
})