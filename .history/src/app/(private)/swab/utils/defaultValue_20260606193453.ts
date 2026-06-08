export function defaultValue(value:T) {
    if (!value || String(value).trim() === "") {
        return "-"
    }
    return value
}