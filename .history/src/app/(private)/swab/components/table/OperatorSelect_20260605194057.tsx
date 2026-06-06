"use client"

import {
    Combobox,
    Portal,
    useFilter,
    useListCollection,
} from "@chakra-ui/react"

export const OperatorSelect = () => {
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
                <Combobox.Input  />
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