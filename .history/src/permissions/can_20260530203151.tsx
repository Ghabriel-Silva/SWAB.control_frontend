"use client"

import { ReactNode } from "react"
import { Role } from "./roles"
import { useAuth } from "./auth-provider"

interface canProps {
    roleUser: Role | Role[],
    children: ReactNode,
    falback?: ReactNode
}

export function Can({ roleUser, children, falback = null }: canProps) {
    const { role } = useAuth()
    const allowed = Array.isArray(roleUser) ? roleUser : [roleUser]

    const hasPermission = roleUser !== null && allowed.includes(role as Role)

    
}