import { SwabCheckResult } from "@/app/(private)/types/swab"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form";
import { UpdateSwabType } from "../../validations/update.swab.schema";


export const ResultSelect = () => {

    const { control } = useFormContext<UpdateSwabType>()
    return (
        <Contro
    );
}
const swabCheckResultCollection = createListCollection({
    items: [
        { label: "PENDENTE", value: SwabCheckResult.PENDING },
        { label: "APROVADO", value: SwabCheckResult.APPROVED },
        { label: "REPROVADO", value: SwabCheckResult.REPROVED },
    ],
})