
import { SwabTable } from "./components/SwabTable";
import { swabService } from "./service/swab.service";

export default async function PageSwab() {
    try {
        const data = await swabService();

        const rows = data.data.map(item => ({
            id: item.id,
            lote: item.internalCode,
            dataHora: item.createdAt,
            tankSilo: item.tank.name,
            ultimaTorneira: item.lastFaucetTank,
            tipoSwab: item.check.type,
            resultado: item.check.result,
            valorAtp: item.check.valueAtp,
            operador: item.operator,
        }));

        return <SwabTable  rows={rows} />;
    } catch (e) {
        return <p>Erro ao carregar dados.</p>;
    }
}