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
import { SwabSelectProps } from "../../types/swab.select.props"
import { capitalizeWords } from "@/app/shared/utils/capitalizeWords"

export const OperatorSelect = ({ size = "xs", placeholder = "Pesquisar operador", clearable = true }: SwabSelectProps) => {
    const { control } = useFormContext<{ operatorId: string }>()

    const { data, isLoading, isError } = useGetOperators()

    const { collection, set, filter } = useListCollection<Operator>({
        initialItems: data?.data ?? [],
        itemToString: (item) => item.name,
        itemToValue: (item) => item.id,
        filter: (text, query, item) => `${text} ${item.position?.name ?? ""}`.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR")),
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
                    name={field.name}
                    value={field.value ? [field.value] : []}
                    size={size}
                    positioning={{ sameWidth: true, fitViewport: true }}
                    collection={collection}
                    onValueChange={({ value }) => {
                        field.onChange(value[0] ?? '')
                    }}
                    onInputValueChange={({ inputValue }) => filter(inputValue)}
                    onOpenChange={({ open }) => { if (!open) filter("") }}
                    openOnClick
                >
                    <Combobox.Control>
                        <Combobox.Input ref={field.ref} onBlur={field.onBlur} placeholder={placeholder} />
                        <Combobox.IndicatorGroup>
                            {clearable && <Combobox.ClearTrigger />}
                            <Combobox.Trigger />
                        </Combobox.IndicatorGroup>
                    </Combobox.Control>

                    <Portal>
                        <Combobox.Positioner>
                            <Combobox.Content overflowX="hidden">
                                {isLoading ? (
                                    <HStack p="2">
                                        <Spinner size="xs" borderWidth="1px" />
                                        <Span>Carregando...</Span>
                                    </HStack>
                                ) : isError ? (
                                    <Span p="2" color="fg.error">
                                        Erro ao buscar operadores
                                    </Span>
                                ) : collection.items.length === 0 ? (
                                    <Span p="2" color="fg.muted">Nenhum operador encontrado</Span>
                                ) : (
                                    collection.items.map((operator) => (
                                        <Combobox.Item key={operator.id} item={operator}>
                                            <HStack
                                                justify="space-between"
                                                textStyle="sm"
                                                flex={1}
                                                minW={0}
                                                gap={2}
                                                cursor="pointer"
                                            >

                                                <Span
                                                    title={capitalizeWords(operator.name)}
                                                    fontWeight="normal"
                                                    flex={1}
                                                    minW={0}
                                                    truncate
                                                >
                                                    {capitalizeWords(operator.name)}
                                                </Span>
                                                    <Span
                                                        title={capitalizeWords(operator.position?.name ?? "")}
                                                        color="fg.muted"
                                                        flex={1}
                                                        minW={0}
                                                        truncate
                                                    >
                                                        {operator.position?.name}
                                                    </Span>                                            
                                            </HStack>

                                            <Combobox.ItemIndicator flexShrink={0} />
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
