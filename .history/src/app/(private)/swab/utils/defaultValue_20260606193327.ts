export function defaultValue(value: string) {
    if (!value || String(value).trim() === "") {
        return "-"
    }
    return value
}