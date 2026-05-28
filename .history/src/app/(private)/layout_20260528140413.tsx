import { Box, Flex } from "@chakra-ui/react";


export default function RootLayout({children}:{c}){
    return (
        <Box>
            <Flex>Texto de testa para todas</Flex>
            <Box>
                {children}
            </Box>
        </Box>
    )
}