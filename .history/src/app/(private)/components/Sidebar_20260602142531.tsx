"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import iconSwab from "@/assets/icon-inicial.png";
import { NavRoutes } from "./NavRoutes";
import { SIDEBAR_WHIDTH_CLOSE, SIDEBAR_WHIDTH_OPEN } from "../styles/sidebarWidth";

interface SidebarProps {
    open: boolean;
}

export function Sidebar({ open }: SidebarProps) {
    const SIDEBAR_TRANSITION = "0.3s ease";


    return (
        <Box
            bg="#122136"
            w={open ? SIDEBAR_WHIDTH_OPEN : SIDEBAR_WHIDTH_CLOSE}
            transition={`width ${SIDEBAR_TRANSITION}`}
            height="100%"
            overflow="hidden"
            flexShrink={0}
        >
            <VStack
                w={SIDEBAR_WHIDTH_OPEN}
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
            <NavRoutes/>
        </Box>
    );
}
