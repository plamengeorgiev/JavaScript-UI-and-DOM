var canvas = document.getElementById("field");
canvas.width = 600;
canvas.height = 338;

var marioImg = new Image();
marioImg.src = "images/spriteMarioWalk.png";

function sprite(options) {
    var that = {};
    var frameIndex = 0;
    var tickCount = 0;
    var ticksPerFrame = ticksPerFrame || 5;
    var numberOfFrames = options.numberOfFrames || 3;
    var xPos = 0;

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;



    that.update = function () {

        tickCount += 1;
        xPos += 1;
        if (xPos >= canvas.width - that.width / 3) {
            xPos = 0;
        }

        if (tickCount > ticksPerFrame) {

            tickCount = 0;

            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {
                // Go to the next frame
                frameIndex += 1;
            } else {
                frameIndex = 0;
            }
        }
    };

    that.render = function () {
        // Clear the canvas
        that.context.clearRect(0, 0, canvas.width, canvas.height);
        // Draw the animation
        that.context.drawImage(
           that.image,
           frameIndex * that.width / numberOfFrames,
           0,
           that.width / numberOfFrames,
           that.height,
           xPos,
           263,
           that.width / numberOfFrames,
           that.height);
    }

    return that;
}
var mario = sprite({
    context: canvas.getContext("2d"),
    width: 54,
    height: 32,
    image: marioImg
});

function gameLoop() {

    window.requestAnimationFrame(gameLoop);

    mario.update();
    mario.render();
}
// Start the game loop as soon as the sprite sheet is loaded
marioImg.addEventListener("load", gameLoop);

var paper = new Raphael(0, 0, 600, 338);
paper.image("images/mario-background.jpeg", 0, 0, 600, 338);