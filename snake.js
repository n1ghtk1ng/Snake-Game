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

            //assuming Sanke is moving right
            nextHeadX = headX + 1;
            this.cells.pop();
            this.cells.unshift({x: nextHeadX, y: headY});
        }
    };
    snake.createSnake();



}

function draw() {
    // first erase the old screen
    pen.clearRect(0,0,W,H);
    console.log(snake.cells);


    snake.drawSnake();
}

function update() {
    snake.updateSnake();
}

function gameLoop() {
    draw();
    update();

}

init();
// calling game loop after every 100ms
 setInterval(gameLoop,100);

 // gameLoop();