import User from "~/server/models/user"
import jwt from "jsonwebtoken"

interface IRequestBody {
    email: string;
    password: string;
}export default defineEventHandler(async (event) => {
    console.log("POST /api/user/login");


    const config = useRuntimeConfig()


    const { email, password } = await readBody<IRequestBody>(event);  // Check if email is passed.
    if (!email) {
        event.res.statusCode = 400;
        return {
            code: "EMAIL_REQUIRED",
            message: "Body malformed: email is required.",
        };
    }  // Check if password is passed.
    if (!password) {
        event.res.statusCode = 400;
        return {
            code: "PASSWORD_REQUIRED",
            message: "Body malformed: password is required.",
        };
    }  try {
        console.log("Find user");
        const userData = await User.findOne({
            email: email.toLowerCase(),
        });


        console.log(userData)
        if (userData) {
            console.log("User found");
            const isPasswordValid = await userData.verifyPasswordSync(password);
            if (isPasswordValid) {
                // Generate token or create session here
                return jwt.sign({ userId: userData._id}, config.jwtSecret)
            } else {
                console.log("Password is not valid");
                event.res.statusCode = 404;
                return {
                    code: "USER_NOT_FOUND",
                    message: "User with given email and password doesn't exists.",
                };
            }
        } else {
            console.log("Email not found");
            event.res.statusCode = 404;
            return {
                code: "USER_NOT_FOUND",
                message: "User with given email and password doesn't exists.",
            };
        }
    } catch (err) {
        console.dir(err);
        event.res.statusCode = 500;
        return {
            code: "ERROR",
            message: "Something wrong.",
        };
    }
});