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
        description: 'Nada demais ssssssssssssssc ',
        result: 'Aprovado'
    }
];

const columns: GridColDef[] = [
    { field: 'name'},
    { field: 'description' },
    {field: 'result'}
];

export default function PageSwab() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid 
            autosizeOptions={{
                columns:['name', 'description'',result']
            }}
            rows={rows} columns={columns}
                
            />
        </div>
    );
}
