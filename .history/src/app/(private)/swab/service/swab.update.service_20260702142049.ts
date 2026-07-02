import { UpdateSwabType } from "../validations/update.swab.schema";


export async function UpdateSwabService(data: UpdateSwabType) {
    const resp = await fetch('/api/swab/update', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    const dataRes = resp.json()

    if (!resp.ok) {
        const err = dataRes as E
        throw new Error('')
    }

}