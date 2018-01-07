/**
 * Created by Aman on 1/7/2018.
 */
// Snake Game
// game loop --> Init, Draw, Update

function init() {
    console.log("Init");
    canvas = document.getElementById("mycanvas");
    // every drawing board comes with a pen
    pen = canvas.getContext('2d');
    W = canvas.width;
    H = canvas.height;

    box = {
        x: 10,
        y: 20,
        w: 20,
        h: 20,
        speed: 5
    }


}

function draw() {
    // first erase the old screen
    pen.clearRect(0,0,W,H);

    console.log("draw");
    pen.fillStyle = 'green';
    pen.fillRect(box.x,box.y,box.w,box.h);
}

function update() {
    console.log("update");
    box.x+=box.speed;
    box.y+=3;

    if(box.x>=W){
        box.speed *= -1;
    }
}

function gameLoop() {
    draw();
    update();

}

init();
// calling game loop after every 100ms
setInterval(gameLoop,100);

// gameLoop();