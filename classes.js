class Grid {
    constructor(x,y) {
        this.x=x;
        this.y=y
        
       
        

    }
     construct() {
        this.drawx()
        this.drawy()

     }

     clear () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //promijeni argumente kad ces mijenjat polozaj canvasa 
     }

     changebg() {
         ctx.fillStyle="green"
         ctx.fillRect(0,0,canvas.width,canvas.height)
     }

     drawx() {
         ctx.beginPath()
         ctx.strokeStyle="black"
         for(let i =0;i<this.x+1;i++) {
             
             ctx.moveTo(0,canvas.height/this.x*i)
             ctx.lineTo(canvas.width,canvas.height/this.x*i)
             
             ctx.stroke()
             
         }
        
    }

    drawy() {
        ctx.beginPath()
         ctx.strokeStyle="black"
         for(let i =0;i<this.y+1;i++) {
             
             ctx.moveTo(canvas.width/this.y*i,0)
             ctx.lineTo(canvas.width/this.y*i,canvas.height)
             
             ctx.stroke()
             
         }


    }
}

class CellMaker {
    constructor(x,y) {
        this.x=x
        this.y=y
        
    }

    draw(x,y) {
        ctx.fillStyle= "orange"
        ctx.fillRect(x*canvas.width/this.x,y*canvas.height/this.y,canvas.width/this.x,canvas.height/this.y)

    }

    check(x1,y1,x2,y2) {
        if((x1==x2 && Math.abs(y1-y2)==1)|| (y1==y2  && Math.abs(x1-x2)==1) || (Math.abs(x1-x2)==1 && Math.abs(y1-y2)==1)) {
            return true
        }
        else
        return false
    }
}