
import { Flex } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { FormField } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow
}


export function BodyDialog({ row }: DialogContainerProps) {

    const { data } = useGetSwabByLote(row.lote)
    const swab = data ? data[0] : []

    return (
        <Flex>
            <FormField label="lote">
                {data?.data.id}
            </FormField>
            <FormField label="lote">
                {data?.data?.check?.result ?? "-"}
            </FormField>
        </Flex>
    )
}