import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
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
            default: "https://lovedbydulcie.files.wordpress.com/2012/05/pamela_anderson.jpg",
        },

    },
    { timestamps: true,

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

UserSchema.pre("save", async function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
});
const User = mongoose.model("User", UserSchema);
export default User;