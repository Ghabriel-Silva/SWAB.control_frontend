"use client";

import { useEffect } from "react";
import { useGetSwab } from "../hooks/useGetData";
import { SwabTable } from "./SwabTable";
import { toaster } from "@/components/ui/toaster";

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

    const rows =
        data?.data?.map((item) => ({
            id: item.id,
            lote: item.internalCode,
            dataHora: new Date(item.createdAt).toLocaleString("pt-BR"),
            dataHourRealization: item.check.,
            tankSilo: item.tank.name,
            ultimaTorneira: item.lastFaucetTank,
            novaTorneira: item.faucetCode,
            tipoSwab: item.check.type,
            resultado: item.check.result,
            valorAtp: item.check.valueAtp,
            operador: item.operator,
        })) ?? [];

    return <SwabTable rows={rows} loading={isLoading} />;
}