"use client"

import { Box, Flex, Icon, HStack, Text, VStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { SubtitleText, BodyText, TitleText } from "@/app/shared/components/index";
import { getInitials } from "./swab/utils/getInitials";
import iconSwab from "@/assets/icon-inicial.png"
import Image from "next/image";
import { useAuth } from "@/permissions/auth-provider";
import { Can } from "@/permissions/can";
import { Role } from "@/permissions/roles";


export default function SidebarLayout({ children }: { children: React.ReactNode }) {
    const [slider, setSlider] = useState(false)
    const SIDEBAR_TRANSITION = "0.3s ease";

    const user = useAuth()
    const userName = user.user?.userName ?? "USUÀRIO"

    return (
        <Box height={"100vh"} width={"100vw"} >
            <Flex flexDirection={"row"}>
                <Box
                    bg={"#122136"}
                    w={slider ? "0px" : "250px"}
                    transition={`width ${SIDEBAR_TRANSITION}`}
                    height={"100vh"}
                    overflow={"hidden"}
                    flexShrink={0}
                >
                    <VStack w={"250px"} p={4} align={"start"}
                        borderBottomWidth="1px"
                        borderBottomStyle="solid"
                        borderBottomColor="#22344F">
                        <HStack w={"100%"}>
                            <Image
                                src={iconSwab}
                                alt="imagem conceitual de pessoa fazendo swab"
                                width={"35"}
                                priority
                            />
                            <VStack align={"start"} gap={0}>
                                <Text color={"whiteAlpha.900"} fontSize={"14px"} fontWeight={"bold"}>SwabControl</Text>
                                <Text color={"whiteAlpha.600"} fontSize={"11px"} fontWeight={"light"}>GESTÃO DE SWABS</Text>
                            </VStack>
                        </HStack>

                        <VStack>

                        </VStack>
                    </VStack>
                </Box>
                <Box flex={1}>

                    {/* {Header default every page} */}
                    <HStack
                        borderBottom={"black"}
                        height={"60px"}
                        p={6}
                        borderBottomWidth="1px"
                        borderBottomStyle="solid"
                        borderBottomColor="gray.muted"
                        gap={6}
                    >
                        <Icon
                            cursor={"e-resize"}
                            onClick={() => setSlider(prev => !prev)}
                            color="fg.muted"
                            _hover={{ color: "accent.fg" }}
                            transition="color 0.2s ease, transform 0.3s ease"
                            transform={slider ? "rotate(180deg)" : "rotate(0)"}
                        >
                            <BsLayoutSidebarInset />
                        </Icon>
                        <Text color="fg.subtle">|</Text>
                        <SubtitleText>
                            {getInitials(userName)}
                        </SubtitleText>
                        <Text color="fg.subtle" >—</Text>
                        <SubtitleText>
                            {userName}
                        </SubtitleText>

                        <Box>
                            <Can roleUser={Role.LAB}>
                            <Button colorPalette={"red"}>APenas lab ve isso</Button>
                            </Can>
                        </Box>
                    </HStack>
                    {/* Body every page  */}
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}