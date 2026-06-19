import { SwabCheckType } from "@/app/(private)/types/swab"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
import { UpdateSwabType } from "../../validations/update.swab.schema"

export function TypeSwabSelect() {
    const {control} = useFormContext<UpdateSwabType>()
    return (
        <Controller 
        control={control}
        name="performedType"
        
        />
    )
}

const swabTypeCollection = createListCollection({
    items: [
        { label: "ATP", value: SwabCheckType.ATP },
        { label: "MICRO", value: SwabCheckType.MICRO },
        { label: "VISUAL", value: SwabCheckType.VISUAL },
    ],
})