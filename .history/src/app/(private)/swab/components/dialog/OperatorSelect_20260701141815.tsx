"use client"

import {
    Combobox,
    HStack,
    Portal,
    Span,
    Spinner,
    useListCollection,
} from "@chakra-ui/react"
import { useState } from "react"
import { useGetOperators } from "../../hooks/useGetOperators"
import { OperatorsResponse } from "../../types/operators/operator.response"
import { Operator } from "../../types/swab.response"


export const OperatorSelect = () => {
    const { data, isLoading, isError } = useGetOperators()

    if (!data?.data) return 'erro ao buscar'
    const [inputValue, setInputValue] = useState("")


    const { collection, set } = useListCollection<Operator>({
        initialItems: [],
        itemToString: (item) => item.id,
        itemToValue: (item) => item.name,
    })
    set(data?.data)
    return (
        <Combobox.Root
            width="320px"
            collection={collection}
            placeholder="Example: C-3PO"
            onInputValueChange={(e) => setInputValue(e.inputValue)}
            positioning={{ sameWidth: false, placement: "bottom-start" }}
        >
            <Combobox.Label>Search Star Wars Characters</Combobox.Label>

            <Combobox.Control>
                <Combobox.Input placeholder="Type to search" />
                <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                </Combobox.IndicatorGroup>
            </Combobox.Control>

            <Portal>
                <Combobox.Positioner>
                    <Combobox.Content minW="sm">
                        {isLoading ? (
                            <HStack p="2">
                                <Spinner size="xs" borderWidth="1px" />
                                <Span>Loading...</Span>
                            </HStack>
                        ) : isError ? (
                            <Span p="2" color="fg.error">
                                Error fetching
                            </Span>
                        ) : (
                            collection.items?.map((character) => (
                                <Combobox.Item key={character.name} item={character}>
                                    <HStack justify="space-between" textStyle="sm">
                                        <Span fontWeight="medium" truncate>
                                            {character.name}
                                        </Span>
                                        <Span color="fg.muted" truncate>
                                            {character.id}
                                        </Span>
                                    </HStack>
                                    <Combobox.ItemIndicator />
                                </Combobox.Item>
                            ))
                        )}
                    </Combobox.Content>
                </Combobox.Positioner>
            </Portal>
        </Combobox.Root>
    )
}
