
export interface ResponseLogin {
    success: boolean,
    message: string,
    data: string,
    meta?: unknown
}

export interface DataLogin {
    user: user.role,
    userName: user.name,
    token: token
}