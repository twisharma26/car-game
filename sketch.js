var gameState = 0;
var playerCount, database, form, player, game, allPlayers;
var car1, car2, car3, car4, cars;
var car1image, car2image, car3image, car4image, groundimage, trackimage;

function preload() {
    car1image = loadImage("images/car1.png")
    car2image = loadImage("images/car2.png")
    car3image = loadImage("images/car3.png")
    car4image = loadImage("images/car4.png")
    groundimage = loadImage("images/ground.png")
    trackimage = loadImage("images/track.jpg")
}

function setup() {
    createCanvas(displayWidth-20, displayHeight-20)
    database = firebase.database()

    game = new Game()
    game.getState()
    game.gameStart()    
}

function draw() {
    if (playerCount === 4) {
        game.updateState(1)
    }

    if (gameState === 1) {
        clear()
        game.play()
    }

    if (gameState === 2) {
        game.end()
    }
}