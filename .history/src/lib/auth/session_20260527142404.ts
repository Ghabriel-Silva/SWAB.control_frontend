import { cookies } from "next/headers";

const COOKIE_NAME = 'token'

const COOKIE_OPTIONS = {
    httpOnly: true,   // JS do browser não acessa
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, 
}

export async function setSessionCookies(token:string) {
    const store = await cookies()
    store.set(COOKIE_NAME, token, COOKIE_o)
}z