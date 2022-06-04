import { c, canvas } from './canvas.js'

export function mouseX(e) {
        return window.mouseX = e.clientX - c.canvas.offsetLeft - canvas.width / 2
}

export function mouseY(e) {
        return window.mouseY = canvas.height / 2 - e.clientY + c.canvas.offsetTop
}