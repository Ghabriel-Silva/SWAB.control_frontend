
import { Flex } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { FormField } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow
}


export function BodyDialog({ row }: DialogContainerProps) {

    const { data } = useGetSwabByLote(row.lote)
    const swab = data ? data.data[0] : undefined
    return (
        <Flex>
            <FormField label="lote">
                {swabin}
            </FormField>
            <FormField label="lote">
                {data?.data?.check?.result ?? "-"}
            </FormField>
        </Flex>
    )
}