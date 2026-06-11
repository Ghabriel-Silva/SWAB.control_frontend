"use client";

import { DataGrid } from "@mui/x-data-grid";
import { ptBR } from '@mui/x-data-grid/locales';
import { SwabGridRow } from "../types/swab.data-grid";
import { columns } from "./table/Columns";


interface Props {
    rows: SwabGridRow[];
    loading: boolean
}


export function SwabTable({ rows, loading }: Props) {
    return (
        <div
            style={{
                height: "calc(100% - 29px)",
                width: '100%',
            }}
        >
            <DataGrid
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                loading={loading}
                rows={rows}
                columns={columns}
                showToolbar
                disableColumnMenu
                disableColumnResize
                
                hideFooterSelectedRowCount={true}
                hideFooterPagination={true}
                sx={{
                    '& .MuiDataGrid-cell': {
                        fontSize: '12px',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        fontSize: '12px',
                    },

                }}
                disableColumnFilter
            />
        </div>
    );
}
