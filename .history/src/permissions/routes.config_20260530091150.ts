import { Role, RoleType } from "./roles";

export const PUBLIC_ROUTES: { path: string, whenAuthenticatedRedirectTo?: string }[] = [
    {path:'/login', whenAuthenticatedRedirectTo: ''}
]