
// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//  I think the output will be : ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// ------2------
const country = "USA";
console.log([...country]);

// output : ['U','S','A'] because string are iterable to an will put every character as an element of the array.


// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// output undefined.

//  it actually returned an array [undefined, undefined].

















// Exercise 2 : Employees
// Instructions
// Using this array:

let users = [
                { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
                { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
                { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
                { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
                { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
                { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
                { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
            ];


// Using the map() method, push into a new array the firstname of the user and a welcome message.
const welcomeArray = users.map( element => `Hello ${element.firstName}`);
console.log(welcomeArray);
//  You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley",
//  "Hello Chloe", 
//  "Hello Jonathan",
//   "Hello Michael", 
//   "Hello Robert", 
//   "Hello Wes", 
//   "Hello Zach"]


// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
function checkIfFullStackResident(element) {
    if(element.role == 'Full Stack Resident') {
        return true
    }
}

const arrayOfFullStackResidents = users.filter(checkIfFullStackResident);
console.log(arrayOfFullStackResidents);


// 3. Bonus : Chain the filter method with a map method, 
// to return an array containing only the lastName of the Full Stack Residents.

const bonusArray = users.filter(checkIfFullStackResident).map(element => element.lastName);
console.log(bonusArray);










// Exercise 3 : Star Wars
// Instructions
// Using this array
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const starWars = epic.reduce((acc, curr) => acc + curr + ' ' , 'There was ');

console.log(starWars);











// Exercise 4 : Employees #2
// Instructions
// Using this object:

let students = [
                {name: "Ray", course: "Computer Science", isPassed: true}, 
                {name: "Liam", course: "Computer Science", isPassed: false}, 
                {name: "Jenner", course: "Information Technology", isPassed: true}, 
                {name: "Marco", course: "Robotics", isPassed: true}, 
                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
                {name: "Jamie", course: "Big Data", isPassed: false}
            ];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, 
// to congratulate the students with their name and course name 
// (ie. “Good job Jenner, you passed the course in Information Technology”, 
//     “Good Job Marco you passed the course in Robotics” ect…)

const filterArray = students.filter((element) => element.isPassed);
filterArray.forEach((element)=> console.log(`Good Job ${element.name} you passed the course in ${element.course}`));

console.log(filterArray);
