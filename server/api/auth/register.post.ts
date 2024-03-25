
import User from "~/server/db/models/user"
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event) => {
/*    */

    const body = await readBody(event)

    const user = await User.findOne(
        { email: body.email },
    )

    if (!user) {
        const user = await User.create(body)

        const token: string =  jwt.sign({ _id:user._id.toString() }, useRuntimeConfig().jwtSecret);
        setCookie(event,'token',token,{
            httpOnly: false,
            maxAge:24*60*60*1000 //1day
        })

        return {
            success:  true,
            message: {
                user,
                token,
            },
        }

    }
   else {

       return {
                 success: false,
                 message: "email exists !"

            }

    }})







