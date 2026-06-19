import { SwabCheckResult } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column";
import { Badge } from "@chakra-ui/react"
import { defineColorResultSwab } from "@/app/(private)/utils/defineColorResultSwab";

export const Result = ({ value }: ValueDataGridColumn<SwabCheckResult>) => {
    return (

        <Badge variant colorPalette={defineColorResultSwab(value)}>
            {value}
        </Badge>
    )



}
