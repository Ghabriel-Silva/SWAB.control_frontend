import { SwabCheckResult } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column";
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { useState } from "react";


export const ResultSelect = ({ value }: ValueDataGridColumn<SwabCheckResult>) => {
    return (
        <Select.Root
            collection={swabCheckResultCollection}
            size="xs"
        >
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.Indicator color="colorPalette.fg" />
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {swabCheckResultCollection.items.map((Result) => (
                            <Select.Item item={Result} key={Result.value}>
                                {Result.label}
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    );
}
const swabCheckResultCollection = createListCollection({
    items: [
        { label: "PENDENTE", value: SwabCheckResult.PENDING },
        { label: "APROVADO", value: SwabCheckResult.APPROVED },
        { label: "REPROVADO", value: SwabCheckResult.REPROVED },
    ],
})