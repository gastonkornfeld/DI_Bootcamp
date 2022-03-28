

// Exercise 1

// Store your favorite food into a variable.

let myFavouriteFood = "Lomito";


// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

let favouriteMeal = 'Dinner';

// Console.log I eat <favorite food> at every <favorite meal>

console.log("I eat", myFavouriteFood, "at every", favouriteMeal);





// Exercise 2 : Series
// Instructions
// Part I
// Using this array : 

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length;

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
let myWatchedSeriesSentence = `I watched ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;

console.log("This month i watched" ,myWatchedSeriesLength, "series, if you want to know i tell you more.", myWatchedSeriesSentence);
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II


// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friends";

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push('Stranger things');
// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift('Narcos');

// Delete the series “black mirror”.
myWatchedSeries.splice(1,1);

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][2]);


// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);





// Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.
let celsiusTemp = 34;
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
let fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
console.log(`${celsiusTemp}°C is ${fahrenheitTemp}°F`);

// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32



// Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


// Using the code below

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23

// What is the value of c?

// Undefined


console.log(3 + 4 + '5');

// Prediction: 12
// Actual: '75'


// Exercise 5 : Guess The Answers #2

typeof(15);
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: float
// Actual: number

typeof(NaN)
// Prediction: NaN
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: Boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: Boolean
// Actual: boolean

("hamburgers" + "s");
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: "hamburger"
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction: '-2'
// Actual: -2

"johnny" + 5
// Prediction: error
// Actual: 'johnny5'

"johnny" - 5
// Prediction: error
// Actual: NaN

99 * "hello"
// Prediction: "hellohellohellohelloheelo..........*99"
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction:false
// Actual: false




// Exercise 6 : Guess The Answers #3


5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual:1

10 % 5
// Prediction:0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: 'JavaScript'
// Actual: 'JavaScript'

" " + " "
// Prediction: '  '
// Actual: '  '

" " + 0
// Prediction: ' 0'
// Actual: ' 0'

true + true
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual:

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
