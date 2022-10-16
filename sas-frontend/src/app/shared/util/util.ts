export function copyObject<T>(obj: T) {
    return JSON.parse(JSON.stringify(obj))
}