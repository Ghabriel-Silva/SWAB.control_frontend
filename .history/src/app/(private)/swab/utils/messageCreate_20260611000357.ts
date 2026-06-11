import { CreateSwabResponse } from "../types/create.swab.response";
import { SwabResponse } from "../types/swab.response";

export function messageCreate(data: SwabResponse<CreateSwabResponse>) {
    const mensagem = []
    if (data.data.pending.length) {
        mensagem.push(`Swab(s) ${data.data.pending.join(', ')} constam como pendente no sistema`)
    }
    if (invalidTank.length) {
        mensagem.push(`${invalidTank.join(',')} não estão cadastrados no sistema`)
    } return message
}