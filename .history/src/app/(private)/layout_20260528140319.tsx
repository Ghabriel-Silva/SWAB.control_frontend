import { Box, Flex } from "@chakra-ui/react";


export default function RootLayout(children:React.ReactNode){
    return (
        <Box>
            <Flex></Flex>
            <Box>
                {children}
            </Box>
        </Box>
    )
}