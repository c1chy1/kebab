import mongoose from 'mongoose';
import bcrypt from "mongoose-bcrypt";
// User schema
const User = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
            bcrypt:true
        },
    },
    { timestamps: true, strict: true, strictQuery: true }
);
User.plugin(bcrypt)
export default mongoose.model("User", User, 'user')