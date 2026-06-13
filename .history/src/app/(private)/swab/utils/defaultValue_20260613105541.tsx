export function defaultValue<T>(value: T) {
    if (!value || String(value).trim() === "") {
        return <InfoNul
    }
    return value
}