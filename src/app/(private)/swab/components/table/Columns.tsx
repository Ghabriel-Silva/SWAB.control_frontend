"use client";

import {
    GridColDef,
    GridRenderCellParams,
} from "@mui/x-data-grid";
import { SwabGridRow } from "@/app/(private)/swab/types/swab.data-grid";
import { SwabCheckResult, SwabCheckType } from "@/app/(private)/types/swab";
import { TypeSwab, Result, IsCancelled, DialogContainer, ContainerRow, FloatingJustification } from "@/app/(private)/swab/components/index";
import { defaultValue } from "../../utils/defaultValue";
import { Badge, HStack, Text } from "@chakra-ui/react";
import { CancelSwabDialog } from "../dialog/CancelSwabDialog";



export const columns: GridColDef<SwabGridRow>[] = [
    {
        field: "lote",
        headerName: "Lote",
        flex: 1.5,
        sortable: false,
        filterable: false,
        disableExport: true,
        minWidth: 100,
        renderCell: (params) => {
            return (
                <ContainerRow>
                    <DialogContainer row={params.row} />
                </ContainerRow>
            )
        }
    },
    {
        field: "dateHours",
        headerName: "Data/Hora",
        flex: 1.5,
        sortable: false,
        filterable: false,
        disableExport: true,
        minWidth: 100,
        valueGetter: (value) => {
            if (!value) return "-"

            const date: string = new Date(value).toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: "short"
            })
            return date.replace(',', '  ')

        }

    },
    {
        field: "dateHourRealization",
        headerName: "Validado",
        flex: 1.5,
        sortable: false,
        filterable: false,
        disableExport: true,
        minWidth: 100,
        valueGetter: (value) => {
            if (!value) return '-'
            const date: string = new Date(value).toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: "short"
            })
            return date.replace(',', '  ')
        }
    },
    {
        field: "location",
        headerName: "Tank/Silo",
        flex: 1,
        sortable: false,
        filterable: false,
        disableExport: true,
        minWidth: 150,
        renderCell: (params: GridRenderCellParams<SwabGridRow, string>) => {
            return (
                <HStack justifyContent={'space-between'} height={"100%"}  >      
                        <Text truncate aria-label={
                            `Tanque de armazenamento e reprocessamento de produtos industriais
                             ${params.row.location}`} title={params.row.location} >
                            {params.value}
                        </Text>            
                    <FloatingJustification
                        location={params.row.location}
                        title={`Obs. Ultima reprovação ${params.row.location}`}
                        text={params.row.justificationLastReprovation ?? ''}
                        isPeding={params.row.resultSwab}
                        swabCancelled={params.row.isCancelledSwab}

                    />
                </HStack>
            )
        }
    },
    {
        field: "lastFauct",
        headerName: "Torneira anterior",
        flex: 1,
        sortable: false,
        filterable: false,
        disableExport: true,
        minWidth: 100,
    },
    {
        field: "newFaucet",
        headerName: "Torneira Atual",
        sortable: false,
        filterable: false,
        disableExport: true,
        flex: 1,
        minWidth: 100,
        valueGetter: (value) => {
            return (
                defaultValue(value)
            )
        }

    },
    {
        field: "typeSwab",
        headerName: "Tipo Swab",
        flex: 1,
        sortable: false,
        filterable: false,
        disableExport: true,
        minWidth: 100,
        renderCell: (params: GridRenderCellParams<SwabGridRow, SwabCheckType>) => {
            return (
                < TypeSwab value={params.value!} />
            )
        }
    },
    {
        field: "resultSwab",
        headerName: "Resultado",
        flex: 1,
        sortable: false,
        filterable: false,
        disableExport: true,
        minWidth: 100,
        renderCell: (
            params: GridRenderCellParams<SwabGridRow, SwabCheckResult>
        ) => {
            return (
                <Result value={params.value!} />
            )
        },
    },
    {
        field: "valueAtp",
        headerName: "Valor ATP",
        flex: 1,
        sortable: false,
        filterable: false,
        disableExport: true,
        valueGetter: (value) => {
            return (
                defaultValue(value)
            )
        }

    },
    {
        field: "batch",
        headerName: "Lote ATP",
        flex: 1,
        sortable: false,
        filterable: false,
        disableExport: true,
        valueGetter: (value) => {
            return (
                defaultValue(value)
            )
        }
    },
    {
        field: "isCancelledSwab",
        headerName: "Cancelado",
        flex: 1,
        sortable: false,
        filterable: false,
        disableExport: true,
        renderCell: (params: GridRenderCellParams<SwabGridRow, boolean>) => {
            return (
                <IsCancelled value={params.value} />
            )
        }
    },

    {

        field: 'operator',
        headerName: "Analista",
        flex: 1,
        sortable: false,
        filterable: false,
        disableExport: true,
        valueGetter: (value) => {
            return (
                defaultValue(value)
            )
        }

    },
    {
        field: "cancelSwab",
        headerName: "Ações",
        width: 80,
        sortable: false,
        filterable: false,
        disableExport: true,
        align: "center",
        headerAlign: "center",
        renderCell: ({ row }) => <CancelSwabDialog row={row} />,
    },
];
