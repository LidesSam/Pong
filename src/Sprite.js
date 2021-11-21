class Sprite{
    constructor(X=0,Y=0,Width=0,Height=0){
        this.x =X
        this.y=Y
        this.width=Width
        this.height=Height
        this.vel ={x:0,y:0}
        this.speed= 0
        
        this.update = this.update.bind(this)
        this.draw= this.draw.bind(this)
    }
    

    set_velocity(velx=0,vely=0){
        this.vel={
            x:velx,
            y:vely
        }

    }

    update(delta){
        this.x += this.vel.x*delta
        this.y += this.vel.y*delta
    }
    
    draw(){

    }
  
    
}
