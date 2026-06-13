
import { Flex, Spinner } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { FormField , StatEmpaty} from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow
}


export function BodyDialog({ row }: DialogContainerProps) {
    const { data, isLoading } = useGetSwabByLote(row.lote)
    const swab = data ? data.data[0] : undefined
    return (
        <>
            {isLoading && (
                
                <Spinner size="sm" />
            )}
            {!swab && (
                <Stat
            )}
            <Flex>
                <FormField label="lote">
                    {swab?.internalCode}
                </FormField>
                <FormField label="lote">
                    {swab?.faucetCode ?? "-"}
                </FormField>
            </Flex>
        </>

    )
}