class Form {
    constructor() {
        this.input = createInput("Enter your name:") //creating an input box to enter names 
        this.button = createButton('submit') //making a button to submit the form
        this.greeting = createElement('h3')
        this.title = createElement('h2')
        this.reset = createButton('reset')
    }

    hide() {
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        this.title.hide()
    }

    display() {
        this.title.html("Car Racing") 
        this.title.position(displayWidth/2-50, 10)

        this.input.position(displayWidth/2-50, displayHeight/2-80)

        this.button.position(displayWidth/2+40, displayHeight/2) 

        this.reset.position(displayWidth - 100, 30)

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.updateState(0)
        })

        this.button.mousePressed(()=>{ //if the submit button is pressed:
            this.input.hide() //hide the input box
            this.button.hide() //hide the button

            player.name = this.input.value() //taking the value from the input box and storing it in var name 
            playerCount = playerCount + 1 //playerCount += 1
            player.index = playerCount
            player.updateName() //to update the player name in the database to the name entered
            player.updateCount(playerCount)
            this.greeting.html("Welcome "+player.name)
            this.greeting.position(displayWidth/2-70, displayHeight/4)
        })
    }
}