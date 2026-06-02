"use client"

import { ReactNode } from "react"
import { Role } from "./roles"
import { useAuth } from "./auth-provider"

interface CanProps {
    roleUser: Role | Role[],
    children: ReactNode,
}

export function Can({
    roleUser, //ex: aqui so rederiso que for lab
    children: hasPermission
}: CanProps) {
    const { role } = useAuth() //ex: E aqui o usuairo logado é Admin 

    const allowed = Array.isArray(roleUser)
        ? roleUser
        : [roleUser]

    const hasPermission =
        role !== null && allowed.includes(role)

    return <>{children(hasPermission)}</>
}


}