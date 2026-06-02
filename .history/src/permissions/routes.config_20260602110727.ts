import { Role, RoleType } from "./roles";

export const PUBLIC_ROUTES: { path: string, whenAuthenticatedRedirectTo?: string }[] = [
    { path: '/login', whenAuthenticatedRedirectTo: '/home' }
]

export const DEFAULT_AUTHENTICATED_ROUTE = '/home'


export const UNAUTHENTICATED_ROUTE = '/login'

export const FORBIDDEN_ROUTE = '/not-found'

export const ROUTE_PERMISSIONS: Record<string, RoleType[]> = {
    "/swab": [Role.OWNER, Role.ADMIN, Role.LAB],
    "/home": [Role.OWNER, Role.LAB, Role.ADMIN]

}

export function isRouteAllowed(pathName: string, roles: Role): boolean {
    const sortedKeys = Object.keys(ROUTE_PERMISSIONS).sort((a, b) => b.length - a.length)

    for (const key of sortedKeys) {
        if (pathName.startsWith(key)) {
            return ROUTE_PERMISSIONS[key].includes(roles)
        }
    }

    return true
}