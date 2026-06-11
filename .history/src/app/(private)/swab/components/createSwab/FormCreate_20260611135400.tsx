import { BodyText } from "@/app/(private)/components";
import { Badge, Box, Button, Field, HStack, Icon, Input } from "@chakra-ui/react";

interface PropsFormCreate {

}

export function FormCreate() {
    return (
        <form onSubmit={handleSubmit(OnChange)}>
            <Box
                border={"1px solid"}
                borderColor={"gray.200"}
                p={4}
                borderRadius={"sm"}
                justifyContent={"space-between"}
            >
                <HStack
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    alignItems={"start"}
                >
                    <BodyText>
                        Iniciar Swab
                    </BodyText>
                    <HStack w={"100%"} flex={1} minW={"280px"}>
                        <Field.Root invalid={!!errors.tank?.message} >
                            <Input placeholder="ex: c4"  {...register('tank')} />
                            <Field.ErrorText>{errors.tank?.message}</Field.ErrorText>
                        </Field.Root>
                    </HStack>
                    <HStack gap={4} >
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

                        <Button bg={"blue"} minW={"100px"} size={"sm"} type="submit" loading={isPending} loadingText="Criando...">
                            <Icon size={"xs"}>
                                <FaPlus />
                            </Icon>
                            Criar
                        </Button>
                    </HStack>
                </HStack>
            </Box>
        </form>

    )
}