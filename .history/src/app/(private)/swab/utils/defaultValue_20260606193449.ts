export function defaultValue(value: ) {
    if (!value || String(value).trim() === "") {
        return "-"
    }
    return value
}