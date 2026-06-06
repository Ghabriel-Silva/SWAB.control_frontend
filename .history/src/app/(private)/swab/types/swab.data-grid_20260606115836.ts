import { SwabCheckResult } from "@/app/(private)/types/swab";

export interface SwabGridRow {
  id: string;
  lote: string;
  dateHours: string;
  dateHourRealization: string | null
  tankSilo: string;
  lastFaucte: string;
  novaTorneira: string | null;
  tipoSwab: string;
  resultado: SwabCheckResult;
  valorAtp: number | null;
  operador: string | null;
}