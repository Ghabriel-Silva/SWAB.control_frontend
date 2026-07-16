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
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";
import { FilterSwab } from "../consult/components/FilterSwab";
import { GetSwabsParams } from "../types/get.swab.params";


interface PropsSwabClient {
    hasFilter?: boolean
    filterDinamic?: {
        result?: string
    }
}
export default function SwabClient({ hasFilter = false, filterDinamic }: PropsSwabClient) {

    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const paramsFilter: GetSwabsParams= {
        locationId: "d511f83d-5139-11f1-bb46-40c2bae13fc2",
        operatorId: "22222222-2222-2222-2222-222222222222",
        result: "PENDING" | unde,
        internalCode: "SW26060048",
        type: "ATP",
        startDate: "2026-05-21",
        endDate: "2026-05-24",
        isCancelled: true,
        page: 1,
        limit: 20,
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())
        console.log(params)


        let changed = false

        if (!params.has("result")) {
            params.set("result", 'APPROVED');
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
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [router, searchParams]);

    const result = searchParams.get("result") ?? "PENDING"
    const page = Number(searchParams.get("page") ?? 1);
    const rawLimit = Number(searchParams.get("limit") ?? 20)
    const limit = Math.min(rawLimit, 100)

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

    if (isLoading && !data) {
        return <FullScreenLoading />
    }

    const rows: SwabGridRow[] =
        data?.data?.map((item) => ({
            id: item.id,
            lote: item.internalCode,
            dateHours: item.createdAt,
            dateHourRealization: item.check.validatedAt,
            location: item.location.name,
            lastFauct: item.lastFaucetLocation,
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
            {hasFilter ? (
                <FilterSwab />
            )
                :
                (
                    <ContainerCreate />
                )}
            <Box
                flex={1}
                minH={0}
                display="flex"
                flexDirection="column"
            >
                <SubtitleText textTransform="uppercase" pb={2}>
                    Em andamento:
                    <Badge colorPalette="green" ml={1}>
                        {data?.meta.total}
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