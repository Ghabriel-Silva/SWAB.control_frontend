import { SwabCheckResult } from "@/app/";

export interface SwabGridRow {
  id: string;
  lote: string;
  dataHora: string;
  tankSilo: string;
  ultimaTorneira: string;
  tipoSwab: string;
  resultado: SwabCheckResult;
  valorAtp: number | null;
  operador: string | null;
}