import { SubtitleText } from "@/app/(private)/components"
import { SwabCheckType } from "@/app/(private)/types/swab"
import { Badge } from "@chakra-ui/react"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"

interface PropsFaucet {
    value: SwabCheckType | undefined
}

export function LastFaucet({ value }: ValueDataGridColumn<>) {
    
    const result = value
    const color =
        result === SwabCheckType.ATP
            ? 'orange'
            : result === SwabCheckType.VISUAL
                ? 'blue'
                : 'red'
    return (
        <Badge colorPalette={color}>
            <SubtitleText>{value}</SubtitleText>
        </Badge>
    )
}