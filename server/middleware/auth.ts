import jwt from 'jsonwebtoken'
import User from "~/server/db/models/user"


export default defineEventHandler(async (event) => {


    const path = getRequestPath(event)
    const isAuthPath = path.includes('account')
        ||
        path.includes('logout')


    if (!isAuthPath)
        return

    try {
        const token = parseCookies(event)?.token


        if (!token)
            throw new Error('Need token to proceed!')

        const decoded = jwt.verify(token, useRuntimeConfig().jwtSecret)

        const user = await User.findOne({ '_id': (decoded as any)._id})

        if (!user)
            throw new Error('User not found!')

        event.context.token = token

        event.context.user = user
    }
    catch (err: any) {
        console.error(err)
        return { error: err.message }
    }
})