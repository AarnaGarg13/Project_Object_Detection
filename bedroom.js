function preload()
{
    bedroom_image = loadImage("bedroom.png")
}
function setup()
{
    canvas = createCanvas(700 , 500)
    canvas.center()
}
function draw()
{
    image(bedroom_image , 0 , 0 , 700 , 500)
}