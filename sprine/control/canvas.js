import { rgbToHex } from "../utils/color.js"

export const canvas = document.createElement('canvas')
export const c = canvas.getContext('2d')
export var _primaryColor = '#000'
export var _secondaryColor = '#fff'
canvas.width = 480
canvas.height = 360
document.body.appendChild(canvas)
c.fillStyle = primaryColor
c.fillRect(0, 0, canvas.width, canvas.height)

export function createCanvas(width, height) {
    canvas.width = width
    canvas.height = height
}

export function background(r, g, b) {
    c.fillStyle = rgbToHex(r, g, b)
    c.fillRect(0, 0, canvas.width, canvas.height)
}

export function primaryColor(r, g, b) {
    _primaryColor = rgbToHex(r, g, b)
}

export function secondaryColor(r, g, b) {
    _secondaryColor = rgbToHex(r, g, b)
}

export function cursor(type) {
    canvas.style.cursor = type
}