
// Exercise 1 : Favorite Color
// Instructions


let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, 
// and console.log the result.

let theSentence = sentence.join(' ');

console.log(theSentence);




// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";

let word1 = 'white';
let word2 = 'elephant';


// 2. Slice out and swap the first 2 characters of the two strings from part 1.
let newWord1 = word2.slice(0,2) + word1.slice(2, word1.length);
let newWord2 = word1.slice(0,2) + word2.slice(2, word2.length);

console.log(newWord1); 





// 3. Create a third variable where the value is the concatenation of 

let twoWords = `${newWord1} ${newWord2}`;
// the two strings from the part 1 (separated by a space).


// 4. Finally console.log the new concatenated string.

console.log(twoWords); 



// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.

// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!
num1 = prompt('Give me the first number please: :)');
num2 = prompt('Give me the second number please: :)');
operator = prompt('(+) to add (-) to substract (*) to multiply (/) to divide, Choise?');
number1 = parseInt(num1);
number2 = parseInt(num2);

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/') {
    result = number1 / number2;
} else {
    result = 'You did not choose a correct operator'
}

alert(`The result of ${num1} ${operator} ${num2} is: ${result}`);







