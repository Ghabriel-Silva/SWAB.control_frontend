import { Editable, IconButton } from "@chakra-ui/react"
import { LuPencilLine } from "react-icons/lu"

interface PropsFaucet {
    value: string | undefined
}
export function NewFaucet({ value }: PropsFaucet) {
    const valueFaucet = value ?? ''
    return ( 
        <Editable.Root size={"sm"} defaultValue={valueFaucet}>
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