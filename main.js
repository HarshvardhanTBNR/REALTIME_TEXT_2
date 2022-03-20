function preload(){}

function setup(){
video=createCapture(VIDEO);
canvas=createCanvas(400,400);
canvas.position(500,100);
video.size(400,400);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("Posenet Initialized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
}
}

function draw(){
background("#f2661f");
}