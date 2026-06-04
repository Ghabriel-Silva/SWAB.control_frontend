"use client"

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    {
        id: 1,
        name: "Gabriel",
        description: 'Nada demais'
        ""
    },
    {
        id: 2,
        name: "Ketlin", 
         description: 'Nada demais'
    },
    {
        id: 3,
        name: "Rafael"
    }
];

const columns: GridColDef[] = [
    { field: 'name', width: 10 },
    { field: 'description' },
];

export default function PageSwab() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns}
                autosizeOptions={{
                    columns: ['name', 'status', 'createdBy'],
                    includeOutliers: true,
                    includeHeaders: false,
                }}
            />
        </div>
    );
}
