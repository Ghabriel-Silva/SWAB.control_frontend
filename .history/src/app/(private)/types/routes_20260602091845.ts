import { Role } from "@/permissions/roles"
import { ReactNode } from "react"
import { IconBaseProps } from "react-icons"

export interface RoutesNavType {
    label: string,
    href: string,
    roles?: Role[] | undefined,
    Icon?: IconBaseProps
}

export interface PropsRoutesType {
    navProps: RoutesNavType[]
}