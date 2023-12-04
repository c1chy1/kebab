import User from "~/server/db/models/user";

export default defineEventHandler(async (event) => {
    try {
       /* const user = event.context.user*/
        const body = await readBody(event)


        // 篩選掉當前的 Token
        const user = await User.findOne(body.email)

        setCookie(event,'token','',{
            maxAge:0
        })

        deleteCookie(event, 'token')

        return { success: true, message: null }
    }
    catch (err: any) {
        return {
            success: false,
            error: {
                code: 1003,
                message: err.message,
            },
        }
    }
})