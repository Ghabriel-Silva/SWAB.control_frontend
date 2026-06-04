"use client";

import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";

interface Props {
    rows: SwabGridRow[];
}

export function SwabTable({ rows }: Props) {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            showToolbar
            disableColumnMenu
            disableColumnResize
        />
    );
}