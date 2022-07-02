function preload()
{
    fruit_basket = loadImage("fruit_basket.png")
}
function setup()
{
    canvas = createCanvas(700 , 500)
    canvas.center()
}
function draw()
{
    image(fruit_basket , 0 , 0 , 700 , 500)
}