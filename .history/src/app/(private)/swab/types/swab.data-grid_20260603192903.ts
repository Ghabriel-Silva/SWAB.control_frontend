import { SwabCheckResult } from "@/app/(private)/types/swab";

export interface SwabGridRow {
  id: string;
  lote: string;
  dataHora: string;
  tankSilo: string;
  ultimaTorneira: string;
  novaTorneira: string ;
  tipoSwab: string;
  resultado: SwabCheckResult;
  valorAtp: number | null;
  operador: string | null;
}