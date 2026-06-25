import { HStack } from "@chakra-ui/react"
import { ReactNode } from "react"

interface PropsContainer {
    children:ReactNode
    hasJustification:boolean
}

export const ContainerInputs = ({children, hasJustification}:PropsContainer) => {

    return (
        <HStack>
            {children}
        </HStack>
    )
}