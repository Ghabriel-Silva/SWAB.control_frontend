import { SwabCheckResult } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column";
import { Badge } from "@chakra-ui/react"

export const Result = ({ value }: ValueDataGridColumn<SwabCheckResult | string>) => {
    const result = value
    const color =
        result === SwabCheckResult.APPROVED
            ? "green"
            : result === SwabCheckResult.PENDING
                ? "yellow"
                : result === SwabCheckResult.PENDING

    return (

        <Badge colorPalette={color}>
            {result}
        </Badge>
    )



}
