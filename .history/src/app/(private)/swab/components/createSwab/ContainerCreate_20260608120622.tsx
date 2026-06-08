import { BodyText } from "@/app/(private)/components/index";
import { Badge, Box, Button, HStack, Icon, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { CreateSwabType } from "../validations/create.swab.schema";



export function ContainerCreate() {

    const {
        register, 
        handleSubmit, 
    } = useForm<CreateSwabType>()

    const onChange = (data:CreateSwabType)=>{

    }
    return (
        <form>
            <Box
                border={"1px solid"}
                borderColor={"gray.200"}
                p={4} borderRadius={"sm"}
            >
                <HStack
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    alignContent={"center"}
                >
                    <BodyText>
                        Iniciar Swab
                    </BodyText>
                    <HStack w={"100%"} flex={1} minW={"280px"}>
                        <Input placeholder="ex: c4" />
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

                        <Button bg={"blue"} minW={"100px"}>
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