import { c } from '../control/canvas.js'
import { _primaryColor, _secondaryColor } from '../control/canvas.js'
import { centerX, centerY } from '../utils/coordinates.js'

export function square(x, y, s) {
    // set fill style to primary color
    c.fillStyle = _primaryColor
    // fill a square
    c.fillRect(centerX(x), centerY(y), s, s)

    // set stroke style to secondary color
    c.strokeStyle = _secondaryColor

    // set line width to 5
    c.lineWidth = 5

    // stroke a square
    c.strokeRect(centerX(x), centerY(y), s, s)
}