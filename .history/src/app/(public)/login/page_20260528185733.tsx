"use client"


import { TextImage } from "./components/textImage";
import { ImageLogin } from "./components/imageLogin";

export default function LoginPage() {
    return (
        <Flex height={"100vh"} >
            <Box
                flex={{ base: 1, md: 1.5, lg: 2 }}
                display={{ base: "none", md: "block" }}
                overflow="hidden"
                position="relative"
            >
                <ImageLogin />
                <TextImage />
            </Box>
            <HStack flex={1} align="center" justify="center" p={10}>
             
            </HStack>
        </Flex>
    )
}