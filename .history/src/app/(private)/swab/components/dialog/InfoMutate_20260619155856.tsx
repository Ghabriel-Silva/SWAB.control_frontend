import { Button, GridItem, Input, SimpleGrid, Textarea } from "@chakra-ui/react"
import { FormProvider, useForm, useWatch } from "react-hook-form"
import { Calendar, ResultSelect, TypeSwabSelect } from "@/app/(private)/swab/components/index";
import { FormField } from "@/app/(private)/components";
import { SwabDataProps } from "../../types/swab.dataProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSwabSchema, UpdateSwabType } from "../../validations/update.swab.schema";
import { SwabCheckType } from "@/app/(private)/types/swab";
import { useEffect } from "react";

export const InfoMutate = ({ swab }: SwabDataProps) => {
    const methods = useForm({
        resolver: yupResolver(updateSwabSchema),
        mode: 'onBlur',
        context: {
            lastFaucetLocation: swab.lastFaucetLocation,
        },
        defaultValues: {
            validatedAt: !swab.check.validatedAt
                ? new Date(swab.createdAt)
                : new Date(swab.check.validatedAt),
            result: swab.check.result,
            performedType: swab.check.type,
        }
    })



    const {
        resetField,
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = methods

    //Aqui estou oberservando o campo do tipo de atp/Micro, para bloquear a entrada se visual para valor atp e lote
    const isVisual = useWatch({
        control,
        compute: (data: UpdateSwabType) =>
            data.performedType === SwabCheckType.VISUAL,
    })
    useEffect(() => {
        if (isVisual) {
            resetField("valueAtp")
            resetField("batch")
        }
    }, [isVisual, resetField])

    const isSameFaucet
  


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
                    {/* Tipo do ATP que sera realizado */}
                    <FormField
                        label="Tipo Swab"
                        error={errors.performedType?.message}
                    >
                        <TypeSwabSelect />
                    </FormField>

                    {/* Data da realiação do ATP valor default data da criação */}
                    <FormField
                        label="Data/hora realização"
                        error={errors.validatedAt?.message}
                    >
                        <Calendar />
                    </FormField>

                    {/* Resultado do swab */}
                    <FormField
                        label="Resultado"
                        error={errors.result?.message}
                    >
                        <ResultSelect />
                    </FormField>

                    {/* Numero da torneira do tanque se existir */}
                    <FormField
                        label="Torneira"
                        error={errors.faucetCode?.message}
                        isRequired
                    >
                        <Input size={"xs"} placeholder="ex: 22" {...register('faucetCode')} />
                    </FormField>

                    {/* Lote do Cotonete utilizado */}
                    <FormField
                        IsDiplay={isVisual}
                        label="lote ATP"
                        error={errors.batch?.message}
                    >
                        <Input
                            size={"xs"}
                            placeholder="ex:Ez4522"
                            {...register('batch')}
                        />
                    </FormField>

                    {/* Valor do atp aparece apenas se for ATP ou MICRO */}
                    <FormField
                        IsDiplay={isVisual}
                        label="Value ATP (RLU)"
                        error={errors.valueAtp?.message}>
                        <Input
                            disabled={isVisual}
                            size={"xs"}
                            placeholder="ex:30"
                            {...register('valueAtp')}
                        />
                    </FormField>


                    <GridItem colSpan={3}>
                        <FormField
                            label="Oberservações"
                            error={errors.observation?.message}
                            textHelper="Max 500 characteres."
                        >
                            <Textarea
                                {...register('observation')}
                                placeholder="Oberservação..."
                                variant="outline" />
                        </FormField>
                    </GridItem>
                    <Button type="submit">Enviar</Button>
                </SimpleGrid>
            </form>
        </FormProvider>
    )
}