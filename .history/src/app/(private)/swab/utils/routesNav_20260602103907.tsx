import { Role } from "@/permissions/roles";
import { RoutesNavType } from "../../types/routes";

import {
    FiHome,
    FiActivity,
    FiUsers,
    FiTool,
    FiUserCheck,
    FiBarChart2,
    FiSettings,
} from "react-icons/fi";
import { GiOilDrum } from "react-icons/gi";
import { SiNamesilo } from "react-icons/si";

export const items: RoutesNavType[] = [
    {
        label: "Início",
        href: "/home",
        icon: <FiHome />,
    },

    {
        label: "Swab",
        href: "/swab",
        roles: [Role.LAB, Role.ADMIN, Role.OWNER],
        icon: <FiActivity />,
    },

    {
        label: "Tanques",
        href: "/tanques",
        roles: [Role.LAB, Role.ADMIN, Role.OWNER],
        icon: <   GiOilDrum />,
    },

    {
        label: "Operadores",
        href: "/operadores",
        roles: [Role.ADMIN, Role.OWNER],
        icon: <FiUserCheck />,
    },

    {
        label: "Gestores",
        href: "/gestores",
        roles: [Role.OWNER],
        icon: <FiUsers />,
    },

    {
        label: "Métricas",
        href: "/metricas",
        roles: [Role.ADMIN, Role.OWNER],
        icon: <FiBarChart2 />,
    },

    {
        label: "Configurações",
        href: "/configuracoes",
        roles: [Role.ADMIN, Role.OWNER],
        icon: <FiSettings />,
    },
];