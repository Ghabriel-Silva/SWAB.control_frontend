import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose";


const publicRoutes = [
    { path: '/login', whenAuthenticatedRedirectTo: "/home" }
]

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login"

export async function middleware(request: NextRequest) {
    const SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

    const path = request.nextUrl.pathname

    const publicRoute = publicRoutes.find(r => r.path === path)

    const authToken = request.cookies.get('token')?.value

    //se n tem token e esta tentando acessar uma rota publica deixa passar
    if (!authToken && publicRoute) {
        return NextResponse.next()
    }

    //se não tem token e esta tentando acessar uma rota private redirect
    if (!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED

        return NextResponse.redirect(redirectUrl)
    }


    //se tem token porem esta na rota publica redireciona para o default
    if(authToken && publicRoute){
        
    }
}