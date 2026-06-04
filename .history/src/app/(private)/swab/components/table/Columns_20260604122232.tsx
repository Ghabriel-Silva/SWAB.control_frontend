"use client";

import { Badge, Box } from "@chakra-ui/react";
import {
    GridColDef,
    GridRenderCellParams,
} from "@mui/x-data-grid";
import { SwabGridRow } from "@/app/(private)/swab/types/swab.data-grid";
import { SwabCheckResult, SwabCheckType } from "@/app/(private)/types/swab";
import { Editable, IconButton } from "@chakra-ui/react"
import { LuPencilLine } from "react-icons/lu"
import { NewFaucet } from "./NewFaucet";


export const columns: GridColDef<SwabGridRow>[] = [
    {
        field: "lote",
        headerName: "Lote",
        flex: 1,
        minWidth: 150,
    },
    {
        field: "dataHora",
        headerName: "Data/Hora",
        flex: 1.5,
        minWidth: 100,
        valueGetter: (value) => {
            if (!value) return value

            return new Date(value).toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: "short"
            }).replace(',', '  -')

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
            if(para)
            <NewFaucet value={params.value} />
        }
    },
    {
        field: "tipoSwab",
        headerName: "Tipo Swab",
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<SwabGridRow, SwabCheckType>) => {
            const result = params.value
            const color =
                result === SwabCheckType.ATP
                    ? 'orange'
                    : result === SwabCheckType.VISUAL
                        ? 'blue'
                        : 'red'
            return (
                <Box>
                    <Badge colorPalette={color}>
                        {result}
                    </Badge>
                </Box>
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
            const result = params.value

            const color =
                result === SwabCheckResult.APPROVED
                    ? "green"
                    : result === SwabCheckResult.PENDING
                        ? "yellow"
                        : "red";

            return (
                <Box>
                    <Badge colorPalette={color}>
                        {result}
                    </Badge>
                </Box>
            );
        },
    },
    {
        field: "valorAtp",
        headerName: "Valor ATP",
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<SwabGridRow, string>) => {
            return (
                <Editable.Root defaultValue={params.value ?? ''}>
                    <Editable.Preview />
                    <Editable.Input />
                    <Editable.Control>
                        <Editable.EditTrigger asChild>
                            <IconButton variant="ghost" size="xs">
                                <LuPencilLine />
                            </IconButton>
                        </Editable.EditTrigger>
                    </Editable.Control>
                </Editable.Root>
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