import { BodyText } from "@/app/(private)/components/index";
import { Badge, Box, Button, HStack, Input } from "@chakra-ui/react";


export function ContainerCreate() {
    return (
        <Box border={"1px solid"} borderColor={"gray.200"} bg={"red"} p={4}>
            <HStack justifyContent={"space-between"} bg={"blue"} flexWrap={"wrap"}>
                <HStack w={"100%"} bg={"pink"} flex={1} minW={"280px"}>
                    <BodyText>
                        Iniciar Swab
                    </BodyText>
                    <Input   placeholder="ex: c4" />
                </HStack>
                <HStack gap={4} bg={"green"}>
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
                   
                    <Button bg={"blue"} minW={"100px"}>
                        Criar
                    </Button>
                </HStack>
            </HStack>
        </Box>
    )
}