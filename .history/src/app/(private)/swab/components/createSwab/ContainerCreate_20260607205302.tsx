import { BodyText } from "@/app/(private)/components/index";
import { Badge, Box, HStack, Input } from "@chakra-ui/react";


export function ContainerCreate() {
    return (
        <Box bg={"red"}>
            <HStack>
                <BodyText>
                    Criar Swab
                </BodyText>
                <Input placeholder="ex: c4" />
            </HStack>
            <BodyText>
                Unico 
                <Badge>
                    
                </Badge>
            </BodyText>

        </Box>
    )
}