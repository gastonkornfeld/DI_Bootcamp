


// Exercise 1 : List Of People

// Instructions
let people = ["Greg", "Mary", "Devon", "James"];
copyOfPeople = people.slice(0, people.length);
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
whereGreg = people.indexOf('Greg');
people.splice(whereGreg, 1);

// Write code to replace “James” to “Jason”.
whereJames = people.indexOf('James');

people.splice(whereJames, 1, "Jason");
// Write code to add your name to the end of the people array.
people.push("Gaston");
console.log(people);
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
whereMary = people.indexOf('Mary');
console.log(`Mary is located in position ${whereMary}`);
// Write code to make a copy of the people array using the slice method.

console.log(copyOfPeople);
console.log(people.indexOf('foo'));
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?
// is -1 because 'foo; it is not in the array.
// Create a variable called last which value is the last element of the array.

let last = people[(people.length)-1];
console.log(last);
// Hint: What is the relationship between the index of the last element in the
//  array and the length of the array?



// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

for (let person of people) {
    console.log(person);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (let person of people) {
    if (person == 'Jason') {
        break;
    }
    console.log(person);
}

// Hint: take a look at the break statement in the lesson.








// Exercise 2 : Your Favorite Colors
// Instructions

// Create an array called colors where the value is a list of your five favorite colors.

let colors = ["red", "blue", "green", "light blue", "yellow"];
let sufixArray = ['st', 'nd', 'rd', "th", 'th'];
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”,
for (let i in colors) {
    console.log(`My #${parseInt(i)+1}${sufixArray[i]} choice is ${colors[i]}`);
}
// “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”,
// picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus











// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// the do while is mor relevant to check for the condition after, even i i use the regular while loop



let userNumber = 0;

while ((isNaN(userNumber)) || (userNumber < 10)) {
    userNumber = parseInt(prompt("Tell me a number bigger than 10:"));
    console.log(userNumber);
}










// Exercise 4 : Building Management
// Instructions: Review About Objects

// Copy and paste this object to your Javascript file.

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}


// Console.log the number of floors in the building.

console.log(`Number of floors in the building : ${building.numberOfFloors}`)

// Console.log how many apartments are on the floors 1 and 3.

let thirdApart = building.numberOfAptByFloor.thirdFloor
let firstApart = building.numberOfAptByFloor.firstFloor
console.log(`3th Floor has ${thirdApart} apartments and 1th floor has ${firstApart}`);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
let secondTenant = building.nameOfTenants[1];
let secondTenantApart = building.numberOfRoomsAndRent.dan[0];
console.log(`Second tenant name is ${secondTenant} and have ${secondTenantApart} apartments`)
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is,

// than increase Dan’s rent to 1200.

let saraRent = building.numberOfRoomsAndRent.sarah[1];
let danRent = building.numberOfRoomsAndRent.dan[1];
let davidRent = building.numberOfRoomsAndRent.david[1];

if ((saraRent + davidRent) > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building);







// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
let family = {
    members: 5,
    father: "Jhon",
    mother: "Lea",
    kids: ["George", "Mike", "Thomas"],
    ages: [33, 34, 2, 5, 7],
}

for (let i in family ) {
    console.log(i); // keys
    console.log(family[i]); // values

}
// Using a for loop, console.log the keys of the object.
// Using a for loop, console.log the values of the object.





// Exercise 6
// Instructions
let phrase = ''
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

for (let i in details ) {
    phrase += i + ' '; // keys
    phrase += details[i] + ' '; // values

}
console.log(phrase);
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”










// Exercise 7 : Secret Group
// Instructions
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s
//  name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

secretWord = [];
for (i in names) {
    secretWord.push(names[i][0]);
}
secretWord.sort();
secretWord = secretWord.join("");
console.log(secretWord);


