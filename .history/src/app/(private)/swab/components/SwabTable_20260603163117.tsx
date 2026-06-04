"use client";

import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";
import { SwabGridRow } from "../types/swab.data-grid";

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