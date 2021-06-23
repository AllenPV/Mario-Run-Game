
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	maro_coin = loadSound("coin.wav");
	mario_game_end = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	Video = createCapture(VIDEO);
	Video.size(800,400);
	Video.parent("console");
	poseNet = ml5.poseNet(Video,modelLoaded);
	poseNet.on("pose",gotPoses);
}
function modelLoaded(){
	console.log("Model Loaded");
}
function gotPoses(results){
	if(results.length >0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log(results);
	}
}

function draw(){
	game();
}
noseX = "";
noseY = "";
GameStatus = "";
function Start(){
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game is Loading";
}






