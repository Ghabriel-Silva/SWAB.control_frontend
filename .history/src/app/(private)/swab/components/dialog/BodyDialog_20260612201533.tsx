
import { Flex, Spinner } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { FormField } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow
}


export function BodyDialog({ row }: DialogContainerProps) {
    const { data, isLoading } = useGetSwabByLote(row.lote)
    const swab = data ? data.data[0] : undefined
    return (
        <Flex>
            {isLoading && (
            <Spinnerz size="sm" />
            ) }
            <FormField label="lote">
                {swab?.internalCode}
            </FormField>
            <FormField label="lote">
                {swab?.faucetCode ?? "-"}
            </FormField>
        </Flex>
    )
}