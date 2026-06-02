import { useAuth } from "@/permissions/auth-provider";
import { Role } from "@/permissions/roles";
import { VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { PropsRoutesType } from "../types/routes";


export function NavRoutes({ navProps }: PropsRoutesType) {
    const {role} = useAuth()
    const menuNavFilter = navProps.filter(item => {
        if (!item.roles) return true
        return item.roles.includes(!role)
    })
    const pathName = usePathname()
    return (
        <VStack>

        </VStack>
    )
}