import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },

        profilePicture: {
            type: String,
            default: "https://c1chy.lima-city.de/graphic/Webentwicklung.png",
        },

    },
    { timestamps: true,


        statics: {
            async findByCredentials(email: string, password: string): Promise<any> {
                const user

                    = await User.findOne({ email })

/*

                if (user)
                    throw new Error('Account EXIST!')
*/

                if (!user)
                    throw new Error('Account not found!')
                // 透過 bcrypt 驗證密碼
                const isMatch = await bcrypt.compare(password, user.password!)

                if (!isMatch)
                    throw new Error('Password is incorrect!')
                return user
            },

         async findByToken (token) {
                let UserModel = this

                try {
                    let decoded = jwt.verify(token,  useRuntimeConfig().jwtSecret)
                    return UserModel.findOne({
                        _id: decoded.id,
                        'token': token,
                        'access': 'auth'
                    })
                } catch (e) {
                    return Promise.reject(new Error(e))
                }
            },


            async findByEmail(email: string): Promise<any> {
                const user = await User.findOne({ email })
                if (!user)
                    throw new Error('Account Exist!')

                return user
            },
        },

        methods: {
            async generateAuthToken(): Promise<string> {
                // this 指向當前的使用者實例
                const user = this
                // 產生一組 JWT
                const token = jwt.sign({ _id: user._id.toString() }, useRuntimeConfig().jwtSecret)
                // 將該 token 存入資料庫中：
                await user.save()

                // 回傳 JWT
                return token
            },
        },
    },


);

UserSchema.pre('save', async function (next) {
    // this 指向目前正被儲存的使用者 document
    const user = this

    // 確認使用者的 password 欄位是有被變更：初次建立＆修改密碼都算
    if (user.isModified('password')) {
        // 透過 bcrypt 處理密碼，獲得 hashed password
        user.password = await bcrypt.hash(user.password!, 8)
    }
    next()
})

const User = mongoose.model("User", UserSchema);
export default User;