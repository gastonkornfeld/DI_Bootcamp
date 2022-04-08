


// What We Will Learn:
// DOM Manipulation
// DOM Tree
// Attributes
// Exercise 1 : Change The Navbar
// Instructions
// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>
console.log("exercise 1");

// In the <div> above, change the value of the id attribute from navBar to 
// socialNetworkNavigation, using the setAttribute method.

let navbarDiv = document.querySelector('div');
navbarDiv.setAttribute('id', 'socialNetworkNavigation')

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).

let newLi = document.createElement('li');

// Create a new text node with “Logout” as its specified text.

let liNode = document.createTextNode("Logout");

// Append the text node to the newly created list node (li).

newLi.appendChild(liNode);

// Finally, append this updated list node to the unordered list above, using the appendChild method.

ulList = document.querySelector('ul');
ulList.appendChild(newLi);

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve 
// the first and last li elements from their parent element (ul).

console.log("first child",ulList.firstElementChild, "Last child", ulList.lastElementChild);

//  Display the text of each link. (Hint: use the textContent property).

for (let element of document.querySelectorAll('li')) {
    console.log(element.textContent);
}





console.log("exercise 2")





// Exercise 2 : Users
// Instructions
// <html>
// <body>
//   <div id="container">Users:</div>
//   <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
//   <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
//   </ul>
// </body>
// </html>


// In the HTML above change the name “Pete” to “Richard”.
document.querySelectorAll('li')[7].textContent = "Richard";
// Change each first name of the two <ul>'s to your name.
let twoUl = document.getElementsByClassName('list');

for (let list of twoUl) {
    // list.setAttribute("class", "student_list");
    list.firstElementChild.textContent = "Gaston";
    let newLi2 = document.createElement('li');
    let li2Text = document.createTextNode("Hey students");
    newLi2.appendChild(li2Text);
    list.appendChild(newLi2);
}

// At the end of each <ul> add a <li> that says “Hey students”.
// Delete the name Sarah from the second <ul>.
let removeSarah = document.querySelectorAll('ul')[2];
console.log(removeSarah.hasChildNodes());
removeSarah.removeChild(removeSarah.children[1]);
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
let addClasses = document.querySelectorAll('ul')[1];
let addClasses2 = document.querySelectorAll('ul')[2];

addClasses.setAttribute('class', 'student_list university attendance');
addClasses2.setAttribute('class', 'student_list');












console.log("exercise 3");


// Exercise 3 : Users And Style
// Instructions
// <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>

let usersDiv = document.querySelectorAll('div')[2];
console.log(usersDiv);
usersDiv.style.backgroundColor = 'lightBlue';
usersDiv.style.padding = '20px';
usersDiv.firstElementChild.firstElementChild.style.visibility = "hidden";
usersDiv.firstElementChild.lastElementChild.style.border = "2px dotted red";
document.body.style.fontSize = '20px';

// For the following exercise use the HTML presented above:

// Add a “light blue” background color and some padding to the <div>.
// Do not display the first name (John) in the list.
// Add a border to the second name (Pete).
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert 
// “Hello x and y” (x and y are the users in the div).
console.log(usersDiv.style.backgroundColor == 'lightblue');
if (usersDiv.style.backgroundColor == 'lightblue') {
    alert(`${usersDiv.firstElementChild.firstElementChild.textContent} and ${usersDiv.firstElementChild.lastElementChild.textContent} are the users in the div`);
}