import { Spinner, Text, VStack } from "@chakra-ui/react"

interface SpinerProps {
    text?: string
}
export const SpinnerLoading = ({ text = 'Carregando...' }: SpinerProps) => {
    return (
        <VStack colorPalette="teal">
            <Spinner color="colorPalette.600" />
            <Text color="colorPalette.600">{} </Text>
        </VStack>
    )
}