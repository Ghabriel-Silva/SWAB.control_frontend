import { Role } from "@/permissions/roles";

export const items:Pro = [
    {
        label: "Inicio",
        href: "/home",
    },

    {
        label: "Swabs",
        href: "/coletas",
        roles: [Role.LAB],
    },
    {
        label: "Administrativo",
        href: "/admin",
        roles: [Role.ADMIN],
    },

];