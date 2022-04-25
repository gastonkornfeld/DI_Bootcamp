// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.


// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

// prediction is it will alert 3 you are redefining the var inside the scope
// run in the console: result was 3
// q1()

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

// pretiction: first q22() will alert 0, then q2() will redeclare the var a to 5,
// son then q22() will alert the new a value 5;
// run in the console:
// q22()
// q2()
// q22()

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
// prediction: q3() creates a variable in the browser call a equal to hello, and then q32() will alert hello
// run in the console:
// q3()
// q32()

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

// prediction: in going to console log the 'test word' 
// run in the console:
// q4()

//#5
var a = 2;
if (true) {
    var a = 5;
    // alert(a);
}
// alert(a);

// prediction: the var redeclaration inside the loop will change the value of a  in the global scope,
//  so two times the alert will show 5.







console.log('exercise 2');



// exercise 2


// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }

const winBattle = () => true;
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, 
// the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

console.log('exercise 3');



// Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed,
//  is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:
const isString = (element) => typeof element == 'string' ? true : false;
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false






console.log('exercise 4');







// Exercise 4 : Colors
// Instructions
// Using this array :

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : 
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”.
//  If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

for (let color in colors) {
    console.log(`${color}# choice is ${colors[color]}`);
}
const toLog = colors.includes('Violet') ? 'Yeah' : 'No...';
console.log('includes Violet ', toLog );








console.log('exercise 5');


// Exercise 5 : Colors #2
// Instructions
// Using these arrays :

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order :
//  “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

colors.forEach((element, index) => (index != 0 && index !=1 && index != 2) ? console.log(`${index+1}th`) : console.log(`${index+1}${ordinal[index+1]}`)); 











// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 10000;

// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const Vat = amount => amount * 1.17;
 
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
let monthlyExpenses = [200, -200, 400, -150, 5000, -3500, 220, -130, -3000, -2200];
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the 
//     negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

const createExpenses = monthlyExpenses.map(number => Vat(number));

console.log(createExpenses);