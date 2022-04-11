

// Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// Using a DOM property, retrieve the h1 and console.log it.

let h1 = document.querySelector('h1');
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.
let article = document.querySelector('article');
let lastP = article.lastElementChild;
article.removeChild(lastP);
// Add a event listener which will change the background color of the h2 to red, 
// when it’s clicked on.

let h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
})

// Add an event listener which will hide the h3 when it’s clicked on 
// (use the display:none property).
let h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
})


// Add a <button> to the HTML file, that when clicked on, should make the text 
// of all the paragraphs, bold.

let button = document.createElement('button');
let buttonText = document.createTextNode('click me');
button.appendChild(buttonText);
article.appendChild(button);
let allp = document.querySelectorAll('p');
button.addEventListener('click', () => {
    for (let p of allp) {
        p.style.fontWeight = 'bold';
    }
})

// BONUS : When you hover on the h1, set the font size to a random pixel size 
// between 0 to 100.(Check out this documentation)

h1.addEventListener('mouseover', (e) => {
    e.target.style.fontSize = `${(Math.random()* 100)}px`;
})

// BONUS : When you hover on the 2nd paragraph, it should fade out 
// (Check out “fade css animation” on Google)

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            // element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

allp[1].addEventListener('mouseover', (event)=> {
    fade(allp[1]);
})

// Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>

// Retrieve the form and console.log it.

let form = document.forms[0];
console.log(form);

// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
let inputOne = document.getElementById('fname');
let input1 = form.elements.fname;
console.log(input1);
console.log(inputOne);
let inputTwo = document.getElementById('lname');
let input2 = form.elements.lname;
console.log(input2);
console.log(inputTwo);
// When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>
let formUl = document.getElementsByClassName('usersAnswer')[0];
console.log(formUl);
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let valueOne = input1.value;
    let valueTwo = input2.value;
    if (valueOne != '' && valueTwo != '') {
        let nameLi = document.createElement('li');
        let newNode = document.createTextNode(valueOne);
        nameLi.appendChild(newNode);
        formUl.appendChild(nameLi);
        let lNameLi = document.createElement('li');
        let newNode2 = document.createTextNode(valueTwo);
        lNameLi.appendChild(newNode2);
        formUl.appendChild(lNameLi);
    }
})






// Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:
let allBoldItems;
// Create a global variable named allBoldItems.
// Create a function called getBold_items() that takes no parameter. 
// This function should collect all the bold items inside the paragraph
//  and assign them to the allBoldItems variable.
function getBold_items() {
    allBoldItems = document.getElementsByTagName('strong');
    return allBoldItems;
}

// Create a function called highlight() that changes the color of all
//  the bold text to blue.

function highlight() {
    let allBold = getBold_items();
    for (let bold of allBold) {
        bold.style.color = 'blue';
    }
}

// Create a function called return_normal() that changes the color of 
// all the bold text back to black.

function returnNormal() {
    let allBold = getBold_items();
    for (let bold of allBold) {
        bold.style.color = 'black';
    }
}



// Call the function highlight() onmouseover (ie. when the mouse pointer 
//     is moved onto the paragraph), and the function return_normal() onmouseout 
//     (ie. when the mouse pointer is moved out of the paragraph).


let lastParagraph = document.getElementsByTagName('p')[3];
lastParagraph.addEventListener('mouseover', highlight);
lastParagraph.addEventListener('mouseout', returnNormal);












// Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere.
//  Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 


let volumeForm = document.forms.MyForm;
let radius = volumeForm.elements.radius;
let volume = volumeForm.elements.volume;


function calculateVolume(radius){
    let vol = Math.PI * 4 / 3 * (Math.pow(radius, 3));
    return vol;
}

volumeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (radius.value == '') {
        alert("please fill the radius value to get the volume")
    } else {
        volume.value = calculateVolume(radius.value);
    }
    
})



// Bonus Exercise 5 : Event Listeners
// Instructions
// Add as many events listeners as possible to one element on your webpage.
//  Each listener should do a different thing, for instance- change position x,
//  change position y, change color, change the font size… and more.

let exercise5 = document.getElementById('exercise5');

function increaseFontSizeBy5px() {
    txt = document.getElementById('exercise5');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 5) + 'px';
}

function decreaseBy5px() {
    txt = document.getElementById('exercise5');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 5) + 'px';
    txt.style.color = 'white';
}



exercise5.addEventListener('click', increaseFontSizeBy5px);

exercise5.addEventListener('mouseover', decreaseBy5px);

exercise5.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'red';
    e.target.style.color = 'red';
});


exercise5.addEventListener('dblclick', (e) => {
    e.target.style.padding = '20px 60px';
    e.target.style.border = '5px solid salmon';
    e.target.style.backgroundColor = 'blue';
});


exercise5.addEventListener('blur', (e) => {
    e.target.style.padding = '50px 75px';
    e.target.style.border = '10px solid green';
    e.target.style.backgroundColor = 'yellow';
});


exercise5.addEventListener('focus', (e) => {
    e.target.style.margin = '20px 30px';
    e.target.style.borderRadius = '50%';
    e.target.style.backgroundColor = 'purple';
});


exercise5.addEventListener('focusout', (e) => {
    e.target.style.margin = '40px 70px';
    e.target.style.borderRadius = '90%';
    e.target.style.backgroundColor = 'white';
});


