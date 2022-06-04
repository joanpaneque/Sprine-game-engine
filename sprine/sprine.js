 var resourceLoading = performance.now()

// External usage
import { image, loadImage } from './graphics/image.js'
import { createCanvas, background, cursor } from './control/canvas.js'
import { keyDown, keys } from './control/keyboard.js'
import { mouseX, mouseY } from './control/mouse.js'
import { square } from './graphics/square.js'
import { rect } from './graphics/rect.js'
import { primaryColor, secondaryColor } from './control/canvas.js'
import { Sprite } from './engine/sprite.js'
import { renderSprites, touchingSprite } from './engine/sprite.js'
import { chunkArray, isSubArray } from './utils/array.js'
import { getFPS } from './control/loop.js'

window.image = image
window.loadImage = loadImage
window.createCanvas = createCanvas
window.background = background
window.mouseX = undefined
window.mouseY = undefined
window.keyDown = keyDown
window.square = square
window.rect = rect
window.primaryColor = primaryColor
window.secondaryColor = secondaryColor
window.Sprite = Sprite
window.renderSprites = renderSprites
window.chunkArray = chunkArray
window.touchingSprite = touchingSprite
window.cursor = cursor
window.getFPS = getFPS
window.isSubArray = isSubArray

// API usage
import { loadLoop } from './control/loop.js'
import { resources } from './graphics/image.js'


// API internal control
window.onload = () => {
    loadImage('sprine/img/unloaded_error.png') // Error image
    loadImage('sprine/img/default.png') // Default image
    preload()

    PRELOAD_RESOURCES()

}

function PRELOAD_RESOURCES() {
    

    var resourcesLeftForLoading = resources.length / 2

    // Check if all resources are loaded with a for loop
    for (var i = 0; i < resources.length; i += 2) {
        if (resources[i].complete && resources[i].naturalHeight !== 0) {
            resourcesLeftForLoading--
        }  
    }

    if (resourcesLeftForLoading == 0 && resources.length > 0) {
        console.info(`All resources loaded. (${performance.now() - resourceLoading}ms)`)

        

        document.addEventListener("keydown", (e) => {
            if (!keys.includes(e.key)) keys.push(e.key)
        });

        document.addEventListener("keyup", (e) => {
            keys.splice(keys.indexOf(e.key), 1)
        });

        document.addEventListener("mousemove", (e) => {
            mouseX(e)
            mouseY(e)
        });

        setup()
        loadLoop()
        return
    }
    requestAnimationFrame(PRELOAD_RESOURCES)

}