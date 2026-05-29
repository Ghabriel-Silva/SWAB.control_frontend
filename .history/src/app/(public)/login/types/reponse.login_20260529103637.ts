
export interface ResponseLogin {
    success: boolean,
    message: string,
    data: string,
    meta?: unknown
}

export interface DataLogin {
    user: string,
    userName: user.name,
    token: token
}