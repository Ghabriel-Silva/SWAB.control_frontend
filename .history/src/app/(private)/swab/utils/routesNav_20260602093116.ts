import { Role } from "@/permissions/roles";
import { RoutesNavType } from "../../types/routes";
import { FiHome } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";

export const items: RoutesNavType[] = [
    {
        label: "Inicio",
        href: "/home",
        icon: <FiHome />

    },
    {
        label: "Swab",
        href: "/swab",
        roles: [Role.LAB, Role.ADMIN],
        icon:  <FiActivity />
    },
    {
        label: "Administrativo",
        href: "/admin",
        roles: [Role.ADMIN, Role.OWNER],
        icon: <FiActivity
    },

];