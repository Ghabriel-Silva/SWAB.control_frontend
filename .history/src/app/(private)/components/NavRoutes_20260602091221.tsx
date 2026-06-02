import { useAuth } from "@/permissions/auth-provider";
import { VStack, Link as ChakraLink, Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link"
import { items } from "../swab/utils/routesNav";
import { SIDEBAR_WHIDTH_OPEN } from "../styles/sidebarWidth";
import { BodyText } from "./text/BodyText";


export function NavRoutes() {
    const { role } = useAuth()

    const menuNavFilter = items.filter(item => {
        if (!item.roles) return true
        return item.roles.includes(role!)
    })

    const pathName = usePathname()
    return (
        <VStack>
            {
                menuNavFilter.map((item, index) => {
                    const isActive = pathName === item.href
                    return (
                        <ChakraLink
                            key={index}
                            {...cleanLink}
                            asChild
                        >
                            <NextLink href={item.href} >
                                <Flex
                                    w={"230px"}
                                    align="center"
                                    gap="3"
                                    p="2"
                                    borderRadius="md"
                                    cursor="pointer"
                                    bg={isActive ? "#1C2F4A" : "transparent"}
                                >

                                    <BodyText
                                        color={isActive ? "#12d3c0" : "whiteAlpha.900"}
                                        _hover={{ color: 'whiteAlpha.900' }}
                                    >
                                        {item.label}
                                    </BodyText>
                                </Flex>
                            </NextLink>
                        </ChakraLink>
                    )
                })
            }
        </VStack>
    )
}

const cleanLink = {
    color: "fg.muted",
    border: "none",
    borderRadius: "sm",
    textDecoration: "none",
    _hover: { textDecoration: "none" },
    _active: { textDecoration: "none" },
    _focus: { boxShadow: "none", outline: "none" },
    _focusVisible: { boxShadow: "none", outline: "none" },
}