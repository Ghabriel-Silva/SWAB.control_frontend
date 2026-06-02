import { Role } from "@/permissions/roles";

const items = [
    {
        label: "Home",
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