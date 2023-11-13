export interface User {
    id?: string
    name: string
    password: string

}


export interface UserRequestBody {
    username: string
    email: string
    password: string
}
export interface signUpReq {
    email: string,
    password: string,
/*    username?: string*/
}

export interface getUserRes{
    success: boolean,
    message: {
        user: Pick<signUpReq, 'email'>
    }
}

export type logInReq = Pick<signUpReq, 'email' | 'password'>

export interface logoutReq{
    token: string
}