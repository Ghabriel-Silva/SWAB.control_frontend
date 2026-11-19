"use client";

import {
    Badge,
    Button,
    Dialog,
    IconButton,
    Portal,
    Textarea,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiTrash2 } from "react-icons/fi";
import { BodyText, FormField } from "@/app/(private)/components";
import { toaster } from "@/components/ui/toaster";
import { useCancelSwab } from "../../hooks/useCancelSwab";
import type { SwabGridRow } from "../../types/swab.data-grid";
import {
    cancelSwabSchema,
    type CancelSwabType,
} from "../../validations/cancel.swab.schema";
import { Can } from "@/permissions/can";
import { Role } from "@/permissions/roles";

export function CancelSwabDialog({ row }: { row: SwabGridRow }) {
    const [open, setOpen] = useState(false)
    const { mutateAsync, isPending } = useCancelSwab()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<CancelSwabType>({
        resolver: yupResolver(cancelSwabSchema),
        defaultValues: {
            cancelReason: "",
        },
    })

    async function onSubmit(data: CancelSwabType) {
        if (isPending || row.isCancelledSwab) return

        try {
            const response = await mutateAsync({ id: row.id, data })

            toaster.create({
                title: "Sucesso",
                description: response.message || "SWAB cancelado com sucesso",
                type: "success",
                duration: 4000,
                closable: true,
            })

            setOpen(false)
            reset()
        } catch (error) {
            toaster.create({
                title: "Erro",
                description: error instanceof Error
                    ? error.message
                    : "Não foi possível cancelar o SWAB",
                type: "error",
                duration: 4000,
                closable: true,
            })
        }
    }

    return (
        <Dialog.Root
            open={open}
            onOpenChange={({ open }) => {
                if (isPending || isSubmitting) return

                setOpen(open)

                if (!open) reset()
            }}
            size={{ base: "xs", md: "sm" }}
            closeOnInteractOutside={false}
            closeOnEscape={!isPending && !isSubmitting}
            lazyMount
            unmountOnExit
        >
            <Can roleUser={[Role.LAB, Role.ADMIN, Role.OWNER]}>
                {(hasPermission) => (
                    <Dialog.Trigger asChild>
                        <IconButton
                            type="button"
                            aria-label={`Cancelar SWAB ${row.lote}`}
                            title={row.isCancelledSwab ? "Este SWAB já foi cancelado" : "Cancelar SWAB"}
                            disabled={row.isCancelledSwab || !hasPermission}
                            variant="ghost"
                            colorPalette="red"
                            size="xs"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <FiTrash2 style={{ width: 14, height: 14 }} />
                        </IconButton>
                    </Dialog.Trigger>
                )}
            </Can>

            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content asChild>
                        <form noValidate onSubmit={handleSubmit(onSubmit)}>
                            <Dialog.Header>
                                <Dialog.Title>
                                    <Badge> SWAB: {row.lote}</Badge>
                                </Dialog.Title>
                            </Dialog.Header>

                            <Dialog.Body>
                                <Dialog.Description mb={4}>
                                    <BodyText>
                                        Você tem certeza de que deseja cancelar este SWAB?
                                        Esta ação pode ser irreversível.
                                    </BodyText>
                                </Dialog.Description>

                                <FormField
                                    label="Motivo do cancelamento"
                                    error={errors.cancelReason?.message}
                                    textHelper="Informe de 10 a 250 caracteres."
                                    isRequired
                                >
                                    <Textarea
                                        {...register("cancelReason")}
                                        placeholder="Informe o motivo do cancelamento do SWAB..."
                                        size="sm"
                                        rows={4}
                                        maxLength={250}
                                        disabled={isPending || isSubmitting}
                                    />
                                </FormField>
                            </Dialog.Body>

                            <Dialog.Footer>
                                <Dialog.ActionTrigger asChild>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="xs"
                                        disabled={isPending || isSubmitting}
                                    >
                                        Voltar
                                    </Button>
                                </Dialog.ActionTrigger>

                                <Button
                                    type="submit"
                                    colorPalette="red"
                                    size="xs"
                                    loading={isPending || isSubmitting}
                                    loadingText="Cancelando..."
                                    disabled={row.isCancelledSwab}
                                >
                                    Confirmar
                                </Button>
                            </Dialog.Footer>
                        </form>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}
