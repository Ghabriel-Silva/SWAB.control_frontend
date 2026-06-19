import { SimpleGrid } from "@chakra-ui/react"
import { FormProvider, useForm } from "react-hook-form"
import { OperatorSelect, Calendar, NewFaucet } from "@/app/(private)/swab/components/index";
import { FormField } from "@/app/(private)/components";
import { SwabDataProps } from "../../types/swab.dataProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSwabSchema, UpdateSwabType } from "../../validations/update.swab.schema";

export const InfoMutate = ({ swab }: SwabDataProps) => {
    const methods = useForm({
        resolver: yupResolver(updateSwabSchema),
        mode: 'onBlur'
    })
    const {
        reset,
        handleSubmit,
        formState: { errors }
    } = methods

    const OnSubmit = (data:UpdateSwabType)=>{
        console.log(data)
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(OnSubmit)}}>
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
                        <Calendar  valueDate={new Date(swab.check.validatedAt ?? swab.createdAt)}/>
                    </FormField>
                    <FormField label="Torneira nova">
                        <NewFaucet />
                    </FormField>
                    <FormField label="Operador">
                        <OperatorSelect />
                    </FormField>
                </SimpleGrid>
            </form>
        </FormProvider>
    )
}