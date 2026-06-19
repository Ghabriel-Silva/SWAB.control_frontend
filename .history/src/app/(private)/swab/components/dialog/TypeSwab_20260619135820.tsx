import { SwabCheckType } from "@/app/(private)/types/swab"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
import { UpdateSwabType } from "../../validations/update.swab.schema"

export function TypeSwabSelect() {
    const { control } = useFormContext<UpdateSwabType>()
    return (
        <Controller
            control={control}
            name="performedType"
            render={({ field }) => (
                <Select.Root
                    collection={swabTypeCollection}
                    size="xs"
                    value={field.value ? [field.value] : []}
                    onValueChange={(details)=>{
                        field.onChange(fi)
                    }}
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
                                {swabTypeCollection.items.map((Result) => (
                                    <Select.Item item={Result} key={Result.value}>
                                        {Result.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
            )}
        />
    )
}

const swabTypeCollection = createListCollection({
    items: [
        { label: "ATP", value: SwabCheckType.ATP },
        { label: "MICRO", value: SwabCheckType.MICRO },
        { label: "VISUAL", value: SwabCheckType.VISUAL },
    ],
})