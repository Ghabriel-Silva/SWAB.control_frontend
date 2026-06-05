import { ValueDataGridColumn } from "../../types/value.data-grid.column"
import { Editable, IconButton } from "@chakra-ui/react"
import { LuPencilLine } from "react-icons/lu"


export const ValueAtp = ({ value }: ValueDataGridColumn<string>) => {
    return (
        <Editable.Root
            defaultValue={value}
            size={"sm"}
            justifyContent={"space-between"}
        >
            <Editable.Preview w={'100%'} bg={"gray.subtle"} fontSize={"12px"} />
            <Editable.Input  fontSize={"xs"} border={"1px solid gray.300"}/>
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