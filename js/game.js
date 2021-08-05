class Game {
    constructor() {

    }
    getState() { //to see what the gamestate is in the database
        database.ref('gameState').on("value", function(data){
            gameState = data.val()
        })
    }

    updateState(state) { //to change the value of gamestate in the database
        database.ref('/').update({
            gameState: state
        })
    }

    async gameStart() { //to show the form to enter as a player before the game starts 
        if(gameState === 0) {
            player = new Player() 
            form = new Form()

            var playerCountref = await database.ref('playerCount').once("value")
            if (playerCountref.exists()) {
                playerCount = playerCountref.val()
                player.getCount()
            }

            form.display()
        }

        car1 = createSprite(100, 200)
        car1.addImage(car1image)

        car2 = createSprite(300, 200)
        car2.addImage(car2image)

        car3 = createSprite(500, 200)
        car3.addImage(car3image)

        car4 = createSprite(700, 200)
        car4.addImage(car4image)

        cars = [car1, car2, car3, car4]
    }

    play() {
        form.hide()

        Player.playerInfo() //getting all the details of every player from the player class

        if (allPlayers !== undefined) {
            background(groundimage)
            image(trackimage, 0, -displayHeight*4, displayWidth, displayHeight*5)

            var index = 0
            var x = 180
            var y

            for (var plr in allPlayers) { //creating a var plr in the array allPlayers to store the number of players 
                index = index + 1
                x += 230
                y = displayHeight - allPlayers[plr].distance

                cars[index - 1].x = x
                cars[index - 1].y = y

                if (index === player.index) { //if theres 4 players in the game, fill your (the current player's) box sprite in red
                    fill("green")
                    strokeWeight(0)
                    stroke("green")
                    ellipse(x, y, 100, 100)
                    camera.position.x = displayWidth/2 //move the view with the sprite
                    camera.position.y = cars[index-1].y
                }
            }
        }

        if (keyIsDown(UP_ARROW) && player.index !== null) { //to increase the player distance
            player.distance+= 20 
            player.updateName() //because its in the update name function 
        }

        if (player.distance > 4200) {
            gameState = 2
        }

        drawSprites()   
    }

    end() {
        console.log("game ended")
    }

}