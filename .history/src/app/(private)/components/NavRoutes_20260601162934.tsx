import { Role } from "@/permissions/roles";
import { VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

interface RoutesProps {
    routesNav: [
        label: string,
        href: string,
        roles: Role[] | undefined,
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