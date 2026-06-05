import { SwabCheckType } from "@/app/(private)/types/swab"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"
import { Editable, IconButton } from "@chakra-ui/react"
import { LuPencilLine } from "react-icons/lu"


export const ValueAtp = (value: ValueDataGridColumn<number | undefined>) => {
    return (
        <Editable.Root defaultValue={String}>
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