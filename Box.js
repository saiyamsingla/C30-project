class  Box
{
    constructor(x,y,width,height)
    {

    var options={
      
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
    };
        
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display()
    {
    

    console.log(this.body.speed);

    if(this.body.speed<5){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);    //thickness to ur outline
        stroke("red",);    //gives an outline
        fill("white");
        rect(0,0,this.width, this.height);
        pop();
    }
    
    else{
        World.remove(world, this.body);

        push();
        this.Visiblity = this.Visiblity - 5;
    
         
          
        pop();
        
    }}}
    

