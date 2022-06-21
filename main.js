function preload(){

}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

}

function draw(){
image(video,150,150,300,200);
circle(100,100,200);
fill("red");
circle(500,100,200);
}


function take_snapshot(){
    save("webappproject.png");
}