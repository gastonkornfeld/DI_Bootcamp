// Instructions
// Using this object :

let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. 
// Use the forEach method.
const displayGroceries = () => groceries.fruits.forEach((element) => console.log(element));
displayGroceries();

// Create another arrow function named cloneGroceries.
const cloneGroceries = () => {
    let user = client;
    client = 'bety';
    console.log(user); // the user did not change because was referenced by value
    //let shopping = groceries; // in this case the shopping is referenced by memory position so it will change always 
    let shopping = {...groceries}; // here the shopping is in a new memory but the payed being deeper is referencing to the same memory place
    groceries.totalPrice = '$35';
    groceries.other.payed = false;
    console.log(shopping);
    console.log(groceries);
};
cloneGroceries();

// In the function, create a variable named user that is a copy of the client variable.
//  (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is a copy of the groceries object. 
// (Tip : make the shopping variable equal to the groceries variable)
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.