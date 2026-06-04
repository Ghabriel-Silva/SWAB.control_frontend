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
            />
        </div>
    );
}
