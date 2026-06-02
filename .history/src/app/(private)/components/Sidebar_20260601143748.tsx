"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import iconSwab from "@/assets/icon-inicial.png";
import { Role } from "@/permissions/roles";
import { CanView } from "@/permissions/canView";

interface SidebarProps {
    open: boolean;
}

export function Sidebar({ open }: SidebarProps) {
    const SIDEBAR_TRANSITION = "0.3s ease";

    return (
        <Box
            bg="#122136"
            w={open ? "250px" : "0px"}
            transition={`width ${SIDEBAR_TRANSITION}`}
            height="100vh"
            overflow="hidden"
            flexShrink={0}
        >
            <VStack
                w="250px"
                p={4}
                align="start"
                borderBottomWidth="1px"
                borderBottomStyle="solid"
                borderBottomColor="#22344F"
            >
                <HStack w="100%">
                    <Image
                        src={iconSwab}
                        alt="imagem conceitual de pessoa fazendo swab"
                        width={35}
                        priority
                    />

                    <VStack align="start" gap={0}>
                        <Text
                            color="whiteAlpha.900"
                            fontSize="14px"
                            fontWeight="bold"
                        >
                            SwabControl
                        </Text>

                        <Text
                            color="whiteAlpha.600"
                            fontSize="11px"
                            fontWeight="light"
                        >
                            GESTÃO DE SWABS
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
            {
                <CanView>
                    
                </CanView>
            }
        </Box>
    );
}


const items = [
    {
        label: "Home",
        href: "/home",
    },
    {
        label: "Administrativo",
        href: "/admin",
        roles: [Role.ADMIN],
    },
]