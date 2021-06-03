var canvas, backgroundImage;
var score=0,system,security
var rankUpdated=false;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var player1,player2,player3,p1,p2,p3,players=[]
var allPlayers;
var story;

function preload(){
 player1= loadAnimation ("images/PLAYER1_1.png","images/PLAYER1_2.png","images/PLAYER1_3.png");
 player2 = loadAnimation("images/p2_1.png","images/p2_2.png","images/p2_3.png","images/p2_4.png")
 player3 = loadAnimation ("images/T1.png","images/T2.png","images/T3.png","images/T4.png")
  
 bg=loadImage ("images/aladdin_cave.jpg");
 bg2=loadImage("images/backgroundIMG.jpg")
bg3=loadImage("images/treasure.jpg")
}


function setup(){
  canvas = createCanvas(1200,600);
  database = firebase.database();
  database.ref('/').update({
    'playerCount':0,
    'gameState':0,
    'PlayersAtEnd':0
  }
  );
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

if(playerCount===3){
  game.update(1)
}
if(gameState===2){
  security.display();
 
  
  

  

  if(score === 3) {
    clear()
    background(bg3)
    fill("WHITE")
    textSize(40);
    text("TREASURE UNLOCKED",-150, 150);
    if(rankUpdated==false){
      player.rank+=1;
      textSize(50)
    text("rank:"+player.rank,-150,250)
    Player.updatePlayersAtEnd(player.rank)
    rankUpdated=true;
    }
   
  }
}
if (gameState===1){
clear()
background(bg2)
game.play();

}
}
