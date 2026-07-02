import { UpdateSwabType } from "../validations/update.swab.schema";


export async function UpdateSwabService(data: UpdateSwabType) {
    const resp = await fetch('/api/swab')
}