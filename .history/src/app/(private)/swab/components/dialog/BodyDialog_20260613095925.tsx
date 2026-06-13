
import { Flex, Spinner } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { FormField, SpinnerLoading, StatEmpaty } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow
}


export function BodyDialog({ row }: DialogContainerProps) {
    const { data, isLoading } = useGetSwabByLote(row.lote)
    const swab = data ? data.data[0] : undefined
    return (
        <>
            {isLoading &&  (
                <SpinnerLoading text="Carregando Swab..." />
            )}
            {!swab && !isLoading &&  (
                <StatEmpaty
                    title="Erro ao carregar dados"
                    description="Não foi possivel carregar dados do swab, atualize e tente novamente"
                />
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