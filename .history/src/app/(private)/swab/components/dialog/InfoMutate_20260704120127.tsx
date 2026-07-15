import { Button, GridItem, HStack, Input, SimpleGrid, Textarea } from "@chakra-ui/react"
import { FormProvider, useForm, useWatch } from "react-hook-form"
import { Calendar, OperatorSelect, ResultSelect, Justification, TypeSwabSelect } from "@/app/(private)/swab/components/index";
import { FormField } from "@/app/(private)/components";
import { SwabDataProps } from "../../types/swab.dataProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSwabSchema, UpdateSwabType } from "../../validations/update.swab.schema";
import { SwabCheckType } from "@/app/(private)/types/swab";
import { useEffect } from "react";
import { ATP_REQUIRED_TYPES } from "../../types/atp.required.types";
import { useUpdateSwab } from "../../hooks/useUpdateSwab";
import { UpdateSwabParams } from "../../types/update.swab.params";
import { toaster } from "@/components/ui/toaster";





export const InfoMutate = ({ swab }: SwabDataProps) => {
    const methods = useForm({
        resolver: yupResolver(updateSwabSchema),
        mode: 'onChange',
        context: {
            lastFaucetLocation: swab.lastFaucetLocation,
            typeSwabBD: swab.check.type
        },
        defaultValues: {
            validatedAt: !swab.check.validatedAt
                ? new Date(swab.createdAt)
                : new Date(swab.check.validatedAt),
            result: swab.check.result,
            performedType: swab.check.type,
            faucetCode: !swab.faucetCode ? "" : swab.faucetCode,
            sameFaucetJustification: !swab.check.sameFaucetJustification
                ? null
                : swab.check.sameFaucetJustification,
            updateSwabJustification: !swab.check.updateSwabJustification
                ? null
                : swab.check.updateSwabJustification,
            operatorId: swab.operator?.id ?? ''


        }
    })

    const { resetField, register, handleSubmit, control, formState: { errors } } = methods

    const isVisual = useWatch({
        control,
        compute: (data: UpdateSwabType) =>
            data.performedType === SwabCheckType.VISUAL,
    })

    const isSameFaucet = useWatch({
        control,
        compute: (data: UpdateSwabType) =>{
            if(swab.faucetCode === swab.lastFaucetLocation){
                retorne true
            }
        }


            data.faucetCode === swab.lastFaucetLocation
    })

    //se existe um lastType oque significa que ouve mudança de swab então showUpdateJustification sera true agora, se não existir eu valido normalmentre
    const showUpdateJustification = useWatch({
        control,
        compute: (data: UpdateSwabType) => {
            if (swab.check.lastType) {
                return true
            }
            else {
                return ATP_REQUIRED_TYPES.includes(swab.check.lastType ?? swab.check.type) &&
                    data.performedType === SwabCheckType.VISUAL
            }
        }
    })


    // ira limpar o valueAtp e batch quando muda para VISUAL
    useEffect(() => {
        if (isVisual) {
            resetField("valueAtp")
            resetField("batch")
        }
    }, [isVisual, resetField])

    // limpa justificativa de mudança de swab quando some o componente
    useEffect(() => {
        if (!showUpdateJustification) {
            resetField("updateSwabJustification")
        }
    }, [showUpdateJustification, resetField])

    // limpa justificativa de torneira quando some o componente
    useEffect(() => {
        if (!isSameFaucet) {
            resetField("sameFaucetJustification")
        }
    }, [isSameFaucet, resetField])

    const id = swab.id


    const { mutate, isPending } = useUpdateSwab()
    const OnSubmit = (data: UpdateSwabType) => {
        const dataToUpdate: UpdateSwabParams = {
            data,
            id
        }
        mutate(dataToUpdate, {
            onError: (error) => {
                toaster.create({
                    title: 'Erro',
                    description: error.message || 'Não foi possivel atualizar o Swab',
                    type: "error",
                    duration: 4000,
                    closable: true
                })
            },
            onSuccess: (data) => {
                toaster.create({
                    title: 'Sucesso',
                    description: data.message,
                    type: "success",
                    duration: 4000,
                    closable: true
                })
            }
        })
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(OnSubmit)} noValidate>
                <SimpleGrid
                    border={"1px solid"}
                    borderColor={"gray.200"}
                    p={4}
                    borderRadius={"sm"}
                    columns={{ base: 2, md: 2, lg: 3 }}
                    gap={4}
                    w="100%"
                >
                    <FormField label="Tipo Swab" error={errors.performedType?.message}>
                        <HStack>
                            <TypeSwabSelect />
                            {showUpdateJustification && (
                                <Justification
                                    textLabel="Justificativa mudança de Swab: "
                                    valueJustification="updateSwabJustification"
                                    inputRevalidate="performedType"
                                />
                            )}
                        </HStack>
                    </FormField>

                    <FormField label="Realização" error={errors.validatedAt?.message}>
                        <Calendar />
                    </FormField>

                    <FormField label="Resultado" error={errors.result?.message}>
                        <ResultSelect />
                    </FormField>

                    <FormField label="Torneira" error={errors.faucetCode?.message} isRequired>
                        <HStack>
                            <Input
                                size={"xs"}
                                placeholder="ex: 22"
                                {...register("faucetCode", { deps: ["sameFaucetJustification"] })}
                            />
                            {isSameFaucet && (
                                <Justification
                                    textLabel="Motivo uso mesma torneira:"
                                    valueJustification="sameFaucetJustification"
                                    inputRevalidate="faucetCode"
                                />
                            )}
                        </HStack>
                    </FormField>

                    <FormField label="Analista" isRequired error={errors.operatorId?.message}>
                        <OperatorSelect />
                    </FormField>

                    <FormField isRequired IsDiplay={isVisual} label="lote ATP" error={errors.batch?.message}>
                        <Input size={"xs"} placeholder="ex:Ez4522" {...register('batch')} />
                    </FormField>

                    <FormField isRequired IsDiplay={isVisual} label="Value ATP (RLU)" error={errors.valueAtp?.message}>
                        <Input disabled={isVisual} size={"xs"} placeholder="ex:30" {...register('valueAtp')} />
                    </FormField>

                    <GridItem colSpan={{ base: 2, md: 3, lg: 3 }}>
                        <FormField label="Oberservações" error={errors.observation?.message} textHelper="Max 500 characteres.">
                            <Textarea {...register('observation')} placeholder="Oberservação..." variant="outline" />
                        </FormField>
                    </GridItem>
                    <Button type="submit">Enviar</Button>
                </SimpleGrid>
            </form>
        </FormProvider>
    )
}