"use client"

import {
    Combobox,
    Portal,
    useFilter,
    useListCollection,
} from "@chakra-ui/react"
import { useGetOperators } from "../../hooks/useGetOperators"

export const OperatorSelect = () => {

    const { data } = useGetOperators()
    console.log(data)
    const { contains } = useFilter({ sensitivity: "base" })

    const { collection, filter } = useListCollection({
        initialItems: people,
        filter: contains,
    })
    return (
        <Combobox.Root
            collection={collection}
            onInputValueChange={(e) => filter(e.inputValue)}
            size={"xs"}
        >
            <Combobox.Control>
                <Combobox.Input />
                <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                </Combobox.IndicatorGroup>
            </Combobox.Control>
            <Portal>
                <Combobox.Positioner>
                    <Combobox.Content>
                        <Combobox.Empty>Não encontrado</Combobox.Empty>
                        {collection.items.map((item) => (
                            <Combobox.Item item={item} key={item.value}>
                                {item.label}
                                <Combobox.ItemIndicator />
                            </Combobox.Item>
                        ))}
                    </Combobox.Content>
                </Combobox.Positioner>
            </Portal>
        </Combobox.Root>
    )
}

const people = [
    { label: "João Silva", value: "joao_silva" },
    { label: "Maria Souza", value: "maria_souza" },
    { label: "Pedro Santos", value: "pedro_santos" },
    { label: "Ana Oliveira", value: "ana_oliveira" },
    { label: "Lucas Pereira", value: "lucas_pereira" },
    { label: "Juliana Costa", value: "juliana_costa" },
    { label: "Gabriel Almeida", value: "gabriel_almeida" },
    { label: "Carla Ferreira", value: "carla_ferreira" },
    { label: "Rafael Martins", value: "rafael_martins" },
    { label: "Fernanda Lima", value: "fernanda_lima" },
    { label: "Bruno Rodrigues", value: "bruno_rodrigues" },
]


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
import { useAsync } from "react-use"


const OperatorSelect = () => {
    const [inputValue, setInputValue] = useState("")

    const { collection, set } = useListCollection<Character>({
        initialItems: [],
        itemToString: (item) => item.name,
        itemToValue: (item) => item.name,
    })

    const state = useAsync(async () => {
        const response = await fetch(
            `https://swapi.py4e.com/api/people/?search=${inputValue}`,
        )
        const data = await response.json()
        set(data.results)
    }, [inputValue, set])

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
                        {state.loading ? (
                            <HStack p="2">
                                <Spinner size="xs" borderWidth="1px" />
                                <Span>Loading...</Span>
                            </HStack>
                        ) : state.error ? (
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
                                            {character.height}cm / {character.mass}kg
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

interface Character {
    name: string
    height: string
    mass: string
    created: string
    edited: string
    url: string
}
