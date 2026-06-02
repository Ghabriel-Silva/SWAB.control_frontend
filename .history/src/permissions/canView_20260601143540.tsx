import { ReactNode } from "react"
import { Role } from "./roles"
import { useAuth } from "./auth-provider"

interface CanProps {
    children: ReactNode,
    role: Role
}

export function CanView({children, userRole}:CanProps) {
    const {role} = useAuth()

    const allowed  = Array.isArray(userRole) ? userRole : [role]

    const hasPermission = role !== null && allowed.includes(role)

    if(hasPermission) return null

    return <>children</> 

}