import { HStack, Text } from "@chakra-ui/react"

interface TotalValueProps {
    total: string
}
export function FooterTable() {
    return (
        <HStack w={"100%"}>
            <Text>{total}</Text>
        </HStack>
    )
}