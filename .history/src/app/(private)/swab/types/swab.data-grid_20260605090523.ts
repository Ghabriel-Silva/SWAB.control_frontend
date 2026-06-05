import { SwabCheckResult } from "@/app/(private)/types/swab";

export interface SwabGridRow {
  id: string;
  lote: string;
  dataHora: string;
  dataHourRealization: string| undefined;
  tankSilo: string;
  ultimaTorneira: string;
  novaTorneira: string | null;
  tipoSwab: string;
  resultado: SwabCheckResult;
  valorAtp: number | null;
  operador: string | null;
}