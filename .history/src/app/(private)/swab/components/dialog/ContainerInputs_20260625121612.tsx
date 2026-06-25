import { HStack, Textarea } from "@chakra-ui/react"
import { ReactNode } from "react"

interface PropsContainer {
    children: ReactNode
    hasJustification: boolean
}

export const ContainerInputs = ({ children, hasJustification = false }: PropsContainer) => {

    return (
        <HStack>
            {children}
            {hasJustification && (
                <Textarea></Textarea>
            )}
        </HStack>
    )
}