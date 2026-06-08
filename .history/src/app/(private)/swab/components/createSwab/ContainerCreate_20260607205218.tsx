import { BodyText } from "@/app/(private)/components";
import { Box, HStack, Input } from "@chakra-ui/react";


export function ContainerCreate() {
    return (
        <Box bg={"red"}>
            <HStack>
            <BodyText
            <Input placeholder="ex: c4" />
            </HStack>
        </Box>
    )
}