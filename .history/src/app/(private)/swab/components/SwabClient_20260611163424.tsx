"use client";

import { useEffect } from "react";
import { useGetSwab } from "../hooks/useGetData";
import { SwabTable } from "./table/SwabTable";
import { toaster } from "@/components/ui/toaster";
import { SwabGridRow } from "../types/swab.data-grid";
import { Badge, Box, Flex } from "@chakra-ui/react";
import { ContainerCreate } from "@/app/(private)/swab/components";
import {
    FullScreenLoading,
    SubtitleText,
} from "@/app/(private)/components";

import {
    useRouter,
    useSearchParams,
} from "next/navigation";

export default function SwabClient() {
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())

        let changed = false

        if (!params.has("result")) {
            params.set("result", "PENDING");
            changed = true
        }

        if (!params.has("page")) {
            params.set("page", "1")
            changed = true
        }

        if (!params.has("limit")) {
            params.set("limit", "20")
            changed = true
        }

        if (changed) {
            router.replace(`/swab?${params.toString()}`)
        }
    }, [router, searchParams]);

    const result = searchParams.get("result") ?? "PENDING"
    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 20)
    const limitDefault 

    const { data, isLoading, isError, error } = useGetSwab({
        result,
        page,
        limit,
    });

    useEffect(() => {
        if (isError) {
            toaster.create({
                title: "ERRO",
                description: error?.message,
                closable: true,
                duration: 4000,
                type: "error",
            });
        }
    }, [isError, error]);

    if (isLoading) {
        return <FullScreenLoading />
    }

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
            operator: item.operator?.name ?? null,
        })) ?? []

    return (
        <Flex flexDirection="column" gap={4} height="100%">
            <ContainerCreate />

            <Box
                flex={1}
                minH={0}
                display="flex"
                flexDirection="column"
            >
                <SubtitleText textTransform="uppercase" pb={2}>
                    Em andamento:
                    <Badge colorPalette="green" ml={1}>
                        {rows.length}
                    </Badge>
                </SubtitleText>

                <SwabTable
                    rows={rows}
                    loading={isLoading}
                    dataMeta={data!.meta}
                />
            </Box>
        </Flex>
    );
}