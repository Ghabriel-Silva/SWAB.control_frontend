"use client"

import {
    Combobox,
    HStack,
    Portal,
    Span,
    Spinner,
    useListCollection,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

import { useGetOperators } from "../../hooks/useGetOperators"
import { Operator } from "../../types/operators/operator.response"

export const OperatorSelect = () => {
    const { data, isLoading, isError } = useGetOperators()

    const [inputValue, setInputValue] = useState()

    const { collection, set } = useListCollection<Operator>({
        initialItems: [],
        itemToString: (item) => item.name,
        itemToValue: (item) => item.id,
    })

    useEffect(() => {
        if (data?.data) {
            set(data.data)
        }
    }, [data, set])

    return (
        <Combobox.Root
            width="320px"
            collection={collection}
            onInputValueChange={(e) => setInputValue(e.inputValue)}
            positioning={{ sameWidth: false, placement: "bottom-start" }}
        >
            <Combobox.Label>Operadores</Combobox.Label>

            <Combobox.Control>
                <Combobox.Input placeholder="Pesquisar operador" />
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
                                <Span>Carregando...</Span>
                            </HStack>
                        ) : isError ? (
                            <Span p="2" color="fg.error">
                                Erro ao buscar operadores
                            </Span>
                        ) : (
                            collection.items.map((operator) => (
                                <Combobox.Item key={operator.id} item={operator}>
                                    <HStack justify="space-between" textStyle="sm">
                                        <Span fontWeight="medium" truncate>
                                            {operator.name}
                                        </Span>

                                        <Span color="fg.muted" truncate>
                                            {operator.position.name}
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