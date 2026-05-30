"use client"

import { ReactNode } from "react"
import { Role } from "./roles"
import { useAuth } from "./auth-provider"

interface canProps {
    roleUser: Role | Role[],
    children: ReactNode,
    falback?: ReactNode
}

export function can({ roleUser, children, falback = null }: canProps) {
    const { role:Auth } = useAuth()
}