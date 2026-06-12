

export function SwabGetByLote(lote: string) {
    const resp = fetch(`/api/swab?${lote}`)
}