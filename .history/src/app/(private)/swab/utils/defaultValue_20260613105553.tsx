import { InfoNull } from "@/app/"

export function defaultValue<T>(value: T) {
    if (!value || String(value).trim() === "") {
        return <InfoNull />
    }
    return value
}