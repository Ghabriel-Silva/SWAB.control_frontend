import { Editable, IconButton } from "@chakra-ui/react"
import { LuPencilLine } from "react-icons/lu"

export function DateHours(value: string) {
        return (
        <Editable.Root defaultValue={value ?? ''}>
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