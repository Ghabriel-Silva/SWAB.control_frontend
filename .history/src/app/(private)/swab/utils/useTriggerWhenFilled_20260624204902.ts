import { UseFormTrigger } from "react-hook-form"
import { UpdateSwabType } from "../validations/update.swab.schema"
import { useEffect } from "react"

function useTriggerWhenFilled(
    watchValue: string | undefined,
    field: keyof UpdateSwabType,
    trigger: UseFormTrigger<UpdateSwabType>
) {
    useEffect(() => {
        if (watchValue?.trim()) {
            trigger(field)
        }
    }, [watchValue, field, trigger])
}