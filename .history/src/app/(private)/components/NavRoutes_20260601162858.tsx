import { VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

interface RoutesProps {
    routesNav: [
        label: "Swabs",
        href: "/coletas",
        roles: [Role.LAB],
    ]
}

export function NavRoutes() {
    const menuNavFilter = 
    const pathName = usePathname()
    return (
        <VStack>

        </VStack>
    )
}