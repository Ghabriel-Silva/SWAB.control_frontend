import { CreateSwabResponse } from "../types/create.swab.response";
import { SwabResponse } from "../types/swab.response";

export function messageCreate(data: SwabResponse<CreateSwabResponse>) {
    const mensagem = []
    if (data.data.pending.length) {
        mensagem.push(`Swab(s) ${data.data.pending.join(', ')} constam como pendente no sistema`)
    }
    if (data.data.invalidTanks.length) {
        mensagem.push(`${data.data.invalidTanks.join(',')} não estão cadastrados no sistema`)
    } return mensagem
}