import { useAuth } from "@/permissions/auth-provider";
import { Role } from "@/permissions/roles";
import { VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { PropsRoutesType } from "../types/routes";


export function NavRoutes({routesNav}:PropsRoutesType) {
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