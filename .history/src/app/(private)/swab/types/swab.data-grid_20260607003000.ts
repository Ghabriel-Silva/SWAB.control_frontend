import { SwabCheckResult } from "@/app/(private)/types/swab";

//Centralizo o mode para os dados que vão chegar nas linhas da tabela
export interface SwabGridRow {
  id: string;
  lote: string;
  dateHours: string;
  dateHourRealization: string | null
  tankSilo: string;
  lastFauct: string;
  newFaucet: string | null;
  typeSwab: string;
  batch: string | null;
  isCancelledSwab: boolean,
  resultSwab: SwabCheckResult;
  valueAtp: number | null;
  operator: string | null;
}