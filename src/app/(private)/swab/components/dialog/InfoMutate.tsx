import { GridItem, HStack, Input, SimpleGrid, Textarea } from "@chakra-ui/react"
import { FormProvider, useForm, useWatch } from "react-hook-form"
import { Calendar, OperatorSelect, ResultSelect, Justification, TypeSwabSelect } from "@/app/(private)/swab/components/index";
import { FormField, SubtitleText } from "@/app/(private)/components";
import { SwabDataProps } from "../../types/swab.dataProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSwabSchema, UpdateSwabType } from "../../validations/update.swab.schema";
import { SwabCheckResult, SwabCheckType } from "@/app/(private)/types/swab";
import { useEffect } from "react";
import { ATP_REQUIRED_TYPES } from "../../types/atp.required.types";
import { useUpdateSwab } from "../../hooks/useUpdateSwab";
import { UpdateSwabParams } from "../../types/update.swab.params";
import { toaster } from "@/components/ui/toaster";
import { Can } from "@/permissions/can";
import { Role } from "@/permissions/roles";


export const InfoMutate = ({ swab, onSuccess, formRef }: SwabDataProps) => {
    const isCancelled = swab.isCancelled
    const isInitialVisual = !isCancelled && swab.check.type === SwabCheckType.VISUAL
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
            sameFaucetJustification: !isCancelled && swab.faucetCode !== swab.lastFaucetLocation
                ? null
                : (swab.check.sameFaucetJustification?.trim() || null),
            updateSwabJustification: swab.check.updateSwabJustification?.trim() || null,
            operatorId: swab.operator?.id ?? '',
            batch: isInitialVisual ? null : swab.batch || null,
            valueAtp: isInitialVisual || swab.check.valueAtp == null
                ? null
                : Number(swab.check.valueAtp),
            observation: swab.check.observation ?? ""
        }
    })

    const {
        reset,
        resetField,
        register,
        handleSubmit,
        control,
        formState: { errors, isDirty },
        setValue,
    } = methods

    const isVisual = useWatch({
        control,
        compute: (data: UpdateSwabType) =>
            data.performedType === SwabCheckType.VISUAL,
    })

    const isSameFaucet = useWatch({
        control,
        compute: (data: UpdateSwabType) =>
            data.faucetCode === swab.lastFaucetLocation,
    })

    const originalType = swab.check.lastType ?? swab.check.type

    const showUpdateJustification = useWatch({
        control,
        compute: (data: UpdateSwabType) =>
            ATP_REQUIRED_TYPES.includes(originalType) &&
            data.performedType === SwabCheckType.VISUAL,
    })
    const isDisableSelectType = !!swab.check.type && !!swab.check.lastType


    // ira limpar o valueAtp e batch quando muda para VISUAL
    useEffect(() => {
        if (isVisual && !isCancelled) {
            setValue('batch', null, { shouldValidate: true })
            setValue('valueAtp', null, { shouldValidate: true })
        }
    }, [isVisual, isCancelled, setValue])

    // limpa justificativa de mudança de swab quando some o componente
    useEffect(() => {
        if (!showUpdateJustification && !isCancelled) {
            resetField("updateSwabJustification")
        }
    }, [showUpdateJustification, isCancelled, resetField])

    // limpa justificativa de torneira quando some o componente
    useEffect(() => {
        if (!isSameFaucet && !isCancelled) {
            setValue("sameFaucetJustification", null, { shouldValidate: true })
        }
    }, [isSameFaucet, isCancelled, setValue])

    const id = swab.id


    const { mutateAsync } = useUpdateSwab()
    const OnSubmit = (data: UpdateSwabType) => {
        if (isCancelled) return

        if (!isDirty) {
            onSuccess?.()
            return
        }

        const dataToUpdate: UpdateSwabParams = {
            data,
            id
        }
        const request = mutateAsync(dataToUpdate, {
            onSuccess: () => {
                reset(
                    { ...data, observation: data.observation ?? "" },
                    { keepFieldsRef: true }
                )
                onSuccess?.()
            }
        })

        toaster.promise(request, {
            loading: {
                title: "Atualizando SWAB...",
                description: "Aguarde enquanto as alterações são salvas.",
            },
            success: (response) => ({
                title: "Sucesso",
                description: response.message || "SWAB atualizado com sucesso",
                duration: 4000,
                closable: true,
            }),
            error: (error: unknown) => ({
                title: "Erro",
                description: error instanceof Error
                    ? error.message
                    : "Não foi possível atualizar o SWAB",
                duration: 4000,
                closable: true,
            }),
        })
    }
    const swabIsAproved = swab.check.result === SwabCheckResult.APPROVED

    return (
        <FormProvider {...methods}>
            <form
                ref={formRef}
                noValidate
                onSubmit={(event) => {
                    event.preventDefault()

                    if (isCancelled) return

                    if (!isDirty) {
                        onSuccess?.()
                        return
                    }

                    void handleSubmit(OnSubmit)(event)
                }}
            >
                <SimpleGrid
                    border={"1px solid"}
                    borderColor={"gray.200"}
                    p={2}
                    borderRadius={"sm"}
                    columns={{ base: 2, md: 2, lg: 3 }}
                    gap={4}
                    w="100%"
                >
                    <GridItem gridColumn="1 / -1">
                        <SubtitleText fontWeight="medium" textTransform="uppercase">
                            Dados da análise
                        </SubtitleText>
                    </GridItem>
                    <Can roleUser={[Role.ADMIN, Role.LAB, Role.OWNER]}>
                        {(hasPermission) => (
                            <FormField disabled={isCancelled || !hasPermission} label="Tipo Swab" error={errors.performedType?.message}>
                                <HStack>
                                    <TypeSwabSelect value={isCancelled || isDisableSelectType || swabIsAproved || !hasPermission} />
                                    {showUpdateJustification && (
                                        <Justification disabled={isCancelled || !hasPermission}
                                            textLabel="Justificativa mudança de Swab: "
                                            valueJustification="updateSwabJustification"
                                            inputRevalidate="performedType"
                                        />
                                    )}
                                </HStack>
                            </FormField>
                        )}
                    </Can>


                    <Can roleUser={[Role.ADMIN, Role.LAB, Role.OWNER]}>
                        {(hasPermission) => (
                            <FormField disabled={isCancelled || !hasPermission} label="Realização" error={errors.validatedAt?.message}>
                                <Calendar disabled={isCancelled || !hasPermission} />
                            </FormField>
                        )}
                    </Can>


                    <Can roleUser={[Role.ADMIN, Role.LAB, Role.OWNER]}>
                        {(hasPermission) => (
                            <FormField disabled={isCancelled || !hasPermission} label="Resultado" error={errors.result?.message}>
                                <ResultSelect />
                            </FormField>
                        )}
                    </Can>


                    <Can roleUser={[Role.ADMIN, Role.LAB, Role.OWNER]}>
                        {(hasPermission) => (
                            <FormField disabled={isCancelled || !hasPermission} label="Torneira" error={errors.faucetCode?.message} isRequired>
                                <HStack>
                                    <Input
                                        size={"xs"}
                                        placeholder="ex: 22"
                                        {...register("faucetCode", { deps: ["sameFaucetJustification"] })}
                                    />
                                    {isSameFaucet && (
                                        <Justification disabled={isCancelled || !hasPermission}
                                            textLabel="Motivo uso mesma torneira:"
                                            valueJustification="sameFaucetJustification"
                                            inputRevalidate="faucetCode"
                                        />
                                    )}
                                </HStack>
                            </FormField>
                        )}
                    </Can>

                    <Can roleUser={[Role.ADMIN, Role.LAB, Role.OWNER]}>
                        {(hasPermission) => (
                            <FormField disabled={isCancelled || !hasPermission} label="Analista" isRequired error={errors.operatorId?.message}>
                                <OperatorSelect />
                            </FormField>
                        )}
                    </Can>


                    <Can roleUser={[Role.ADMIN, Role.LAB, Role.OWNER]}>
                        {(hasPermission) => (
                            <FormField disabled={isCancelled || !hasPermission} isRequired IsDiplay={isVisual} label="lote ATP" error={errors.batch?.message}>
                                <Input size={"xs"} placeholder="ex:Ez4522" {...register("batch", {
                                    setValueAs: (value: string) => value || null,
                                })} />
                            </FormField>
                        )}
                    </Can>

                    <Can roleUser={[Role.ADMIN, Role.LAB, Role.OWNER]}>
                        {(hasPermission) => (
                            <FormField disabled={isCancelled || !hasPermission} isRequired IsDiplay={isVisual} label="Value ATP (RLU)" error={errors.valueAtp?.message}>
                                <Input disabled={isCancelled || isVisual || !hasPermission} size={"xs"} placeholder="ex:30" {...register("valueAtp", {
                                    setValueAs: (value: unknown) => value === "" || value == null ? null : Number(value),
                                })} />
                            </FormField>
                        )}
                    </Can>


                    <Can roleUser={[Role.ADMIN, Role.LAB, Role.OWNER]}>
                        {(hasPermission) => (
                            <GridItem colSpan={{ base: 2, md: 3, lg: 3 }}>
                                <FormField disabled={isCancelled || !hasPermission} label="Oberservações" error={errors.observation?.message} textHelper="Max 500 characteres.">
                                    <Textarea {...register('observation')} placeholder="Oberservação..." variant="outline" />
                                </FormField>
                            </GridItem>
                        )}
                    </Can>

                </SimpleGrid>
            </form>
        </FormProvider>
    )
}
