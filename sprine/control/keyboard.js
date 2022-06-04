export var keys = []

export function keyDown(key) {
    if (key !== undefined) return keys.includes(key)
    return keys.length > 0
}