import { NextRequest } from "next/server"


const publicRoutes = [
    { path: '/login', whenAuthenticatedRedirectTo: "/swab" }
]

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login"

export async function middleware(request: NextRequest) {
    const secret = process.env.
}