"use client"

import { Role } from '@/permissions/roles';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    lote: "SW26050046",
    dataHora: "25/05/2026 13:38:31",
    tankSilo: "Tanque Principal de Armazenamento 31",
    ultimaTorneira: "Linha Envase Norte - Torneira 12A",
    tipoSwab: "ATP",
    resultado: "PENDENTE",
    valorAtp: "-",
    operador: "Gabriel Ribeiro dos Santos",
  },
  {
    id: 2,
    lote: "SW26050047",
    dataHora: "25/05/2026 14:12:08",
    tankSilo: "Silo de Leite Pasteurizado Unidade Industrial Oeste",
    ultimaTorneira: "Torneira Final da Linha de Produção Setor B",
    tipoSwab: "MICROBIOLÓGICO",
    resultado: "REPROVADO",
    valorAtp: "4587",
    operador: "Ketlin Aparecida de Oliveira",
  },
  {
    id: 3,
    lote: "SW26050048",
    dataHora: "25/05/2026 15:44:22",
    tankSilo: "Reservatório Intermediário de Produto Acabado",
    ultimaTorneira: "Ponto de Coleta Secundário da Linha 03",
    tipoSwab: "ATP",
    resultado: "APROVADO",
    valorAtp: "78",
    operador: "Rafael Henrique Rodrigues da Silva",
  },
  {
    id: 4,
    lote: "SW26050049",
    dataHora: "25/05/2026 16:01:55",
    tankSilo: "Tanque CIP Sistema Automatizado Central",
    ultimaTorneira: "Saída Final do Circuito de Limpeza Automatizada",
    tipoSwab: "ATP",
    resultado: "PENDENTE",
    valorAtp: "-",
    operador: "Fernanda Cristina Moreira de Albuquerque",
  },
  {
    id: 5,
    lote: "SW26050050",
    dataHora: "25/05/2026 17:23:40",
    tankSilo: "Silo Vertical de Armazenamento de Matéria-Prima",
    ultimaTorneira: "Conexão de Descarga Externa do Sistema",
    tipoSwab: "MICROBIOLÓGICO",
    resultado: "EM ANÁLISE",
    valorAtp: "-",
    operador: "João Pedro Gonçalves Martins",
  },
  {
    id: 6,
    lote: "SW26050051",
    dataHora: "25/05/2026 18:02:17",
    tankSilo: "Tanque de Homogeneização de Grande Capacidade",
    ultimaTorneira: "Torneira de Verificação Sanitária Linha Premium",
    tipoSwab: "ATP",
    resultado: "APROVADO",
    valorAtp: "12",
    operador: "Mariana Eduarda Fernandes Cavalcante",
  },
];

const columns: GridColDef[] = [
    {
        field: "lote",
        headerName: "Lote",
        flex: 1,
        minWidth: 150,
    },
    {
        field: "dataHora",
        headerName: "Data/Hora",
        flex: 1.5,
        minWidth: 180,
    },
    {
        field: "tankSilo",
        headerName: "Tank/Silo",
        flex: 1,
        minWidth: 120,
    },
    {
        field: "ultimaTorneira",
        headerName: "Última Torneira",
        flex: 1.5,
        minWidth: 180,
    },
    {
        field: "tipoSwab",
        headerName: "Tipo Swab",
        flex: 1,
        minWidth: 120,
        renderCell: (params:GridRenderCellParams<Role>)=>{

        }
    },
    {
        field: "resultado",
        headerName: "Resultado",
        flex: 1,
        minWidth: 120,
    },
    {
        field: "valorAtp",
        headerName: "Valor ATP",
        flex: 1,
        minWidth: 120,
    },
    {
        field: "operador",
        headerName: "Operador",
        flex: 1.5,
        minWidth: 150,
    },
];

export default function PageSwab() {
    return (
        <div style={{ height: "100%" }}>
            <DataGrid
                showToolbar
                disableColumnMenu={true}
                rows={rows}
                columns={columns}
                disableColumnResize
            />
        </div>
    );
}
