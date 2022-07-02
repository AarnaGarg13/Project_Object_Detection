function preload()
{
    bottles = loadImage("bottles.png")
}
function setup()
{
    canvas = createCanvas(700 , 500)
    canvas.center()
}
function draw()
{
    image(bottles , 0 , 0 , 700 , 500)
}