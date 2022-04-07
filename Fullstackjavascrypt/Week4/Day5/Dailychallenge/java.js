// Instructions
// This webpage is just a blank universe, and you’ll fill it with planets and moons in this challenge.
// You only have to work with a JS file


// Create an array of planets of the solar system
// For each planet, in the array, create a div using createElement. This div should have a class named ‘planet’.
// Each planet should have a different background color. (Hint: add a new class to each planet)
// Finally append each div to the body.
// Bonus Do the same process for moons. Be careful, each planet has a certain amount of moons; How should you display them ?


let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// here i use a for to create the divs with the planets, only the text inside the div was created separate
let body = document.querySelector("body");
for (elem of planets) {
    let elem = document.createElement("div");
    elem.style.color = "white";
    body.appendChild(elem);
    
}
// here i put the names of the planets inside the divs



let namesPlanets = document.querySelectorAll("div");
namesPlanets[0].innerHTML = "Mercury";
namesPlanets[1].innerHTML = "Venus";
namesPlanets[2].innerHTML = "Earth";
namesPlanets[3].innerHTML = "Mars";
namesPlanets[4].innerHTML = "Jupiter";
namesPlanets[5].innerHTML = "Saturn";
namesPlanets[6].innerHTML = "Uranus";
namesPlanets[7].innerHTML = "Neptune";
// add the clases planet and the different backgrounds colors



namesPlanets[0].setAttribute("class", "mercury planet")
namesPlanets[1].setAttribute("class", "venus planet")
namesPlanets[2].setAttribute("class", "earth planet")
namesPlanets[3].setAttribute("class", "mars planet")
namesPlanets[4].setAttribute("class", "jupiter planet")
namesPlanets[5].setAttribute("class", "saturn planet")
namesPlanets[6].setAttribute("class", "uranus planet")
namesPlanets[7].setAttribute("class", "neptune planet")


namesPlanets[5].style.color = "black";


// adding the earth moon

let earth = namesPlanets[2];

let earthMoon = document.createElement("div");
earth.appendChild(earthMoon);
earthMoon.setAttribute("class", "moonearth");


// adding the mars moons

let mars = namesPlanets[3];

let marsMoon1 = document.createElement("div");
mars.appendChild(marsMoon1);
marsMoon1.setAttribute("class", "moon");



let marsMoon2 = document.createElement("div");
mars.appendChild(marsMoon2);
marsMoon2.setAttribute("class", "moon moon2");

for(let i = 0 ; i<1500 ; i++) {
    let star = document.createElement("div");
    body.appendChild(star);
    star.setAttribute("class", "star");
    star.style.top = `${Math.random()*100}vh`;
    star.style.right = `${Math.random()*100}vw`;
}


let sun = document.createElement("div");
    body.appendChild(sun);
    sun.setAttribute("class", "sun planet");