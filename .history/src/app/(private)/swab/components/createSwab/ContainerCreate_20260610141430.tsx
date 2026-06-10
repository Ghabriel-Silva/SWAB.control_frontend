import { BodyText } from "@/app/(private)/components/index";
import { Badge, Box, Button, Field, HStack, Icon, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { createSwabSchema, CreateSwabType } from "../../validations/create.swab.schema";
import { yupResolver } from "@hookform/resolvers/yup"
import { useCreateSwab } from "../../hooks/useCreateSwab";
import { toaster } from "@/components/ui/toaster";




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
        console.log(data)
        const tanks = data.tank
            .replace(/[.-]/g, ',')
            .split(',')
            .map(item => item.trim().toUpperCase())
            .filter(Boolean)
        mutate({
            tank: tanks
        },
            {
                onSuccess: (data) => {
                    if (data.data.pending.length) {
                        console.log(data.data.pending)
                    } if (data.data.invalidTanks.length) {
                        console.log(data.data.invalidTanks)
                    }
                    if (data.data.swabsCreate.length > 0) {
                        const swabCreate = data.data.swabsCreate.map(item=>item.tankName)
                        toaster.create({
                            title:"Sucesso",
                            description: `Swab`
                        })
                        resetField('tank')
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