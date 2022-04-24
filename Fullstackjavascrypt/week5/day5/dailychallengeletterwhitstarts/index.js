

let letterA = [
    [0,0,1,1,1,0,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,1,1,1,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0]     
]

let letterE = [
    [0,1,1,1,1,1,0],
    [0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0],
    [0,1,1,1,1,0,0],
    [0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0],
    [0,1,1,1,1,1,0]     
]

let letterI = [
    [0,1,1,1,1,1,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,1,1,1,1,1,0]     
]

let letterO = [
    [0,1,1,1,1,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,1,1,1,1,0]     
]


let letterU = [
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,1,1,1,1,1,0]     
]

let allDivs = document.getElementsByClassName('grid-sqaure');

function insertSymbol(parent) {
    let symbolNode = document.createTextNode('*');
    parent.appendChild(symbolNode);
}

function makeLetter(array){
    clear();
    for (let i = 0 ; i<7 ; i++) {
        for(let j = 0 ; j<7 ; j++) {
            if (array[i][j] == 1){
                insertSymbol(allDivs[(i*7) + j], );
            }
        }
    }
}

// makeLetter(letterA);


function clear() {
    for (let element of allDivs) {
        let elementChild = element.firstChild;
        element.innerHTML = '';
    }
}




