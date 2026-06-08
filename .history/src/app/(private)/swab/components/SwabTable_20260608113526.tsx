"use client";

import { DataGrid } from "@mui/x-data-grid";
import { ptBR } from '@mui/x-data-grid/locales';
import { SwabGridRow } from "../types/swab.data-grid";
import { columns } from "./table/Columns";


interface Props {
    rows: SwabGridRow[];
    loading: boolean
}
const minHeight = 200;
const maxHeight = '100%';

export function SwabTable({ rows, loading }: Props) {
    return (
        <div
            style={{
                height: 500,
                width: '100%',
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                loading={loading}
            />
        </div>
    );
}
