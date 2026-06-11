"use client";

import { DataGrid } from "@mui/x-data-grid";
import { ptBR } from '@mui/x-data-grid/locales';
import { SwabGridRow } from "../../types/swab.data-grid";
import { columns } from "./Columns";
import { Meta } from "../../types/swab.response";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
    rows: SwabGridRow[];
    loading: boolean;
    dataMeta: Meta;
}


export function SwabTable({ rows, loading, dataMeta }: Props) {
    const searchParams = useSearchParams()
    const router = useRouter()
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
                pagination
                paginationMode="server"
                paginationModel={{
                    page: dataMeta.page - 1,
                    pageSize: dataMeta.limit,
                }}
                pageSizeOptions={[10, 20, 50, 100]} 
                onPaginationModelChange={(model) => {
                    const params = new URLSearchParams(searchParams.toString())
                    params.set('page', String(model.page + 1))
                    params.set('limit', String(model.pageSize))

                    router.push(`/swab?${params.toString()}`)
                }}
                rowCount={dataMeta.total}
            />
        </div>
    );
}
