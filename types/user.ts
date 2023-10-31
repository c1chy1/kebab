export interface User {
    id: string
    name: string
    password: string

}

export type UserWithoutPassword = Omit<User, 'password'>