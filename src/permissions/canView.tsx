import { ReactNode } from "react"
import { Role, RoleType } from "./roles"
import { useAuth } from "./auth-provider"

interface CanProps {
    children: ReactNode,
    userRole: RoleType | RoleType[]
}

export function CanView({ children, userRole }: CanProps) {
    const { role } = useAuth()

    const allowed = Array.isArray(userRole) ? userRole : [userRole]

    const hasPermission = role !== null && allowed.includes(role)

    if (!hasPermission) return null

    return <>{children}</>

}