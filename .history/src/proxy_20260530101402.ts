import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose";
import { isRouteAllowed, UNAUTHENTICATED_ROUTE } from "./permissions/routes.config";
import { MyJwtPayload } from "./permissions/types";

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
        return redirectTo(request, UNAUTHENTICATED_ROUTE) //volta para login
    }


    //se tem token porem esta na rota publica redireciona para o default /home
    if (authToken && publicRoute) {
        const destination = publicRoute.whenAuthenticatedRedirectTo
        if (destination) return redirectTo(request, destination)
        return NextResponse.next()
    }

    // se tem token e está em rota privada → verificar JWT
    if (authToken && !publicRoute) {
        try {
            const payloud = await jwtVerify(authToken, SECRET)
            const sesion = payloud as unknown as MyJwtPayload


            //checa se o role do usuario pode acessar a rota
            if(!isRouteAllowed(path, ))
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
    const url = request.nextUrl.clone()
    url.pathname = pathName
    return NextResponse.redirect(url)
}