import { BodyText } from "@/app/(private)/components/index";
import { Badge, Box, Button, HStack, Icon, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { CreateSwabType } from "../validations/create.swab.schema";



export function ContainerCreate() {

    const { } = useForm<CreateSwabType>()

    return (
        <form>

        </form>
       
    )
}