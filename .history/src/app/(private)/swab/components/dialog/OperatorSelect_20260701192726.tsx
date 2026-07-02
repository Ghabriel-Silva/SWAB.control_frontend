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
        render={({field}=>(

        ))}
        />
       
    )
}