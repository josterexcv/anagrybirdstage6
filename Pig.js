class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visisbility = 255;
  }
  display (){
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      this.Visisbility=this.Visisbility-5;
      push();
      tint (255,this.Visisbility);
      image(this.image,this.body.position.x,this.body.position.y);
      pop();

    }
  }
  
};