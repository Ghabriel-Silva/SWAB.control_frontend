"use client"

import { Badge, Box } from '@chakra-ui/react';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { SwabCheckResult } from '../types/swab';
import { SwabGridRow } from './types/swab.data-grid';

const response = await fetch(
    "http://localhost:8080/swab?page=1&limit=20",
    {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    }
);

const data:Swa = await response.json()
const rows: SwabGridRow[] = data.map(item => ({
    id: item.id,
    lote: item.internalCode,
    dataHora: item.createdAt,
    tankSilo: item.tank.name,
    ultimaTorneira: item.lastFaucetTank,
    tipoSwab: item.check.type,
    resultado: item.check.result,
    valorAtp: item.check.valueAtp,
    operador: item.operator,
}))



console.log(data);



// const rows:SwabGridRow[] = 
const columns: GridColDef[] = [
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
    },
    {
        field: "resultado",
        headerName: "Resultado",
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<SwabCheckResult, string>) => (
            <Box>
                {params.value === 'PENDING' ?
                    <Badge colorPalette={"yellow"}>
                        {params.value.toUpperCase()}
                    </Badge>
                    :
                    params.value === 'APPROVED' ?
                        <Badge colorPalette={"green"}>
                            {params.value.toUpperCase()}
                        </Badge>
                        : <Badge colorPalette={"red"}>
                            {params.value!.toUpperCase()}
                        </Badge>
                }
            </Box>
        )
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

export default function PageSwab() {
    return (
        <div style={{ height: "100%" }}>
            <DataGrid
                showToolbar
                disableColumnMenu={true}
                rows={rows}
                columns={columns}
                disableColumnResize
            />
        </div>
    );
}
