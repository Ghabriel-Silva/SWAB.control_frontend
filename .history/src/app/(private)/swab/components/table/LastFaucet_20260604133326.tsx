import { Badge } from "@chakra-ui/react"

interface PropsFaucet {
    value: string
}

export function lastFaucetTank({ value }: PropsFaucet) {
    return (
        <Badge colorPalette={color}>
            {result}
        </Badge>
    )
}