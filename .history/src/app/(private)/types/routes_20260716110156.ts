import { Role } from "@/permissions/roles"
import { ReactNode } from "react"
export interface RoutesNavType {
    id: string,
    label?: string,
    href?: string,
    roles?: Role[] | undefined,
    icon?: ReactNode
    name: string,
    children?: RoutesNavType,
}

export interface PropsRoutesType {
    navProps: RoutesNavType[]
}