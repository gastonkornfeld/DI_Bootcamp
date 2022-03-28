
// Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Evaluate the comparisons found below:


    // 5 >= 1
    // prediction : true
    // result: true

    // 0 === 1 
    // prediction : false
    // result: false

    // 4 <= 1
    // prediction : false
    // result: false

    // 1 != 1
    // prediction : false
    // result: false

    // "A" > "B"
    // prediction : false
    // result:

    // "B" < "C"
    // prediction : true
    // result:

    // "a" > "A"
    // prediction : true
    // result: true

    // "b" < "A" 
    // prediction : false
    // result:false

    // true === false
    // prediction : false
    // result:

    // true != true
    // prediction : false
    // result: false






//     Exercise 2 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods

listOfNumberByUser = prompt("Give me a list of numbers separated by coma: ej 2,3,4,5");
listOfNumbers = listOfNumberByUser.split(',');

console.log('The sum of the numbers is: ',
    listOfNumbers.reduce((a, b) => parseInt(a) + parseInt(b), 0)
)













// Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"

let nemoPhrase = prompt('Write a sentences containing the word nemo');
let nemoPhrase2 = nemoPhrase.split(' ')
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
position = nemoPhrase2.indexOf('nemo');
let result;
if (position == -1) {
    result = "I can’t find Nemo"
} else {
    result = ` The word nemo is in the ${position + 1} word`;
}

console.log(result);
// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"










// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:
let numberGiven = parseInt(prompt("write any number"));
// If the number given is less than 2 : return “boom”
let wordReturn;
if (numberGiven <= 2) {
    wordReturn = 'Boom'
} else {
    if ((numberGiven % 2 != 0) &&(numberGiven % 5 != 0)) {
        wordReturn = 'B' + `${'o'.repeat(numberGiven)}`+ 'm';
    } else if ((numberGiven % 2 == 0) && (numberGiven % 5 != 0)) {
        wordReturn = 'B' + `${'o'.repeat(numberGiven)}`+ 'm' + '!';
    } else if ((numberGiven % 2 != 0) && (numberGiven % 5 == 0)) {
        wordReturn = ('B' + `${'o'.repeat(numberGiven)}`+ 'm').toUpperCase();
    } else {
        wordReturn = ('B' + `${'o'.repeat(numberGiven)}`+ 'm' + '!').toUpperCase();
    }
}

console.log(wordReturn);
// If the number given is bigger than 2 : the string should include n number of “o”s 
// (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string 
// in ALL CAPS and add an exclamation mark to the end.