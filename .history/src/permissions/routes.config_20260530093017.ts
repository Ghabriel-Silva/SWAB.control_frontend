import { Role, RoleType } from "./roles";

export const PUBLIC_ROUTES: { path: string, whenAuthenticatedRedirectTo?: string }[] = [
    { path: '/login', whenAuthenticatedRedirectTo: '/home' }
]

export const DEFAULT_AUTHENTICATED_ROUTE = '/home'


export const UNAUTHENTICATED_ROUTE = '/login'

export const ROUTE_PERMISSIONS: Record<string, RoleType[]> = {
    "/swab": [Role.ADMIN, Role.OWNER]

}

export function  isRouteAllowed()