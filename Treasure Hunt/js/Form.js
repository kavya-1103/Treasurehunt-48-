class Form {
  constructor() {
    this.title = createElement('h1')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  hide(){

this.greeting.hide()
this.input.hide()
this.button.hide()

  }
  display(){
     background(bg);
    this.title.html("Treasure Hunt");
    this.title.position(500, 0);
    
    this.input.position(500,200);
    this.button.position(640, 230);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update(player.name)
      player.updateCount(playerCount);
    
     this.greeting.html("Hello " + player.name )
     this.greeting.position(100,70)
story= new Story();
     story.display();
    });

  }
}

