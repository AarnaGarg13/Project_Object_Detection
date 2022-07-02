function preload()
{
    TV_and_AC = loadImage("tv_ac.png")
}
function setup()
{
    canvas = createCanvas(700 , 500)
    canvas.center()
}
function draw()
{
    image(TV_and_AC , 0 , 0 , 700 , 500)
}