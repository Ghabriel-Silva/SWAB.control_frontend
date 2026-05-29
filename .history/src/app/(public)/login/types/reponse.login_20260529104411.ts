
export interface ResponseLogin {
    success: boolean,
    message: string,
    data: DataLogin,
    meta?: unknown
}

export interface DataLogin {
    user: string,
    userName: string,
    token: string
}