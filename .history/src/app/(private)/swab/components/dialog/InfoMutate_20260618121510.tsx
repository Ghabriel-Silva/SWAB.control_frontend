import { SimpleGrid } from "@chakra-ui/react"
import { FormProvider, useForm } from "react-hook-form"

export const InfoMutate = () => {

    const methods = useForm({
        reset
    })
    return (
        <FormProvider>
            <form>
                <SimpleGrid>

                </SimpleGrid>
            </form>
        </FormProvider>
    )
}