class Dustbin{ 
  constructor(){ 
    var options = { isStatic : true }; 
    //drawing the three ractangular bodies 
    this.rect1 = Bodies.rectangle(595,550,200,20,options);
     this.rect2 = Bodies.rectangle(490,550,20,150,options);
      this.rect3 = Bodies.rectangle(700,550,20,150,options);
       this.image = loadImage("dustbingreen.png");
        World.add(world,this.rect1); World.add(world,this.rect2); 
        World.add(world,this.rect3); 
      } 
        display(){ 
        //displaying the image of dustbin for bottom body 
        imageMode(CENTER) 
        image(this.image,this.rect1.position.x,this.rect1.position.y,200,150); 
        rect(this.rect2.position.x,this.rect2.position.y,20,150); 
        rect(this.rect3.position.x,this.rect3.position.y,20,150); } 
      } 
        


  