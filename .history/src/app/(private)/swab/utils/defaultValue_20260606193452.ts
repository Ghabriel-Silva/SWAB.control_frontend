export function defaultValue(valueT) {
    if (!value || String(value).trim() === "") {
        return "-"
    }
    return value
}