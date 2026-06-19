import { SwabCheckType } from "@/app/(private)/types/swab"
import { Badge, } from "@chakra-ui/react"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"
import { defineColorTypeSwab } from "@/app/(private)/utils/defineColorTypeSwab"

export function TypeSwab({ value }: ValueDataGridColumn<SwabCheckType>) {
    return (
        <Badge va colorPalette={defineColorTypeSwab(value)} >
            {value}
        </Badge>
    )
}

