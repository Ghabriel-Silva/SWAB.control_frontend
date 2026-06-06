import { SwabCheckResult } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column";
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { useState } from "react";


export const Result = ({ value }: ValueDataGridColumn<SwabCheckResult>) => {
    const result = value
    function mutateValue() {
        const color =
            result === SwabCheckResult.APPROVED
                ? "green"
                : result === SwabCheckResult.PENDING
                    ? "yellow"
                    : "red";

        return color
    }


    return (
      
}
const swabCheckResultCollection = createListCollection({
    items: [
        { label: "PENDENTE", value: SwabCheckResult.PENDING },
        { label: "APROVADO", value: SwabCheckResult.APPROVED },
        { label: "REPROVADO", value: SwabCheckResult.REPROVED },
    ],
})