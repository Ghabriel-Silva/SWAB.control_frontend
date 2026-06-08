"use client";

import { useEffect } from "react";
import { useGetSwab } from "../hooks/useGetData";
import { SwabTable } from "./SwabTable";
import { toaster } from "@/components/ui/toaster";
import { SwabGridRow } from "../types/swab.data-grid";
import { Badge, Box, Flex } from "@chakra-ui/react";
import { ContainerCreate } from "@/app/(private)/swab/components/index";
import { SubtitleText } from "../../components";

export default function SwabClient() {
    const { data, isLoading, isError, error } = useGetSwab();
    useEffect(() => {
        if (isError) {
            toaster.create({
                title: 'ERRO',
                description: `${error?.message}`,
                closable: true,
                duration: 4000,
                type: 'error'
            })
        }
    }, [isError, error])

    // if (isLoading) return <p>Carregando...</p>;

    const rows: SwabGridRow[] =
        data?.data?.map((item) => ({
            id: item.id,
            lote: item.internalCode,
            dateHours: item.createdAt,
            dateHourRealization: item.check.validatedAt,
            tankSilo: item.tank.name,
            lastFauct: item.lastFaucetTank,
            newFaucet: item.faucetCode,
            typeSwab: item.check.type,
            batch: item.batch,
            isCancelledSwab: item.isCancelled,
            resultSwab: item.check.result,
            valueAtp: item.check.valueAtp,
            operator: item.operator ? item.operator.name : null,
        })) ?? [];

    return (
        <Flex flexDirection={"column"} gap={4} bg={"green"} height={"100%"}>
            <ContainerCreate />
            <Box bg={"red"} height={"100"}>
                <SubtitleText textTransform={"uppercase"} pb={2}>Em andamento:
                    <Badge colorPalette={"green"} ml={1}>
                        {rows.length}
                    </Badge>
                </SubtitleText>
                <SwabTable rows={rows} loading={isLoading} />
            </Box>
        </Flex>
    );
}