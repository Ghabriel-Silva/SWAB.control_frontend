import { SwabTable } from "./components/SwabTable";
import { useGetData } from "./hooks/useGetData";
import { swabService } from "./service/swab.service";

export default async function PageSwab() {
    const { data } = useGetData()

    const rows = data.data.map(item => ({
        id: item.id,
        lote: item.internalCode,
        dataHora: item.createdAt,
        tankSilo: item.tank.name,
        ultimaTorneira: item.lastFaucetTank,
        novaTorneira: item.faucetCode,
        tipoSwab: item.check.type,
        resultado: item.check.result,
        valorAtp: item.check.valueAtp,
        operador: item.operator,
    }));

    return <SwabTable rows={rows} />;
}