export interface LoginRequest {
    name: string;
    password: string;
}

export interface RegisterFormState extends LoginRequest {
    passwordConfirm: string;
}