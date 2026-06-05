import { SwabCheckResult } from "@/app/(private)/types/swab";

export interface SwabGridRow {
  id: string;
  lote: string;
  dataHora: string;
  dataHourRealization: string| undefined;
  tankSilo: string;
  ultimaTorneira: string;
  novaTorneira: string | undefined;
  tipoSwab: string;
  resultado: SwabCheckResult;
  valorAtp: number | undefined
  operador: string | null;
}