import { VStack } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { SpinnerLoading, StatEmpaty } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";
import { InfoStatic, InfoMutate } from "@/app/(private)/swab/components/index";

interface DialogContainerProps {
    row: SwabGridRow
    setIsLoadingFn: (value: boolean) => void
    onSuccess?: () => void
    formRef?: React.RefObject<HTMLFormElement | null>
}

export function BodyDialog({ row, setIsLoadingFn, onSuccess, formRef }: DialogContainerProps) {
    const { data, isLoading } = useGetSwabByLote(row.lote)
    const swab = data ? data.data[0] : undefined

    if (isLoading || !swab) {
        setIsLoadingFn(true)
    } else {
        setIsLoadingFn(false)
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
                <VStack gap={2} >
                    <InfoStatic swab={swab} />
                    <InfoMutate  onSuccess={onSuccess} swab={swab} />
                </VStack>
            )}
        </>
    )
}