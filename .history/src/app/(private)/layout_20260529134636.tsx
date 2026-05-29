"use client"

import { Box, Flex, Icon, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { SubtitleText, BodyText, TitleText } from "@/app/shared/components/index";
import { getInitials } from "./swabs/utils/getInitials";
import iconSwab from "@/assets/icon.png"


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [slider, setSlider] = useState(false)
    const SIDEBAR_TRANSITION = "0.3s ease";
    const userName = localStorage.getItem('userName')?.toLocaleUpperCase() ?? "USUÀRIO"

    return (
        <Box height={"100vh"} width={"100vw"}  >
            <Flex flexDirection={"row"}>
                <Box
                    bg={"red "}
                    w={slider ? "0px" : "250px"}
                    transition={`width ${SIDEBAR_TRANSITION}`}
                    height={"100vh"}
                    overflow={"hidden"}
                    flexShrink={0}
                >
                    <VStack w={"250px"} >
                        <Box>
                            <Icon>
                                {}
                            </Icon>
                            <Flex>Texto de testa para todas</Flex>
                        </Box>
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
                    </HStack>


                    {/* Body every page  */}
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}