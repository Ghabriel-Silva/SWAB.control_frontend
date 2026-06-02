import { Role } from "@/permissions/roles"
import { ReactNode } from "react"
import { IconType } from "react-icons"

export interface RoutesNavType {
    label: string,
    href: string,
    roles?: Role[] | undefined,
    icon?: ReactNode
}

export interface PropsRoutesType {
    navProps: RoutesNavType[]
}