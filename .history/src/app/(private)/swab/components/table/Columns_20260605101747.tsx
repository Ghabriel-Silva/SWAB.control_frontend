"use client";

import { Badge, Box, VStack } from "@chakra-ui/react";
import {
    GridColDef,
    GridRenderCellParams,
} from "@mui/x-data-grid";
import { SwabGridRow } from "@/app/(private)/swab/types/swab.data-grid";
import { SwabCheckResult, SwabCheckType } from "@/app/(private)/types/swab";
import { Editable, IconButton } from "@chakra-ui/react"
import { LuPencilLine } from "react-icons/lu"
import { NewFaucet, LastFaucet, Calendar } from "@/app/(private)/swab/components/index";
import { Result } from "./Result";
import { ValueAtp } from "./ValueAtp";


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
                <VStack justify={"center"} h={"100%"}>
                    <Calendar />
                </VStack>

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
                <NewFaucet value={params.value} />
            )
        }
    },
    {
        field: "tipoSwab",
        headerName: "Tipo Swab",
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<SwabGridRow, SwabCheckType>) => {
            return (
                <LastFaucet value={params.value} />
            )
        }
    },
    {
        field: "resultado",
        headerName: "Resultado",
        flex: 1,
        minWidth: 120,
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
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<SwabGridRow, string>) => {
            return (
                <VStack bg={"red"} height={"1005"}> 
                    <ValueAtp value={params.value ?? ''} />
                </VStack>
            )
        }
    },
    {
        field: "operador",
        headerName: "Operador",
        flex: 1.5,
        minWidth: 150,
    },
];