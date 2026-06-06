"use client";

import { VStack } from "@chakra-ui/react";
import {
    GridColDef,
    GridRenderCellParams,
} from "@mui/x-data-grid";
import { SwabGridRow } from "@/app/(private)/swab/types/swab.data-grid";
import { SwabCheckResult, SwabCheckType } from "@/app/(private)/types/swab";
import { NewFaucet, TypeSwab, Calendar, OperatorSelect, Result, ValueAtp, ContainerRow } from "@/app/(private)/swab/components/index";



export const columns: GridColDef<SwabGridRow>[] = [
    {
        field: "lote",
        headerName: "Lote",
        flex: 1,
        minWidth: 100,
    },
    {
        field: "dataHora",
        headerName: "Data/Hora",
        flex: 1.5,
        minWidth: 100,
        valueGetter: (value) => {
            if (!value) return value

            const date: string = new Date(value).toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: "short"
            })
            return date.replace(',', '  ')

        }

    },
    {
        field: "dataHourRealization",
        headerName: "Validado",
        flex: 1.5,
        minWidth: 200,
        renderCell: () => {
            return (
                <ContainerRow>
                    <Calendar />
                </ContainerRow>

            )
        }

    },
    {
        field: "tankSilo",
        headerName: "Tank/Silo",
        flex: 1,
        minWidth: 50,
    },
    {
        field: "ultimaTorneira",
        headerName: "Última Torneira",
        flex: 1,
        minWidth: 100
    },
    {
        field: "novaTorneira",
        headerName: "Nova torneira",
        flex: 1,
        minWidth: 100,
        renderCell: (params: GridRenderCellParams<SwabGridRow, string>) => {
            return (
                <ContainerRow>
                    <NewFaucet value={params.value} />
                </ContainerRow>
            )
        }
    },
    {
        field: "tipoSwab",
        headerName: "Tipo Swab",
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<SwabGridRow, SwabCheckType>) => {
            const value = params.value ?? SwabCheckType.ATP
            return (
                <ContainerRow>
                    < TypeSwab value={value} />
                </ContainerRow>
            )
        }
    },
    {
        field: "resultado",
        headerName: "Resultado",
        flex: 1,
        minWidth: 130,
        renderCell: (
            params: GridRenderCellParams<SwabGridRow, SwabCheckResult>
        ) => {
            return (
                <ContainerRow>
                    <Result value={params.value!} />
                </ContainerRow>
            )
        },
    },
    {
        field: "valorAtp",
        headerName: "Valor ATP",
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<SwabGridRow, string>) => {
            return (
                <ContainerRow>
                    <ValueAtp value={params.value ?? ''} />
                </ContainerRow>
            )
        }
    },
    {
        field: "operador",
        headerName: "Operador",
        flex: 1.5,
        minWidth: 150,
        renderCell: (params: GridRenderCellParams<SwabGridRow, string>) => {
            return (
                <ContainerRow>
                    <OperatorSelect />
                </ContainerRow>
            )
        }
    },
    {
        field: 'observations',
        headerName: "Oberservações",
        flex: 1.5,
        minWidth: 150,
    },
     {
        field: 'observations',
        headerName: "Oberservações",
        flex: 1.5,
        minWidth: 150,
    }
];