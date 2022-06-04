function componentToHex(c) {
    var hex = c.toString(16)
    return hex.length == 1 ? "0" + hex : hex
}

export function rgbToHex(r = 0, g = r, b = r) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}