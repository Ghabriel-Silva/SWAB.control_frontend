"use client"

import { Box, Flex, Icon, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [slider, setSlider] = useState(false)
    const SIDEBAR_TRANSITION = "0.3s ease";

    return (
        <Box bg={"blue"} height={"100vh"} width={"100vw"}  >
            <Flex flexDirection={"row"}>
                <Box
                    bg={"red "}
                    w={slider ? "0px" : "200px"}
                    transition={`width ${SIDEBAR_TRANSITION}`}
                    height={"100vh"}
                    overflow={"hidden"}
                    flexShrink={0}
                >
                    <Box w={"200px"}>
                    <Flex>Texto de testa para todas</Flex>
                    </Box>
                </Box>
                <Box bg={"green"} flex={1}>
                    <
                    import { cookies } from "next/headers";
                    
                    export async function POST(req: Request) {
                        const body = await req.json()
                        const response = await fetch(
                            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                            {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(body),
                            }
                        )
                    
                        const data = await response.json()
                    
                        if (!response.ok) {
                            return Response.json(data, { status: 401 })
                        }
                    
                        const cookieStore = await cookies()
                    
                        cookieStore.set("token", data.data.token, {
                            httpOnly: true,
                            sameSite: "lax",
                            secure: process.env.NODE_ENV === "production",
                            path: "/",
                            maxAge: 60 * 60 * 24 * 7,
                        })
                    
                        return Response.json({
                            data
                        }) 
                    }Stack bg={"pink"} height={"50px"}>
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
                        Apenas testnado
                    </Stack>
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}