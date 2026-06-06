import { SwabCheckType } from "@/app/(private)/types/swab"
import { Badge, Portal, Select, createListCollection } from "@chakra-ui/react"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"

export function TypeSwab({ value }: ValueDataGridColumn<SwabCheckType>) {
    

    const result = value
    const color =
        result === SwabCheckType.ATP
            ? 'orange'
            : result === SwabCheckType.VISUAL
                ? 'blue'
                : 'red'
    return (
      <Badge>
        
      </Badge>
    )
}

