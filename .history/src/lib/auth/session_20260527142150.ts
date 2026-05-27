import { cookies } from "next/headers";

const COOKIE_NAME = 'token'

const COOKIE_OPTIONS = {
    httpOnly: true,   // JS do browser não acessa
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, 
}