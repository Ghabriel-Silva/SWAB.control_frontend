interface RoutesNavType {
        label: string,
        href: string,
        roles?: Role[] | undefined,
        Icon?:ReactNode
}

export interface PropsRoutesType {
    navProps:RoutesNavType
}