import { Box, Flex } from "@chakra-ui/react";


export default function RootLayout({children}:ch){
    return (
        <Box>
            <Flex>Texto de testa para todas</Flex>
            <Box>
                {children}
            </Box>
        </Box>
    )
}