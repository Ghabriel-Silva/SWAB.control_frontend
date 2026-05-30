import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose";

const publicRoutes = [
    { path: '/login', whenAuthenticatedRedirectTo: "/home" }
]

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login"

export async function proxy(request: NextRequest) {
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


    //se tem token porem esta na rota publica redireciona para o default /home
    if (authToken && publicRoute) {
        if (publicRoute.whenAuthenticatedRedirectTo) {
            const redirectUrlDefault = request.nextUrl.clone()
            redirectUrlDefault.pathname = publicRoute.whenAuthenticatedRedirectTo
            return NextResponse.redirect(redirectUrlDefault)
        }

        NextResponse.next()
    }

    // se tem token e está em rota privada → verificar JWT
    if (authToken && !publicRoute) {
        try {
            await jwtVerify(authToken, SECRET)
            return NextResponse.next()
        } catch (err) {
            const redirectUrl = request.nextUrl.clone()
            redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED
            const response = NextResponse.redirect(redirectUrl)

            response.cookies.set("token", "", {
                maxAge: 0,
                path: '/'
            })

            return response
        }
    }
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};


function redirectTo(request: NextRequest, pathName: string): NextResponse {
    const url = request.
}