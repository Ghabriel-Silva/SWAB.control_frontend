import { SimpleGrid } from "@chakra-ui/react"
import { FormProvider, useForm } from "react-hook-form"

export const InfoMutate = () => {

    const methods = useForm({
        mode:'onBlur'
    })

    const {

    } = me

    return (
        <FormProvider>
            <form>
                <SimpleGrid>

                </SimpleGrid>
            </form>
        </FormProvider>
    )
}