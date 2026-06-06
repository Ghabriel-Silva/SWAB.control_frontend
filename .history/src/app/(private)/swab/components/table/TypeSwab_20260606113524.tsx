import { SwabCheckType } from "@/app/(private)/types/swab"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"
import { useState } from "react"


export function TypeSwab({ value }: ValueDataGridColumn<SwabCheckType>) {
    const [valueType, setValueType] = useState<string[]>([value])

    return (
        <Badge
    )
}

const swabTypeCollection = createListCollection({
    items: [
        { label: "ATP", value: SwabCheckType.ATP },
        { label: "MICRO", value: SwabCheckType.MICRO },
        { label: "VISUAL", value: SwabCheckType.VISUAL },
    ],
})