import { Box } from "@chakra-ui/react";


export default function RootLayout(children:React.ReactNode){
    return (
        <Box>
            
            <Box>
                {children}
            </Box>
        </Box>
    )
}