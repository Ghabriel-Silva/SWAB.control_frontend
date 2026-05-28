import { Box } from "@chakra-ui/react";


export default function RootLayout(children:React.ReactNode){
    return (
        <Box>
            F
            <Box>
                {children}
            </Box>
        </Box>
    )
}