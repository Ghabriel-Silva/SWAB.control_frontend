"use client";

import {
    GridColDef,
    GridRenderCellParams,
} from "@mui/x-data-grid";
import { SwabGridRow } from "@/app/(private)/swab/types/swab.data-grid";
import { SwabCheckResult, SwabCheckType } from "@/app/(private)/types/swab";
import { TypeSwab, Result } from "@/app/(private)/swab/components/index";



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
        field: "tankSilo",
        headerName: "Tank/Silo",
        flex: 1,
        minWidth: 50,
    },
    {
        field: "ultimaTorneira",
        headerName: "Torneira anterior",
        flex: 1,
        minWidth: 100
    },
    {
        field: "novaTorneira",
        headerName: "Torneira Atual",
        flex: 1,
        minWidth: 100,

    },
    {
        field: "tipoSwab",
        headerName: "Tipo Swab",
        flex: 1,
        minWidth: 100,
        renderCell: (params: GridRenderCellParams<SwabGridRow, SwabCheckType>) => {
            const value = params.value ?? SwabCheckType.ATP
            return (
                < TypeSwab value={value} />
            )
        }
    },
    {
        field: "resultado",
        headerName: "Resultado",
        flex: 1,
        minWidth: 100,
        renderCell: (
            params: GridRenderCellParams<SwabGridRow, SwabCheckResult>
        ) => {
            return (
                <Result value={params.value!} />
            )
        },
    },
    {
        field: "valorAtp",
        headerName: "Valor ATP",
        flex: 1,
        minWidth: 100
    },
    {
        field: 'Delete',
        headerName: "Deletar",
        flex: 1,
    },
    {
        field: 'Delete',
        headerName: "Deletar",
        flex: 1,
    },
];