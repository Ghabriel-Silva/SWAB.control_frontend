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
        label: "Resultados",
        href: "/resultados",
        roles: [Role.ADMIN],
    },

    {
        label: "Controle de Swabs",
        href: "/swabs",
        roles: [Role.LAB],
    },

    {
        label: "Relatórios",
        href: "/relatorios",
        roles: [Role.LAB, Role.ADMIN],
    },

    {
        label: "Usuários",
        href: "/usuarios",
        roles: [Role.ADMIN],
    },

    {
        label: "Administrativo",
        href: "/admin",
        roles: [Role.ADMIN],
    },

    {
        label: "Configurações",
        href: "/configuracoes",
        roles: [Role.ADMIN],
    },
];