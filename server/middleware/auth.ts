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
        // // 驗證 Token
        const decoded = jwt.verify(token, process.env.JWTSECRET!)
        // // 找尋符合用戶 id 和 Tokens 中包含此 Token 的使用者資料
        const user = await User.findOne({ '_id': (decoded as any)._id, 'tokens.token': token })
        // // 若沒找到此用戶，丟出錯誤【
        if (!user)
            throw new Error('User not found!')
        // // 將 token 存到 req.token 上供後續使用
        event.context.token = token
        // // 將用戶完整資料存到 req.user 上供後續使用
        event.context.user = user
    }
    catch (err: any) {
        console.error(err)
        return { error: err.message }
    }
})