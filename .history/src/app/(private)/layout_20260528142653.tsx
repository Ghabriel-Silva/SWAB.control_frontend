"use client"

import { Box, Flex } from "@chakra-ui/react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [slider, setSlider] = useState(false)
    return (
        <Box bg={"blue"}>
            <Flex flexDirection={"row"}>
                <Box bg={"red "}  >
                    <Flex>Texto de testa para todas</Flex>
                </Box>
                <Box bg={"green"} flex={1}  >
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}