

function preload()
{}

function setup() {
  createCanvas(7346, 668);

var gap = random([30, 50, 80])

  var posX = 0

  for(i = 0 ; i<26 ; i++){
  platform = new Platform(posX)
  posX = posX + platform.rw + gap
  }
 
}

function draw() {
  background('skyblue');

  drawSprites();

}

