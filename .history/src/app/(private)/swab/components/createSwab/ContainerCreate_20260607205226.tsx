import { BodyText } from "@/app/(private)/components/index";
import { Box, HStack, Input } from "@chakra-ui/react";


export function ContainerCreate() {
    return (
        <Box bg={"red"}>
            <HStack>
            <BodyText>
                
            </BodyText>
            <Input placeholder="ex: c4" />
            </HStack>
        </Box>
    )
}