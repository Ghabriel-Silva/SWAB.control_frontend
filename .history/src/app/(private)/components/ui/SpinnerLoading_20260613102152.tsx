import { Spinner, Text, VStack } from "@chakra-ui/react"

interface SpinerProps {
    text?: string
}
export const SpinnerLoading = ({ text = 'Carregando...' }: SpinerProps) => {
    return (
        <VStack>
            <Spinner />
            <Text >{text}</Text>
        </VStack>
    )
}