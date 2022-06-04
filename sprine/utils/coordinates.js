import { canvas } from "../control/canvas.js";

export function centerX(x) {
    return canvas.width / 2 + x
}

export function centerY(y) {
    return canvas.height / 2 - y
}