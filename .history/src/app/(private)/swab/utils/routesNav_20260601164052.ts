import { Role } from "@/permissions/roles";
import {RoutesNavType } from "../../types/routes";

export const items :RoutesNavType[] = [
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