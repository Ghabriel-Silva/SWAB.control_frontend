import { Editable } from "@chakra-ui/react"

export function DateHours(value: Date) {
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