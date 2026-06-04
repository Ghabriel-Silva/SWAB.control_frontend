"use client";

import { Badge, Box } from "@chakra-ui/react";
import {
    GridColDef,
    GridRenderCellParams,
} from "@mui/x-data-grid";
import { SwabGridRow } from "../types/swab.data-grid";
import { SwabCheckResult, SwabCheckType } from "../../types/swab";


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
        minWidth: 180,
        valueGetter: (value) => {
            if (!value) return value

            return new Date(value).toISOString()
        }

    },
    {
        field: "tankSilo",
        headerName: "Tank/Silo",
        flex: 1,
        minWidth: 120,
    },
    {
        field: "ultimaTorneira",
        headerName: "Última Torneira",
        flex: 1.5,
        minWidth: 180,
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
    },
    {
        field: "operador",
        headerName: "Operador",
        flex: 1.5,
        minWidth: 150,
    },
];