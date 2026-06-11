import { CreateSwabResponse } from "../types/create.swab.response";
import { SwabResponse } from "../types/swab.response";

export function messageCreate(data: SwabResponse<CreateSwabResponse>) {
    const message = []

    if (data.data.pending.length || data.data.invalidTanks.length) {
        const pendingSwabs: string[] = data.data.pending.map(item => item.tank)
        const invalidTank: string[] = data.data.invalidTanks

        const mensagem = []
        if (pendingSwabs.length) {
            mensagem.push(`Swab(s) ${pendingSwabs.join(', ')} constam como pendente no sistema`)
        }
        if (invalidTank.length) {
            mensagem.push(`${invali
                
                dTank.join(',')} não estão cadastrados no sistema`)
        }
    }