"use client"

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    {
        id: 1,
        name: "Gabriel",
        description: 'Nada demais',
        result: 'Aprovado'
    },
    {
        id: 2,
        name: "Ketlin",
        description: 'Nada demais',
        result: 'Aprovado'
    },
    {
        id: 3,
        name: "Rafael",
        description: 'Nada demais ssssssssssssssc  Nada demais ssssssssssssssc',
        result: 'Aprovado'
    }
];

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
