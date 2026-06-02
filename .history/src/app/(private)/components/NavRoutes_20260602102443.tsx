import { useAuth } from "@/permissions/auth-provider";
import { VStack, Link as ChakraLink, Flex, Text, Icon } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link"
import { items } from "../swab/utils/routesNav";
import { BodyText } from "./text/BodyText";
import { cleanLink, textColorNav } from "../styles/clenLink";


export function NavRoutes() {
    const { role } = useAuth()

    const menuNavFilter = items.filter(item => {
        if (!item.roles) return true
        return item.roles.includes(role!)
    })

    const pathName = usePathname()
    return (
        <VStack
            py={4}
            gap={1}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            bg={"blue"}
            px={3}

        >
            <Text
                w={"100%"}
                fontSize={"11px"}
                color={"whiteAlpha.600"}>
                MENU
            </Text>
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
                                    _hover={{ bg: "#1C2F4A" }}
                                >
                                    <Icon  {...textColorNav(isActive)}>
                                        {item.icon}
                                    </Icon>
                                    <BodyText
                                        {...textColorNav(isActive)}

                                        w={"100%"}
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
