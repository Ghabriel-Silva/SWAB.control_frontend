import { SwabCheckType } from "@/app/(private)/types/swab"
import { Badge } from "@chakra-ui/react"

interface PropsFaucet {
    value: string
}

export function lastFaucetTank({ value }: PropsFaucet) {
    const result = value
    const color =
        result === SwabCheckType.ATP
            ? 'orange'
            : result === SwabCheckType.VISUAL
                ? 'blue'
                : 'red'
    return (
        <Badge colorPalette={color}>
            {value}
        </Badge>
    )
}