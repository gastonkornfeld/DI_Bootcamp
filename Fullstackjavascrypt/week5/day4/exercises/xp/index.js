
let thisLeft=0;
let thisTop=0;
let moveID=0;

let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


function moveCube(){

    let redCube= document.getElementById('animate');
    thisLeft += 25; //how much the text moves right
    thisTop +=25;

    if (thisLeft >= 350 ){
        clearInterval(moveID);
    }
    redCube.style.left=thisLeft +"px";
    redCube.style.top=thisTop +"px";
}

// how long it will take the text move to complete
function myMove(){
    moveID=setInterval(moveCube, 500);
}



function dragStart(event) {
    event.dataTransfer.setData("Div", event.target.id);
}
  
  
function allowDrop(event) {
    event.preventDefault();
}
  
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Div");
    event.target.appendChild(document.getElementById(data));
}
