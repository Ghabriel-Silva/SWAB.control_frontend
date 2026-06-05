import { SubtitleText } from "@/app/(private)/components"
import { SwabCheckType } from "@/app/(private)/types/swab"
import { Badge } from "@chakra-ui/react"

interface PropsFaucet {
    value: SwabCheckType | undefined
}

export function LastFaucet({ value }: PropsFaucet) {
    
    const result = value
    const color =
        result === SwabCheckType.ATP
            ? 'orange'
            : result === SwabCheckType.VISUAL
                ? 'blue'
                : 'red'
    return (
        <Badge colorPalette={color}>
            <SubtitleText></SubtitleText>
         
        </Badge>
    )
}