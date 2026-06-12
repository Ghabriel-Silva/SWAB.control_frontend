
import { Flex } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { FormField } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow
}


export function BodyDialog({ row }: DialogContainerProps) {

    const { data } = useGetSwabByLote(row.lote)
     console.log("BodyDialog renderizou")
    return (
        <Flex>
            <FormField label="lote">
                {/* {data?.data.} */}
            </FormField>
            <FormField label="lote">
                {data?.data.check.validatedAt}
            </FormField>
        </Flex>
    )
}