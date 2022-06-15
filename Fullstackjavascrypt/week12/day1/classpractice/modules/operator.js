// Create a file called operators.js

// Create 2 functions : addOperator(x,y) 
// that returns the addition of 2 numbers, and divideOperator(x,y) that returns the division of 2 numbers

// Create another file called calculator.js, 
// and import the operators module. Call the 2 functions and display the results




function addOperator(x,y) {
    console.log(x+y);
}

function divideOperator(x,y) {
    console.log(x/y);
    console.log('first');
}


module.exports = {
    add : addOperator,
    divide: divideOperator
}