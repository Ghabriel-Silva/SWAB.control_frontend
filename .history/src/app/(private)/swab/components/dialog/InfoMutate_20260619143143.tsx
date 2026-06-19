import { Button, GridItem, Input, SimpleGrid, Textarea } from "@chakra-ui/react"
import { FormProvider, useForm, useWatch } from "react-hook-form"
import { Calendar, ResultSelect, TypeSwabSelect } from "@/app/(private)/swab/components/index";
import { FormField } from "@/app/(private)/components";
import { SwabDataProps } from "../../types/swab.dataProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSwabSchema, UpdateSwabType } from "../../validations/update.swab.schema";
import { SwabCheckType } from "@/app/(private)/types/swab";

export const InfoMutate = ({ swab }: SwabDataProps) => {
    const methods = useForm({
        resolver: yupResolver(updateSwabSchema),
        mode: 'onBlur',
        defaultValues: {
            validatedAt: !swab.check.validatedAt
                ? new Date(swab.createdAt)
                : new Date(swab.check.validatedAt),
            result: swab.check.result,
            performedType: swab.check.type
        }
    })

   

    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = methods


     const valueATP = useWatch<UpdateSwabType>({
       control
    })
    console.log(valueATP)F
    const OnSubmit = (data: UpdateSwabType) => {
        console.log(data)
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(OnSubmit)} noValidate>
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
                        <Calendar />
                    </FormField>
                    <FormField label="Torneira" error={errors.faucetCode?.message} isRequired>
                        <Input size={"xs"} placeholder="ex: 22" {...register('faucetCode')} />
                    </FormField>
                    <FormField label="Resultado" error={errors.result?.message}>
                        <ResultSelect />
                    </FormField>
                    <FormField label="lote ATP" error={errors.batch?.message}>
                        <Input size={"xs"} placeholder="ex:Ez4522" {...register('batch')} />
                    </FormField>
                    <FormField label="Value ATP (RLU)" error={errors.valueAtp?.message}>
                        <Input size={"xs"} placeholder="ex:30" {...register('valueAtp')} />
                    </FormField>
                    <FormField label="Tipo Swab" error={errors.performedType?.message}>
                        <TypeSwabSelect />
                    </FormField>
                    <GridItem colSpan={3}>
                        <FormField
                            label="Oberservações"
                            error={errors.observation?.message}
                            textHelper="Max 500 characteres."
                        >
                            <Textarea placeholder="Oberservação..." variant="outline" />
                        </FormField>
                    </GridItem>
                    <Button type="submit">Enviar</Button>
                </SimpleGrid>
            </form>
        </FormProvider>
    )
}