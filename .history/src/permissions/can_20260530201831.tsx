"use client"

import { ReactNode } from "react"
import { Role } from "./roles"

interface canProps {
    role: Role | Role[],
    children: ReactNode,
    falback?: ReactNode
}