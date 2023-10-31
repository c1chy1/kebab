import jwt from "jsonwebtoken"
import User from "~/server/models/user"
interface IRequestBody {
    email: string;
    password: string;
    username: string;
}
export default defineEventHandler( async (event) => {

    const config = useRuntimeConfig()

    const { email, password, username } = await readBody<IRequestBody>(event);  try {
        const userData = await User.findOne({
            email,
        });    if (userData) {
            console.log(`User with email ${email} already exists`);
            event.res.statusCode = 409;
            return {
                code: "USER_EXISTS",
                message: "User with given email already exists.",
            };
        } else {
            console.log("Create user");
            const user = new User({ username, email, password})
            await user.save()

            return jwt.sign({ userId: user._id}, config.jwtSecret)

       /*     return {
                id: newUserData._id,
                name: newUserData.username,
            };*/
        }
    } catch (err) {
        console.dir(err);
        event.res.statusCode = 500;
        return {
            code: "ERROR",
            message: "Something wrong.",
        };
    }

})