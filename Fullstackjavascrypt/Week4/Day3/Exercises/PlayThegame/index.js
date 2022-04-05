


// Exercise 1 : Play A Guessing Game
// Instructions
// Create a new folder on your computer.
// Clone or Download the index.html and style.css files from this github link.
// Follow the steps written below


// Steps
// Explanation of the game : the point of the game is to
//  guess the number that the computer has in “mind”.

// First Part
// Create a JS file and link it to the index.html file.

// Take a look at your html file, you should have a 
// button with an “onclick” event. This event is equal
//  to the function playTheGame(). It means that when 
//  you will click on the button, the function playTheGame() will be called.
// We will learn more about events next week ;)
// Now let’s create the function:

// In the JS file, create a function called playTheGame()
//  that takes no parameter.
// In the function, start by asking the user if they would
//  like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 
// (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :




// If the user didn’t enter a number (ie. if he entered 
//     another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10
//  alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), 
// create a variable named computerNumber where the 
// value is a random number between 0 and 10 (Hint: 
//     Use the built-in Math.random() function). Make sure that the number is rounded.



function chekValue(value) {
    if(isNaN(value)) {
        return "That is not a number";
    } else if (value > 10 || value < 0) {
        return "This is not between 0 and 10";
    } else {
        return value;
    }
}


// Second Part
// Outside of the playTheGame() function, create 
// a new function named test(userNumber,computerNumber) that takes 2
//  parameters : userNumber and computerNumber

function test(userNumber, computerNumber) {
    if(userNumber > computerNumber) {
        alert('Your number is bigger then the computer’s, guess again');
        return false;
    } else if(userNumber < computerNumber) {
        alert('Your number is smaller then the computer’s, guess again');
        return false;
    } else {
        alert("winner");
        return true;
    }
}



function playTheGame() {
    let youWantToPlay = confirm('Do You Want To Play');

    if(youWantToPlay) {
        let computerNumber = Math.round(Math.random()*10);
        let guess = -1;
        numberOrTryes = 0;
        while(guess != computerNumber && numberOrTryes <= 2) {
            guess = Number(prompt("Tell me a number betw 0 and 10: "));
            result = chekValue(guess);
            // console.log("result", result);
            if(result == guess) {
                let testResult = test(guess, computerNumber);
                // console.log("test result", testResult)
                if (testResult == false) {
                    numberOrTryes += 1;
                    // console.log("tryes", numberOrTryes);
                } else {
                    break;
                }
                if (numberOrTryes == 3) {
                    alert("you are out of tryes");
                }
            }

        }
        // console.log(result, computerNumber);
    } else {
        alert("No problem, Goodbye");
    }
}
// The point of this function is to check if the 
// userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert
//  “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert
//  “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert
//  “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out
//  of chances” and exit the function.


// Bonus
// In the First Part, instead of stopping the process
//  if the user didn’t enter a valid number. Continue
//   asking for a number until the user enters a valid number.