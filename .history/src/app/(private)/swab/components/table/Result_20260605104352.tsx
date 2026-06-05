import { SubtitleText } from "@/app/(private)/components/index";
import { SwabCheckResult } from "@/app/(private)/types/swab"
import { Badge, Box } from "@chakra-ui/react";
import { ValueDataGridColumn } from "../../types/value.data-grid.column";
import { Portal, Select, createListCollection } from "@chakra-ui/react"


export const Result = ({ value }: ValueDataGridColumn<SwabCheckResult>) => {
    const result = value

    const color =
        result === SwabCheckResult.APPROVED
            ? "green"
            : result === SwabCheckResult.PENDING
                ? "yellow"
                : "red";

    return (
        <Select.Root
            colorPalette={color}
            collection={swabCheckResultCollection}
            size="xs"
        >
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger
                    borderColor="colorPalette.muted"
                    bg="colorPalette.subtle"
                    color="colorPalette.fg"
                >
                    <Select.ValueText placeholder="Select framework" />
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
        { label: "Aprovado", value: SwabCheckResult.APPROVED },
        { label: "Reprovado", value: SwabCheckResult.REPROVED },
    ],
})