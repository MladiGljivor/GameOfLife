const x=64
const y=64
stop=false;
mozeuredivat=false;
canvas = document.querySelector(".canvas")

canvas.width=window.innerWidth;
ctx=canvas.getContext("2d");

var allCells = []
var cells = []
var usmrceni = []
var ozivljeni = []


cells.push({x:30,y:27})
cells.push({x:31,y:27})
cells.push({x:32,y:27})
cells.push({x:32,y:26})
cells.push({x:31,y:28})
cells.push({x:31,y:25})


var oldcells = []


oldcells.push({x:30,y:27})
oldcells.push({x:31,y:27})
oldcells.push({x:32,y:27})
oldcells.push({x:32,y:26})
oldcells.push({x:31,y:28})
oldcells.push({x:31,y:25})



function fillAllCells() {
    for(let i =0;i<x;i++) {
        for(let j =0;j<y;j++) {
            allCells.push({x:i,y:j})
        
        }

    }

    


}

fillAllCells() //popunjava  listu allCells sa svim mogucim cellovima



ctx.lineWidth=1
grid = new Grid(x,y)
cellMaker=new CellMaker(x,y)

function brOkruzenih(cell) { 
    let br=0;
    for(let i = 0;i<cells.length;i++) {
       if(cellMaker.check(cell.x,cell.y,cells[i].x,cells[i].y)) 
       br++
    
    } 

    return br;


}


function nijeZiv(cell) {
    for(let i = 0;i<cells.length;i++) { 
       if(cells[i].x==cell.x && cells[i].y==cell.y)
       return false
        
    
    } 
    return true

}


let last = 0;

let speed = 0.1;
function main(timeStamp) {
    let timeInSecond = timeStamp / 1000;
  
    if (timeInSecond - last >= speed && !stop) {
      last = timeInSecond;
      animate();
    }
  
  
  
    requestAnimationFrame(main);
  }


  

function animate(){
    grid.clear();
    grid.changebg();
    grid.construct();

for(let i = 0;i<cells.length;i++) { //crtaj sve cellove
    cellMaker.draw(cells[i].x,cells[i].y)

    

} 

for(let i= 0;i<cells.length;i++) {//utvrdi koji cellovi umiru
  
    if (brOkruzenih(cells[i])<2 || brOkruzenih(cells[i]) >3) {
        usmrceni.push(cells[i]); 
        }

}
for(let i= 0;i<allCells.length;i++) { //utvrdi koje cellove treba ozivit
    if (brOkruzenih(allCells[i])==3 && nijeZiv(allCells[i]) ) {
        ozivljeni.push(allCells[i]); 
        
    }

}

for(let i= 0;i<usmrceni.length;i++) { //ubi cellove koji trebaju umrijet
    let index=cells.indexOf(usmrceni[i])
    cells.splice(index,1)
    

}

for(let i= 0;i<ozivljeni.length;i++) { //ozivi cellove koji trebaju ozivit
    cells.push(ozivljeni[i]);
    

}

usmrceni=[] //reset usmrceni
ozivljeni=[] //reset ozivljeni


console.log("---------------------------------------")


}
animate();
document.querySelector(".animate").onclick = function() {
    animate()
}

document.querySelector(".autoanimate").onclick = function() {
    stop=false;
    main()
}

document.querySelector(".stop").onclick = function() {
    stop=true
 
    
}
window.addEventListener("click",function(e) {
    
    if(mozeuredivat ) {
    var rect =canvas.getBoundingClientRect()
    //ctx.fillRect(e.x-rect.left,e.y-rect.top,canvas.width/x,canvas.height/y);
    oldcells.push({x:Math.floor((e.x-rect.left)/(canvas.width/x)),y:Math.floor((e.y-rect.top)/(canvas.height/y))})
    cells.push({x:Math.floor((e.x-rect.left)/(canvas.width/x)),y:Math.floor((e.y-rect.top)/(canvas.height/y))})
    cellMaker.draw(Math.floor((e.x-rect.left)/(canvas.width/x)),Math.floor((e.y-rect.top)/(canvas.height/y)))
    }
 
    


})

