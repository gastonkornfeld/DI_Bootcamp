
// Exercise 1 : Divisible By Three
// Instructions
let numbers = [123, 8409, 100053, 333333333, 7]
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.

for (let number of numbers) {
    if (number % 3 == 0) {
        console.log(` ${number} is divisible by 3, True`);
    } else {
        console.log(` ${number} is not divisible by 3, False`);
    }
}



// Exercise 2 : Attendance
// Instructions
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}


// Given the object above where the key is the student’s name and the value is the country they are from.

// Prompt the student for their name.

// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in

// If the name is not in the object, console.log: "Hi! I'm a guest."

let userName = prompt("Please tell me your name: ");

if (userName in guestList) {
    console.log(`Hi!, I am ${userName}, and I am from ${guestList[userName]}`);
} else {
    console.log("Hi, I am a Guest");
}

// Exercise 3 : Playing With Numbers
// Instructions
let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. 
// You have to create the logic by yourself. Use simple for loops.


// 1. Console.log the sum of all the numbers in the age array.
let totalAge = 0;
for (let number of age) {
    totalAge += number;
}
console.log(totalAge);
// 2. Console.log the highest age in the array.

let maxAge = 0;

for (let number2 of age) {
    if (number2 > maxAge) {
        maxAge = number2
    }
}

console.log(maxAge);