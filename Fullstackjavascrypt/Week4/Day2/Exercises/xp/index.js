

// Exercise 1 : Information
// Instructions
// Part I : function with no parameters

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
// The function should return the total price of your shoppingList.
//  In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1














