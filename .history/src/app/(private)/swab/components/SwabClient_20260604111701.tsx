"use client";

import { useEffect } from "react";
import { useGetSwab } from "../hooks/useGetData";
import { SwabTable } from "./SwabTable";

export default function SwabClient() {
    const { data, isLoading, isError } = useGetSwab();
    useEffect(() => {
      
        toate
    }, [isError])
    if (isLoading) return <p>Carregando...</p>;
    if (isError) return <p>Erro ao carregar dados.</p>


    const rows =
        data?.data?.map((item) => ({
            id: item.id,
            lote: item.internalCode,
            dataHora: new Date(item.createdAt).toLocaleString("pt-BR"),
            tankSilo: item.tank.name,
            ultimaTorneira: item.lastFaucetTank,
            novaTorneira: item.faucetCode,
            tipoSwab: item.check.type,
            resultado: item.check.result,
            valorAtp: item.check.valueAtp,
            operador: item.operator,
        })) ?? [];

    return <SwabTable rows={rows} />;
}