//TODO kada stisne start prikazi sve ostale button class gumbe a kada stisne uredi ponovo vrati pocetni prikaz gumbiju

document.querySelector(".startaj").onclick = function() {

    var svi=document.querySelectorAll(".button")

    for(let i =0;i<svi.length;i++) {
        svi[i].style.display="block"
    }

    var svi=document.querySelectorAll(".start")

    for(let i =0;i<svi.length;i++) {
        svi[i].style.display="none"
    }
    
    mozeuredivat=false;
    
    
 
    

}


document.querySelector(".back").onclick = function() {

    var svi=document.querySelectorAll(".button")

    for(let i =0;i<svi.length;i++) {
        svi[i].style.display="none"
    }

    var svi=document.querySelectorAll(".start")

    for(let i =0;i<svi.length;i++) {
        svi[i].style.display="block"
    }
    
    stop=true;
    
    
    
 
    
}

document.querySelector(".uredi").onclick = function() {
    
    
    mozeuredivat=true
    

}

document.querySelector(".clear").onclick = function() {
    cells=[]
    animate()
    mozeuredivat=false;
    

}

    const knownPositions = [
      [
        {x: 25, y: 24},
        {x: 26, y: 24},
        {x: 27, y: 24},
        {x: 25, y: 25},
        {x: 26, y: 25},
        {x: 27, y: 25},
        {x: 28, y: 25},
      ],
      [
        {x: 10, y: 10},
        {x: 10, y: 11},
        {x: 11, y: 10},
        {x: 11, y: 11},
        {x: 12, y: 10},
        {x: 13, y: 10},
        {x: 12, y: 11},
        {x: 13, y: 11},
        {x: 12, y: 12},
        {x: 13, y: 13},
      ],
      [
        {x: 24, y: 22},
        {x: 22, y: 23},
        {x: 24, y: 23},
        {x: 23, y: 24},
        {x: 24, y: 24},
      ],
      [
        {x: 45, y: 45},
        {x: 45, y: 46},
        {x: 45, y: 47},
        {x: 46, y: 45},
        {x: 46, y: 47},
        {x: 47, y: 45},
        {x: 47, y: 46},
        {x: 47, y: 47},
      ],
      [
        {x: 45, y: 45},
        {x: 45, y: 46},
        {x: 45, y: 47},
        {x: 46, y: 45},
        {x: 46, y: 47},
        {x: 47, y: 45},
        {x: 47, y: 46},
        {x: 47, y: 47},
        {x: 44, y: 47},
        {x: 48, y: 47},
      ],
      [
        {x: 45, y: 45},
        {x: 45, y: 46},
        {x: 45, y: 47},
        {x: 46, y: 45},
        {x: 46, y: 47},
        {x: 47, y: 45},
        {x: 47, y: 46},
        {x: 47, y: 47},
        {x: 44, y: 47},
        {x: 48, y: 47},
        {x: 44, y: 46},
        {x: 48, y: 46},
      ],
      [
        {x: 45, y: 45},
        {x: 45, y: 46},
        {x: 45, y: 47},
        {x: 46, y: 45},
        {x: 46, y: 47},
        {x: 47, y: 45},
        {x: 47, y: 46},
        {x: 47, y: 47},
        {x: 44, y: 47},
        {x: 48, y: 47},
        {x: 44, y: 46},
      ]

    ] 
  
  
  


document.querySelector(".load").onclick = function() {
    cells=[]
    var br = Math.ceil((Math.random()*100)%7)
    points=knownPositions[br]

    for(let i=0;i<points.length;i++) {
        cells.push(points[i])
        
    }

    animate()
    mozeuredivat=false;
    

}



