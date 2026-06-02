import { Role } from "@/permissions/roles";
import { PropsRoutesType } from "../../types/routes";

export const items:PropsRoutesType. = [
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