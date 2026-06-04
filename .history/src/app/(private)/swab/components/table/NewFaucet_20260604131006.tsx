import { Badge, Box, Editable, Flex, IconButton } from "@chakra-ui/react"
import { LuPencilLine } from "react-icons/lu"

interface PropsFaucet {
    value: string | undefined
}
export function NewFaucet({ value }: PropsFaucet) {
    const valueFaucet = value ?? ''
    return ( 
        <Editable.Root size={"sm"} defaultValue={valueFaucet}  justifyContent={"space-between"}>
            <Editable.Preview  />
            <Editable.Input />
            <Box  >
                <Editable.Control>
                    <Editable.EditTrigger asChild>
                        <IconButton variant="ghost" size="xs">
                            <LuPencilLine />
                        </IconButton>
                    </Editable.EditTrigger>
                </Editable.Control>
            </Box>
        </Editable.Root>
    )
}