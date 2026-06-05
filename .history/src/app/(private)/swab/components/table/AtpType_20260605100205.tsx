import { SwabCheckType } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"
import { Editable } from "@chakra-ui/react"


export const AtpType = (value: ValueDataGridColumn<SwabCheckType>) => {
    return (
        <Editable.Root defaultValue={params.value ?? ''}>
            <Editable.Preview />
            <Editable.Input />
            <Editable.Control>
                <Editable.EditTrigger asChild>
                    <IconButton variant="ghost" size="xs">
                        <LuPencilLine />
                    </IconButton>
                </Editable.EditTrigger>
            </Editable.Control>
        </Editable.Root>
    )
} 