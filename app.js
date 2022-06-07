// Use this function to preload resources
function preload() {
    loadImage('images/player.png')
    loadImage('images/ball.png')
}

// This function executes when all resources are loaded
function setup() {
    createCanvas(800, 600)

    player1 = new Sprite(-370, 0)
    player2 = new Sprite(370, 0)
    ball = new Sprite(0, 0)
    player1.setimage('images/player.png')
    player2.setimage('images/player.png')
    ball.setimage('images/ball.png')


}

// Use this function to draw graphics
function loop() {
    background(50)
    document.getElementById('output').innerHTML = getFPS()

    if (keyDown('w')) {
        player1.changeY(3 * deltaTime)
        if (player1.y > 175) {
            player1.changeY(-3 * deltaTime)
        }
    }

    if (keyDown('s')) {
        player1.changeY(-3 * deltaTime)
        if (player1.y < -175) {
            player1.changeY(3 * deltaTime)
        }
    }

    if (keyDown('ArrowUp')) {
        player2.changeY(3 * deltaTime)
        if (player2.y > 175) {
            player2.changeY(-3 * deltaTime)
        }
    }
    
    if (keyDown('ArrowDown')) {
        player2.changeY(-3 * deltaTime)
        if (player2.y < -175) {
            player2.changeY(3 * deltaTime)
        }
    }

    ball.moveSteps(5)

    if ((ball.x > 330 && (ball.y < player2.y + 125 && ball.y > player2.y - 125)) || (ball.x < -330 && (ball.y < player1.y + 125 && ball.y > player1.y - 125))) {
        if (ball.x > 0) {
            ball.pointTowards(rnd(225, 315))
        } else {
            ball.pointTowards(rnd(45, 135))
        }
    }

    if (ball.y > canvas.height / 2 - 25 || ball.y < canvas.height / -2 + 25) {
        ball.pointTowards(180 - ball.getDirection())
    }

    if (ball.x > canvas.width / 2 || ball.x < canvas.width / -2) {
        ball.goto(0, 0)
        wait(1)
    }
}
