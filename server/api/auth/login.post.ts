/*import { SignInRequestBody } from '../../../types/user'*/
import bcrypt from "bcrypt";
import User from "~/server/db/models/user"
import jwt from 'jsonwebtoken';
import checkError from "~/utils/checkError";
import type {SignInRequestBody} from "~/types/user"
import signToken from "~/utils/signToken";
const config = useRuntimeConfig();
export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const userExist: any = await User.findOne({
        $or: [{ username: body.username }, { email: body.username }],
    });

    if(userExist === null) {
        return { error: true, message: "User does not exist"};
    } else {
        const passwordMatch = await bcrypt.compare(body.password, userExist?.password);

        if (passwordMatch) {
            const token = jwt.sign({ id: userExist._id }, config.jwtSecret, {
                expiresIn: 43200, // 24 hours
            });
            setCookie(event, "altine", token);
            useStorage().setItem("user", userExist._id);


            return { error: false, message: "Nice", name: userExist.username, email: userExist.email };
        } else {
            console.log("Wrong Password! 🤬");
            return { error: true, message: "Wrong Password" };
        }
    }
})