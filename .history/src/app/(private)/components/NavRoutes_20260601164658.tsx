import { useAuth } from "@/permissions/auth-provider";
import { VStack , Link as ChakraLink } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { PropsRoutesType } from "../types/routes";
import NextLink from "next/link"


export function NavRoutes({ navProps }: PropsRoutesType) {
    const { role } = useAuth()

    const menuNavFilter = navProps.filter(item => {
        if (!item.roles) return true
        return item.roles.includes(role!)
    })

    const pathName = usePathname()
    return (
        <VStack>
            {
                navProps.map((item, index) => {
                    const isActive = pathName === item.href
                    return (
                        <ChakraLink
                        key={index}
                        asChild
                        >

                        <NextLink href={item.}>

                        </NextLink>
                        </ChakraLink>
                    )
                })
            }
        </VStack>
    )
}