import { BodyText } from "@/app/(private)/components/index";
import { Badge, Box, Button, HStack, Input } from "@chakra-ui/react";


export function ContainerCreate() {
    return (
        <Box border={"1px solid"} borderColor={"gray.200"} bg={"ActiveBorder"}>
            <HStack justifyContent={"space-between"} bg={"blue"}>
                <HStack w={"100%"}>
                    <BodyText>
                        Iniciar Swab
                    </BodyText>
                    <Input   placeholder="ex: c4" />
                </HStack>
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
                    <Button bg={"blue"}>
                        Criar
                    </Button>
                </HStack>
            </HStack>
        </Box>
    )
}