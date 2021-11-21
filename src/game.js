

var px = 300
var py = 50
var velx =1
var vely =1

var ltime = Date.now();
var canvas;
var canvasContext;
var limitx=0;
var limity=0;

var rh=80
var rw=10
var rx=20
var ry=10
var rvy=0
var rspeed=1

var ball  = null

initialize()

function initialize(){
    //alert("initialize")

    

    canvas = document.getElementById("canvas")
    canvasContext = canvas.getContext("2d")
    limitx = canvas.width;
    limity=canvas.height;


    ball  = new Ball(100,100,50,50)
    ball.set_velocity(1,1)
    ball.set_world_bounds(0,0,limitx,limity)

    setInterval(tick,100)
    document.addEventListener('keypress',logkey);
}

function tick(){
    var ctime= Date.now()
    let delta = ctime -ltime
    ltime=ctime

    //console.log("delta"+delta)

    update(delta)
    render(delta)
}

function update(delta){
    delta*=0.1
    ball.update(delta)
    px += velx*delta;
    py += vely*delta;
    
    if( px<=4){px=5; velx=1;}
    
    if( px>=(limitx-4)){px=limitx-5; velx=-1;}
    
    if( py<=4){py=5; vely=1;}
    
    if( py>=(limity-4)){py=limity-5; vely=-1;}
    
    if(ballHitPallet()){
        velx*=-1;
    }


    /// paleta

    ry+=rvy*rspeed*delta
    if(ry<=0){
        ry=0
    }

    if(ry+rh>=limity){
        ry=limity-rh
    }
   // console.log("px:"+px+" py:"+py+"vx:"+velx+"vy:"+vely)
    rvy=0
}

function render(delta){
    clearCanvas()

 //ball   

    canvasContext.fillStyle="red";
    canvasContext.fillRect(ball.x-ball.width/2,ball.y-ball.height/2,ball.width,ball.height)
    canvasContext.fillStyle="black";
    canvasContext.fillRect(px-4,py-4,8,8)


//left player 
    canvasContext.fillRect(rx,ry,rw,rh)
    canvasContext.fillRect(limitx/2-1,2,2,limity-4)
 
}

function clearCanvas(){
    canvasContext.fillStyle="white";
    canvasContext.fillRect(0,0,limitx,limity)
}

function ballHitPallet(){
    let c=false;
  /*  if(collitionPointWithPallet(px-4,py-4)){c=true;}
    if(collitionPointWithPallet(px-4,py+4)){c=true;}
    if(collitionPointWithPallet(px+4,py+4)){c=true;}
    if(collitionPointWithPallet(px+4,py-4)){c=true;}*/
    if(collitionPointWithPallet(px,py)){c=true;}
    return c;  
}

function collitionPointWithPallet(pointx=0,pointy=0){
    let c=false
    console.log("pointx "+pointy+" rx:"+rx+" rxw:"+(rx+rw))

    if(pointx>=rx && pointx<=(rx+rw)){
        if(pointy>=ry && pointy<=(ry+rh)){
            c= true;
         }
    }
    console.log(c)

    return c;
}


function logkey(e){
    //alert(e+" code:"+e.code)
    if(e.code =="KeyW"){
        rvy=-1
        
       // alert("w")
    }else if(e.code =="KeyS"){
        rvy=1
        //alert("s")
    }
}