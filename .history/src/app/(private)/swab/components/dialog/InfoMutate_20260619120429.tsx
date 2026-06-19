import { Button, Input, SimpleGrid } from "@chakra-ui/react"
import { FormProvider, useForm } from "react-hook-form"
import { OperatorSelect, Calendar, NewFaucet } from "@/app/(private)/swab/components/index";
import { FormField } from "@/app/(private)/components";
import { SwabDataProps } from "../../types/swab.dataProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSwabSchema, UpdateSwabType } from "../../validations/update.swab.schema";

export const InfoMutate = ({ swab }: SwabDataProps) => {
    const methods = useForm({
        resolver: yupResolver(updateSwabSchema),
        mode: 'onBlur',
        defaultValues: {
            validatedAt: !swab.check.validatedAt
                ? new Date(swab.createdAt)
                : new Date(swab.check.validatedAt)
        }
    })
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = methods

    const OnSubmit = (data: UpdateSwabType) => {
        console.log(data)
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(OnSubmit)}>
                <SimpleGrid
                    border={"1px solid"}
                    borderColor={"gray.200"}
                    p={4}
                    borderRadius={"sm"}
                    columns={{ base: 2, md: 3, lg: 3 }}
                    gap={4}
                    w="100%"
                >
                    <FormField label="Data/hora realização" error={errors.validatedAt?.message}>
                        <Calendar  />
                    </FormField>
                    <FormField label="Torneira nova">
                        <Input size={"xs"} placeholder="Defina " {...register('faucetCode')}/>
                    </FormField>
                    <FormField label="Operador">
                        <OperatorSelect />
                    </FormField>
                    <Button type="submit">Enviar</Button>
                </SimpleGrid>

            </form>
        </FormProvider>
    )
}