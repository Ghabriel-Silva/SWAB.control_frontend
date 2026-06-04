"use client"

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    {
        id: 1,
        name: "Gabriel",
        description: 'Nada demais'
    },
    {
        id: 2,
        name: "Ketlin"
    }, 
    {
        id:3, 
        name:"Rafael"
    }
];

const columns: GridColDef[] = [
    { field: 'name' , width:"10px" },
    { field: 'description' },
];

export default function PageSwab() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
