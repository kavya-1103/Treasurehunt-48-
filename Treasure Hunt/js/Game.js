class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerRef=await database.ref('playerCount').once("value");
      if(playerRef.exists()){
        playerCount=playerRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
    p1= createSprite(100,120)
    p1.addAnimation("player1",player1)

    p2= createSprite(120,140)
    p2.addAnimation("player2",player2)

    p3= createSprite(120,160)
    p3.addAnimation("player3",player3)


    players=[p1,p2,p3]
  }

  play(){
form.hide();

player.getPlayersAtEnd();

Player.getPlayerInfo();
if(allPlayers!==undefined){
  var y=225;
  var x=0;
var index=0;


  for(var i in allPlayers){
  index=index+1;
  y=y+120;
  x=allPlayers[i].distance;
  players[index-1].x=x;
  players[index-1].y=y;
 
if(index===player.index){
 
  push()
  strokeWeight(10)
  stroke("red")
  ellipse(x,y,25,25)

  camera.position.x=players[index-1].x
  camera.position.y=displayHeight/2;

  pop();
}
  }
}
if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
player.distance+=25;
player.update();
}
if(player.distance>3500&& gameState!==2){
  gameState=2 
  background(bg)
  security = new Security();
  system = new System();
  clues();
  
}
if (gameState!==2){
  drawSprites();
}


  }
  }
