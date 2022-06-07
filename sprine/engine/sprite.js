import { image, getPixels } from "../graphics/image.js"
import { chunkArray, arraysEqual, isSubArray } from "../utils/array.js"

var sprites = []

export class Sprite {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
        this.pointTowards(90)
        this.image = undefined
        this.imageObject = image('sprine/img/default.png', this.x, this.y)
        this.collisionCache = []
        sprites.push(this)
    }

    setimage(src) {
        this.image = src
        this.collisionCache = []
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
        this.collisionCache = []
    }

    moveSteps(steps) {
        this.goto(this.x + (Math.cos(this.direction * Math.PI / 180) * steps), this.y + (Math.sin(this.direction * Math.PI / 180) * steps))
    }
}

export function touchingSprite(sprite) {

    let touching = false

    if (sprite.collisionCache.length == 0) {
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
    }

    sprite.collisionCache.forEach(pixel => {
        if (arraysEqual(pixel, [window.mouseX, window.mouseY])) {
            touching = true
            return
        }
    })
    return touching
}

export function renderSprites() {
    sprites.forEach(sprite => {
        sprite.imageObject = image(sprite.image === undefined ? 'sprine/img/default.png' : sprite.image, sprite.x, sprite.y)
    })
}

