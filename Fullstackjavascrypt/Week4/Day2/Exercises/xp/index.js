

// Exercise 1 : Information
// Instructions
// Part I : function with no parameters
console.log("Exercise 1");
// Create a function called infoAboutMe() that takes no parameter.
function infoAboutMe() {
    console.log("I am Kornfeld Gaston from argentina, i have 33 years old and love to play soccer")
}
// The function should console.log a sentence about you
// (ie. your name, age, hobbies ect…).
// Call the function.
infoAboutMe();

// Part II : function with three parameters

// Create a function called infoAboutPerson

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`your name is ${personName}, you are ${personAge} and your favorite color is ${personFavoriteColor}`);
}
// (personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person
// (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")








console.log("Exercise 2");

// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate 
// how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
function calculateTip() { // Inside the function, ask John for the amount of the bill.
    let bill = Number(prompt("John, How much was the Bill? : "));
    let tip = 0;
    if (bill <= 50) { // If the bill is less than $50, tip 20%.
        tip = bill * 0.2;
    } else if (bill > 50 && bill <= 200 ) { // If the bill is between $50 and $200, tip 15%.
        tip = bill * 0.15;
    } else {// If the bill is more than $200, tip 10%.
        tip = bill * 0.1;
    }
    // Console.log the tip amount and the final bill (bill + tip).
    console.log(`Jhon Your bill was $${bill}, you should tip $${tip}: Total: $${bill + tip}`)
}

calculateTip();// Call the calculateTip() function.








console.log("Exercise 3");


// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.
function isDivisible(divisor) {
    let sum = 0;
    for (let i = 0 ; i<= 500; i++) {// In the function, loop through numbers 0 to 500.
        if (i % divisor == 0) {
            console.log(i);// Console.log all the numbers divisible by 23.
            sum += i;
        }
    }
    console.log(sum);// At the end, console.log the sum of all numbers that are divisible by 23.
}
isDivisible(23);
isDivisible(3);
isDivisible(45);

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum












console.log("Exercise 4");




// Exercise 4 : Shopping List
// Instructions


// Add the stock and prices objects to your js file.

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 


// Create an array called shoppingList with the following items:
// “banana”, “orange”, and “apple”.
// It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ['banana', 'orange', 'apple'];


// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList.
//  In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1


function myBill() {
    let totalPrice = 0
    for (let item of shoppingList) {
        if (stock[item] != 0) {
            totalPrice += prices[item];
            stock[item] -= 1;
        }
    }
    return totalPrice;
}

console.log(myBill());












console.log("Exercise 5");





// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange)
// that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price
// (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price
// (ie. it means that you cannot afford the item) the function should return false
// Change will always be represented in the following order:
// quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

function changeEnough(itemPrice, amountOfChange) {
    let quartesValue = amountOfChange[0] * 0.25;
    let dimesValue = amountOfChange[1] * 0.1;
    let nickelValue = amountOfChange[2] * 0.05;
    let pennyValue = amountOfChange[3] * 0.01;
    let totalValue = quartesValue + dimesValue + nickelValue + pennyValue;
    if (itemPrice > totalValue) {
        return false;
    } else {
        return true;
    }
}

// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true,
// since having 25 quarters, 20 dimes,
// 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50
// which is bigger than 4.25 (the total amount due)


// Examples
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true










console.log("Exercise 6");








// Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night.
// The function should return the total price of the hotel.

function hotelCost() {
    let numberNight = ''
    while ((isNaN(numberNight) || numberNight == '' || numberNight <= 0)) {
        numberNight = Number(prompt("How Many Night You would like to stay? :"));
    }
    let totalHotelCost = numberNight * 140;
    return totalHotelCost; 
}

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$





function planeRideCost() {
    let destination = ''
    while (destination == '' || !(isNaN(Number(destination)))) {
        destination = prompt("What is your destination? :");
    }
    let totalDestinationCost = 0;
    if (destination == 'London' || destination == 'london') {
        totalDestinationCost = 183;
        return totalDestinationCost;
    } else if (destination == 'Paris' || destination == 'paris') {
        totalDestinationCost = 220;
        return totalDestinationCost;
    } else {
        totalDestinationCost = 300;
        return totalDestinationCost;
    }
}

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost() {
    let numberCarDays = ''
    while ((isNaN(numberCarDays) || numberCarDays == '' || numberCarDays <= 0)) {
        numberCarDays = Number(prompt("How Many Days You would like a car? :"));
    }
    let totalCarCost = numberCarDays * 40;
    if (numberCarDays > 10) {
        totalCarCost = totalCarCost * 0.95;
    }
    return totalCarCost; 
}




// Define a function called totalVacationCost()
// that returns the total cost of the user’s vacation by calling the
// 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions
// hotelCost(), planeRideCost() and rentalCarCost() inside the
function totalVacationCost() {
    let hotelTotalCost = hotelCost();
    let planeTotalCost = planeRideCost();
    let carTotalCost = rentalCarCost();
    let totalVacationCost = hotelTotalCost + planeTotalCost + carTotalCost;
    console.log(`The Car cost: $${carTotalCost}, the hotel cost: $${hotelTotalCost} and the plane tickets cost $${planeTotalCost}`)
    console.log(`The total cost is $${totalVacationCost}`);
}

totalVacationCost();
// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions,
// only use a prompt inside the totalVacationCost() function.
// You need to change the 3 first functions, accordingly.




