import { Role } from "@/permissions/roles";

export const items = [
    {
        label: "Inicio",
        href: "/home",
    },

    {
        label: "Swabs",
        href: "/coletas",
        roles: [Role.LAB],
        icon
    },
    {
        label: "Administrativo",
        href: "/admin",
        roles: [Role.ADMIN],
    },

];