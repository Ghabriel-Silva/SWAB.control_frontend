"use client";

import { DataGrid } from "@mui/x-data-grid";
import { ptBR } from '@mui/x-data-grid/locales';
import { SwabGridRow } from "../../types/swab.data-grid";
import { columns } from "./Columns";
import { Meta } from "../../types/swab.response";
interface Props {
    rows: SwabGridRow[];
    loading: boolean;
    dataMeta: Meta;
}


export function SwabTable({ rows, loading, dataMeta }: Props) {
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
                sx={{
                    '& .MuiDataGrid-cell': {
                        fontSize: '12px',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        fontSize: '12px',
                    },

                }}
                disableColumnFilter
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: dataMeta.limit, page: dataMeta.page - 1 },
                    },
                }}
                onPaginationModelChange={(model) => {
                    const params = new URLSE
                }}
                rowCount={dataMeta.total}
                paginationMode="server"
            />
        </div>
    );
}
