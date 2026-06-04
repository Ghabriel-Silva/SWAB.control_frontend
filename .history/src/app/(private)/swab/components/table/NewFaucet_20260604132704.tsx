"use client"
import { Box, Editable, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { LuPencilLine } from "react-icons/lu"

interface PropsFaucet {
    value: string | undefined
}
export function NewFaucet({ value }: PropsFaucet) {
    const [valueFaucet, setValueFaucet] = useState(value ?? '')

    const v = valueFaucet.toUpperCase()
    return (
        <Editable.Root size={"sm"}
            value={v}
            onValueChange={(e) => {
                setValueFaucet(e.value)
            }}
            justifyContent={"space-between"}
        >
            <Editable.Preview w={'100%'} bg={"blue.100"} />
            <Editable.Input />
            <Box >
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