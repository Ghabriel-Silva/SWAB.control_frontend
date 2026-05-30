"use client"

import { ReactNode } from "react"
import { Role } from "./roles"
import { useAuth } from "./auth-provider"

interface CanProps {
    roleUser: Role | Role[],
    children: ReactNode,
    fallback?: ReactNode
}

export function Can({
    roleUser, //ex: aqui so rederiso que for lab
    children,
    fallback = null,
}: CanProps) {
    const { role } = useAuth() //ex: 

    const allowed = Array.isArray(roleUser)
        ? roleUser
        : [roleUser]

    const hasPermission =
        role !== null && allowed.includes(role)

    return hasPermission ? <>{children}</> : <>{fallback}</>
}