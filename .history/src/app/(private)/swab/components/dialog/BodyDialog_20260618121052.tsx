import {  Box } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { SpinnerLoading, StatEmpaty } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";
import { InfoStatic } from "@/";

interface DialogContainerProps {
    row: SwabGridRow
    setIsLoadingFn: (value: boolean) => void
}

export function BodyDialog({ row, setIsLoadingFn }: DialogContainerProps) {
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
                <Box >
                    <InfoStatic swab={swab} />
                    <InfoMutate />
                </Box>
            )}
        </>
    )
}