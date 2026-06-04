"use client"

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';



const columns: GridColDef[] = [
    { field: 'name', headerName: 'Product Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
];

export default function PageSwab() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
