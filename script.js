function reload()
{
  
}
function setup()
{
canvas=createCanvas(600,400);
canvas.position(400,400);
video=createCapture(VIDEO);
video.hide();
}
function draw()
{
  image(video,100,70,300,300);

  fill("pink");
  stroke("pink");
  circle(50,50,50);
   
  fill("purple");
  stroke("purple");
  rect(75,40,400,20);

  fill("pink");
  stroke("pink");
  circle(500,50,50);
   
  fill("purple");
  stroke("purple");
  rect(490,75,20,400);

  fill("pink");
  stroke("pink");
  circle(500,375,50);
   
  fill("purple");
  stroke("purple");
  rect(75,365,400,20);

  fill("pink");
  stroke("pink");
  circle(50,375,50);
   
  fill("purple");
  stroke("purple");
  rect(40,75,20,275);
}
function take_snapshot()
{
  save("image");
}