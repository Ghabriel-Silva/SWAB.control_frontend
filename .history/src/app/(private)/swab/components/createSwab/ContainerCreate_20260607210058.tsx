import { BodyText } from "@/app/(private)/components/index";
import { Badge, Box, HStack, Input } from "@chakra-ui/react";


export function ContainerCreate() {
    return (
        <Box border={"1px solid"} borderColor={"gray.200"}>
            <HStack justifyContent={"space-"}>
                <BodyText>
                    Iniciar Swab
                </BodyText>
                <Input maxW={"300px"} placeholder="ex: c4" />
                <HStack gap={4}>
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
                </HStack>
            </HStack>
        </Box>
    )
}