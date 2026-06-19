"use client"
import { Box, Editable, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { LuPencilLine } from "react-icons/lu"

export function NewFaucet() {
    const [valueFaucet, setValueFaucet] = useState('')

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
            <Editable.Preview
                w={'100%'}
                fontSize={"12px"}
                border="1px solid"
                borderColor="gray.300"
            />
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