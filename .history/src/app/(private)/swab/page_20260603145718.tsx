"use client"

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
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

const columns: GridColDef[] = [
    {
        field: 'Lote',
        flex: 1,
        minWidth: 120,
    },
    {
        field: 'Data/Hora',
        flex: 1.5,
        minWidth: 180,
    },
    {
        field: 'Tank/Silo',
        flex: 1,
        minWidth: 140,
    },
    {
        field: 'Ultima Torneira',
        flex: 2,
        minWidth: 200,
    },
    {
        field: 'Tipo Swab',
        flex: 1.5,
        minWidth: 150,
    },
    {
        field: 'Resultado',
        flex: 1,
        minWidth: 130,
    },
    {
        field: 'Valor ATP',
        flex: 1,
        minWidth: 130,
    },
    {
        field: 'Operador',
        flex: 1.5,
        minWidth: 180,
    },
];

export default function PageSwab() {
    return (
        <div style={{ height: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                disableColumnResize
            />
        </div>
    );
}
