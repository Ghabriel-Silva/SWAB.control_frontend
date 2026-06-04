import { SwabTable } from "./components/SwabTable";
import { swabService } from "./service/swab.service";


export default async function PageSwab() {
    const data = await swabService();

    function sanitize(value: unknown): string {
        if (typeof value !== "string") return String(value ?? "");
        return value.replace(/<[^>]*>/g, ""); // Remove qualquer tag HTML
    }

    const rows: SwabGridRow[] = data.map((item) => ({
        id: item.id,
        lote: sanitize(item.lote),
        dataHora: sanitize(item.dataHora),
        tankSilo: sanitize(item.tankSilo),
        ultimaTorneira: sanitize(item.ultimaTorneira),
        tipoSwab: sanitize(item.tipoSwab),
        resultado: item.resultado, // enum, não precisa sanitizar
        valorAtp: sanitize(item.valorAtp),
        operador: sanitize(item.operador),
    }));
    return <SwabTable rows={rows} />;
}