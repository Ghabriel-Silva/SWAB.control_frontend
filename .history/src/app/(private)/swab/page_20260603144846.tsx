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
    { field: 'Lote' },
    { field: 'Data/Hota' },
    { field: 'Tank/Silo' },
    { field: 'Ultima Torneira' },
    { field: 'Tipo Swab' },
    { field: 'Resultado' },
    { field: 'Tank/Silo' },
    { field: 'Tank/Silo' },
    { field: 'Tank/Silo' },
    { field: 'Tank/Silo' },
];

export default function PageSwab() {
    return (
        <div style={{ height: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                autosizeOptions={{
                    includeOutliers: true,
                    includeHeaders: false,
                }}
            />
        </div>
    );
}
