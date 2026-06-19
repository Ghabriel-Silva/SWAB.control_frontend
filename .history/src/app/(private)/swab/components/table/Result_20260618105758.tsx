import { SwabCheckResult } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column";
import { Badge } from "@chakra-ui/react"

export const Result = ({ value }: ValueDataGridColumn<SwabCheckResult | string>) => {
    return (

        <Badge colorPalette={re}>
            {value}
        </Badge>
    )



}
