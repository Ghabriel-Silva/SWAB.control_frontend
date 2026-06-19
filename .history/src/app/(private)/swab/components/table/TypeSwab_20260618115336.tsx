import { SwabCheckType } from "@/app/(private)/types/swab"
import { Badge, } from "@chakra-ui/react"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"

export function TypeSwab({ value }: ValueDataGridColumn<SwabCheckType | string>) {
    return (
        <Badge colorPalette={} >
            {result}
        </Badge>
    )
}

