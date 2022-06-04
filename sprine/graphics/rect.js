import { c } from '../control/canvas.js'
import { _primaryColor, _secondaryColor } from '../control/canvas.js'
import { centerX, centerY } from '../utils/coordinates.js'

export function rect(x, y, w, h) {
    c.fillStyle = _primaryColor
    c.fillRect(centerX(x), centerY(y), w, h)
    c.strokeStyle = _secondaryColor
    c.lineWidth = 5
    c.strokeRect(centerX(x), centerY(y), w, h)
}