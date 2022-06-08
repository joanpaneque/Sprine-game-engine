import { canvas } from "../control/canvas.js"
import { image, getPixels } from "../graphics/image.js"
import { chunkArray, arraysEqual, isSubArray } from "../utils/array.js"
import { isBetween, deCenterX, deCenterY } from "../utils/coordinates.js"

var sprites = []

export class Sprite {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
        this.pointTowards(90)
        this.image = undefined
        this.imageObject = image('sprine/img/default.png', this.x, this.y)
        this.collisionCache = []
        generateCollisions(this)
        sprites.push(this)
    }

    setimage(src) {
        this.image = src
        this.imageObject = image(src, this.x, this.y)
        this.collisionCache = []
        generateCollisions(this)
        renderSprites()
    }

    changeX(x) {
        this.goto(this.x + x, this.y)
    }

    changeY(y) {
        this.goto(this.x, this.y + y)
    }

    getDirection() {
        return (this.direction - 90) / -1
    }

    pointTowards(angle) {
        this.direction = (angle - 90) / -1
    }

    goto(x, y) {
        this.x = x
        this.y = y
    }

    moveSteps(steps) {
        this.goto(this.x + (Math.cos(this.direction * Math.PI / 180) * steps), this.y + (Math.sin(this.direction * Math.PI / 180) * steps))
    }

    touchingEdge() {
        generateCollisions(this)
        let chunkedCollisions = chunkArray(this.collisionCache, this.imageObject.width)
    }
}

function generateCollisions(sprite) {

    let spritePixels = getPixels(sprite.imageObject)
    spritePixels = spritePixels.map(pixel => pixel[3] === 0 ? false : true)

    spritePixels = chunkArray(spritePixels, sprite.imageObject.width)
    for (let row = 0; row < spritePixels.length; row++) {
        for (let col = 0; col < spritePixels[row].length; col++) {
            if (spritePixels[row][col]) {
                spritePixels[row][col] = [parseInt(sprite.x - sprite.imageObject.width / 2 + col), parseInt(sprite.y + sprite.imageObject.height / 2 - row)]

            }
            sprite.collisionCache.push(spritePixels[row][col])
        }
    }
    sprite.collisionCache = chunkArray(sprite.collisionCache, sprite.imageObject.width)

}

export function touchingSprite(sprite) {

    if (!isBetween(window.mouseX, window.mouseY, sprite.x - sprite.imageObject.width / 2, sprite.y + sprite.imageObject.height / 2, sprite.x + sprite.imageObject.width / 2, sprite.y - sprite.imageObject.height / 2)) {
        return false
    }
    if (sprite.collisionCache.length === 0) generateCollisions(sprite)


    // Get the mouse coordinates relative to the sprite
    let mouseY = deCenterY(window.mouseY) - deCenterY(sprite.y + sprite.imageObject.height / 2)
    let mouseX = deCenterX(window.mouseX) - deCenterX(sprite.x - sprite.imageObject.width / 2)


    try {
        return typeof sprite.collisionCache[Math.round(mouseY)][Math.round(mouseX)] == 'object'
      } catch (error) {
        return false
      }

}

export function renderSprites() {
    sprites.forEach(sprite => {
        sprite.imageObject = image(sprite.image === undefined ? 'sprine/img/default.png' : sprite.image, sprite.x, sprite.y)
    })
}

