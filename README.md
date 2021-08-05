# asynchronousBallMovement
var ball, database, pos;

function setup(){
    createCanvas(500,500);

    database = firebase.database()

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballpos = database.ref('ball/position') //always only single quotes when referring to a database
    ballpos.on("value", readpos, error) //.on is continuously reading the value from the database, if any change the readpos() is called which means the data changes to match 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({ //changing the value of the database when the ball's position changes so that it matches
        'x': pos.x + x,
        'y': pos.y + y
    }) 
}

function readpos(data) { //reading the data, substituting the val of the ball with the value of the database x and y 
    pos = data.val() //taking the value from the database and storing in a var 
    ball.x = pos.x
    ball.y = pos.y 
}

function error() {
    console.log("there is an error")
}

