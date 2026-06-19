import { SimpleGrid } from "@chakra-ui/react"
import { FormProvider, useForm } from "react-hook-form"

export const InfoMutate = () => {

    const methods = useForm({
        mode:'onBlur'
    })

    const {
        reset, 
        handleSubmit, 
        useSta
    } = methods

    return (
        <FormProvider>
            <form>
                <SimpleGrid>

                </SimpleGrid>
            </form>
        </FormProvider>
    )
}