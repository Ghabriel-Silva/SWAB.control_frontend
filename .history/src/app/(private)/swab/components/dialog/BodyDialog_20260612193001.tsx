
import { Flex } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { FormField } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow
}


export function BodyDialog({ row }: DialogContainerProps) {
    
    const { data } = useGetSwabByLote()

    return (
        <Flex>
            <FormField label="lote">
                {row.lote}
            </FormField>
            <FormField label="lote">
                {row.dateHourRealization}
            </FormField>
        </Flex>
    )
}