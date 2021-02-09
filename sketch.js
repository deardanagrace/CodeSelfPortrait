// Global
var braidnum =3;
var braidX=200;
var braidY=560;

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  rectMode(CENTER);
  //debugging text
  textSize(24);
  textAlign(LEFT);
}

function draw() {
  background('#365154');  
  //sweater features
  drawsweater();
  //hair behind head
    drawbackhair();
  drawleftbraids();
  drawrightbraids();
  //facial features
  drawhead();
  drawnose();
  drawmouth();
  drawneck();
  drawears();
  //hair in front of head
  drawfringe();
  drawfringecut();
  drawbangs();
  drawclips();
  //eyes
  draweyes();
  draweyebrows();
  //hands
  drawhands();
}

// drawing head
function drawhead() {
  noStroke();
  fill('#fdb2c5');
  ellipse(width / 2, height / 2, 400, 450);
}
function drawears(){
  noStroke();
  fill('#fdb2c5');
  //right ear
  arc (210,420,100,100, PI / 2, 3 * PI/2);
  //left ear
  arc (590,420,100,100, 3*PI/2, PI/2);
}
function draweyes() {
  //both eyelids
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(300, 420, 110, 100, PI, 0);
  arc(500, 420, 110, 100, PI, 0);
  //eyelashes
  strokeWeight(6);
  line(249, 396, 227, 391);
  line(450, 396, 428, 391);
  //left pupil
  fill(0);
  circle(315, 412, 70);
  //right pupil
  circle(515, 412, 70);
}
function draweyebrows(){
  fill (0);
  ellipse (341,351,40,20);
  ellipse (452,351,40,20);
}
function drawnose() {
  noStroke();
  fill('#c1fe03');
  ellipse(401, 453, 40, 30);
}
function drawmouth() {
  stroke(0);
  noFill();
  strokeWeight(20);
  arc(401, 500, 50, 45, 0, PI);
}
function drawneck() {
  noStroke();
  fill('#fdb2c5');
  rect(401, 666, 100, 100, 0, 0, 70, 70);
}
//drawing clothes
function drawsweater() {
  noStroke();
  fill('#b15412');
  rect(401, 755, 500, 250, 500, 400, 0, 0);
}
//drawing hair
function drawbangs(){
  noStroke();
  fill('#d98579');
  rect (401, 250,370,150,50);
  //cut out in bangs
  fill('#fdb2c5');
  ellipse(401,270, 170,117);
}
function drawfringe(){
  noStroke();
  fill('#d98579');
  ellipse (220,height/2,130,300);
  ellipse (580, height/2,130,300);
}
function drawfringecut(){
  noStroke();
  fill ('#fdb2c5');
  ellipse (260,height/2,130,200);
  ellipse (530, height/2,130,200);
}
function drawbackhair(){
  noStroke();
  fill('#d98579');
  ellipse(width / 2, height / 2 - 20, 500, 530);
}
function drawleftbraids(){
  noStroke();
  fill('#d98579');
  circle(200,560,120);
  circle (116,624,120);
}
function drawrightbraids(){
  noStroke();
  fill('#d98579');
  circle (614,560,120);
  circle (695,624,120);
}
//hair clips
function drawclips(){
  //orange clips
  fill('#aa4d0a');
  rect (180,350,70,40,40);
  rect (620,350,70,40,40);
  //green clips
  fill ('#c1fe03');
  rect (180,399,70,20,40);
  rect (620,399,70,20,40);
}
//hand drawings
function drawhands(){
  noStroke();
  fill('#fdb2c5');
  //palms
  circle(274,770,130);
  circle(533,770,130);
  //peace fingers
  rect (315,700,35,100,20);
  rect (270,690,35,85,20);
  rect (490,700,35,100,20);
  rect (540,690,35,85,20);
  //thumbs
  stroke(0);
    rect(312,780,50,30,20);
  rect (498,780,50,30,20)};