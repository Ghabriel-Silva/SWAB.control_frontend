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
    { field: 'Lote' ,  flex: 1,},
    { field: 'Data/Hota',  flex: 1, },
    { field: 'Tank/Silo',  flex: 1, },
    { field: 'Ultima Torneira',  flex: 1, },
    { field: 'Tipo Swab' ,  flex: 1,},
    { field: 'Resultado' ,  flex: 1,},
    { field: 'Valor ATP' },
    { field: 'Operador' },
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
