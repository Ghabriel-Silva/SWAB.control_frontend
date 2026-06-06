import { SwabCheckResult } from "@/app/(private)/types/swab";

export interface SwabGridRow {
  id: string;
  lote: string;
  dateHours: string;
  dateHourRealization: string | null
  tankSilo: string;
  lastFaucte: string;
  newFaucet: string | null;
  typeSwab: string;
  batch:string 
  resultSwab: SwabCheckResult;
  valueAtp: number | null;
  operator: string | null;
}