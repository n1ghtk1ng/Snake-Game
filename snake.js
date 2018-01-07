/**
 * Created by Aman on 1/7/2018.
 */
// Snake Game
// game loop --> Init, Draw, Update

function init() {
    console.log("Init");
}

function draw() {
    console.log("draw");
}

function update() {
    console.log("update");
}

function gameLoop() {
    draw();
    update();

}

init();
// calling game loop after every 100ms
setInterval(gameLoop,100);

// gameLoop();