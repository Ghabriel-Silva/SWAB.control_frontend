import { InfoNull } from "@/app/(private)/"

export function defaultValue<T>(value: T) {
    if (!value || String(value).trim() === "") {
        return <InfoNull />
    }
    return value
}