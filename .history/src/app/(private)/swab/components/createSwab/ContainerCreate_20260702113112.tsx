import { BodyText, FormField } from "@/app/(private)/components/index";
import { Badge, Box, Button, Flex, HStack, Icon, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { createSwabSchema, CreateSwabType } from "../../validations/create.swab.schema";
import { yupResolver } from "@hookform/resolvers/yup"
import { useCreateSwab } from "../../hooks/useCreateSwab";
import { toaster } from "@/components/ui/toaster";
import { messageCreate } from "../../utils/messageCreate";

export function ContainerCreate() {


    const methods = useForm<CreateSwabType>({
        resolver: yupResolver(createSwabSchema),
        mode: 'onSubmit',
    })

    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors }
    } = methods

    const { mutate, isPending } = useCreateSwab()


    const OnChange: SubmitHandler<CreateSwabType> = (data: CreateSwabType) => {
        const tanks = data.location
            .replace(/[.-]/g, ',')
            .split(',')
            .map(item => item.trim().toUpperCase())
            .filter(Boolean)
        mutate({
            location: tanks
        },
            {
                onSuccess: (data) => {
                    const messageToaster = messageCreate(data)

                    if (data.data.pending.length >  0 ||  data.data.invalidLocation.length > 0) {
                        toaster.create({
                            title: 'Aviso',
                            description: `${messageToaster.join(' | ')}`,
                            closable: true,
                            duration: 10000,
                            type: "warning"
                        })
                    }

                    if (data.data.swabsCreate.length > 0) {
                        const swabCreate = data.data.swabsCreate.map(item => item.locationName)
                        toaster.create({
                            title: "Sucesso",
                            description: `Swabs da localização ${swabCreate} criados com sucesso`,
                            closable: true,
                            duration: 10000,
                            type: "success"
                        })
                        resetField('location')
                    }
                },
                onError: (error) => {
                    toaster.create({
                        title: "Erro",
                        description: error?.message ?? "Erro inesperado ao criar swab",
                        closable: true,
                        duration: 2000,
                        type: "error"
                    })
                }
            })

    }
    return (
        <form onSubmit={handleSubmit(OnChange)}>
            <Box
                border={"1px solid"}
                borderColor={"gray.200"}
                p={4}
                borderRadius={"sm"}
                justifyContent={"space-between"}
                h={"100%"}
            >
                <HStack
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    alignItems={"start"}
                >
                    <Flex alignItems={"center"} height={"40px"}>
                        <BodyText>
                            Iniciar Swab(s)
                        </BodyText>
                    </Flex>


                    <HStack flex={1} minW={"280px"}>
                        <FormField error={errors.location?.message}>
                            <Input placeholder="ex: c4"  {...register('location')} />
                        </FormField>
                    </HStack>


                    <HStack gap={4} >
                        <BodyText>
                            Unico:
                            <Badge>
                                C4
                            </Badge>
                        </BodyText>
                        <BodyText>
                            Lista
                            <Badge>
                                C4, A22:
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