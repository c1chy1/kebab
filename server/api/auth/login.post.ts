
import User from "~/server/db/models/user"


export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        const userData = await User.findByCredentials(body.email, body.password)

        const user = await User.findOne(
            { email: userData.email },
        )
        const token = await user!.generateAuthToken()
        setCookie(event, 'token', token, {
            expires: new Date(Date.now()  + (24 * 60 * 60 * 1000 * 100))
        })



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