import { canvas } from "../control/canvas.js";

export function centerX(x) {
    return canvas.width / 2 + x
}

export function centerY(y) {
    return canvas.height / 2 - y
}

export function deCenterX(x) {
    return (2 * x + canvas.width) / 2
}

export function deCenterY(y) {
    return canvas.height - (2 * y + canvas.height) / 2
}

export function isBetween(x, y, x1, y1, x2, y2) {
    return (x >= x1 && x <= x2) && (y <= y1 && y >= y2)
}