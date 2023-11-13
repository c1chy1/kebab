import { v4 as uuidv4 } from 'uuid'

import User from "~/server/db/models/user"
import mongoose from "mongoose";

import checkError from '~/utils/checkError'
import {MongooseError} from "mongoose";
import bcrypt from "bcrypt";

const toId = mongoose.Types.ObjectId;
import jwt from 'jsonwebtoken';
const config = useRuntimeConfig();

import {toast} from 'vue3-toastify'
interface CreateAccountPostBody {
    username: string;
    email: string;
    password: string;
}

export default defineEventHandler(async (event) => {
/*    */

    const body = await readBody(event)
    const userData = await User.findByEmail(body.email)

    if (!userData) {
        const user = await User.create(body)
        const token = await user.generateAuthToken()

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







