import { renderSprites } from "../engine/sprite.js"
import { waiting } from "./time.js"

var lastCalledTime
var counter = 0
var fpsArray = []
var average

export function loadLoop() {
    var fps

    if (!lastCalledTime) {
        lastCalledTime = new Date().getTime()
        fps = 0
    }

    var deltaTime = (new Date().getTime() - lastCalledTime) / 1000
    lastCalledTime = new Date().getTime()
    fps = Math.ceil(1 / deltaTime)

    if (counter >= 60) {
        var sum = fpsArray.reduce((a, b) => { return a + b })
        average = Math.ceil(sum / fpsArray.length)
        counter = 0
    } else {
        if (fps !== Infinity) {
            fpsArray.push(fps)
        }

        counter++
    }
    window.deltaTime = deltaTime * 150

    if (!waiting) {
        loop()
        renderSprites()
    }


    window.requestAnimationFrame(loadLoop)
}

export function getFPS() {
    return average
}