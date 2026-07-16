import { Role } from "@/permissions/roles"
import { ReactNode } from "react"
export interface RoutesNavType {
    label: string,
    href?: string,
    roles?: Role[] | undefined,
    icon: ReactNode
    id: string
    name: string
    children?: Node[]
}

export interface PropsRoutesType {
    navProps: RoutesNavType[]
}