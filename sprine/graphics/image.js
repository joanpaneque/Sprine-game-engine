import { c, canvas } from '../control/canvas.js'
import { centerX, centerY } from "../utils/coordinates.js"
import { chunkArray } from '../utils/array.js'

export var resources = []

export function image(src, x, y) {
    // If the image is in resources, draw it. Otherwise, console log an error.
    if (resources.includes(src)) {
        c.drawImage(
            resources[resources.indexOf(src)-1],
            canvas.width / 2 + x - resources[resources.indexOf(src)-1].width / 2,
            canvas.height / 2 - y - resources[resources.indexOf(src)-1].height / 2)
            return resources[resources.indexOf(src)-1]
    } else {
        image('sprine/img/unloaded_error.png', x, y)
        console.error(`Error: Image "${src}" couldn't be rendered because it wasn't loaded. To fix this, call loadImage("${src}") in preload function.`)
    }
}

var loaded = []

// Load image
export function loadImage(src) {
    if (loaded.includes(src)) return console.warn('Warning: ' + src + ' is already loaded.')
    loaded.push(src)
    // Create a new image object and add it to resources array when it's loaded
    var img = new Image()
    img.src = src
    img.onload = () => {
        resources.push(img, src)
    }
}

export function getPixels(image) {
    // Create a canvas element and load the image.
    let temporalCanvas = document.createElement('canvas')
    let temporalC = temporalCanvas.getContext('2d')
    temporalCanvas.width = image.width
    temporalCanvas.height = image.height
    temporalC.drawImage(image, 0, 0)
    let imagedata = temporalC.getImageData(0, 0, temporalCanvas.width, temporalCanvas.height).data
    // Return the image data.
    return chunkArray(imagedata, 4)
}

