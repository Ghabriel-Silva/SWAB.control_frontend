import { HStack } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Justification } from "./Justification"

interface PropsContainer {
    children: ReactNode
    hasJustification: boolean
}

export const ContainerInputs = ({ children, hasJustification = false }: PropsContainer) => {

    return (
        <HStack>
            {children}
            {hasJustification && (
                <Justification />
            )}
        </HStack>
    )
}