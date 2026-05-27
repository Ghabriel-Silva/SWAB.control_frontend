import { NextRequest } from "next/server"
import { jwtVerify } from "jose";


const publicRoutes = [
    { path: '/login', whenAuthenticatedRedirectTo: "/swab" }
]

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login"

export async function middleware(request: NextRequest) {
    const SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

}