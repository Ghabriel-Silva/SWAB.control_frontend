import { SimpleGrid } from "@chakra-ui/react"
import { FormProvider, useForm} from "react-hook-form"
import {  } from "@/app/(private)/swab/components/index";

export const InfoMutate = () => {
    const methods = useForm({
        mode: 'onBlur'
    })
    const {
        reset,
        handleSubmit,
        formState: { errors }
    } = methods

    return (
        <FormProvider {...methods}>
            <form>
                <SimpleGrid>


                </SimpleGrid>
            </form>
        </FormProvider>
    )
}