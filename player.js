class Player{
    constructor() {
        this.index = null;
        this.name = null;
        this.distance = 0;
    }

    getCount() { //to read the database for the number of players currently in it
        database.ref('playerCount').on("value", (data)=>{
            playerCount = data.val() //saves the value in the variable 
        })
    }

    updateCount(count) { //adding the players as they enter their names
        database.ref('/').update({
            playerCount: count
        })
    }

    updateName() { //updating the players names to what name they entered
        var playerNumber = "players/player"+this.index //creating the players folder
        database.ref(playerNumber).set({
            name: this.name, 
            distance: this.distance
        })
    }

    static playerInfo(){ //static functions act on every body from the class without being called
        database.ref('players').on("value", (data)=> {
            allPlayers = data.val()
        })
    }
}