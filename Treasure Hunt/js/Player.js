class Player {
  constructor(){
    this.index = null;
    this.distance=0;
    this.name = null
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,distance:this.distance
    });
  }

static getPlayerInfo(){
  var playerRef = database.ref('players');
  playerRef.on("value",(data)=>{
  allPlayers = data.val(); })
}

getPlayersAtEnd(){
  var rank=database.ref('PlayersAtEnd')
  rank.on("value",(data)=>{
    this.rank=data.val();});
  }
static updatePlayersAtEnd(rank){
  database.ref("/").update({
'PlayersAtEnd':rank
  })
}
}

