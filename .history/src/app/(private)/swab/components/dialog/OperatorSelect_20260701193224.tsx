"use client"

import {
    Combobox,
    HStack,
    Portal,
    Span,
    Spinner,
    useListCollection,
} from "@chakra-ui/react"
import { useEffect } from "react"

import { useGetOperators } from "../../hooks/useGetOperators"
import { Operator } from "../../types/operators/operator.response"
import { Controller, useFormContext } from "react-hook-form"
import { UpdateSwabType } from "../../validations/update.swab.schema"

export const OperatorSelect = () => {
    const { control } = useFormContext<UpdateSwabType>()

    const { data, isLoading, isError } = useGetOperators()

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
        <Controller
            control={control}
            name="operatorId"
            render={({ field }) => (
                <Combobox.Root
                    value={field.value ? [field.value] : []}
                    size={"xs"}
                    collection={collection}
                    onValueChange={({ value }) => {
                        field.onChange(value[0] || '0')
                    }}
                    openOnClick
                >
                    <Combobox.Control>
                        <Combobox.Input placeholder="Pesquisar operador" />
                        <Combobox.IndicatorGroup>
                            <Combobox.ClearTrigger />
                            <Combobox.Trigger />
                        </Combobox.IndicatorGroup>
                    </Combobox.Control>

                    <Portal>
                        <Combobox.Positioner>
                            <Combobox.Content>
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
            )}
        />

    )
}