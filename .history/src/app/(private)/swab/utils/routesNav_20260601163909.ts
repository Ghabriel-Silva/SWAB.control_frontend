import { Role } from "@/permissions/roles";

export const items:Props = [
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