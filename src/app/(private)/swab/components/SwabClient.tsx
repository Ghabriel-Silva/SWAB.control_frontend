"use client";

import { useEffect } from "react";
import { useGetSwab } from "../hooks/useGetData";
import { SwabTable } from "./table/SwabTable";
import { toaster } from "@/components/ui/toaster";
import { SwabGridRow } from "../types/swab.data-grid";
import { Badge, Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { ContainerCreate } from "@/app/(private)/swab/components";
import {
    FullScreenLoading,
    SubtitleText,
} from "@/app/(private)/components";

import { useSearchParams } from "next/navigation";
import { FilterSwab } from "../consult/components/FilterSwab";
import { GetSwabsParams } from "../types/get.swab.params";
import { SwabCheckResult } from "../../types/swab";
import { getDefaultDateRange } from "../consult/utils/getDefaultDateRange";
import { filterSwabSchema } from "../consult/validations/filter.swab.schema";


interface PropsSwabClient {
    hasFilter?: boolean
    filterDinamic?: {
        result?: SwabCheckResult
    }
}
export default function SwabClient({ hasFilter = false, filterDinamic }: PropsSwabClient) {

    const searchParams = useSearchParams();
    const isDesktop = useBreakpointValue({ base: false, lg: true }) ?? false;

    const urlFilters = filterSwabSchema.cast(
        Object.fromEntries(searchParams),
        { stripUnknown: true }
    )
    const defaultDates = getDefaultDateRange()

    const formValues = {
        ...urlFilters,
        startDate: searchParams.get("startDate") ?? defaultDates.startDate,
        endDate: searchParams.get("endDate") ?? defaultDates.endDate,
    }
    const order = searchParams.get("order")

    const filters: GetSwabsParams = {
        ...urlFilters,
        performedType: urlFilters.performedType || undefined,
        result: urlFilters.result || (
            hasFilter ? undefined : filterDinamic?.result ?? SwabCheckResult.PENDING
        ),

        isCancelled: urlFilters.isCancelled === ""
            ? (hasFilter ? undefined : false)
            : urlFilters.isCancelled === "true",
        limit: Number(searchParams.get("limit") ?? 20),
        page: Number(searchParams.get("page") ?? 1),
        order: order === "ASC" || order === "DESC" ? order : undefined,
    };

    const { data, isLoading, isFetching, isError, error } = useGetSwab(filters);

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

    if (isLoading && !data && !hasFilter) {
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
            justificationLastReprovation: item.check?.justificationLastReprovation ?? null
        })) ?? []

    return (
        <Flex flexDirection="column" gap={4} height="100%" overflowY="auto">
            {hasFilter ? (
                <FilterSwab
                    key={JSON.stringify(formValues)}
                    values={formValues}
                    alwaysOpen={isDesktop}
                    locations={[]}
                    locationsError="Locais indisponíveis no momento."
                    loading={isFetching}
                />
            )
                :
                (
                    <ContainerCreate />
                )}
            <Box
                flex={1}
                minH={hasFilter ? "320px" : 0}
                display="flex"
                flexDirection="column"
            >
                <SubtitleText textTransform="uppercase" pb={2}>
                    {hasFilter ? "Registros SWAB:" : "Em andamento:"}
                    <Badge colorPalette="green" ml={1}>
                        {data?.meta.total}
                    </Badge>
                </SubtitleText>

                <SwabTable
                    rows={rows}
                    loading={isFetching}
                    dataMeta={{
                        page: filters.page ?? 1,
                        limit: filters.limit ?? 20,
                        total: data?.meta.total ?? 0,
                        totalPages: data?.meta.totalPages ?? 0,
                    }}
                    hasFilter={hasFilter}
                />
            </Box>
        </Flex>
    );
}
