import { SwabCheckResult } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column";
import { Badge } from "@chakra-ui/react"
import { defineColorResultSwab } from "@/app/(private)/utils/defineColorResultSwab";

export const Result = ({ value }: ValueDataGridColumn<SwabCheckResult>) => {
    type SwabResult = "APPROVED" | "REPROVED" | "PENDING";

    function getResultLabel(result: SwabResult) {
        switch (result) {
            case "APPROVED":
                return "Aprovado";

            case "REPROVED":
                return "Reprovado";

            case "PENDING":
                return "Pendente";

            default:
                return "Desconhecido";
        }
    }
    return (
        <Badge colorPalette={defineColorResultSwab(value)}>
            {getResultLabel(value as SwabResult)}
        </Badge>
    )



}
