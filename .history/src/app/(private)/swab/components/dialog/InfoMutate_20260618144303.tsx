import { SimpleGrid } from "@chakra-ui/react"
import { FormProvider, useForm } from "react-hook-form"
import { TypeSwab, Calendar, NewFaucet } from "@/app/(private)/swab/components/index";
import { FormField } from "@/app/(private)/components";

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
                <SimpleGrid
                    border={"1px solid"}
                    borderColor={"gray.200"}
                    p={4}
                    borderRadius={"sm"}
                    columns={{ base: 2, md: 3, lg: 3 }}
                    gap={4}
                    w="100%"
                >
                    <FormField>
                        
                    </FormField>
                    <Calendar />
                    <NewFaucet />

                </SimpleGrid>
            </form>
        </FormProvider>
    )
}