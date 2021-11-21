class Ball extends Sprite{
      
    constructor(X=0,Y=0,Width=0,Height=0){
        super(X,Y,Width,Height)
        this.worldBounds={
            x:0,
            y:0,
            height:0,
            width:0
        }

        console.log( this.worldBounds)
       
   
        this.set_world_bounds=this.set_world_bounds.bind(this)
       
    }
    
    set_world_bounds(X=0,Y=0,Width=0,Height=0){
        console.log(X+" "+Y+" "+Width+" "+Height)
        console.log(X+this.width/2)
        this.worldBounds.x=X+this.width/2
        this.worldBounds.y=Y+this.height/2
        this.worldBounds.width=Width-this.width/2
        this.worldBounds.height=Height-this.height/2
      
        console.log(this.worldBounds)

    }

    update(delta){
        super.update(delta)

        if(this.vel.x>=0){
            
            if(this.x>this.worldBounds.width){
                this.vel.x*=-1
                this.x=this.worldBounds.width
            }
        }
        else{
            
            console.log("x2")
            if(this.x<this.worldBounds.x){
                this.vel.x*=-1
                this.x=this.worldBounds.x
            }
        }
        if(this.vel.y>=0){
            
            console.log("y1")
            if(this.y>this.worldBounds.height){
                this.vel.y*=-1
                this.y=this.worldBounds.height
            }
        }
        else{
            
            console.log("x2")
            if(this.y<this.worldBounds.y){
                this.vel.y*=-1
                this.y=this.worldBounds.y
            }
        }
        
    }

}