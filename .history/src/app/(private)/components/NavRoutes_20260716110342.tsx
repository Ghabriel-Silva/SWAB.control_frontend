import { useAuth } from "@/permissions/auth-provider";
import { VStack, Link as ChakraLink, Flex, Text, Icon } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { items } from "../utils/routesNav";
import { BodyText } from "@/app/(private)/components/index";
import { cleanLink, textColorNav } from "../styles/clenLink";



interface NavRoutesProps {
    onNavigate?: () => void;
}

export function NavRoutes({ onNavigate }: NavRoutesProps) {
    const { role } = useAuth();

    const menuNavFilter = items.filter(item => {
        if (!item.roles) return true;
        return item.roles.includes(role!)
    });

    const pathName = usePathname()

    return (
        <VStack
            py={4}
            gap={1}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            px={3}
        >
            <Text
                w="100%"
                fontSize="11px"
                fontWeight="medium"
                color="whiteAlpha.600"
                pb={2}
            >
                MENU
            </Text>

            <VStack pt={5}>
                {/* {menuNavFilter.map((item, index) => {
                    const isActive = pathName === item.href
                    return (
                        <ChakraLink
                            key={index}
                            {...cleanLink}
                            asChild
                        >
                            <NextLink
                                href={item.href}
                                onClick={() => onNavigate?.()}
                            >
                                <Flex
                                    w="230px"
                                    align="center"
                                    gap="3"
                                    p="2"
                                    borderRadius="md"
                                    cursor="pointer"
                                    bg={isActive ? "#1C2F4A" : "transparent"}
                                    _hover={{ bg: "#1C2F4A" }}
                                >
                                    <Icon {...textColorNav(isActive)}>
                                        {item.icon}
                                    </Icon>
                                    <BodyText
                                        {...textColorNav(isActive)}
                                        w="100%"
                                    >
                                        {item.label}
                                    </BodyText>
                                </Flex>
                            </NextLink>
                        </ChakraLink>
                    )
                })} */}
            </VStack>
        </VStack>
    )
}