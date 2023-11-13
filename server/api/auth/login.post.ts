
import User from "~/server/db/models/user"


export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        console.log(body)

        const userData = await User.findByCredentials(body.email, body.password)

        console.log(userData + "true")
        const user = await User.findOne(
            { email: userData.email },
        )




        const token = await user!.generateAuthToken()
        // 回傳該用戶資訊及 JWT
        setCookie(event, 'token', token)
        return {
            success: true,
            message: {
                user,
                token,
            },
        }
    }
    catch (err: any) {
        console.error(err.message)
        return {
            success: false,
            error: {
                code: 1001,
                message: err.message,
            },
        }
    }
})