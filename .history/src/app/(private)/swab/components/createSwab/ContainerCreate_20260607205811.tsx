import { BodyText } from "@/app/(private)/components/index";
import { Badge, Box, HStack, Input } from "@chakra-ui/react";


export function ContainerCreate() {
    return (
        <Box border={"1px solid"} borderColor={"gray.200"}>
            <HStack>
                <BodyText>
                    Criar Swab
                </BodyText>
                <Input placeholder="ex: c4" />
            </HStack>
            

        </Box>
    )
}