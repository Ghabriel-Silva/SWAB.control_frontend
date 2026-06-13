
import { Flex } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { FormField, SpinnerLoading, StatEmpaty } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";
import { defaultValue } from "../../utils/defaultValue";

interface DialogContainerProps {
    row: SwabGridRow
    setIsLoading: (value: boolean) => void
}

export function BodyDialog({ row, setIsLoading }: DialogContainerProps) {
    const { data, isLoading } = useGetSwabByLote(row.lote)
    const swab = data ? data.data[0] : undefined

    if (isLoading) {
        setIsLoading(true)
    }
    return (
        <>
            {isLoading && (
                <SpinnerLoading text="Carregando Swab..." />
            )}
            {!swab && !isLoading && (
                <StatEmpaty
                    title="Erro ao carregar dados"
                    description="Não foi possivel carregar dados do swab, atualize e tente novamente"
                />
            )}
            {!isLoading && swab && (
                <Flex>
                    <FormField label="lote">
                        {swab?.internalCode}
                    </FormField>
                    <FormField label="lote">
                        {defaultValue(swab?.faucetCode)}
                    </FormField>
                </Flex>
            )}
        </>
    )
}