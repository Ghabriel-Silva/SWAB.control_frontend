import { SwabCheckResult } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column";
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { useState } from "react";


export const Result = ({ value }: ValueDataGridColumn<SwabCheckResult>) => {
    const [valueResult, setValueResult] = useState<Swab[]>([value])
    const result = value
    function mutateValue() {
        const color =
            valueResult === SwabCheckResult.APPROVED
                ? "green"
                : result === SwabCheckResult.PENDING
                    ? "yellow"
                    : "red";

        return color
    }
    return (
        <Select.Root
            value={valueResult}
            colorPalette={mutateValue()}
            collection={swabCheckResultCollection}
            size="xs"
            onValueChange={(e) => {
                setValueResult(e.value)
                mutateValue()
            }}
        >
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger
                    borderColor="colorPalette.muted"
                    bg="colorPalette.subtle"
                    color="colorPalette.fg"
                >
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