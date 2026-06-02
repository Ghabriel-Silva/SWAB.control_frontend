import { Role } from "@/permissions/roles"
import { ReactNode } from "react"

export interface RoutesNavType {
    label: string,
    href: string,
    roles?: Role[] | undefined,
    Icon?: iconTy
}

export interface PropsRoutesType {
    navProps: RoutesNavType[]
}