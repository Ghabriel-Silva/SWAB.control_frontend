import { Role } from "@/permissions/roles";
import { RoutesNavType } from "../types/routes";

import {
    FiHome,
    FiActivity,
    FiUsers,
    FiUserCheck,
    FiBarChart2,
    FiSettings,
} from "react-icons/fi";
import { GiWaterTank } from "react-icons/gi";
import { createTreeCollection } from "@chakra-ui/react";

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
        label: "Tanques e Silos",
        href: "/tanques",
        roles: [Role.LAB, Role.ADMIN, Role.OWNER],
        icon: < GiWaterTank />,
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

interface Node {
    id: string
    name: string
    href?: string
    children?: Node[]
}

const collection = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
        id: "ROOT",
        name: "",
        children: [
            {
                id: "home",
                name: "Inicio",
            },
            {
                id: "swab",
                name: "Swab",
                children: [
                    {
                        id: "swab",
                        name: "Criar Swab",
                        href: "swab",
                    },
                ],
            },
            {
                id: "external",
                name: "External Links",
                children: [
                    {
                        id: "external/github",
                        name: "GitHub Repository",
                        href: "https://github.com/chakra-ui/zag",
                    },
                    {
                        id: "external/npm",
                        name: "NPM Package",
                        href: "https://www.npmjs.com/package/@zag-js/core",
                    },
                    {
                        id: "external/docs",
                        name: "Official Docs",
                        href: "https://zagjs.com",
                    },
                ],
            },
            { id: "readme.md", name: "README.md", href: "/readme" },
            { id: "license", name: "LICENSE", href: "/license" },
        ],
    },
})