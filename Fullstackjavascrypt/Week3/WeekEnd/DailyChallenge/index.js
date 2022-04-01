// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let code = "*";
// one for loop

for (let i = 0; i<= 6 ; i++) {
    toPrint = code.repeat(i);
    console.log(toPrint);
}

// two for loops

for (let i = 1; i<= 6 ; i++) {
    for (let row = 1; row<=6; row++) {
        if (i == row) {
            console.log("*".repeat(i))
        }
    }
}
