/**
 * Created by Aman on 1/7/2018.
 */
// Snake Game
// game loop --> Init, Draw, Update

function init() {
    canvas = document.getElementById("mycanvas");
    // every drawing board comes with a pen
    pen = canvas.getContext('2d');
    W = canvas.width;
    H = canvas.height;
    
    food = getRandomFood();

    snake = {
        init_length: 5,
        color: "yellow",
        cells: [],  // cell is array of x,y coordinate objects
        direction: "right",

        createSnake: function () {
            for(var i=this.init_length-1; i>=0 ;i--) {
                this.cells.push({x: i, y:0});
            }
        },
        drawSnake: function () {
            for(var i=0; i<this.cells.length; i++) {
                pen.fillStyle = this.color;
                pen.lineWidth = "5"; // for increasing the width of stroke
                pen.strokeStyle = "black"; // for border
                pen.strokeRect(this.cells[i].x*10, this.cells[i].y*10,10,10);   // (x,y,width,height)
                pen.fillRect(this.cells[i].x*10, this.cells[i].y*10,10,10);   // (x,y,width,height)
            }
        },
        updateSnake: function () {
            var headX = this.cells[0].x;
            var headY = this.cells[0].y;

            //assuming Snake is moving right
            if(headY == food.x && headX == food.y){
                food = getRandomFood();
            }
            else{
                // pop last cell if food is eaten
                this.cells.pop();
            }

            if(this.direction == 'right'){
                nextHeadX = headX + 1;
                nextHeadY = headY;

            }
            else if (this.direction == 'left'){
                nextHeadX = headX - 1;
                nextHeadY = headY;

            }
            else if (this.direction == 'down'){
                nextHeadX = headX;
                nextHeadY = headY + 1;
            }
            else {
                nextHeadX = headX;
                nextHeadY = headY - 1;
            }

            this.cells.unshift({x: nextHeadX, y: nextHeadY});
        }
    };
    snake.createSnake();

    function KeyPressed(e) {
        console.log("you pressed a key");
        console.log(e);

        if(e.key == 'ArrowRight') {
            snake.direction = 'right';
        }
        else if(e.key == 'ArrowLeft') {
            snake.direction = 'left';
        }
        else if(e.key == 'ArrowDown') {
            snake.direction = 'down';
        }
        else{
            snake.direction = 'up';
        }
    }

    document.addEventListener('keydown',KeyPressed);



}

function draw() {
    // first erase the old screen
    pen.clearRect(0,0,W,H);
    //console.log(snake.cells);

    // let us draw the food
    pen.fillStyle = food.color;
    pen.fillRect(food.x,food.y,10,10);


    snake.drawSnake();
}

function update() {
    snake.updateSnake();
}

function gameLoop() {
    draw();
    update();
}

function getRandomFood() {
    var foodX = Math.round(Math.random()*(W-10)/10);
    var foodY = Math.round(Math.random()*(H-10)/10);

    foodColors = ["red","green","aqua","coral", "orchid"];
    var i = Math.round(Math.random()*foodColors.length);

    var food = {
        x: foodX,
        y: foodY,
        color: foodColors[i]
    };
    return food;


}

init();
// calling game loop after every 100ms
 setInterval(gameLoop,500); // gameLoop();

