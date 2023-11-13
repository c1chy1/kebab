import { v4 as uuidv4 } from 'uuid'

import User from "~/server/db/models/user"
import mongoose from "mongoose";

import {MongooseError} from "mongoose";
import bcrypt from "bcrypt";

const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';
const config = useRuntimeConfig();


interface CreateAccountPostBody {
    username: string;
    email: string;
    password: string;
}

export default defineEventHandler(async (event) => {

    try {
        // 從 req.body 獲取驗證資訊，並在資料庫存與該用戶

        const body = await readBody(event)
        // 從 req.body 獲取驗證資訊，並在資料庫存與該用戶
        const user = await User.create(body)
        const token = await user.generateAuthToken()


        const userData = await User.findByEmail(body.email)

        const userEmail = await User.findOne(
            { email: userData.email },
        )

        console.log(userData + "userData")
        console.log(userEmail + "userData")


        return {
            success: true,
            message: {
                user,
                token
            },
        }
    }
    catch (err: any) {
        console.error(err.message)
        return {
            success: false,
            error: {
                code: 1001,
                message: err.message,
            },
        }
    }

})