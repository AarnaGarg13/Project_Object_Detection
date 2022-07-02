function preload()
{
    desk = loadImage("desk.png")
}
function setup()
{
    canvas = createCanvas(700 , 500)
    canvas.center()
}
function draw()
{
    image(desk , 0 , 0 , 700 , 500)
}