"use client";

import {
    GridColDef,
    GridRenderCellParams,
} from "@mui/x-data-grid";
import { SwabGridRow } from "@/app/(private)/swab/types/swab.data-grid";
import { SwabCheckResult, SwabCheckType } from "@/app/(private)/types/swab";
import { TypeSwab, Result, IsCancelled, DialogContainer, ContainerRow } from "@/app/(private)/swab/components/index";
import { defaultValue } from "../../utils/defaultValue";
import { InfoNull } from "@/app/(private)/components";



export const columns: GridColDef<SwabGridRow>[] = [
    {
        field: "lote",
        headerName: "Lote",
        flex: 1.5,
        minWidth: 100,
        renderCell: (params) => {
            return (
                <ContainerRow>
                    <DialogContainer row={params.row} />
                </ContainerRow>
            )
        }
    },
    {
        field: "dateHours",
        headerName: "Data/Hora",
        flex: 1.5,
        minWidth: 100,
        valueGetter: (value) => {
            if (!value) return "-"

            const date: string = new Date(value).toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: "short"
            })
            return date.replace(',', '  ')

        }

    },
    {
        field: "dateHourRealization",
        headerName: "Validado",
        flex: 1.5,
        minWidth: 100,
        valueGetter: (value) => {
            if (!value) return  <InfoNull />
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
        field: "lastFauct",
        headerName: "Torneira anterior",
        flex: 1,
        minWidth: 100
    },
    {
        field: "newFaucet",
        headerName: "Torneira Atual",
        flex: 1,
        minWidth: 100,
        valueGetter: (value) => {
            return (
                defaultValue(value)
            )
        }

    },
    {
        field: "typeSwab",
        headerName: "Tipo Swab",
        flex: 1,
        minWidth: 100,
        renderCell: (params: GridRenderCellParams<SwabGridRow, SwabCheckType>) => {
            return (
                < TypeSwab value={defaultValue(params.value)} />
            )
        }
    },
    {
        field: "resultSwab",
        headerName: "Resultado",
        flex: 1,
        minWidth: 100,
        renderCell: (
            params: GridRenderCellParams<SwabGridRow, SwabCheckResult>
        ) => {
            return (
                <Result value={defaultValue(params.value)} />
            )
        },
    },
    {
        field: "valueAtp",
        headerName: "Valor ATP",
        flex: 1,
        valueGetter: (value) => {
            return (
                defaultValue(value)
            )
        }

    },
    {
        field: "batch",
        headerName: "Lote ATP",
        flex: 1,
        valueGetter: (value) => {
            return (
                defaultValue(value)
            )
        }
    },
    {
        field: "isCancelledSwab",
        headerName: "Swab Cancelado",
        flex: 1,
        renderCell: (params: GridRenderCellParams<SwabGridRow, boolean>) => {
            return (
                <IsCancelled value={params.value} />
            )
        }
    },

    {

        field: 'operator',
        headerName: "Analista",
        flex: 1,
        valueGetter: (value) => {
            return (
                defaultValue(value)
            )
        }

    },
];