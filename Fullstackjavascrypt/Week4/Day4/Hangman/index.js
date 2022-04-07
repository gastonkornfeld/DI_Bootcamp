




// Create A Hangman Game:
// Instructions:
// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will 
// appear in the console. You have 10 chances before you lose the game.

// Check it out here

// Function to count how many characters are in a string

function char_count(str, letter) {
    let letter_Count = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

// Prompt player 1 for a word. The word must have a minimum of 8 letters. 

let player1Word = '';
while((player1Word.length < 8) || !(isNaN(Number(player1Word)))) {
    console.log('hola');
    player1Word = prompt("secret word to guess minimum 8 letters: ");
}
let lengthWord = player1Word.length;
let wordToShowInScreen = "*".repeat(lengthWord);
console.log(`The secret word is : ${wordToShowInScreen}`);
let saveTheWordToCheckWin = player1Word;
let listOfGuess = [];
let wrongTryes = 0;
while (saveTheWordToCheckWin != wordToShowInScreen) {
    console.log("List of letters that you already try:", listOfGuess);
    let guessLeter = prompt("give me a letter to check: ");
    listOfGuess.push(guessLeter);
    if (player1Word.includes(guessLeter)) {
        let howManyTimes = char_count(player1Word, guessLeter);
        console.log(`Good ${guessLeter} is in the word ${howManyTimes} Times`);
        for(let changeNumber = 1 ; changeNumber <= howManyTimes;changeNumber++){
            let where = player1Word.indexOf(guessLeter);
            wordToShowInScreen = wordToShowInScreen.substring(0, where) + guessLeter + wordToShowInScreen.substring(where+1,lengthWord);
            player1Word = player1Word.substring(0, where) + "*" + player1Word.substring(where+1,lengthWord);
        }
    } else {
        console.log(`Wrong ${guessLeter} is not in the word`)
        wrongTryes += 1;
        console.log(`You have ${10 - wrongTryes} tryes left.`);
    }

    if(wrongTryes == 10) {
        console.log("you loose the secret word was: ",saveTheWordToCheckWin );
        break;
    }
    console.log("The secret word is:", wordToShowInScreen);

    if (saveTheWordToCheckWin == wordToShowInScreen) {
        alert(`CONGRATS YOU WON THE WORD WAS : ${saveTheWordToCheckWin.toUpperCase()}`);
    }
}

// Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars
//  again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in 
// all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2
//  from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.
