import { Editable } from "@chakra-ui/react"


export function DateHours(value: Date) {
    return (
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
    )
}