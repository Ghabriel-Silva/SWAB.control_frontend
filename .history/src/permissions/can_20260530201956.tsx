"use client"

import { ReactNode } from "react"
import { Role } from "./roles"
import { useAuth } from "./auth-provider"

interface canProps {
    role: Role | Role[],
    children: ReactNode,
    falback?: ReactNode
}

export function can({ role, children, falback = null }: canProps) {
    const {role} = useAuth()
}