"use client";

import { DataGrid } from "@mui/x-data-grid";

import { SwabGridRow } from "../types/swab.data-grid";
import { columns } from "./table/Columns";


interface Props {
    rows: SwabGridRow[];
    loading: boolean
}
export function SwabTable({ rows }: Props) {
    return (
        <DataGrid
            loading={load}
            rows={rows}
            columns={columns}
            showToolbar
            disableColumnMenu
            disableColumnResize
        />
    );
}