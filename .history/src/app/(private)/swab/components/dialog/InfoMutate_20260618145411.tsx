import { SimpleGrid } from "@chakra-ui/react"
import { FormProvider, useForm } from "react-hook-form"
import { OperatorSelect, Calendar, NewFaucet } from "@/app/(private)/swab/components/index";
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
                    <FormField label="Data/hora realização">
                        <Calendar />
                    </FormField>
                    <FormField label="Torneira nova">
                        <NewFaucet />
                    </FormField>
                    <FormField>
                        <OperatorSelect
                    </FormField>
                </SimpleGrid>
            </form>
        </FormProvider>
    )
}