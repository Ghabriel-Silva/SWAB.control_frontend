"use client";

import { useEffect } from "react";
import { useGetSwab } from "../hooks/useGetData";
import { SwabTable } from "./SwabTable";
import { toaster } from "@/components/ui/toaster";
import { SwabGridRow } from "../types/swab.data-grid";

export default function SwabClient() {
    const { data, isLoading, isError, error } = useGetSwab();
    useEffect(() => {
        if (isError) {
            toaster.create({
                title: 'ERRO',
                description: `${error?.message}`,
                closable: true,
                duration: 4000,
                type: 'error'
            })
        }
    }, [isError, error])

    // if (isLoading) return <p>Carregando...</p>;

    const rows: SwabGridRow =
        data?.data?.map((item) => ({
            id: item.id,
            lote: item.internalCode,
            dateHours: new Date(item.createdAt).toLocaleString("pt-BR"),
            dateHourRealization: item.check.validatedAt,
            lastFauct: item.tank.name,
            newFaucet: item.faucetCode,
            batch: item.batch,
            isCancelledSwab: item.isCancelled,
            ultimaTorneira: item.lastFaucetTank,
            tipoSwab: item.check.type,
            resultado: item.check.result,
            valorAtp: item.check.valueAtp,
            operador: item.operator,
        })) ?? [];

    return <SwabTable rows={rows} loading={isLoading} />;
}