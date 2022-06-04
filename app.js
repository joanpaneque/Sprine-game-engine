function preload() {
    loadImage('images/icon.png')
    loadImage('images/5pixels.png')
    loadImage('images/crosshair.png')
}



function setup() {
    createCanvas(window.innerWidth, window.innerHeight)

    sprite = new Sprite(0, 0)
    sprite.setimage('images/crosshair.png')
    sprite2 = new Sprite(0, 0)
    touchingSprite(sprite)
    touchingSprite(sprite2)


let chunkMatrix = (matrix, width) => {
    let chunk = chunkArray(matrix, width)
    if (width / 2 % 1 != 0) return console.error('Cannot chunk an array by odd numbers')
    return chunk
}
/*
*  [   0   1   2   3
*  0 [[1],[0],[2],[0]],
*  1 [[0],[1],[0],[2]],
*  2 [[3],[0],[4],[0]],
*  3 [[0],[3],[0],[4]]
*                     ]
*
*    0,0 - 0,1 | 0,2 - 0,3
*    1,0 - 1,1 | 1,2 - 1,3
*    ----------------------
*    2,0 - 2,1 | 2,2 - 2,3
*    3,0 - 3,1 | 3,2 - 3,3
*/
console.log(chunkMatrix([[1],[0],[2],[0],[0],[1],[0],[2],[3],[0],[4],[0],[0],[3],[0],[4]], 4))
    
}

function loop() {
    background(50)

    if (touchingSprite(sprite)) {
        cursor('pointer')
    } else {
        cursor('default')
    }

    if (keyDown('w')) sprite.changeY(1 * deltaTime)
    if (keyDown('a')) sprite.changeX(-1 * deltaTime)
    if (keyDown('s')) sprite.changeY(-1 * deltaTime)
    if (keyDown('d')) sprite.changeX(1 * deltaTime)
    touchingSprite(sprite)

    // Do the same for sprite2 but with arrow keys
    if (keyDown('ArrowUp')) sprite2.changeY(5 * deltaTime)
    if (keyDown('ArrowLeft')) sprite2.changeX(-5 * deltaTime)
    if (keyDown('ArrowDown')) sprite2.changeY(-5 * deltaTime)
    if (keyDown('ArrowRight')) sprite2.changeX(5 * deltaTime)

//    console.time('start')
console.log(sprite.touchingSprite(sprite2))
//    console.timeEnd('start')

    document.getElementById('output').innerHTML = getFPS()

}
