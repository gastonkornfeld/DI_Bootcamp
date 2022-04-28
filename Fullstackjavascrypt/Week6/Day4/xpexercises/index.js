

// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.


const sumTwoNumbers = (a, b) => a + b;


// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)


// First, use function declaration and invoke it.
function calculateWeight(amount) {
    return amount * 1000;
}
console.log(calculateWeight(5));



// Then, use function expression and invoke it.
myfunction = function(amount) {
    return amount *1000;
}

console.log(myfunction(5));



// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

const kiloToGram = amount => `${amount}kg are ${amount * 1000}g`;

console.log(kiloToGram(2));





// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments:
(function (childrens, partner, liveIn, job) {
    h1 = document.querySelector('h1');
    h1.innerHTML = `Hello stranger i see you will be a${job}, in ${liveIn}, married whit ${partner} and have ${childrens} kids.`;
  })(4, 'Bill Gates','Israel', "Developer" );
//  number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like 
// "You will be a <job title> in <geographic location>, 
// and married to <partner's name> with <number of children> kids."







// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: 
// the name of the user that just signed in.
// The function should add a div in the nabvar, 
// displaying the name of the user and his profile picture.

let navbar = document.querySelector('nav');
let loginButton = document.querySelector('.login');

const createDiv = (name) => {
    let newElement = document.createElement('a');
    let node = document.createTextNode(name);
    newElement.appendChild(node);
    newElement.setAttribute('class', 'nav-link');
    navbar.appendChild(newElement);
}
const createPic = () => {
    let newElement = document.createElement('img');
    newElement.setAttribute('src', 'https://landscapeinsight.com/wp-content/uploads/2022/04/johnny-depp-1-2000.jpg');
    newElement.setAttribute('class', 'profile-picture');
    navbar.appendChild(newElement);
}


function pressButton() {
    (function addName(name) {
        createDiv(name);
        createPic();
    })('jhon');
}










// Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants
//  - small, medium or large.
let juiceParagraph = document.querySelector('.juice');
let juiceSize = prompt('Wich size of juice? small, medium or big?');
const makeJuice = (size) => {
    let ingredients = [];
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }  
    addIngredients('Mango', 'straberry', 'anana');
    addIngredients('watermelon', 'coconut', 'chocolate');
    // let ingredient1 = prompt('first ingredient?');
    // let ingredient2 = prompt('second ingredient?');
    // let ingredient3 = prompt('third ingredient?');
    (function displayJuice(ingredients) {
        sentence = '';
        ingredients.forEach((element, index) => {
            if(index == ingredients.length - 1) {
                sentence += `and ${element}`;
            } else {
                sentence += `${element} `;
            }
        });
        juiceParagraph.textContent = `The client wants a ${size} juice whit ${sentence}`;
    })(ingredients);
}
makeJuice(juiceSize);

// The inner function named addIngredients receives 3 ingredients, 
// and displays on the DOM a sentence like The client wants a <size drink> juice,
//  containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a
//  <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". 
//  Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. 
// Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

