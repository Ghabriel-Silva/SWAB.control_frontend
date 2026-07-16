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



const items = createTreeCollection<RoutesNavType>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
        id: "ROOT",
        name: "",
        children: [
            {
                id: "home",
                name: "Inicio",
                icon: <FiHome />,
            },
            {
                id: "swab",
                name: "Swab",
                children: [
                    {
                        id: "swab",
                        name: "Criar Swab",
                        href: "swab",
                        icon: <FiActivity />,
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