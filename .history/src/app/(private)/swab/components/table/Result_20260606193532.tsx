import { SwabCheckResult } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column";
import { Badge } from "@chakra-ui/react"

export const Result = ({ value }: ValueDataGridColumn<SwabCheckResult >) => {
    const result = value
    const color =
        result === SwabCheckResult.APPROVED
            ? "green"
            : result === SwabCheckResult.PENDING
                ? "yellow"
                : "red";


    return (

        <Badge colorPalette={color}>
            {result}
        </Badge>
    )



}
