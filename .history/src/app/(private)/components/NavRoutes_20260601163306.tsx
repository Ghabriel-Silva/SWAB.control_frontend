import { useAuth } from "@/permissions/auth-provider";
import { Role } from "@/permissions/roles";
import { VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

interface RoutesProps {
    routesNav: [
        label: string,
        href: string,
        roles?: Role[] | undefined,
    ] 
}

export function NavRoutes(routesNav:RoutesProps) {
    const role = useAuth()
    const menuNavFilter = routesNav.filter(item =>{
        if(item.)
    })
    const pathName = usePathname() 
    return (
        <VStack>

        </VStack>
    )
}