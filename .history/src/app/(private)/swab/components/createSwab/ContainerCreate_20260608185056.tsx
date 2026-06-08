import { BodyText } from "@/app/(private)/components/index";
import { Badge, Box, Button, Field, HStack, Icon, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { createSwabSchema, CreateSwabType } from "../validations/create.swab.schema";
import { yupResolver } from "@hookform/resolvers/yup"




export function ContainerCreate() {

    const methods = useForm<CreateSwabType>({
        resolver: yupResolver(createSwabSchema),
        mode: 'onBlur'
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = methods

    const OnChange = (data: CreateSwabType) => {
        console.log(data)
    }
    return (
        <form onChange={handleSubmit(OnChange)}>
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
                    
                    bg={"blue"}

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

                        <Button bg={"blue"} minW={"100px"} >
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