var database;
var gameState = 0;
var playerCount;
var form, player, game
var allPlayers
var car1, car2, car3, car4;
var cars;
var trackImg, car1Img, car2Img, car3Img, car4Img;

function preload() {
  trackImg = loadImage("Images/track.jpg")
  car1Img = loadImage("Images/car1.png")
  car2Img = loadImage("Images/car2.png")
  car3Img = loadImage("Images/car3.png")
  car4Img = loadImage("Images/car4.png")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20, displayHeight-30);
  game = new Game()
  game.getState() 
  game.start()
}

function draw(){
 if(playerCount === 4) {
  game.update(1)
 }
 //console.log(gameState)
 if(gameState === 1) {
  //console.log("hi")
  clear()
  game.play()
 }
 if(gameState === 2) {
  game.end()
 }
}


