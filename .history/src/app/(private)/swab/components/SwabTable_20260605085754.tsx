"use client";

import { DataGrid } from "@mui/x-data-grid";
import { nlNL } from '@mui/x-data-grid/locales';
import { SwabGridRow } from "../types/swab.data-grid";
import { columns } from "./table/Columns";


interface Props {
    rows: SwabGridRow[];
    loading: boolean
}
export function SwabTable({ rows, loading }: Props) {
    return (
        <DataGrid
            loading={loading}
            rows={rows}
            columns={columns}
            showToolbar
            disableColumnMenu
            disableColumnResize
        />
    );
}