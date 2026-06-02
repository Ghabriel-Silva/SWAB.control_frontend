import { ReactNode } from "react"
import { Role } from "./roles"
import { useAuth } from "./auth-provider"

interface CanProps {
    children: ReactNode,
    role: Role
}

export function CanView({children, role}:CanProps) {
    const {userRole} = useAuth()

    const allowed  = Array.isArray(role) ? role : [role]

    const hasPermission = userRole !== null && allowed.includes(userRole)

    if(hasPermission) return null

    return <>children</> 

}