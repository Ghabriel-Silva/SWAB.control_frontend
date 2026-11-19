"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import { OptionalView } from "@/app/(private)/components";
import { AreaSelect } from "@/app/(private)/area/components/AreaSelect";
import { saveAreaId } from "@/app/(private)/area/hooks/useSavedAreaId";
import {
    FormProvider,
    useForm
} from "react-hook-form";
import {
    usePathname,
    useRouter,
    useSearchParams
} from "next/navigation";
import { Location } from "../../types/swab.response";
import { getDefaultDateRange } from "../utils/getDefaultDateRange";
import { LocationFilter } from "./LocationFilter";
import { OperatorFilter } from "./OperatorFilter";
import { TypeFilter } from "./TypeFilter";
import { ResultFilter } from "./ResultFilter";
import { CancelledFilter } from "./CancelledFilter";
import { InternalCodeFilter } from "./InternalCodeFilter";
import { DateFilter } from "./DateFilter";
import { FilterActions } from "./FilterActions";
import { yupResolver } from "@hookform/resolvers/yup";
import { filterSwabSchema, SwabFilterValues } from "../validations/filter.swab.schema";
import { Can } from "@/permissions/can";
import { Role } from "@/permissions/roles";
import { CanView } from "@/permissions/canView";

interface FilterSwabProps {
    locations: Location[];
    locationsLoading?: boolean;
    locationsError?: string;
    loading: boolean;
    values: SwabFilterValues;
    alwaysOpen?: boolean;
}

export function FilterSwab({
    locations,
    locationsLoading,
    locationsError,
    loading,
    values,
    alwaysOpen = false
}: FilterSwabProps) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const methods = useForm<SwabFilterValues>({
        resolver: yupResolver(filterSwabSchema),
        defaultValues: values,
    });
    const {
        handleSubmit,
        reset,
        formState: { isDirty }
    } = methods;

    function applyFilters(filters: SwabFilterValues) {
        const params = new URLSearchParams(searchParams.toString())

        Object.entries(filters).forEach(([key, value]) => {
            params.delete(key)

            if (value || key === "areaId" || key === "startDate" || key === "endDate") {
                params.set(key, value);
            }
        })

        params.delete("type")
        params.set("page", "1")

        saveAreaId(filters.areaId)

        reset(filters, { keepFieldsRef: true })

        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }

    function clearFilters() {
        applyFilters({
            ...filterSwabSchema.getDefault(),
            ...getDefaultDateRange(),
        })
    }

    return (
        <FormProvider {...methods}>
            <Box
                asChild
                border="1px solid"
                borderColor="gray.200"
                p={2}
                borderRadius="sm"
                flexShrink={0}
            >
                <form
                    noValidate
                    onSubmit={handleSubmit((filters) => {
                        if (isDirty) {
                            applyFilters(filters);
                        }
                    })}
                >
                    <OptionalView title="Filtros" alwaysOpen={alwaysOpen}>
                        <Flex
                            wrap="wrap"
                            gap={3}
                            alignItems="start"
                            css={{
                                "& > :not([data-filter-actions]):not([data-filter-date])": {
                                    flex: "1 1 180px",
                                    maxWidth: "350px",
                                    minWidth: 0
                                },
                            }}
                        >
                            <AreaSelect />
                            <LocationFilter
                                locations={locations}
                                loading={locationsLoading}
                                error={locationsError}
                            />
                            <CanView userRole={[Role.ADMIN, Role.LAB, Role.OWNER]} >
                                <OperatorFilter />
                            </CanView>

                            <TypeFilter />
                            <ResultFilter />
                            <CancelledFilter />
                            
                            <CanView userRole={[Role.ADMIN, Role.LAB, Role.OWNER]} >
                                <InternalCodeFilter />
                            </CanView>
            
                            <DateFilter
                                name="startDate"
                                label="Data inicial"
                            />
                            <DateFilter
                                name="endDate"
                                label="Data final"
                            />
                            <FilterActions
                                loading={loading}
                                onClear={clearFilters}
                                disabled={!isDirty}
                            />
                        </Flex>
                    </OptionalView>
                </form>
            </Box>
        </FormProvider>
    );
}
