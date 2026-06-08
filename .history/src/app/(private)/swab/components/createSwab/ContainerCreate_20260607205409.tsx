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
                    C4
                </Badge>
            </BodyText>
            <BodyText>
                Lista
                <Badge>
                    C4, A22
                </Badge>
            </BodyText>
            <BodyText>
                Intervalo
                <Badge>
                    C4-A22-12
                </Badge>
            </BodyText>

        </Box>
    )
}