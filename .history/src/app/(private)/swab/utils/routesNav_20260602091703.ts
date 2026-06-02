import { Role } from "@/permissions/roles";
import {RoutesNavType } from "../../types/routes";
import HomeIcon from "@mui/icons-material/Home";

export const items :RoutesNavType[] = [
    {
        label: "Inicio",
        href: "/home",

    },
    {
        label: "Swab",
        href: "/swab",
        roles: [Role.LAB, Role.ADMIN],
    },
    {
        label: "Administrativo",
        href: "/admin",
        roles: [Role.ADMIN, Role.OWNER],
    },

];