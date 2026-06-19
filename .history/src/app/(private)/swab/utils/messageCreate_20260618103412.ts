
import { CreateSwabResponse } from "../types/create.swab.response";
import { SwabResponse } from "../types/swab.response";

export function messageCreate(data: SwabResponse<CreateSwabResponse>): string[] {
    const mensagem = []
    if (data.data.pending.length) {
        const pedingSwabs: string[] = data.data.pending.map(item => item.location)
        mensagem.push(`Swab(s) ${pedingSwabs.join(', ')} constam como pendente no sistema`)
    }
    if (data.data.invalidLocation.length) {
        mensagem.push(`${data.data.invalidLocation.join(',')} não estão cadastrados no sistema`)
    } return mensagem
}