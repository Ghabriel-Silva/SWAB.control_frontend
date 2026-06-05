"use client"
import { Box, Editable, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { LuPencilLine } from "react-icons/lu"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"

interface PropsFaucet {
    value: string | undefined
}
export function NewFaucet({ value }: ValueDataGridColumn<string | undefined>) {
    const [valueFaucet, setValueFaucet] = useState(value ?? '')

    return (
        <Editable.Root
            size={"sm"}
            textTransform="uppercase"
            value={valueFaucet}
            onValueChange={(e) => {
                setValueFaucet(e.value.toUpperCase())
            }}
            justifyContent={"space-between"}
        >
            <Editable.Preview w={'100%'} bg={"gray.subtle"} fontSize={"12px"}/>
            <Editable.Input fontSize={"xs"} />
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