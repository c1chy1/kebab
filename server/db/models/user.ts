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

        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                },
            },
        ],

        profilePicture: {
            type: String,
            default: "https://c1chy.lima-city.de/graphic/Webentwicklung.png",
        },

    },
    { timestamps: true,


        statics: {
            async findByCredentials(email: string, password: string): Promise<any> {
                // 根據 account 至資料庫找尋該用戶資料
                const user = await User.findOne({ email })
                // 沒找到該用戶時，丟出錯誤訊息

                if (!user)
                    throw new Error('Account not found!')
                // 透過 bcrypt 驗證密碼
                const isMatch = await bcrypt.compare(password, user.password!)

                console.log(isMatch + "isMatch")

                // 驗證失敗時，丟出錯誤訊息
                if (!isMatch)
                    throw new Error('Password is incorrect!')
                // 驗證成功時，回傳該用戶完整資料
                return user
            },


            async findByEmail(email: string): Promise<any> {
                const user = await User.findOne({ email })
                if (user)
                  return  new Error('Account Exist!')

            },
        },

        methods: {
            async generateAuthToken(): Promise<string> {
                // this 指向當前的使用者實例
                const user = this
                // 產生一組 JWT
                const token = jwt.sign({ _id: user._id.toString() }, process.env.JWTSECRET!)
                // 將該 token 存入資料庫中：讓使用者能跨裝置登入及登出
                user.tokens = user.tokens.concat({ token })
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