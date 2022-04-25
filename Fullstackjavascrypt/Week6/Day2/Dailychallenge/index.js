// Instructions
// Using this array:

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, 
// add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// let usernames = ["john!", "becky!", "susy!", "tyson!"]

let usernames = [];

gameInfo.forEach(element => usernames.push(`${element.username}!`));

console.log(usernames);

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// Use the ternary operator
// The new array should look like this :
let winers = [];

gameInfo.forEach(element => element.score > 5 ? winers.push(`${element.username}!`) : element);

console.log(winers);


// 3. Find and display the total score of the users. (Hint: The total score is 71)
let scoreArray = [];

gameInfo.forEach(element => scoreArray.push(element.score));

const totalScore = scoreArray.reduce((previous, current) => previous + current, 0);

console.log(totalScore);